"""Tests for icon upload endpoint."""

import os
from pathlib import Path

import pytest
from fastapi.testclient import TestClient

from api.database import init_db, get_db, get_icon


@pytest.fixture
def app_client(tmp_path, monkeypatch):
    db_path = tmp_path / "test.db"
    icons_dir = tmp_path / "icons"
    icons_dir.mkdir()
    monkeypatch.setenv("DATABASE_URL", str(db_path))
    monkeypatch.setenv("STORAGE_BACKEND", "local")
    # Patch LocalStorage base_dir
    import api.services.storage as storage_mod
    original_get = storage_mod.get_storage
    def patched_get():
        return storage_mod.LocalStorage(base_dir=icons_dir)
    monkeypatch.setattr(storage_mod, "get_storage", patched_get)

    init_db(db_path)
    from api.main import app
    return TestClient(app)


def test_upload_svg(app_client, sample_svg, tmp_path):
    resp = app_client.post(
        "/api/icons",
        files={"file": ("Cloud.svg", sample_svg.encode(), "image/svg+xml")},
        data={"category": "Test", "set_name": "test_set"},
    )
    assert resp.status_code == 202
    data = resp.json()
    assert "id" in data


def test_upload_rejects_invalid_type(app_client):
    resp = app_client.post(
        "/api/icons",
        files={"file": ("readme.txt", b"hello", "text/plain")},
        data={"category": "Test"},
    )
    assert resp.status_code == 400


def test_upload_rejects_duplicate(app_client, sample_svg):
    app_client.post(
        "/api/icons",
        files={"file": ("Dup.svg", sample_svg.encode(), "image/svg+xml")},
        data={"category": "Test", "set_name": "test_set"},
    )
    resp = app_client.post(
        "/api/icons",
        files={"file": ("Dup.svg", sample_svg.encode(), "image/svg+xml")},
        data={"category": "Test", "set_name": "test_set"},
    )
    assert resp.status_code == 409
