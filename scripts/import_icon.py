"""
Utility to import individual icon files into the catalog database.
Used for adding collection cover icons and other one-off imports.
"""

import os
import sqlite3
import sys
from pathlib import Path


def generate_icon_id(set_name: str, category: str, filename: str) -> str:
    """
    Generate icon ID following the convention: {set_name}_{category}_{name}.

    Args:
        set_name: Collection name (e.g., "Apache", "Azure")
        category: Category within collection
        filename: Icon filename with extension

    Returns:
        Generated icon ID (normalized)
    """
    # Remove extension and normalize
    name = Path(filename).stem.replace(" ", "_").replace("&", "_&_").replace("-", "_").lower()

    # Normalize set_name and category: spaces→_, &→_&_, hyphens→_, lowercase
    set_slug = set_name.replace(" ", "_").replace("&", "_&_").replace("-", "_").lower()
    cat_slug = category.replace(" ", "_").replace("&", "_&_").replace("-", "_").lower()

    return f"{set_slug}_{cat_slug}_{name}"


def import_single_icon(
    file_path: str,
    set_name: str,
    category: str,
    description: str = "",
    tags: list[str] = None,
    use_cases: list[str] = None,
    db_path: str = "data/catalog.db"
) -> str:
    """
    Import a single icon file into the database.

    Args:
        file_path: Path to icon file (relative or absolute)
        set_name: Collection name
        category: Category within collection
        description: Icon description
        tags: List of tags
        use_cases: List of use cases
        db_path: Path to database file

    Returns:
        Generated icon ID

    Raises:
        FileNotFoundError: If icon file doesn't exist
        ValueError: If icon ID already exists
    """
    import json

    # Validate file exists
    if not os.path.exists(file_path):
        raise FileNotFoundError(f"Icon file not found: {file_path}")

    # Generate icon ID
    filename = os.path.basename(file_path)
    icon_id = generate_icon_id(set_name, category, filename)
    name = Path(filename).stem

    # Connect to database
    conn = sqlite3.connect(db_path, check_same_thread=False)
    conn.row_factory = sqlite3.Row

    try:
        # Check if icon already exists
        existing = conn.execute("SELECT id FROM icons WHERE id = ?", (icon_id,)).fetchone()
        if existing:
            raise ValueError(f"Icon ID already exists: {icon_id}")

        # Prepare data
        tags_json = json.dumps(tags if tags else [])
        use_cases_json = json.dumps(use_cases if use_cases else [])
        path = file_path.replace("\\", "/")  # Normalize path separators

        # Insert into database
        conn.execute("""
            INSERT INTO icons (
                id, name, filename, path, category, set_name,
                description, tags, use_cases, status
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'ready')
        """, (
            icon_id, name, filename, path, category, set_name,
            description, tags_json, use_cases_json
        ))

        conn.commit()
        print(f"[OK] Imported: {icon_id}")
        print(f"     File: {file_path}")
        print(f"     Set: {set_name} / {category}")
        return icon_id

    finally:
        conn.close()


def main():
    """CLI interface for importing icons."""
    if len(sys.argv) < 4:
        print("Usage: python import_icon.py <file_path> <set_name> <category> [description]")
        print("Example: python import_icon.py 'icons/Apache/apache_logo.png' 'Apache' 'Apache' 'Apache logo'")
        sys.exit(1)

    file_path = sys.argv[1]
    set_name = sys.argv[2]
    category = sys.argv[3]
    description = sys.argv[4] if len(sys.argv) > 4 else ""

    try:
        icon_id = import_single_icon(file_path, set_name, category, description)
        print(f"\n[SUCCESS] Icon ID: {icon_id}")
    except Exception as e:
        print(f"\n[ERROR] {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
