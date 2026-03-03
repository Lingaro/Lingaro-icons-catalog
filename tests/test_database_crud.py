"""Tests for database CRUD operations."""

import json
from pathlib import Path

import pytest

from api.database import init_db, get_db, insert_icon, get_icon, list_icons, update_icon, delete_icon, refresh_category_counts


@pytest.fixture
def db(tmp_path):
    db_path = tmp_path / "test.db"
    init_db(db_path)
    return get_db(db_path)


@pytest.fixture
def icon_data():
    return {
        "id": "test_set_cat_icon1",
        "name": "Icon One",
        "filename": "Icon One.svg",
        "path": "icons/test_set/cat/Icon One.svg",
        "category": "cat",
        "set_name": "test_set",
        "description": "First icon",
        "tags": ["test", "one"],
        "use_cases": ["Testing"],
    }


def test_insert_and_get_icon(db, icon_data):
    insert_icon(db, icon_data)
    icon = get_icon(db, "test_set_cat_icon1")
    assert icon is not None
    assert icon["name"] == "Icon One"
    assert json.loads(icon["tags"]) == ["test", "one"]


def test_list_icons_with_filters(db, icon_data):
    insert_icon(db, icon_data)
    icon_data2 = {**icon_data, "id": "test_set_other_icon2", "category": "other", "name": "Icon Two"}
    insert_icon(db, icon_data2)

    all_icons = list_icons(db)
    assert len(all_icons) == 2

    filtered = list_icons(db, category="cat")
    assert len(filtered) == 1
    assert filtered[0]["name"] == "Icon One"


def test_list_icons_pagination(db, icon_data):
    for i in range(5):
        data = {**icon_data, "id": f"icon_{i}", "name": f"Icon {i}"}
        insert_icon(db, data)

    page1 = list_icons(db, limit=2, offset=0)
    page2 = list_icons(db, limit=2, offset=2)
    assert len(page1) == 2
    assert len(page2) == 2
    assert page1[0]["id"] != page2[0]["id"]


def test_update_icon(db, icon_data):
    insert_icon(db, icon_data)
    update_icon(db, "test_set_cat_icon1", description="Updated desc", tags=["updated"])
    icon = get_icon(db, "test_set_cat_icon1")
    assert icon["description"] == "Updated desc"
    assert json.loads(icon["tags"]) == ["updated"]


def test_delete_icon(db, icon_data):
    insert_icon(db, icon_data)
    delete_icon(db, "test_set_cat_icon1")
    assert get_icon(db, "test_set_cat_icon1") is None


def test_refresh_category_counts(db, icon_data):
    insert_icon(db, icon_data)
    icon_data2 = {**icon_data, "id": "icon2"}
    insert_icon(db, icon_data2)
    refresh_category_counts(db)
    cursor = db.execute("SELECT icon_count FROM categories WHERE name = ?", ("cat",))
    row = cursor.fetchone()
    assert row["icon_count"] == 2
