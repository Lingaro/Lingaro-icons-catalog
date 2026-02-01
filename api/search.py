"""
Search functionality for the Icons Catalog API.
Supports both text-based and semantic (embedding-based) search.
"""

import json
import math
import os
from functools import lru_cache
from pathlib import Path
from typing import Optional

import numpy as np
from openai import OpenAI

from .models import IconResponse, SearchRequest


# Paths
DATA_FILE = Path(__file__).parent.parent / "assets" / "data" / "icons.json"

# OpenAI settings (matching generate_embeddings.py)
EMBEDDING_MODEL = "text-embedding-3-small"
EMBEDDING_DIMENSIONS = 256


class IconsSearchEngine:
    """Search engine for icons with text and semantic search capabilities."""

    def __init__(self, data_path: Path = DATA_FILE):
        self.data_path = data_path
        self.icons: list[dict] = []
        self.categories: list[str] = []
        self.sets: list[str] = []
        self.meta: dict = {}
        self.embeddings_matrix: Optional[np.ndarray] = None
        self.icon_ids: list[str] = []
        self._openai_client: Optional[OpenAI] = None
        self._load_data()

    def _load_data(self):
        """Load icons data from JSON file."""
        if not self.data_path.exists():
            raise FileNotFoundError(f"Icons data file not found: {self.data_path}")

        with open(self.data_path, "r", encoding="utf-8") as f:
            data = json.load(f)

        self.icons = data.get("icons", [])
        self.categories = data.get("categories", [])
        self.sets = data.get("sets", [])
        self.meta = data.get("meta", {})

        # Pre-build embeddings matrix for fast similarity search
        self._build_embeddings_matrix()

    def _build_embeddings_matrix(self):
        """Build numpy matrix of icon embeddings for vectorized similarity."""
        icons_with_embeddings = [
            icon for icon in self.icons if icon.get("embedding")
        ]

        if not icons_with_embeddings:
            self.embeddings_matrix = None
            self.icon_ids = []
            return

        self.icon_ids = [icon["id"] for icon in icons_with_embeddings]
        self.embeddings_matrix = np.array(
            [icon["embedding"] for icon in icons_with_embeddings],
            dtype=np.float32
        )

        # Normalize for cosine similarity (pre-compute norms)
        norms = np.linalg.norm(self.embeddings_matrix, axis=1, keepdims=True)
        norms[norms == 0] = 1  # Avoid division by zero
        self.embeddings_matrix = self.embeddings_matrix / norms

    @property
    def openai_client(self) -> Optional[OpenAI]:
        """Lazy-load OpenAI client."""
        if self._openai_client is None:
            api_key = os.getenv("OPENAI_API_KEY")
            if api_key:
                self._openai_client = OpenAI(api_key=api_key)
        return self._openai_client

    @property
    def embedding_enabled(self) -> bool:
        """Check if embedding search is available."""
        return (
            self.embeddings_matrix is not None
            and self.openai_client is not None
        )

    def get_query_embedding(self, query: str) -> Optional[np.ndarray]:
        """Get embedding vector for a search query."""
        if not self.openai_client:
            return None

        try:
            response = self.openai_client.embeddings.create(
                model=EMBEDDING_MODEL,
                input=query,
                dimensions=EMBEDDING_DIMENSIONS
            )
            embedding = np.array(response.data[0].embedding, dtype=np.float32)
            # Normalize
            norm = np.linalg.norm(embedding)
            if norm > 0:
                embedding = embedding / norm
            return embedding
        except Exception as e:
            print(f"Error getting query embedding: {e}")
            return None

    def semantic_search(
        self,
        query: str,
        category: Optional[str] = None,
        icon_set: Optional[str] = None,
        limit: int = 50
    ) -> list[IconResponse]:
        """
        Perform semantic search using embeddings.
        Falls back to text search if embeddings unavailable.
        """
        query_embedding = self.get_query_embedding(query)

        if query_embedding is None or self.embeddings_matrix is None:
            # Fall back to text search
            return self.text_search(query, category, icon_set, limit)

        # Compute cosine similarities (dot product of normalized vectors)
        similarities = self.embeddings_matrix @ query_embedding

        # Create id -> similarity mapping
        id_to_score = dict(zip(self.icon_ids, similarities.tolist()))

        # Filter and score icons
        results = []
        for icon in self.icons:
            # Apply filters
            if category and icon.get("category") != category:
                continue
            if icon_set and icon.get("set") != icon_set:
                continue

            score = id_to_score.get(icon["id"], 0.0)

            # Add text match boost for exact matches
            query_lower = query.lower()
            if icon["name"].lower() == query_lower:
                score += 0.3
            elif query_lower in icon["name"].lower():
                score += 0.15
            if icon.get("tags") and query_lower in [t.lower() for t in icon["tags"]]:
                score += 0.1

            results.append(IconResponse(
                id=icon["id"],
                name=icon["name"],
                filename=icon["filename"],
                path=icon["path"],
                category=icon["category"],
                set=icon["set"],
                description=icon.get("description"),
                tags=icon.get("tags", []),
                use_cases=icon.get("use_cases", []),
                score=round(score, 4)
            ))

        # Sort by score and limit
        results.sort(key=lambda x: x.score or 0, reverse=True)
        return results[:limit]

    def text_search(
        self,
        query: str,
        category: Optional[str] = None,
        icon_set: Optional[str] = None,
        limit: int = 50
    ) -> list[IconResponse]:
        """
        Perform text-based search with relevance scoring.
        """
        query_lower = query.lower()
        query_words = query_lower.split()
        results = []

        for icon in self.icons:
            # Apply filters
            if category and icon.get("category") != category:
                continue
            if icon_set and icon.get("set") != icon_set:
                continue

            # Calculate relevance score
            score = self._calculate_text_score(icon, query_lower, query_words)

            if score > 0:
                results.append(IconResponse(
                    id=icon["id"],
                    name=icon["name"],
                    filename=icon["filename"],
                    path=icon["path"],
                    category=icon["category"],
                    set=icon["set"],
                    description=icon.get("description"),
                    tags=icon.get("tags", []),
                    use_cases=icon.get("use_cases", []),
                    score=round(score, 4)
                ))

        # Sort by score and limit
        results.sort(key=lambda x: x.score or 0, reverse=True)
        return results[:limit]

    def _calculate_text_score(
        self,
        icon: dict,
        query_lower: str,
        query_words: list[str]
    ) -> float:
        """Calculate text-based relevance score for an icon."""
        score = 0.0
        name_lower = icon["name"].lower()

        # Name matching (highest weight)
        if name_lower == query_lower:
            score += 100
        elif name_lower.startswith(query_lower):
            score += 50
        elif query_lower in name_lower:
            score += 30

        # Tag matching
        tags = icon.get("tags", [])
        for tag in tags:
            tag_lower = tag.lower()
            if tag_lower == query_lower:
                score += 40
            elif query_lower in tag_lower:
                score += 20

        # Description matching
        description = icon.get("description", "").lower()
        if query_lower in description:
            score += 15

        # Category matching
        if query_lower in icon.get("category", "").lower():
            score += 10

        # Use cases matching
        use_cases = " ".join(icon.get("use_cases", [])).lower()
        if query_lower in use_cases:
            score += 10

        # Multi-word query: check if all words present
        if len(query_words) > 1:
            search_text = " ".join([
                name_lower,
                description,
                " ".join(t.lower() for t in tags),
                use_cases
            ])
            if all(word in search_text for word in query_words):
                score += 25

        return score

    def search(self, request: SearchRequest) -> tuple[list[IconResponse], bool]:
        """
        Main search method. Returns (results, used_semantic_search).
        """
        if request.semantic and self.embedding_enabled:
            results = self.semantic_search(
                query=request.query,
                category=request.category,
                icon_set=request.set,
                limit=request.limit
            )
            return results, True
        else:
            results = self.text_search(
                query=request.query,
                category=request.category,
                icon_set=request.set,
                limit=request.limit
            )
            return results, False

    def get_icon_by_id(self, icon_id: str) -> Optional[IconResponse]:
        """Get a specific icon by ID."""
        for icon in self.icons:
            if icon["id"] == icon_id:
                return IconResponse(
                    id=icon["id"],
                    name=icon["name"],
                    filename=icon["filename"],
                    path=icon["path"],
                    category=icon["category"],
                    set=icon["set"],
                    description=icon.get("description"),
                    tags=icon.get("tags", []),
                    use_cases=icon.get("use_cases", [])
                )
        return None

    def get_icons_by_category(
        self,
        category: str,
        limit: int = 100
    ) -> list[IconResponse]:
        """Get all icons in a category."""
        results = []
        for icon in self.icons:
            if icon.get("category") == category:
                results.append(IconResponse(
                    id=icon["id"],
                    name=icon["name"],
                    filename=icon["filename"],
                    path=icon["path"],
                    category=icon["category"],
                    set=icon["set"],
                    description=icon.get("description"),
                    tags=icon.get("tags", []),
                    use_cases=icon.get("use_cases", [])
                ))
                if len(results) >= limit:
                    break
        return results

    def list_all(
        self,
        category: Optional[str] = None,
        icon_set: Optional[str] = None,
        limit: int = 100,
        offset: int = 0
    ) -> list[IconResponse]:
        """List icons with optional filtering and pagination."""
        results = []
        for icon in self.icons:
            if category and icon.get("category") != category:
                continue
            if icon_set and icon.get("set") != icon_set:
                continue
            results.append(IconResponse(
                id=icon["id"],
                name=icon["name"],
                filename=icon["filename"],
                path=icon["path"],
                category=icon["category"],
                set=icon["set"],
                description=icon.get("description"),
                tags=icon.get("tags", []),
                use_cases=icon.get("use_cases", [])
            ))

        return results[offset:offset + limit]

    def update_icon(
        self,
        icon_id: str,
        description: Optional[str] = None,
        tags: Optional[list[str]] = None,
        use_cases: Optional[list[str]] = None
    ) -> Optional[dict]:
        """Update icon metadata and save to file."""
        # Find the icon
        icon_index = None
        for i, icon in enumerate(self.icons):
            if icon["id"] == icon_id:
                icon_index = i
                break

        if icon_index is None:
            return None

        # Update fields if provided
        if description is not None:
            self.icons[icon_index]["description"] = description
        if tags is not None:
            self.icons[icon_index]["tags"] = tags
        if use_cases is not None:
            self.icons[icon_index]["use_cases"] = use_cases

        # Save to file
        self._save_data()

        return self.icons[icon_index]

    def _save_data(self):
        """Save icons data back to JSON file."""
        data = {
            "icons": self.icons,
            "categories": self.categories,
            "sets": self.sets,
            "meta": self.meta
        }
        with open(self.data_path, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)


# Singleton instance
_search_engine: Optional[IconsSearchEngine] = None


def get_search_engine() -> IconsSearchEngine:
    """Get or create the search engine singleton."""
    global _search_engine
    if _search_engine is None:
        _search_engine = IconsSearchEngine()
    return _search_engine
