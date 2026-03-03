"""Tests for migration from icons.json to SQLite."""

import json
from pathlib import Path

import pytest

from scripts.migrate_to_sqlite import migrate_icons_json
from api.database import init_db, get_db


@pytest.fixture
def icons_json(tmp_path):
    data = {
        "icons": [
            {"id": "set_cat_cloud", "name": "Cloud", "filename": "Cloud.svg",
             "path": "icons/set/cat/Cloud.svg", "category": "Data Analysis Charts",
             "set": "set", "description": "Cloud icon", "tags": ["cloud"],
             "use_cases": ["Dashboards"], "embedding": [0.1] * 256},
            {"id": "set_cat_home", "name": "Home", "filename": "Home.svg",
             "path": "icons/set/cat/Home.svg", "category": "Buildings",
             "set": "set", "description": "Home icon", "tags": ["home"],
             "use_cases": ["Navigation"]},
        ],
        "categories": ["Data Analysis Charts", "Buildings"],
        "sets": ["set"],
        "meta": {},
    }
    json_path = tmp_path / "icons.json"
    json_path.write_text(json.dumps(data))
    return json_path


def test_migrate_creates_icons(tmp_path, icons_json):
    db_path = tmp_path / "catalog.db"
    count = migrate_icons_json(icons_json, db_path)
    assert count == 2
    conn = get_db(db_path)
    cursor = conn.execute("SELECT COUNT(*) FROM icons")
    assert cursor.fetchone()[0] == 2
    conn.close()


def test_migrate_is_idempotent(tmp_path, icons_json):
    db_path = tmp_path / "catalog.db"
    migrate_icons_json(icons_json, db_path)
    count = migrate_icons_json(icons_json, db_path)
    conn = get_db(db_path)
    cursor = conn.execute("SELECT COUNT(*) FROM icons")
    assert cursor.fetchone()[0] == 2
    conn.close()
