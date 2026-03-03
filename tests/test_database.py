"""Tests for the database layer."""

import sqlite3
from pathlib import Path

import pytest

from api.database import get_db, init_db, DB_SCHEMA


def test_init_db_creates_tables(tmp_path):
    db_path = tmp_path / "test.db"
    init_db(db_path)
    conn = sqlite3.connect(str(db_path))
    cursor = conn.execute("SELECT name FROM sqlite_master WHERE type='table'")
    tables = {row[0] for row in cursor.fetchall()}
    conn.close()
    assert "icons" in tables
    assert "categories" in tables


def test_init_db_is_idempotent(tmp_path):
    db_path = tmp_path / "test.db"
    init_db(db_path)
    init_db(db_path)  # Should not raise


def test_get_db_returns_connection(tmp_path):
    db_path = tmp_path / "test.db"
    init_db(db_path)
    conn = get_db(db_path)
    assert conn is not None
    conn.close()
