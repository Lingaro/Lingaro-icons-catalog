"""Search service backed by SQLite FTS5 full-text search."""

import json
import logging
import re
import sqlite3
from typing import Optional

logger = logging.getLogger(__name__)


def _deserialize_icon(row: dict) -> dict:
    """Convert a SQLite row dict into an icon response dict."""
    icon = dict(row)
    for field in ("tags", "use_cases"):
        val = icon.get(field)
        if isinstance(val, str):
            icon[field] = json.loads(val)
    if "set_name" in icon and "set" not in icon:
        icon["set"] = icon.pop("set_name")
    icon.pop("rank", None)
    return icon


def _fts5_query(query: str) -> str:
    """Convert user query to FTS5 query syntax.

    - Single word: use prefix match (e.g. 'data' -> 'data*')
    - Multiple words: each word as prefix, combined with AND (implicit)
    - Strips special FTS5 characters to prevent syntax errors
    """
    # Remove FTS5 special chars
    cleaned = re.sub(r'[^\w\s]', ' ', query)
    words = cleaned.split()
    if not words:
        return '""'
    # Each word gets prefix matching
    terms = [f'"{w}"*' for w in words]
    return " ".join(terms)


class SearchService:
    """Search engine using SQLite FTS5 for full-text search."""

    def __init__(self, conn: sqlite3.Connection):
        self.conn = conn

    def search(
        self,
        query: str,
        category: Optional[str] = None,
        set_name: Optional[str] = None,
        limit: int = 50,
    ) -> list[dict]:
        """Full-text search using FTS5 with BM25 ranking.

        Weights: name(10) > description(5) > tags(3) > use_cases(2) > category(1)
        """
        fts_query = _fts5_query(query)

        sql = """
            SELECT i.*, bm25(icons_fts, 10.0, 5.0, 3.0, 2.0, 1.0) AS rank
            FROM icons_fts f
            JOIN icons i ON i.rowid = f.rowid
            WHERE icons_fts MATCH ?
              AND i.status = 'ready'
        """
        params: list = [fts_query]

        if category:
            sql += " AND i.category = ?"
            params.append(category)
        if set_name:
            sql += " AND i.set_name = ?"
            params.append(set_name)

        sql += " ORDER BY rank LIMIT ?"
        params.append(limit)

        try:
            cursor = self.conn.execute(sql, params)
            rows = cursor.fetchall()
        except Exception as e:
            logger.warning("FTS5 search failed, falling back to text search: %s", e)
            return self.text_search(query, category, set_name, limit)

        results = []
        for row in rows:
            icon = _deserialize_icon(dict(row))
            # BM25 returns negative scores (lower = better match), normalize to 0-1
            icon["score"] = round(max(0, 1.0 + row["rank"] / 10.0), 4)
            results.append(icon)
        return results

    # Backward-compatible aliases
    def text_search(self, query: str, category=None, set_name=None, limit=50):
        """Keyword fallback if FTS5 is unavailable."""
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
                icon["score"] = round(score / 100.0, 4)
                scored.append(icon)
        scored.sort(key=lambda x: x.get("score", 0), reverse=True)
        return scored[:limit]

    def semantic_search(self, query, category=None, set_name=None, limit=50):
        """Alias for search() — FTS5 replaces embedding-based semantic search."""
        return self.search(query, category, set_name, limit)

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

    def get_collections(self):
        cursor = self.conn.execute("""
            SELECT set_name, COUNT(*) as icon_count,
                   GROUP_CONCAT(DISTINCT category) as categories
            FROM icons WHERE status = 'ready'
            GROUP BY set_name ORDER BY icon_count DESC
        """)
        results = []
        for row in cursor.fetchall():
            name = row[0]
            cover = self._find_cover_icon(name)
            results.append({
                "name": name,
                "icon_count": row[1],
                "categories": row[2].split(",") if row[2] else [],
                "cover_icon_id": cover,
            })
        return results

    COVER_OVERRIDES = {
        "databricks": "databricks",
        "Apache": "apache_apache_apache_logo",
        "Data & Analytics": "lingaro_set4_data_analysis_charts_chart_2",
        "ML & AI": "lingaro_set4_data_analysis_charts_ai_2",
        "DevOps & Infra": "devops_&_infra_devops_&_infra_devops",
        "Microsoft Fabric": "fabric_services_fabric",
        "Azure": "azure_other_azure_icon",
        "Google Cloud": "google_cloud_google_cloud_google_cloud_logo",
        "lingaro_set4": "lingaro_set4_branding_lingaro_logo_small_transparent",
    }

    def _find_cover_icon(self, set_name):
        if set_name in self.COVER_OVERRIDES:
            override_id = self.COVER_OVERRIDES[set_name]
            row = self.conn.execute(
                "SELECT id FROM icons WHERE id = ? AND status = 'ready'",
                (override_id,)
            ).fetchone()
            if row:
                return row[0]
            else:
                logger.warning(
                    f"Cover override for '{set_name}' points to non-existent icon: {override_id}"
                )
        slug = set_name.lower().replace(" ", "").replace("_", "")
        cursor = self.conn.execute(
            "SELECT id, name FROM icons WHERE set_name = ? AND status = 'ready' ORDER BY name",
            (set_name,)
        )
        first_id = None
        for row in cursor.fetchall():
            if first_id is None:
                first_id = row[0]
            if row[1].lower().replace(" ", "").replace("_", "") == slug:
                return row[0]
        return first_id
