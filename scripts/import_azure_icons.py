"""Import official Microsoft Azure architecture icons into the catalog.

Source: https://arch-center.azureedge.net/icons/Azure_Public_Service_Icons_V23.zip

Usage (CLI):
    python -m scripts.import_azure_icons
    python -m scripts.import_azure_icons --db data/catalog.db
"""

import io
import json
import re
import shutil
import sqlite3
import tempfile
import zipfile
from pathlib import Path
from urllib.request import urlopen

AZURE_ICONS_URL = "https://arch-center.azureedge.net/icons/Azure_Public_Service_Icons_V23.zip"
SET_NAME = "Azure"
ICONS_DIR = Path(__file__).parent.parent / "icons" / "Azure"
DEFAULT_DB = Path(__file__).parent.parent / "data" / "catalog.db"


def _clean_icon_name(filename: str) -> str:
    """Convert '00049-icon-service-Virtual-Machine.svg' -> 'Virtual Machine'."""
    name = filename.removesuffix(".svg")
    # Strip leading numeric prefix + 'icon-service-' or 'icon-' (with hyphens or spaces)
    name = re.sub(r"^\d+\s*[-\s]+icon[-\s]+service[-\s]+", "", name, flags=re.IGNORECASE)
    name = re.sub(r"^\d+\s*[-\s]+icon[-\s]+", "", name, flags=re.IGNORECASE)
    name = re.sub(r"^\d+\s*[-\s]+", "", name)
    return name.replace("-", " ").strip()


def _make_icon_id(category: str, name: str) -> str:
    """Generate a stable icon ID."""
    slug = re.sub(r"[^a-z0-9]+", "_", name.lower()).strip("_")
    cat_slug = re.sub(r"[^a-z0-9]+", "_", category.lower()).strip("_")
    return f"Azure_{cat_slug}_{slug}"


def import_azure_icons(db_path: Path = DEFAULT_DB, icons_dir: Path = ICONS_DIR) -> dict:
    """Download Azure icons zip, extract SVGs, and sync with DB.

    Returns dict with keys: added, removed, unchanged, total.
    """
    # Download zip
    print(f"Downloading Azure icons from {AZURE_ICONS_URL}...")
    resp = urlopen(AZURE_ICONS_URL)
    zip_data = io.BytesIO(resp.read())
    zf = zipfile.ZipFile(zip_data)

    # Find all SVGs in the zip
    svg_entries = [f for f in zf.namelist() if f.endswith(".svg")]
    print(f"Found {len(svg_entries)} SVGs in zip")

    # Parse into icon records
    new_icons = {}
    for entry in svg_entries:
        parts = [p for p in entry.split("/") if p]
        if len(parts) < 3:
            continue
        # Structure: Azure_Public_Service_Icons/Icons/<category>/<file>.svg
        category = parts[-2]
        filename = parts[-1]
        name = _clean_icon_name(filename)
        icon_id = _make_icon_id(category, name)
        rel_path = f"icons/Azure/{category}/{filename}"

        new_icons[icon_id] = {
            "id": icon_id,
            "name": name,
            "filename": f"Azure/{category}/{filename}",
            "path": rel_path,
            "category": category,
            "set_name": SET_NAME,
            "description": f"Azure {category} icon: {name}",
            "tags": ["azure", category.replace(" + ", ", ")],
            "use_cases": ["architecture diagrams", "presentations", "documentation"],
            "status": "ready",
            "zip_entry": entry,
        }

    # Get existing Azure icons from DB
    conn = sqlite3.connect(str(db_path))
    conn.row_factory = sqlite3.Row
    existing = {
        row["id"]: dict(row)
        for row in conn.execute(
            "SELECT * FROM icons WHERE set_name = ?", (SET_NAME,)
        ).fetchall()
    }

    added = 0
    unchanged = 0
    removed = 0

    # Extract new/updated SVGs to disk and insert into DB
    icons_dir.mkdir(parents=True, exist_ok=True)
    for icon_id, icon in new_icons.items():
        # Extract SVG to disk
        cat_dir = icons_dir / icon["category"]
        cat_dir.mkdir(parents=True, exist_ok=True)
        svg_path = cat_dir / Path(icon["zip_entry"]).name
        svg_path.write_bytes(zf.read(icon["zip_entry"]))

        if icon_id in existing:
            unchanged += 1
        else:
            # Insert into DB
            conn.execute(
                """INSERT OR IGNORE INTO icons
                   (id, name, filename, path, category, set_name, description, tags, use_cases, status)
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)""",
                (
                    icon["id"], icon["name"], icon["filename"], icon["path"],
                    icon["category"], icon["set_name"], icon["description"],
                    json.dumps(icon["tags"]), json.dumps(icon["use_cases"]), icon["status"],
                ),
            )
            added += 1

    # Remove icons no longer in zip
    for icon_id, icon in existing.items():
        if icon_id not in new_icons:
            conn.execute("DELETE FROM icons WHERE id = ?", (icon_id,))
            # Remove file from disk
            old_path = Path(__file__).parent.parent / icon["path"]
            if old_path.exists():
                old_path.unlink()
            removed += 1

    # Refresh category counts
    conn.execute("DELETE FROM categories")
    conn.execute(
        """INSERT INTO categories (name, icon_count)
           SELECT category, COUNT(*) FROM icons GROUP BY category"""
    )
    conn.commit()
    conn.close()

    result = {
        "added": added,
        "removed": removed,
        "unchanged": unchanged,
        "total": added + unchanged,
    }
    print(f"Import complete: {result}")
    return result


if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description="Import Azure architecture icons")
    parser.add_argument("--db", type=Path, default=DEFAULT_DB, help="Database path")
    parser.add_argument("--icons-dir", type=Path, default=ICONS_DIR, help="Icons output directory")
    args = parser.parse_args()
    import_azure_icons(args.db, args.icons_dir)
