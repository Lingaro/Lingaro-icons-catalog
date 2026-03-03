"""Tests for the SQLite-backed search service."""

import json
from pathlib import Path

import pytest

from api.database import init_db, get_db, insert_icon
from api.services.search import SearchService


@pytest.fixture
def db(tmp_path):
    db_path = tmp_path / "test.db"
    init_db(db_path)
    conn = get_db(db_path)
    icons = [
        {"id": "set_cat_cloud", "name": "Cloud", "filename": "Cloud.svg",
         "path": "icons/set/cat/Cloud.svg", "category": "Data Analysis Charts",
         "set_name": "set", "description": "Cloud computing icon",
         "tags": ["cloud", "computing", "server"], "use_cases": ["Dashboards"]},
        {"id": "set_cat_database", "name": "Database", "filename": "Database.svg",
         "path": "icons/set/cat/Database.svg", "category": "Data Analysis Charts",
         "set_name": "set", "description": "Database storage icon",
         "tags": ["database", "storage", "data"], "use_cases": ["Architecture diagrams"]},
        {"id": "set_other_home", "name": "Home", "filename": "Home.svg",
         "path": "icons/set/other/Home.svg", "category": "Buildings",
         "set_name": "set", "description": "Home building icon",
         "tags": ["home", "house", "building"], "use_cases": ["Navigation"]},
    ]
    for icon in icons:
        insert_icon(conn, icon)
    return conn


@pytest.fixture
def search(db):
    return SearchService(db)


def test_text_search_by_name(search):
    results = search.text_search("Cloud")
    assert len(results) >= 1
    assert results[0]["name"] == "Cloud"


def test_text_search_by_tag(search):
    results = search.text_search("storage")
    names = [r["name"] for r in results]
    assert "Database" in names


def test_text_search_by_description(search):
    results = search.text_search("computing")
    assert len(results) >= 1


def test_text_search_with_category_filter(search):
    results = search.text_search("icon", category="Buildings")
    assert all(r["category"] == "Buildings" for r in results)


def test_text_search_no_results(search):
    results = search.text_search("zzzznonexistent")
    assert len(results) == 0


def test_get_icon_by_id(search):
    icon = search.get_icon_by_id("set_cat_cloud")
    assert icon is not None
    assert icon["name"] == "Cloud"


def test_get_icon_by_id_missing(search):
    assert search.get_icon_by_id("nonexistent") is None
