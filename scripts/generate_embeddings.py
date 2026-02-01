#!/usr/bin/env python3
"""
Generate embeddings for icons using OpenAI's text-embedding model.
Enables semantic search by creating vector representations of icon metadata.
"""

import os
import sys
import json
import argparse
from pathlib import Path

from dotenv import load_dotenv
from openai import OpenAI
from tqdm import tqdm

# Load environment variables
load_dotenv()

# Configuration
DATA_FILE = Path(__file__).parent.parent / "assets" / "data" / "icons.json"
EMBEDDING_MODEL = "text-embedding-3-small"
EMBEDDING_DIMENSIONS = 256  # Reduced dimensions for smaller file size

# Common search queries to pre-compute embeddings for
COMMON_QUERIES = [
    "chart", "graph", "data", "analytics", "dashboard",
    "person", "people", "user", "team", "group",
    "money", "finance", "payment", "dollar", "budget",
    "arrow", "direction", "navigation", "up", "down",
    "document", "file", "paper", "report", "certificate",
    "building", "office", "company", "home", "warehouse",
    "cloud", "storage", "server", "database", "network",
    "phone", "mobile", "device", "computer", "screen",
    "time", "clock", "calendar", "schedule", "deadline",
    "security", "lock", "shield", "protection", "safety",
    "health", "medical", "heart", "fitness", "wellness",
    "energy", "green", "eco", "sustainability", "environment",
    "shipping", "delivery", "logistics", "transport", "truck",
    "communication", "marketing", "email", "message", "social",
    "idea", "innovation", "creative", "brainstorm", "solution",
    "growth", "increase", "success", "progress", "trend",
    "search", "find", "magnifier", "lookup", "explore",
    "settings", "gear", "configuration", "tools", "repair",
    "global", "world", "international", "planet", "location"
]


def create_icon_text(icon: dict) -> str:
    """Create a text representation of an icon for embedding."""
    parts = [
        icon.get("name", ""),
        icon.get("description", ""),
        icon.get("category", ""),
    ]

    # Add tags
    tags = icon.get("tags", [])
    if tags:
        parts.append(" ".join(tags))

    # Add use cases
    use_cases = icon.get("use_cases", [])
    if use_cases:
        parts.append(" ".join(use_cases))

    return " ".join(filter(None, parts))


def get_embedding(client: OpenAI, text: str) -> list:
    """Get embedding vector for a text string."""
    response = client.embeddings.create(
        model=EMBEDDING_MODEL,
        input=text,
        dimensions=EMBEDDING_DIMENSIONS
    )
    return response.data[0].embedding


def batch_get_embeddings(client: OpenAI, texts: list, batch_size: int = 100) -> list:
    """Get embeddings for multiple texts in batches."""
    all_embeddings = []

    for i in range(0, len(texts), batch_size):
        batch = texts[i:i + batch_size]
        response = client.embeddings.create(
            model=EMBEDDING_MODEL,
            input=batch,
            dimensions=EMBEDDING_DIMENSIONS
        )
        batch_embeddings = [item.embedding for item in response.data]
        all_embeddings.extend(batch_embeddings)

    return all_embeddings


def main():
    parser = argparse.ArgumentParser(description="Generate embeddings for icons")
    parser.add_argument("--force", action="store_true", help="Regenerate all embeddings")
    parser.add_argument("--no-queries", action="store_true", help="Skip pre-computing query embeddings")
    args = parser.parse_args()

    # Check for API key
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        print("Error: OPENAI_API_KEY environment variable not set")
        print("Set it with: export OPENAI_API_KEY=your_key_here")
        sys.exit(1)

    # Initialize OpenAI client
    client = OpenAI(api_key=api_key)

    # Load icons data
    if not DATA_FILE.exists():
        print(f"Error: Icons data file not found: {DATA_FILE}")
        print("Run annotate.py first to generate icon metadata")
        sys.exit(1)

    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        data = json.load(f)

    icons = data.get("icons", [])
    print(f"Loaded {len(icons)} icons")

    # Filter icons that need embeddings
    if args.force:
        icons_to_process = icons
    else:
        icons_to_process = [i for i in icons if not i.get("embedding")]

    print(f"Generating embeddings for {len(icons_to_process)} icons...")

    if icons_to_process:
        # Create text representations
        texts = [create_icon_text(icon) for icon in icons_to_process]

        # Get embeddings in batches
        embeddings = []
        for i in tqdm(range(0, len(texts), 50), desc="Embedding batches"):
            batch = texts[i:i + 50]
            batch_embeddings = batch_get_embeddings(client, batch, batch_size=50)
            embeddings.extend(batch_embeddings)

        # Update icons with embeddings
        icon_id_to_embedding = {}
        for icon, embedding in zip(icons_to_process, embeddings):
            icon_id_to_embedding[icon["id"]] = embedding

        for icon in icons:
            if icon["id"] in icon_id_to_embedding:
                icon["embedding"] = icon_id_to_embedding[icon["id"]]

    # Pre-compute common query embeddings
    query_embeddings = {}
    if not args.no_queries:
        print(f"\nPre-computing embeddings for {len(COMMON_QUERIES)} common queries...")
        query_texts = COMMON_QUERIES
        query_vectors = batch_get_embeddings(client, query_texts)

        for query, vector in zip(query_texts, query_vectors):
            query_embeddings[query] = vector

    # Update data
    data["icons"] = icons
    data["queryEmbeddings"] = query_embeddings
    data["meta"] = data.get("meta", {})
    data["meta"]["embedding_model"] = EMBEDDING_MODEL
    data["meta"]["embedding_dimensions"] = EMBEDDING_DIMENSIONS
    data["meta"]["icons_with_embeddings"] = len([i for i in icons if i.get("embedding")])

    # Save updated data
    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    # Calculate file size
    file_size = DATA_FILE.stat().st_size / 1024  # KB

    print(f"\n✓ Saved embeddings to {DATA_FILE}")
    print(f"  Icons with embeddings: {data['meta']['icons_with_embeddings']}")
    print(f"  Query embeddings: {len(query_embeddings)}")
    print(f"  File size: {file_size:.1f} KB")


if __name__ == "__main__":
    main()
