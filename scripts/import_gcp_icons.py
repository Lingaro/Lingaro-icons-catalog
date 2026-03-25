"""Import official Google Cloud Platform architecture icons into the catalog.

Source: https://cloud.google.com/static/icons/files/google-cloud-icons.zip

Usage (CLI):
    python -m scripts.import_gcp_icons
    python -m scripts.import_gcp_icons --db data/catalog.db
"""

import io
import json
import re
import sqlite3
import zipfile
from pathlib import Path
from urllib.request import urlopen

GCP_ICONS_URL = "https://cloud.google.com/static/icons/files/google-cloud-icons.zip"
SET_NAME = "Google Cloud"
ICONS_DIR = Path(__file__).parent.parent / "icons" / "Google Cloud"
DEFAULT_DB = Path(__file__).parent.parent / "data" / "catalog.db"


def _clean_icon_name(folder_name: str) -> str:
    """Convert 'virtual_private_cloud' -> 'Virtual Private Cloud'."""
    return folder_name.replace("_", " ").replace("-", " ").strip().title()


def _make_icon_id(name: str) -> str:
    """Generate a stable icon ID."""
    slug = re.sub(r"[^a-z0-9]+", "_", name.lower()).strip("_")
    return f"GCP_{slug}"


def import_gcp_icons(db_path: Path = DEFAULT_DB, icons_dir: Path = ICONS_DIR) -> dict:
    """Download GCP icons zip, extract SVGs, and sync with DB.

    Returns dict with keys: added, removed, unchanged, total.
    """
    print(f"Downloading GCP icons from {GCP_ICONS_URL}...")
    resp = urlopen(GCP_ICONS_URL)
    zip_data = io.BytesIO(resp.read())
    zf = zipfile.ZipFile(zip_data)

    svg_entries = [f for f in zf.namelist() if f.endswith(".svg")]
    print(f"Found {len(svg_entries)} SVGs in zip")

    # Parse into icon records
    # Structure: <service_name>/<service_name>.svg (flat, no categories)
    new_icons = {}
    for entry in svg_entries:
        parts = [p for p in entry.split("/") if p]
        if len(parts) < 2:
            continue
        folder = parts[-2]
        filename = parts[-1]
        name = _clean_icon_name(folder)
        icon_id = _make_icon_id(name)
        rel_path = f"icons/Google Cloud/{filename}"

        new_icons[icon_id] = {
            "id": icon_id,
            "name": name,
            "filename": f"Google Cloud/{filename}",
            "path": rel_path,
            "category": "general",
            "set_name": SET_NAME,
            "description": f"Google Cloud icon: {name}",
            "tags": ["gcp", "google cloud"],
            "use_cases": ["architecture diagrams", "presentations", "documentation"],
            "status": "ready",
            "zip_entry": entry,
        }

    # Get existing GCP icons from DB
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

    # Extract SVGs to disk and insert into DB
    icons_dir.mkdir(parents=True, exist_ok=True)
    for icon_id, icon in new_icons.items():
        svg_path = icons_dir / Path(icon["zip_entry"]).name
        svg_path.write_bytes(zf.read(icon["zip_entry"]))

        if icon_id in existing:
            unchanged += 1
        else:
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

    parser = argparse.ArgumentParser(description="Import Google Cloud architecture icons")
    parser.add_argument("--db", type=Path, default=DEFAULT_DB, help="Database path")
    parser.add_argument("--icons-dir", type=Path, default=ICONS_DIR, help="Icons output directory")
    args = parser.parse_args()
    import_gcp_icons(args.db, args.icons_dir)
