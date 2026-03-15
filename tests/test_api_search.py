"""Integration tests for search API endpoints."""

import json
import os
from pathlib import Path

import pytest
from fastapi.testclient import TestClient

from api.database import init_db, get_db, insert_icon


@pytest.fixture
def app_client(tmp_path, monkeypatch):
    db_path = tmp_path / "test.db"
    monkeypatch.setenv("DATABASE_URL", str(db_path))
    # Ensure dev mode (no auth required)
    init_db(db_path)
    conn = get_db(db_path)
    insert_icon(conn, {
        "id": "set_cat_cloud", "name": "Cloud", "filename": "Cloud.svg",
        "path": "icons/set/cat/Cloud.svg", "category": "Data Analysis Charts",
        "set_name": "set", "description": "Cloud computing icon",
        "tags": ["cloud", "computing"], "use_cases": ["Dashboards"],
    })
    insert_icon(conn, {
        "id": "set_cat_home", "name": "Home", "filename": "Home.svg",
        "path": "icons/set/cat/Home.svg", "category": "Buildings",
        "set_name": "set", "description": "Home icon",
        "tags": ["home"], "use_cases": ["Navigation"],
    })
    conn.close()

    from api.main import app
    # Ensure dev mode AFTER import (load_dotenv may restore env vars from .env)
    monkeypatch.delenv("AZURE_CLIENT_ID", raising=False)
    monkeypatch.delenv("AZURE_TENANT_ID", raising=False)
    monkeypatch.delenv("API_KEY", raising=False)
    import api.dependencies as deps
    deps._validator = None
    return TestClient(app)


def test_search_returns_results(app_client):
    resp = app_client.get("/api/search?q=cloud&semantic=false")
    assert resp.status_code == 200
    data = resp.json()
    assert data["total"] >= 1


def test_search_with_category_filter(app_client):
    resp = app_client.get("/api/search?q=icon&category=Buildings&semantic=false")
    data = resp.json()
    for icon in data["icons"]:
        assert icon["category"] == "Buildings"


def test_list_icons(app_client):
    resp = app_client.get("/api/icons")
    assert resp.status_code == 200
    assert len(resp.json()) == 2


def test_get_icon_by_id(app_client):
    resp = app_client.get("/api/icons/set_cat_cloud")
    assert resp.status_code == 200
    assert resp.json()["name"] == "Cloud"


def test_get_icon_not_found(app_client):
    resp = app_client.get("/api/icons/nonexistent")
    assert resp.status_code == 404
