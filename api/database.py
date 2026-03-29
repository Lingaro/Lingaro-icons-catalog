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

CREATE TABLE IF NOT EXISTS personal_tokens (
    id TEXT PRIMARY KEY,
    user_email TEXT NOT NULL UNIQUE,
    token_hash TEXT NOT NULL,
    name TEXT NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_personal_tokens_hash ON personal_tokens(token_hash);

-- Full-text search index
CREATE VIRTUAL TABLE IF NOT EXISTS icons_fts USING fts5(
    name, description, tags, use_cases, category,
    content='icons', content_rowid='rowid'
);

-- Keep FTS in sync with icons table
CREATE TRIGGER IF NOT EXISTS icons_ai AFTER INSERT ON icons BEGIN
    INSERT INTO icons_fts(rowid, name, description, tags, use_cases, category)
    VALUES (new.rowid, new.name, new.description, new.tags, new.use_cases, new.category);
END;

CREATE TRIGGER IF NOT EXISTS icons_ad AFTER DELETE ON icons BEGIN
    INSERT INTO icons_fts(icons_fts, rowid, name, description, tags, use_cases, category)
    VALUES ('delete', old.rowid, old.name, old.description, old.tags, old.use_cases, old.category);
END;

CREATE TRIGGER IF NOT EXISTS icons_au AFTER UPDATE ON icons BEGIN
    INSERT INTO icons_fts(icons_fts, rowid, name, description, tags, use_cases, category)
    VALUES ('delete', old.rowid, old.name, old.description, old.tags, old.use_cases, old.category);
    INSERT INTO icons_fts(rowid, name, description, tags, use_cases, category)
    VALUES (new.rowid, new.name, new.description, new.tags, new.use_cases, new.category);
END;
"""


def init_db(db_path: Path = DEFAULT_DB_PATH) -> None:
    """Initialize the database schema. Idempotent."""
    db_path.parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(str(db_path))
    conn.executescript(DB_SCHEMA)
    conn.commit()
    rebuild_fts(conn)
    conn.close()


def rebuild_fts(conn: sqlite3.Connection) -> None:
    """Rebuild the FTS index from the icons table."""
    conn.execute("INSERT INTO icons_fts(icons_fts) VALUES ('delete-all')")
    conn.execute(
        """INSERT INTO icons_fts(rowid, name, description, tags, use_cases, category)
           SELECT rowid, name, COALESCE(description, ''), COALESCE(tags, '[]'),
                  COALESCE(use_cases, '[]'), category
           FROM icons"""
    )
    conn.commit()


def get_db(db_path: Path = DEFAULT_DB_PATH) -> sqlite3.Connection:
    """Get a database connection with row factory."""
    conn = sqlite3.connect(str(db_path), check_same_thread=False)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA journal_mode=WAL")
    conn.execute("PRAGMA foreign_keys=ON")
    return conn


def insert_icon(conn: sqlite3.Connection, data: dict) -> None:
    """Insert an icon record."""
    conn.execute(
        """INSERT INTO icons (id, name, filename, path, category, set_name,
           description, tags, use_cases, blob_url, status)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)""",
        (
            data["id"], data["name"], data["filename"], data["path"],
            data["category"], data["set_name"],
            data.get("description"),
            json.dumps(data.get("tags", [])),
            json.dumps(data.get("use_cases", [])),
            data.get("blob_url"),
            data.get("status", "ready"),
        ),
    )
    conn.commit()


def get_icon(conn: sqlite3.Connection, icon_id: str) -> Optional[dict]:
    """Get a single icon by ID."""
    cursor = conn.execute("SELECT * FROM icons WHERE id = ?", (icon_id,))
    row = cursor.fetchone()
    return dict(row) if row else None


def list_icons(
    conn: sqlite3.Connection,
    category: Optional[str] = None,
    set_name: Optional[str] = None,
    limit: int = 100,
    offset: int = 0,
) -> list[dict]:
    """List icons with optional filters and pagination."""
    query = "SELECT * FROM icons WHERE 1=1"
    params: list = []
    if category:
        query += " AND category = ?"
        params.append(category)
    if set_name:
        query += " AND set_name = ?"
        params.append(set_name)
    query += " ORDER BY name LIMIT ? OFFSET ?"
    params.extend([limit, offset])
    cursor = conn.execute(query, params)
    return [dict(row) for row in cursor.fetchall()]


def update_icon(
    conn: sqlite3.Connection,
    icon_id: str,
    **fields,
) -> Optional[dict]:
    """Update icon fields. Pass tags/use_cases as lists (auto-serialized to JSON)."""
    if not fields:
        return get_icon(conn, icon_id)
    sets = []
    params = []
    for key, value in fields.items():
        if key in ("tags", "use_cases") and isinstance(value, list):
            value = json.dumps(value)
        sets.append(f"{key} = ?")
        params.append(value)
    sets.append("updated_at = CURRENT_TIMESTAMP")
    params.append(icon_id)
    conn.execute(f"UPDATE icons SET {', '.join(sets)} WHERE id = ?", params)
    conn.commit()
    return get_icon(conn, icon_id)


def delete_icon(conn: sqlite3.Connection, icon_id: str) -> bool:
    """Delete an icon by ID. Returns True if deleted."""
    cursor = conn.execute("DELETE FROM icons WHERE id = ?", (icon_id,))
    conn.commit()
    return cursor.rowcount > 0


def refresh_category_counts(conn: sqlite3.Connection) -> None:
    """Recalculate category icon counts."""
    conn.execute("DELETE FROM categories")
    conn.execute(
        """INSERT INTO categories (name, icon_count)
           SELECT category, COUNT(*) FROM icons GROUP BY category"""
    )
    conn.commit()
