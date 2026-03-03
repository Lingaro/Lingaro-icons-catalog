"""Search service backed by SQLite (text search) and sqlite-vec (semantic search)."""

import json
import os
import sqlite3
from typing import Optional

import numpy as np
from openai import OpenAI

EMBEDDING_MODEL = "text-embedding-3-small"
EMBEDDING_DIMENSIONS = 256


def _deserialize_icon(row: dict) -> dict:
    """Convert a SQLite row dict into an icon response dict."""
    icon = dict(row)
    for field in ("tags", "use_cases"):
        val = icon.get(field)
        if isinstance(val, str):
            icon[field] = json.loads(val)
    if "set_name" in icon and "set" not in icon:
        icon["set"] = icon.pop("set_name")
    return icon


class SearchService:
    """Search engine with text and optional semantic search."""

    def __init__(self, conn: sqlite3.Connection):
        self.conn = conn
        self._openai_client: Optional[OpenAI] = None

    @property
    def openai_client(self) -> Optional[OpenAI]:
        if self._openai_client is None:
            api_key = os.getenv("OPENAI_API_KEY")
            if api_key:
                self._openai_client = OpenAI(api_key=api_key)
        return self._openai_client

    def text_search(self, query: str, category: Optional[str] = None, set_name: Optional[str] = None, limit: int = 50) -> list[dict]:
        query_lower = query.lower()
        query_words = query_lower.split()
        sql = "SELECT * FROM icons WHERE status = 'ready'"
        params: list = []
        if category:
            sql += " AND category = ?"
            params.append(category)
        if set_name:
            sql += " AND set_name = ?"
            params.append(set_name)
        cursor = self.conn.execute(sql, params)
        rows = [_deserialize_icon(dict(row)) for row in cursor.fetchall()]
        scored = []
        for icon in rows:
            score = self._text_score(icon, query_lower, query_words)
            if score > 0:
                icon["score"] = round(score, 4)
                scored.append(icon)
        scored.sort(key=lambda x: x.get("score", 0), reverse=True)
        return scored[:limit]

    def semantic_search(self, query: str, category: Optional[str] = None, set_name: Optional[str] = None, limit: int = 50) -> list[dict]:
        client = self.openai_client
        if not client:
            return self.text_search(query, category, set_name, limit)
        try:
            response = client.embeddings.create(model=EMBEDDING_MODEL, input=query, dimensions=EMBEDDING_DIMENSIONS)
            query_vec = np.array(response.data[0].embedding, dtype=np.float32)
            norm = np.linalg.norm(query_vec)
            if norm > 0:
                query_vec = query_vec / norm
        except Exception:
            return self.text_search(query, category, set_name, limit)
        try:
            return self._vec_search(query, query_vec, category, set_name, limit)
        except Exception:
            return self._numpy_search(query, query_vec, category, set_name, limit)

    def _vec_search(self, query, query_vec, category, set_name, limit):
        cursor = self.conn.execute(
            "SELECT icon_id, distance FROM icon_embeddings WHERE embedding MATCH ? ORDER BY distance LIMIT ?",
            (query_vec.tobytes(), limit * 3),
        )
        id_scores = {row[0]: 1.0 - row[1] for row in cursor.fetchall()}
        results = []
        for icon_id, sim_score in id_scores.items():
            icon = self.get_icon_by_id(icon_id)
            if not icon:
                continue
            if category and icon.get("category") != category:
                continue
            if set_name and icon.get("set") != set_name:
                continue
            query_lower = query.lower()
            if icon["name"].lower() == query_lower:
                sim_score += 0.3
            elif query_lower in icon["name"].lower():
                sim_score += 0.15
            icon["score"] = round(sim_score, 4)
            results.append(icon)
        results.sort(key=lambda x: x.get("score", 0), reverse=True)
        return results[:limit]

    def _numpy_search(self, query, query_vec, category, set_name, limit):
        return self.text_search(query, category, set_name, limit)

    def _text_score(self, icon, query_lower, query_words):
        score = 0.0
        name_lower = icon["name"].lower()
        if name_lower == query_lower:
            score += 100
        elif name_lower.startswith(query_lower):
            score += 50
        elif query_lower in name_lower:
            score += 30
        for tag in icon.get("tags", []):
            tag_lower = tag.lower()
            if tag_lower == query_lower:
                score += 40
            elif query_lower in tag_lower:
                score += 20
        desc = icon.get("description", "").lower()
        if query_lower in desc:
            score += 15
        if query_lower in icon.get("category", "").lower():
            score += 10
        use_cases = " ".join(icon.get("use_cases", [])).lower()
        if query_lower in use_cases:
            score += 10
        if len(query_words) > 1:
            search_text = " ".join([name_lower, desc, " ".join(t.lower() for t in icon.get("tags", [])), use_cases])
            if all(w in search_text for w in query_words):
                score += 25
        return score

    def get_icon_by_id(self, icon_id: str) -> Optional[dict]:
        cursor = self.conn.execute("SELECT * FROM icons WHERE id = ?", (icon_id,))
        row = cursor.fetchone()
        return _deserialize_icon(dict(row)) if row else None

    def list_icons(self, category=None, set_name=None, limit=100, offset=0):
        sql = "SELECT * FROM icons WHERE status = 'ready'"
        params: list = []
        if category:
            sql += " AND category = ?"
            params.append(category)
        if set_name:
            sql += " AND set_name = ?"
            params.append(set_name)
        sql += " ORDER BY name LIMIT ? OFFSET ?"
        params.extend([limit, offset])
        cursor = self.conn.execute(sql, params)
        return [_deserialize_icon(dict(row)) for row in cursor.fetchall()]

    def get_categories(self):
        cursor = self.conn.execute("SELECT category, COUNT(*) as count FROM icons WHERE status = 'ready' GROUP BY category ORDER BY category")
        return [{"name": row[0], "count": row[1]} for row in cursor.fetchall()]

    def get_tags(self, limit=50):
        cursor = self.conn.execute("SELECT tags FROM icons WHERE status = 'ready'")
        tag_counts: dict[str, int] = {}
        for row in cursor.fetchall():
            for tag in json.loads(row[0]):
                tag_counts[tag] = tag_counts.get(tag, 0) + 1
        sorted_tags = sorted(tag_counts.items(), key=lambda x: x[1], reverse=True)
        return [{"tag": t, "count": c} for t, c in sorted_tags[:limit]]

    def count_icons(self):
        cursor = self.conn.execute("SELECT COUNT(*) FROM icons WHERE status = 'ready'")
        return cursor.fetchone()[0]
