#!/usr/bin/env python3
"""Migrate icons.json data into SQLite database."""

import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent.parent))

from api.database import init_db, get_db, insert_icon, get_icon, refresh_category_counts


def migrate_icons_json(json_path: Path, db_path: Path) -> int:
    """Import icons from icons.json into SQLite. Skips existing. Returns count imported."""
    with open(json_path, "r", encoding="utf-8") as f:
        data = json.load(f)
    init_db(db_path)
    conn = get_db(db_path)
    count = 0
    for icon in data.get("icons", []):
        if get_icon(conn, icon["id"]):
            continue
        insert_icon(conn, {
            "id": icon["id"],
            "name": icon["name"],
            "filename": icon["filename"],
            "path": icon["path"],
            "category": icon.get("category", ""),
            "set_name": icon.get("set", ""),
            "description": icon.get("description"),
            "tags": icon.get("tags", []),
            "use_cases": icon.get("use_cases", []),
            "status": "ready",
        })
        count += 1
    refresh_category_counts(conn)
    conn.close()
    return count


def main():
    project_root = Path(__file__).parent.parent
    json_path = project_root / "assets" / "data" / "icons.json"
    db_path = project_root / "data" / "catalog.db"
    if not json_path.exists():
        print(f"Error: {json_path} not found")
        sys.exit(1)
    print(f"Migrating {json_path} -> {db_path}")
    count = migrate_icons_json(json_path, db_path)
    print(f"Imported {count} icons into SQLite")


if __name__ == "__main__":
    main()
