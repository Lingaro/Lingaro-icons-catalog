#!/usr/bin/env python3
"""Normalize icon names across disk, database, and icons.json.

Fixes:
- Microsoft Fabric: strip suffixes like _64_item, _20_regular, convert to title case
- Databricks: DB entries still have 00_ prefixes but files on disk are already clean
- Azure: filenames have 00028-icon-service- prefixes
"""

import json
import os
import re
import shutil
import sqlite3
import sys
from pathlib import Path

PROJECT_ROOT = Path(__file__).parent.parent
DB_PATH = PROJECT_ROOT / "data" / "catalog.db"
JSON_PATH = PROJECT_ROOT / "assets" / "data" / "icons.json"


def make_human_name(raw: str) -> str:
    """Convert raw filename stem to human-readable name."""
    name = raw

    # Azure: strip leading number + icon-service prefix
    name = re.sub(r'^\d+-icon-service-', '', name)

    # Databricks: strip leading "NN_" prefix
    name = re.sub(r'^\d+_', '', name)

    # Microsoft Fabric: strip size+type suffix
    name = re.sub(r'_\d+_(item|non-item|color|regular|filed)$', '', name)

    # Convert underscores and hyphens to spaces
    name = name.replace('_', ' ').replace('-', ' ')

    # Collapse multiple spaces
    name = re.sub(r'\s+', ' ', name).strip()

    # Title case
    name = name.title()

    # Fix common acronyms
    for acronym in ['Ai', 'Api', 'Sql', 'Io', 'Iot', 'Vm', 'Vpn', 'Cdn', 'Dns', 'Ssl',
                    'Bi', 'Ml', 'Dl', 'Ci', 'Cd', 'Db', 'Ui', 'Ux', 'Kql', 'Sdk',
                    'Hpc', 'Ip', 'Ddos', 'Waf', 'Sap', 'Nas', 'Nfs', 'Smb', 'Rdl']:
        name = re.sub(r'\b' + acronym + r'\b', acronym.upper(), name)

    return name


def make_clean_filename(raw_stem: str) -> str:
    """Convert raw stem to clean filename stem."""
    name = raw_stem

    # Azure: strip prefix
    name = re.sub(r'^\d+-icon-service-', '', name)

    # Databricks: strip number prefix
    name = re.sub(r'^\d+_', '', name)

    # Microsoft Fabric: strip size+type suffix entirely
    name = re.sub(r'_\d+_(item|non-item|color|regular|filed)$', '', name)

    # Remove parentheses
    name = re.sub(r'[()]', '', name)

    # Convert to lowercase snake_case
    name = name.replace('-', '_').replace(' ', '_').lower()
    name = re.sub(r'_+', '_', name).strip('_')

    return name


def normalize_microsoft_fabric(conn, dry_run=False):
    """Fix Microsoft Fabric icon names and files."""
    cur = conn.cursor()
    cur.execute("SELECT id, name, filename, path FROM icons WHERE category IN ('fabric items', 'services')")
    rows = cur.fetchall()
    changes = []

    # First pass: compute new IDs and detect collisions
    seen_ids = set()
    for icon_id, old_name, old_filename, old_path in rows:
        stem = Path(old_filename).stem
        new_name = make_human_name(stem)
        new_stem = make_clean_filename(stem)
        new_filename = new_stem + '.svg'

        old_disk_path = PROJECT_ROOT / old_path
        new_disk_path = old_disk_path.parent / new_filename
        new_path = str(new_disk_path.relative_to(PROJECT_ROOT)).replace('\\', '/')
        parent_dir = Path(old_path).parent.name
        new_id = f"fabric_{parent_dir}_{new_stem}"

        # If collision, keep variant type in filename and ID
        if new_id in seen_ids:
            # Re-derive keeping the variant type
            variant = re.search(r'_\d+_(item|non-item|color|regular|filed)$', stem)
            if variant:
                suffix = variant.group(1).replace('-', '_')
                new_stem = new_stem + '_' + suffix
                new_filename = new_stem + '.svg'
                new_disk_path = old_disk_path.parent / new_filename
                new_path = str(new_disk_path.relative_to(PROJECT_ROOT)).replace('\\', '/')
                new_id = f"fabric_{parent_dir}_{new_stem}"
        seen_ids.add(new_id)

        if old_name == new_name and old_filename == new_filename:
            continue

        changes.append({
            'id': icon_id,
            'new_id': new_id,
            'old_name': old_name, 'new_name': new_name,
            'old_filename': old_filename, 'new_filename': new_filename,
            'old_path': old_path, 'new_path': new_path,
            'old_disk': old_disk_path, 'new_disk': new_disk_path,
        })

    print(f"\nMicrosoft Fabric: {len(changes)} icons to rename")
    for c in changes[:5]:
        print(f"  {c['old_name']!r:50s} -> {c['new_name']!r}")
        print(f"    file: {c['old_filename']!r:50s} -> {c['new_filename']!r}")

    if dry_run:
        return changes

    for c in changes:
        # Rename file on disk if old file still exists
        if c['old_disk'].exists() and c['old_disk'] != c['new_disk']:
            c['new_disk'].parent.mkdir(parents=True, exist_ok=True)
            shutil.move(str(c['old_disk']), str(c['new_disk']))
        # Update DB
        cur.execute(
            "UPDATE icons SET name=?, filename=?, path=?, id=? WHERE id=?",
            (c['new_name'], c['new_filename'], c['new_path'], c['new_id'], c['id'])
        )

    conn.commit()
    return changes


def normalize_databricks(conn, dry_run=False):
    """Fix Databricks icon names - files already renamed on disk, update DB to match."""
    cur = conn.cursor()
    cur.execute("SELECT id, name, filename, path FROM icons WHERE category='databricks'")
    rows = cur.fetchall()
    changes = []

    disk_dir = PROJECT_ROOT / "icons" / "databricks"
    disk_files = {f.stem: f for f in disk_dir.glob("*.svg")} if disk_dir.exists() else {}

    for icon_id, old_name, old_filename, old_path in rows:
        old_stem = Path(old_filename).stem
        clean_stem = re.sub(r'^\d+_', '', old_stem)

        # Find matching file on disk
        matching_file = None
        for disk_stem, disk_file in disk_files.items():
            if disk_stem == clean_stem:
                matching_file = disk_file
                break
        if not matching_file:
            # Try case-insensitive
            clean_norm = clean_stem.lower().replace('_', '').replace(' ', '')
            for disk_stem, disk_file in disk_files.items():
                if disk_stem.lower().replace('_', '').replace(' ', '') == clean_norm:
                    matching_file = disk_file
                    break

        if matching_file is None:
            print(f"  WARNING: no disk file for {old_name!r}")
            continue

        new_name = matching_file.stem
        new_filename = matching_file.name
        new_path = str(matching_file.relative_to(PROJECT_ROOT)).replace('\\', '/')
        new_id = new_name.lower().replace(' ', '_')

        if old_name == new_name and old_path == new_path:
            continue

        changes.append({
            'id': icon_id,
            'new_id': new_id,
            'old_name': old_name, 'new_name': new_name,
            'old_filename': old_filename, 'new_filename': new_filename,
            'old_path': old_path, 'new_path': new_path,
        })

    print(f"\nDatabricks: {len(changes)} icons to update in DB")
    for c in changes[:5]:
        print(f"  {c['old_name']!r:50s} -> {c['new_name']!r}")

    if dry_run:
        return changes

    for c in changes:
        cur.execute(
            "UPDATE icons SET name=?, filename=?, path=?, id=? WHERE id=?",
            (c['new_name'], c['new_filename'], c['new_path'], c['new_id'], c['id'])
        )

    conn.commit()
    return changes


def normalize_azure(conn, dry_run=False):
    """Fix Azure icon filenames (strip 00028-icon-service- prefix)."""
    cur = conn.cursor()
    cur.execute("SELECT id, name, filename, path FROM icons WHERE filename LIKE '%icon-service-%'")
    rows = cur.fetchall()
    changes = []

    for icon_id, old_name, old_filename, old_path in rows:
        stem = Path(old_filename).stem
        new_stem = make_clean_filename(stem)
        new_filename = new_stem + '.svg'

        old_disk_path = PROJECT_ROOT / old_path
        new_disk_path = old_disk_path.parent / new_filename
        new_path = str(new_disk_path.relative_to(PROJECT_ROOT)).replace('\\', '/')

        if old_filename == new_filename:
            continue

        changes.append({
            'id': icon_id,
            'new_id': icon_id,  # Keep existing ID for Azure
            'old_name': old_name, 'new_name': old_name,  # Keep existing human name
            'old_filename': old_filename, 'new_filename': new_filename,
            'old_path': old_path, 'new_path': new_path,
            'old_disk': old_disk_path, 'new_disk': new_disk_path,
        })

    print(f"\nAzure: {len(changes)} icons to rename")
    for c in changes[:5]:
        print(f"  {c['old_filename']!r:60s} -> {c['new_filename']!r}")

    if dry_run:
        return changes

    for c in changes:
        if c['old_disk'].exists() and c['old_disk'] != c['new_disk']:
            c['new_disk'].parent.mkdir(parents=True, exist_ok=True)
            shutil.move(str(c['old_disk']), str(c['new_disk']))
        cur.execute(
            "UPDATE icons SET filename=?, path=? WHERE id=?",
            (c['new_filename'], c['new_path'], c['id'])
        )

    conn.commit()
    return changes


def update_icons_json(all_changes):
    """Update icons.json to reflect new names/filenames/paths."""
    if not JSON_PATH.exists():
        print("\nicons.json not found, skipping")
        return

    with open(JSON_PATH, 'r', encoding='utf-8') as f:
        data = json.load(f)

    lookup = {}
    for c in all_changes:
        lookup[c['id']] = c

    updated = 0
    for icon in data.get('icons', []):
        if icon['id'] in lookup:
            c = lookup[icon['id']]
            icon['name'] = c['new_name']
            icon['filename'] = c['new_filename']
            icon['path'] = c['new_path']
            if c['new_id'] != c['id']:
                icon['id'] = c['new_id']
            updated += 1

    with open(JSON_PATH, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print(f"\nUpdated {updated} entries in icons.json")


def main():
    dry_run = '--dry-run' in sys.argv

    if dry_run:
        print("=== DRY RUN - no changes will be made ===\n")

    conn = sqlite3.connect(str(DB_PATH))

    fabric_changes = normalize_microsoft_fabric(conn, dry_run)
    databricks_changes = normalize_databricks(conn, dry_run)
    azure_changes = normalize_azure(conn, dry_run)

    if not dry_run:
        all_changes = fabric_changes + databricks_changes + azure_changes
        update_icons_json(all_changes)

    conn.close()

    total = len(fabric_changes) + len(databricks_changes) + len(azure_changes)
    print(f"\nTotal: {total} icons {'would be' if dry_run else 'were'} normalized")


if __name__ == '__main__':
    main()
