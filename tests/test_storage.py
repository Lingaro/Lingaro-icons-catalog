"""Tests for storage abstraction (local backend only)."""

from pathlib import Path

import pytest

from api.services.storage import LocalStorage


@pytest.fixture
def storage(tmp_path):
    return LocalStorage(base_dir=tmp_path)


def test_save_file(storage, tmp_path, sample_svg):
    path = storage.save("test_set/cat/icon.svg", sample_svg.encode())
    assert (tmp_path / "test_set" / "cat" / "icon.svg").exists()


def test_get_file(storage, sample_svg):
    storage.save("test_set/cat/icon.svg", sample_svg.encode())
    data = storage.get("test_set/cat/icon.svg")
    assert data == sample_svg.encode()


def test_get_nonexistent(storage):
    assert storage.get("nonexistent.svg") is None


def test_delete_file(storage, sample_svg):
    storage.save("test_set/cat/icon.svg", sample_svg.encode())
    storage.delete("test_set/cat/icon.svg")
    assert storage.get("test_set/cat/icon.svg") is None


def test_get_url_local(storage, sample_svg):
    storage.save("test_set/cat/icon.svg", sample_svg.encode())
    url = storage.get_url("test_set/cat/icon.svg")
    assert "test_set/cat/icon.svg" in url
