"""Embedding generation service for semantic search."""

import os
from typing import Optional

from openai import OpenAI

EMBEDDING_MODEL = "text-embedding-3-small"
EMBEDDING_DIMENSIONS = 256


def create_icon_text(icon: dict) -> str:
    """Create a text representation of an icon for embedding."""
    parts = [
        icon.get("name", ""),
        icon.get("description", ""),
        icon.get("category", ""),
    ]
    tags = icon.get("tags", [])
    if tags:
        parts.append(" ".join(tags))
    use_cases = icon.get("use_cases", [])
    if use_cases:
        parts.append(" ".join(use_cases))
    return " ".join(filter(None, parts))


def generate_embedding(client: OpenAI, text: str) -> list[float]:
    """Generate an embedding vector for a text string."""
    response = client.embeddings.create(
        model=EMBEDDING_MODEL, input=text, dimensions=EMBEDDING_DIMENSIONS,
    )
    return response.data[0].embedding


def batch_generate_embeddings(client: OpenAI, texts: list[str], batch_size: int = 50) -> list[list[float]]:
    """Generate embeddings for multiple texts in batches."""
    all_embeddings: list[list[float]] = []
    for i in range(0, len(texts), batch_size):
        batch = texts[i : i + batch_size]
        response = client.embeddings.create(
            model=EMBEDDING_MODEL, input=batch, dimensions=EMBEDDING_DIMENSIONS,
        )
        all_embeddings.extend([item.embedding for item in response.data])
    return all_embeddings
