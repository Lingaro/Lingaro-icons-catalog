"""SQLite database layer for the Icons Catalog."""

import json
import sqlite3
from pathlib import Path
from typing import Optional

DEFAULT_DB_PATH = Path(__file__).parent.parent / "data" / "catalog.db"

DB_SCHEMA = """
CREATE TABLE IF NOT EXISTS icons (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    filename TEXT NOT NULL,
    path TEXT NOT NULL,
    category TEXT NOT NULL,
    set_name TEXT NOT NULL,
    description TEXT,
    tags TEXT DEFAULT '[]',
    use_cases TEXT DEFAULT '[]',
    blob_url TEXT,
    status TEXT DEFAULT 'ready',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS categories (
    name TEXT PRIMARY KEY,
    icon_count INTEGER DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_icons_category ON icons(category);
CREATE INDEX IF NOT EXISTS idx_icons_set ON icons(set_name);
CREATE INDEX IF NOT EXISTS idx_icons_status ON icons(status);
"""


def init_db(db_path: Path = DEFAULT_DB_PATH) -> None:
    """Initialize the database schema. Idempotent."""
    db_path.parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(str(db_path))
    conn.executescript(DB_SCHEMA)
    conn.commit()
    conn.close()


def get_db(db_path: Path = DEFAULT_DB_PATH) -> sqlite3.Connection:
    """Get a database connection with row factory."""
    conn = sqlite3.connect(str(db_path))
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA journal_mode=WAL")
    conn.execute("PRAGMA foreign_keys=ON")
    return conn
