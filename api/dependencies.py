"""FastAPI dependencies for auth, DB connections, etc."""

import os
import sqlite3
from pathlib import Path
from typing import Optional

from fastapi import Header, HTTPException

from .database import get_db, init_db, DEFAULT_DB_PATH
from .services.storage import get_storage, StorageBackend


def require_api_key(x_api_key: Optional[str] = Header(None)) -> bool:
    """Dependency: require valid API key for write operations.
    If API_KEY env var is not set, all requests are allowed (dev mode).
    """
    expected = os.getenv("API_KEY")
    if not expected:
        return True
    if not x_api_key or x_api_key != expected:
        raise HTTPException(status_code=401, detail="Invalid or missing API key")
    return True


def get_database() -> sqlite3.Connection:
    """Dependency: get a database connection."""
    db_path = Path(os.getenv("DATABASE_URL", str(DEFAULT_DB_PATH)))
    init_db(db_path)
    return get_db(db_path)


def get_storage_backend() -> StorageBackend:
    """Dependency: get the configured storage backend."""
    return get_storage()
