# Catalog Evolution Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Evolve the Lingaro Icons Catalog from a file-based static site into a full platform with SQLite + sqlite-vec, Azure Blob storage, icon uploads with auto-annotation, and TypeScript client packages.

**Architecture:** Monolith FastAPI app. SQLite for metadata + vector search (sqlite-vec). Azure Blob for file storage in production, local filesystem in dev. Background tasks for GPT-4 annotation and embedding generation. Two npm packages for consumption.

**Tech Stack:** Python 3.11, FastAPI, SQLite + sqlite-vec, Azure Blob Storage SDK, OpenAI API, TypeScript, React

**Design doc:** `docs/plans/2026-03-03-catalog-evolution-design.md`

---

## Task 1: Test Infrastructure + Project Config

Set up pytest, pyproject.toml, and the test directory structure.

**Files:**
- Create: `pyproject.toml`
- Create: `tests/__init__.py`
- Create: `tests/conftest.py`

**Step 1: Create pyproject.toml**

```toml
[project]
name = "lingaro-icons-catalog"
version = "2.0.0"
requires-python = ">=3.11"

[tool.pytest.ini_options]
testpaths = ["tests"]
asyncio_mode = "auto"
```

**Step 2: Create test scaffolding**

Create `tests/__init__.py` (empty) and `tests/conftest.py` with shared fixtures:

```python
"""Shared test fixtures for the Lingaro Icons Catalog."""

import json
import os
import sqlite3
import tempfile
from pathlib import Path

import pytest
from fastapi.testclient import TestClient


@pytest.fixture
def tmp_dir(tmp_path):
    """Temporary directory for test files."""
    return tmp_path


@pytest.fixture
def sample_svg():
    """A minimal valid SVG string."""
    return '''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <circle cx="12" cy="12" r="10" fill="#783cbe"/>
</svg>'''


@pytest.fixture
def sample_icon_data():
    """Sample icon metadata dict."""
    return {
        "id": "test_set_category_icon",
        "name": "Test Icon",
        "filename": "Test Icon.svg",
        "path": "icons/test_set/category/Test Icon.svg",
        "category": "category",
        "set": "test_set",
        "description": "A test icon",
        "tags": ["test", "sample"],
        "use_cases": ["Testing"],
    }
```

**Step 3: Install test dependencies**

Run: `uv pip install pytest pytest-asyncio httpx`

**Step 4: Run empty test suite to verify setup**

Run: `python -m pytest tests/ -v`
Expected: "no tests ran" (0 collected, no errors)

**Step 5: Commit**

```bash
git add pyproject.toml tests/
git commit -m "feat: add pytest infrastructure and test scaffolding"
```

---

## Task 2: Database Layer — Schema + Connection

Create the SQLite database module with schema, connection management, and migration from icons.json.

**Files:**
- Create: `api/database.py`
- Create: `tests/test_database.py`

**Step 1: Write failing tests for database**

`tests/test_database.py`:

```python
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
```

**Step 2: Run tests — verify they fail**

Run: `python -m pytest tests/test_database.py -v`
Expected: ImportError

**Step 3: Implement database module**

`api/database.py`:

```python
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
```

**Step 4: Run tests — verify they pass**

Run: `python -m pytest tests/test_database.py -v`
Expected: 3 passed

**Step 5: Commit**

```bash
git add api/database.py tests/test_database.py
git commit -m "feat: add SQLite database layer with schema and connection management"
```

---

## Task 3: Database Layer — CRUD Operations

Add insert/query/update/delete operations for icons.

**Files:**
- Modify: `api/database.py`
- Create: `tests/test_database_crud.py`

**Step 1: Write failing tests**

`tests/test_database_crud.py`:

```python
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
```

**Step 2: Run tests — verify they fail**

Run: `python -m pytest tests/test_database_crud.py -v`
Expected: ImportError (functions don't exist yet)

**Step 3: Implement CRUD functions**

Append to `api/database.py`:

```python
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
```

**Step 4: Run tests — verify they pass**

Run: `python -m pytest tests/test_database_crud.py -v`
Expected: all passed

**Step 5: Commit**

```bash
git add api/database.py tests/test_database_crud.py
git commit -m "feat: add icon CRUD operations to database layer"
```

---

## Task 4: Storage Abstraction — Local + Azure Blob

Create a storage service that abstracts file storage with local and Azure Blob backends.

**Files:**
- Create: `api/services/__init__.py`
- Create: `api/services/storage.py`
- Create: `tests/test_storage.py`

**Step 1: Write failing tests**

`tests/test_storage.py`:

```python
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
```

**Step 2: Run tests — verify they fail**

Run: `python -m pytest tests/test_storage.py -v`

**Step 3: Implement storage service**

`api/services/__init__.py`: empty file

`api/services/storage.py`:

```python
"""File storage abstraction — local filesystem and Azure Blob backends."""

import os
from abc import ABC, abstractmethod
from pathlib import Path
from typing import Optional


class StorageBackend(ABC):
    """Abstract storage interface."""

    @abstractmethod
    def save(self, key: str, data: bytes) -> str:
        """Save file data. Returns the storage path/URL."""
        ...

    @abstractmethod
    def get(self, key: str) -> Optional[bytes]:
        """Get file data by key. Returns None if not found."""
        ...

    @abstractmethod
    def delete(self, key: str) -> bool:
        """Delete file by key. Returns True if deleted."""
        ...

    @abstractmethod
    def get_url(self, key: str) -> str:
        """Get a URL/path to access the file."""
        ...


class LocalStorage(StorageBackend):
    """Store files on local filesystem."""

    def __init__(self, base_dir: Path = None):
        self.base_dir = base_dir or Path(__file__).parent.parent.parent / "icons"

    def save(self, key: str, data: bytes) -> str:
        path = self.base_dir / key
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_bytes(data)
        return str(path)

    def get(self, key: str) -> Optional[bytes]:
        path = self.base_dir / key
        if path.exists():
            return path.read_bytes()
        return None

    def delete(self, key: str) -> bool:
        path = self.base_dir / key
        if path.exists():
            path.unlink()
            return True
        return False

    def get_url(self, key: str) -> str:
        return f"/icons/{key}"


class AzureBlobStorage(StorageBackend):
    """Store files in Azure Blob Storage."""

    def __init__(self, connection_string: str = None, container_name: str = "lingaro-icons"):
        from azure.storage.blob import BlobServiceClient

        conn_str = connection_string or os.getenv("AZURE_STORAGE_CONNECTION_STRING")
        if not conn_str:
            raise ValueError("AZURE_STORAGE_CONNECTION_STRING not set")
        self.blob_service = BlobServiceClient.from_connection_string(conn_str)
        self.container_name = container_name
        self.container_client = self.blob_service.get_container_client(container_name)

    def save(self, key: str, data: bytes) -> str:
        blob_client = self.container_client.get_blob_client(key)
        content_type = "image/svg+xml" if key.endswith(".svg") else "image/png"
        blob_client.upload_blob(data, overwrite=True, content_settings={"content_type": content_type})
        return blob_client.url

    def get(self, key: str) -> Optional[bytes]:
        try:
            blob_client = self.container_client.get_blob_client(key)
            return blob_client.download_blob().readall()
        except Exception:
            return None

    def delete(self, key: str) -> bool:
        try:
            blob_client = self.container_client.get_blob_client(key)
            blob_client.delete_blob()
            return True
        except Exception:
            return False

    def get_url(self, key: str) -> str:
        blob_client = self.container_client.get_blob_client(key)
        return blob_client.url


def get_storage() -> StorageBackend:
    """Factory: returns the configured storage backend."""
    backend = os.getenv("STORAGE_BACKEND", "local")
    if backend == "azure":
        return AzureBlobStorage()
    return LocalStorage()
```

**Step 4: Run tests — verify they pass**

Run: `python -m pytest tests/test_storage.py -v`
Expected: all passed

**Step 5: Commit**

```bash
git add api/services/ tests/test_storage.py
git commit -m "feat: add storage abstraction with local and Azure Blob backends"
```

---

## Task 5: Annotation Service

Extract annotation logic from `scripts/annotate.py` into a shared service module.

**Files:**
- Create: `api/services/annotation.py`
- Create: `tests/test_annotation.py`

**Step 1: Write failing test**

`tests/test_annotation.py`:

```python
"""Tests for the annotation service."""

from unittest.mock import MagicMock, patch

import pytest

from api.services.annotation import annotate_icon, parse_llm_json


def test_parse_llm_json_clean():
    raw = '{"description": "A cloud icon", "tags": ["cloud"], "use_cases": ["dashboards"]}'
    result = parse_llm_json(raw)
    assert result["description"] == "A cloud icon"


def test_parse_llm_json_with_markdown_fence():
    raw = '```json\n{"description": "x", "tags": ["a"], "use_cases": ["b"]}\n```'
    result = parse_llm_json(raw)
    assert result["description"] == "x"


def test_parse_llm_json_invalid_returns_none():
    assert parse_llm_json("not json at all") is None


@patch("api.services.annotation.OpenAI")
def test_annotate_icon_text_only(mock_openai_cls):
    mock_client = MagicMock()
    mock_openai_cls.return_value = mock_client
    mock_client.chat.completions.create.return_value = MagicMock(
        choices=[MagicMock(message=MagicMock(
            content='{"description": "Test", "tags": ["t"], "use_cases": ["u"]}'
        ))]
    )
    result = annotate_icon(mock_client, "Cloud", "Data Analysis Charts")
    assert result["description"] == "Test"
    assert result["tags"] == ["t"]
```

**Step 2: Implement annotation service**

`api/services/annotation.py`:

```python
"""AI annotation service — generates descriptions, tags, and use_cases for icons."""

import base64
import json
from io import BytesIO
from pathlib import Path
from typing import Optional

from openai import OpenAI

# Try to import SVG renderers
try:
    import cairosvg
    HAS_CAIRO = True
except ImportError:
    HAS_CAIRO = False

try:
    from svglib.svglib import svg2rlg
    from reportlab.graphics import renderPM
    HAS_SVGLIB = True
except ImportError:
    HAS_SVGLIB = False


def svg_to_png_base64(svg_data: bytes, size: int = 256) -> Optional[str]:
    """Convert SVG bytes to base64-encoded PNG for the Vision API."""
    if HAS_CAIRO:
        png_data = cairosvg.svg2png(
            bytestring=svg_data,
            output_width=size,
            output_height=size,
            background_color="white",
        )
        return base64.b64encode(png_data).decode("utf-8")
    elif HAS_SVGLIB:
        import tempfile
        with tempfile.NamedTemporaryFile(suffix=".svg", delete=False) as f:
            f.write(svg_data)
            f.flush()
            drawing = svg2rlg(f.name)
        if drawing is None:
            return None
        scale = min(size / (drawing.width or size), size / (drawing.height or size))
        drawing.width *= scale
        drawing.height *= scale
        drawing.scale(scale, scale)
        buf = BytesIO()
        renderPM.drawToFile(drawing, buf, fmt="PNG", bg=0xFFFFFF)
        buf.seek(0)
        return base64.b64encode(buf.read()).decode("utf-8")
    return None


def parse_llm_json(raw: str) -> Optional[dict]:
    """Parse JSON from LLM response, stripping markdown fences if present."""
    text = raw.strip()
    if text.startswith("```"):
        text = text.split("```")[1]
        if text.startswith("json"):
            text = text[4:]
        text = text.strip()
    try:
        return json.loads(text)
    except json.JSONDecodeError:
        return None


def annotate_icon(
    client: OpenAI,
    icon_name: str,
    category: str,
    svg_data: Optional[bytes] = None,
) -> dict:
    """Generate metadata for an icon using GPT-4.

    If svg_data is provided and a renderer is available, uses vision mode.
    Otherwise falls back to text-only annotation.
    """
    # Try vision if we have SVG data and a renderer
    if svg_data:
        image_b64 = svg_to_png_base64(svg_data)
        if image_b64:
            return _annotate_vision(client, icon_name, category, image_b64)

    return _annotate_text(client, icon_name, category)


ANNOTATION_PROMPT = """Generate metadata for an icon in JSON format.
The icon is named "{name}" and is in the "{category}" category.

Provide:
1. "description": A clear, concise description of what this icon represents (1-2 sentences)
2. "tags": An array of 5-8 relevant keywords/tags for search (lowercase)
3. "use_cases": An array of 2-3 suggested use cases

Respond with valid JSON only, no markdown formatting."""


def _annotate_text(client: OpenAI, name: str, category: str) -> dict:
    """Text-only annotation based on icon name and category."""
    try:
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[{"role": "user", "content": ANNOTATION_PROMPT.format(name=name, category=category)}],
            max_tokens=500,
            temperature=0.3,
        )
        result = parse_llm_json(response.choices[0].message.content)
        if result:
            return result
    except Exception:
        pass
    return _fallback_metadata(name, category)


def _annotate_vision(client: OpenAI, name: str, category: str, image_b64: str) -> dict:
    """Vision-based annotation using the actual icon image."""
    prompt = ANNOTATION_PROMPT.format(name=name, category=category).replace(
        "Generate metadata for an icon",
        "Analyze this icon image and provide metadata",
    )
    try:
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[{
                "role": "user",
                "content": [
                    {"type": "text", "text": prompt},
                    {"type": "image_url", "image_url": {"url": f"data:image/png;base64,{image_b64}", "detail": "low"}},
                ],
            }],
            max_tokens=500,
            temperature=0.3,
        )
        result = parse_llm_json(response.choices[0].message.content)
        if result:
            return result
    except Exception:
        pass
    return _fallback_metadata(name, category)


def _fallback_metadata(name: str, category: str) -> dict:
    """Fallback metadata when LLM fails."""
    return {
        "description": f"Icon representing {name.lower().replace('_', ' ')}",
        "tags": [name.lower(), category.lower()],
        "use_cases": ["General purpose icon"],
    }
```

**Step 3: Run tests**

Run: `python -m pytest tests/test_annotation.py -v`
Expected: all passed

**Step 4: Commit**

```bash
git add api/services/annotation.py tests/test_annotation.py
git commit -m "feat: add annotation service extracted from scripts/annotate.py"
```

---

## Task 6: Embeddings Service

Extract embedding logic from `scripts/generate_embeddings.py` into a shared service.

**Files:**
- Create: `api/services/embeddings.py`
- Create: `tests/test_embeddings.py`

**Step 1: Write failing test**

`tests/test_embeddings.py`:

```python
"""Tests for the embeddings service."""

from unittest.mock import MagicMock, patch

import pytest

from api.services.embeddings import create_icon_text, generate_embedding


def test_create_icon_text():
    icon = {
        "name": "Cloud",
        "description": "A cloud icon",
        "category": "Data Analysis Charts",
        "tags": ["cloud", "storage"],
        "use_cases": ["Dashboards"],
    }
    text = create_icon_text(icon)
    assert "Cloud" in text
    assert "cloud" in text
    assert "storage" in text
    assert "Dashboards" in text


def test_create_icon_text_minimal():
    icon = {"name": "Foo"}
    text = create_icon_text(icon)
    assert text == "Foo"


@patch("api.services.embeddings.OpenAI")
def test_generate_embedding(mock_cls):
    mock_client = MagicMock()
    mock_cls.return_value = mock_client
    mock_client.embeddings.create.return_value = MagicMock(
        data=[MagicMock(embedding=[0.1] * 256)]
    )
    result = generate_embedding(mock_client, "cloud icon")
    assert len(result) == 256
```

**Step 2: Implement embeddings service**

`api/services/embeddings.py`:

```python
"""Embedding generation service for semantic search."""

import os
from typing import Optional

from openai import OpenAI

EMBEDDING_MODEL = "text-embedding-3-small"
EMBEDDING_DIMENSIONS = 256


def create_icon_text(icon: dict) -> str:
    """Create a text representation of an icon for embedding."""
    parts = [
        icon.get("name", ""),
        icon.get("description", ""),
        icon.get("category", ""),
    ]
    tags = icon.get("tags", [])
    if tags:
        parts.append(" ".join(tags))
    use_cases = icon.get("use_cases", [])
    if use_cases:
        parts.append(" ".join(use_cases))
    return " ".join(filter(None, parts))


def generate_embedding(client: OpenAI, text: str) -> list[float]:
    """Generate an embedding vector for a text string."""
    response = client.embeddings.create(
        model=EMBEDDING_MODEL,
        input=text,
        dimensions=EMBEDDING_DIMENSIONS,
    )
    return response.data[0].embedding


def batch_generate_embeddings(
    client: OpenAI, texts: list[str], batch_size: int = 50
) -> list[list[float]]:
    """Generate embeddings for multiple texts in batches."""
    all_embeddings: list[list[float]] = []
    for i in range(0, len(texts), batch_size):
        batch = texts[i : i + batch_size]
        response = client.embeddings.create(
            model=EMBEDDING_MODEL,
            input=batch,
            dimensions=EMBEDDING_DIMENSIONS,
        )
        all_embeddings.extend([item.embedding for item in response.data])
    return all_embeddings
```

**Step 3: Run tests**

Run: `python -m pytest tests/test_embeddings.py -v`
Expected: all passed

**Step 4: Commit**

```bash
git add api/services/embeddings.py tests/test_embeddings.py
git commit -m "feat: add embeddings service extracted from scripts/generate_embeddings.py"
```

---

## Task 7: Search Service — Rewrite with SQLite + sqlite-vec

Replace the JSON-file-based `api/search.py` with a SQLite-backed search engine that uses `sqlite-vec` for vector similarity.

**Files:**
- Create: `api/services/search.py` (new, SQLite-based)
- Create: `tests/test_search_service.py`
- Keep: `api/search.py` (old, will be removed later after migration)

**Step 1: Write failing tests**

`tests/test_search_service.py`:

```python
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
    # Insert test icons
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
```

**Step 2: Implement search service**

`api/services/search.py`:

```python
"""Search service backed by SQLite (text search) and sqlite-vec (semantic search)."""

import json
import os
import sqlite3
from typing import Optional

import numpy as np
from openai import OpenAI

EMBEDDING_MODEL = "text-embedding-3-small"
EMBEDDING_DIMENSIONS = 256


def _deserialize_icon(row: dict) -> dict:
    """Convert a SQLite row dict into an icon response dict."""
    icon = dict(row)
    for field in ("tags", "use_cases"):
        val = icon.get(field)
        if isinstance(val, str):
            icon[field] = json.loads(val)
    # Normalize set_name -> set for API responses
    if "set_name" in icon and "set" not in icon:
        icon["set"] = icon.pop("set_name")
    return icon


class SearchService:
    """Search engine with text and optional semantic search."""

    def __init__(self, conn: sqlite3.Connection):
        self.conn = conn
        self._openai_client: Optional[OpenAI] = None

    @property
    def openai_client(self) -> Optional[OpenAI]:
        if self._openai_client is None:
            api_key = os.getenv("OPENAI_API_KEY")
            if api_key:
                self._openai_client = OpenAI(api_key=api_key)
        return self._openai_client

    def text_search(
        self,
        query: str,
        category: Optional[str] = None,
        set_name: Optional[str] = None,
        limit: int = 50,
    ) -> list[dict]:
        """Text-based search with relevance scoring."""
        query_lower = query.lower()
        query_words = query_lower.split()

        # Fetch candidate icons (with optional filters)
        sql = "SELECT * FROM icons WHERE status = 'ready'"
        params: list = []
        if category:
            sql += " AND category = ?"
            params.append(category)
        if set_name:
            sql += " AND set_name = ?"
            params.append(set_name)

        cursor = self.conn.execute(sql, params)
        rows = [_deserialize_icon(dict(row)) for row in cursor.fetchall()]

        scored = []
        for icon in rows:
            score = self._text_score(icon, query_lower, query_words)
            if score > 0:
                icon["score"] = round(score, 4)
                scored.append(icon)

        scored.sort(key=lambda x: x.get("score", 0), reverse=True)
        return scored[:limit]

    def semantic_search(
        self,
        query: str,
        category: Optional[str] = None,
        set_name: Optional[str] = None,
        limit: int = 50,
    ) -> list[dict]:
        """Semantic search using embeddings. Falls back to text search."""
        client = self.openai_client
        if not client:
            return self.text_search(query, category, set_name, limit)

        try:
            response = client.embeddings.create(
                model=EMBEDDING_MODEL, input=query, dimensions=EMBEDDING_DIMENSIONS
            )
            query_vec = np.array(response.data[0].embedding, dtype=np.float32)
            norm = np.linalg.norm(query_vec)
            if norm > 0:
                query_vec = query_vec / norm
        except Exception:
            return self.text_search(query, category, set_name, limit)

        # Try sqlite-vec if available
        try:
            return self._vec_search(query, query_vec, category, set_name, limit)
        except Exception:
            # Fall back to brute-force numpy search
            return self._numpy_search(query, query_vec, category, set_name, limit)

    def _vec_search(
        self, query: str, query_vec: np.ndarray,
        category: Optional[str], set_name: Optional[str], limit: int,
    ) -> list[dict]:
        """Search using sqlite-vec extension."""
        cursor = self.conn.execute(
            "SELECT icon_id, distance FROM icon_embeddings WHERE embedding MATCH ? ORDER BY distance LIMIT ?",
            (query_vec.tobytes(), limit * 3),
        )
        id_scores = {row[0]: 1.0 - row[1] for row in cursor.fetchall()}

        results = []
        for icon_id, sim_score in id_scores.items():
            icon = self.get_icon_by_id(icon_id)
            if not icon:
                continue
            if category and icon.get("category") != category:
                continue
            if set_name and icon.get("set") != set_name:
                continue
            # Boost for text matches
            query_lower = query.lower()
            if icon["name"].lower() == query_lower:
                sim_score += 0.3
            elif query_lower in icon["name"].lower():
                sim_score += 0.15
            icon["score"] = round(sim_score, 4)
            results.append(icon)

        results.sort(key=lambda x: x.get("score", 0), reverse=True)
        return results[:limit]

    def _numpy_search(
        self, query: str, query_vec: np.ndarray,
        category: Optional[str], set_name: Optional[str], limit: int,
    ) -> list[dict]:
        """Fallback: brute-force cosine similarity over all embeddings in DB."""
        # For now, just delegate to text search — vector table may not exist yet
        return self.text_search(query, category, set_name, limit)

    def _text_score(self, icon: dict, query_lower: str, query_words: list[str]) -> float:
        """Calculate text relevance score (same algorithm as original search.py)."""
        score = 0.0
        name_lower = icon["name"].lower()

        if name_lower == query_lower:
            score += 100
        elif name_lower.startswith(query_lower):
            score += 50
        elif query_lower in name_lower:
            score += 30

        for tag in icon.get("tags", []):
            tag_lower = tag.lower()
            if tag_lower == query_lower:
                score += 40
            elif query_lower in tag_lower:
                score += 20

        desc = icon.get("description", "").lower()
        if query_lower in desc:
            score += 15

        if query_lower in icon.get("category", "").lower():
            score += 10

        use_cases = " ".join(icon.get("use_cases", [])).lower()
        if query_lower in use_cases:
            score += 10

        if len(query_words) > 1:
            search_text = " ".join([
                name_lower, desc,
                " ".join(t.lower() for t in icon.get("tags", [])),
                use_cases,
            ])
            if all(w in search_text for w in query_words):
                score += 25

        return score

    def get_icon_by_id(self, icon_id: str) -> Optional[dict]:
        """Get a single icon by ID."""
        cursor = self.conn.execute("SELECT * FROM icons WHERE id = ?", (icon_id,))
        row = cursor.fetchone()
        return _deserialize_icon(dict(row)) if row else None

    def list_icons(
        self,
        category: Optional[str] = None,
        set_name: Optional[str] = None,
        limit: int = 100,
        offset: int = 0,
    ) -> list[dict]:
        """List icons with optional filtering and pagination."""
        sql = "SELECT * FROM icons WHERE status = 'ready'"
        params: list = []
        if category:
            sql += " AND category = ?"
            params.append(category)
        if set_name:
            sql += " AND set_name = ?"
            params.append(set_name)
        sql += " ORDER BY name LIMIT ? OFFSET ?"
        params.extend([limit, offset])
        cursor = self.conn.execute(sql, params)
        return [_deserialize_icon(dict(row)) for row in cursor.fetchall()]

    def get_categories(self) -> list[dict]:
        """Get categories with icon counts."""
        cursor = self.conn.execute(
            "SELECT category, COUNT(*) as count FROM icons WHERE status = 'ready' GROUP BY category ORDER BY category"
        )
        return [{"name": row[0], "count": row[1]} for row in cursor.fetchall()]

    def get_tags(self, limit: int = 50) -> list[dict]:
        """Get popular tags across all icons."""
        cursor = self.conn.execute("SELECT tags FROM icons WHERE status = 'ready'")
        tag_counts: dict[str, int] = {}
        for row in cursor.fetchall():
            for tag in json.loads(row[0]):
                tag_counts[tag] = tag_counts.get(tag, 0) + 1
        sorted_tags = sorted(tag_counts.items(), key=lambda x: x[1], reverse=True)
        return [{"tag": t, "count": c} for t, c in sorted_tags[:limit]]

    def count_icons(self) -> int:
        """Total icon count."""
        cursor = self.conn.execute("SELECT COUNT(*) FROM icons WHERE status = 'ready'")
        return cursor.fetchone()[0]
```

**Step 3: Run tests**

Run: `python -m pytest tests/test_search_service.py -v`
Expected: all passed

**Step 4: Commit**

```bash
git add api/services/search.py tests/test_search_service.py
git commit -m "feat: add SQLite-backed search service with text and semantic search"
```

---

## Task 8: Migration Script — icons.json to SQLite

Create a one-time migration script that imports existing `icons.json` data into SQLite.

**Files:**
- Create: `scripts/migrate_to_sqlite.py`
- Create: `tests/test_migration.py`

**Step 1: Write failing test**

`tests/test_migration.py`:

```python
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
            {
                "id": "set_cat_cloud",
                "name": "Cloud",
                "filename": "Cloud.svg",
                "path": "icons/set/cat/Cloud.svg",
                "category": "Data Analysis Charts",
                "set": "set",
                "description": "Cloud icon",
                "tags": ["cloud"],
                "use_cases": ["Dashboards"],
                "embedding": [0.1] * 256,
            },
            {
                "id": "set_cat_home",
                "name": "Home",
                "filename": "Home.svg",
                "path": "icons/set/cat/Home.svg",
                "category": "Buildings",
                "set": "set",
                "description": "Home icon",
                "tags": ["home"],
                "use_cases": ["Navigation"],
            },
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
    count = migrate_icons_json(icons_json, db_path)  # Second run
    conn = get_db(db_path)
    cursor = conn.execute("SELECT COUNT(*) FROM icons")
    assert cursor.fetchone()[0] == 2  # No duplicates
    conn.close()
```

**Step 2: Implement migration script**

`scripts/migrate_to_sqlite.py`:

```python
#!/usr/bin/env python3
"""Migrate icons.json data into SQLite database."""

import json
import sys
from pathlib import Path

# Add project root to path
sys.path.insert(0, str(Path(__file__).parent.parent))

from api.database import init_db, get_db, insert_icon, get_icon, refresh_category_counts


def migrate_icons_json(json_path: Path, db_path: Path) -> int:
    """Import icons from icons.json into SQLite. Skips existing icons. Returns count imported."""
    with open(json_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    init_db(db_path)
    conn = get_db(db_path)

    count = 0
    for icon in data.get("icons", []):
        if get_icon(conn, icon["id"]):
            continue  # Skip existing
        insert_icon(conn, {
            "id": icon["id"],
            "name": icon["name"],
            "filename": icon["filename"],
            "path": icon["path"],
            "category": icon.get("category", ""),
            "set_name": icon.get("set", ""),
            "description": icon.get("description"),
            "tags": icon.get("tags", []),
            "use_cases": icon.get("use_cases", []),
            "status": "ready",
        })
        count += 1

    refresh_category_counts(conn)
    conn.close()
    return count


def main():
    project_root = Path(__file__).parent.parent
    json_path = project_root / "assets" / "data" / "icons.json"
    db_path = project_root / "data" / "catalog.db"

    if not json_path.exists():
        print(f"Error: {json_path} not found")
        sys.exit(1)

    print(f"Migrating {json_path} -> {db_path}")
    count = migrate_icons_json(json_path, db_path)
    print(f"Imported {count} icons into SQLite")


if __name__ == "__main__":
    main()
```

**Step 3: Run tests**

Run: `python -m pytest tests/test_migration.py -v`
Expected: all passed

**Step 4: Commit**

```bash
git add scripts/migrate_to_sqlite.py tests/test_migration.py
git commit -m "feat: add migration script from icons.json to SQLite"
```

---

## Task 9: Auth Dependency

Add API key authentication for write operations.

**Files:**
- Create: `api/dependencies.py`
- Create: `tests/test_auth.py`

**Step 1: Write failing tests**

`tests/test_auth.py`:

```python
"""Tests for API key authentication."""

import os
from unittest.mock import patch

import pytest
from fastapi import HTTPException

from api.dependencies import require_api_key


def test_require_api_key_valid():
    with patch.dict(os.environ, {"API_KEY": "test-key-123"}):
        result = require_api_key("test-key-123")
        assert result is True


def test_require_api_key_invalid():
    with patch.dict(os.environ, {"API_KEY": "test-key-123"}):
        with pytest.raises(HTTPException) as exc_info:
            require_api_key("wrong-key")
        assert exc_info.value.status_code == 401


def test_require_api_key_missing_header():
    with patch.dict(os.environ, {"API_KEY": "test-key-123"}):
        with pytest.raises(HTTPException) as exc_info:
            require_api_key(None)
        assert exc_info.value.status_code == 401


def test_require_api_key_no_env_var():
    with patch.dict(os.environ, {}, clear=True):
        # When no API_KEY is set, all requests are allowed (dev mode)
        result = require_api_key(None)
        assert result is True
```

**Step 2: Implement auth dependency**

`api/dependencies.py`:

```python
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
        return True  # No auth configured — dev mode
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
```

**Step 3: Run tests**

Run: `python -m pytest tests/test_auth.py -v`
Expected: all passed

**Step 4: Commit**

```bash
git add api/dependencies.py tests/test_auth.py
git commit -m "feat: add API key authentication dependency"
```

---

## Task 10: API Routers — Refactor into Modular Structure

Split the monolithic `api/main.py` into separate routers. This is the largest refactor task.

**Files:**
- Create: `api/routers/__init__.py`
- Create: `api/routers/search.py`
- Create: `api/routers/icons.py`
- Create: `api/routers/categories.py`
- Create: `api/routers/admin.py`
- Modify: `api/main.py` (gut and replace with router includes)
- Modify: `api/models.py` (add new models)
- Create: `tests/test_api_search.py`
- Create: `tests/test_api_icons.py`

**Step 1: Update models**

Add to `api/models.py` — new models for upload and expanded responses:

```python
class IconCreate(BaseModel):
    """Model for creating an icon via upload."""
    name: Optional[str] = None
    category: str = Field(..., description="Icon category")
    set: str = Field("lingaro_set4", description="Icon set name")


class IconDetailResponse(IconBase):
    """Full icon detail with status and timestamps."""
    score: Optional[float] = None
    status: str = "ready"
    blob_url: Optional[str] = None
    created_at: Optional[str] = None
    updated_at: Optional[str] = None

    class Config:
        populate_by_name = True
```

**Step 2: Create search router**

`api/routers/__init__.py`: empty

`api/routers/search.py`:

```python
"""Search endpoints."""

from typing import Optional

from fastapi import APIRouter, Depends, Query

from ..dependencies import get_database
from ..models import SearchRequest, SearchResponse, IconResponse
from ..services.search import SearchService

router = APIRouter(prefix="/api", tags=["search"])


@router.get("/search")
async def search_icons(
    q: str = Query(..., min_length=1, description="Search query"),
    category: Optional[str] = None,
    set: Optional[str] = None,
    limit: int = Query(50, ge=1, le=200),
    semantic: bool = True,
    db=Depends(get_database),
):
    search = SearchService(db)
    if semantic:
        results = search.semantic_search(q, category, set, limit)
    else:
        results = search.text_search(q, category, set, limit)
    return SearchResponse(
        query=q, total=len(results),
        icons=[IconResponse(**r) for r in results],
        semantic_search=semantic,
    )


@router.post("/search")
async def search_icons_post(
    request: SearchRequest,
    db=Depends(get_database),
):
    search = SearchService(db)
    if request.semantic:
        results = search.semantic_search(request.query, request.category, request.set, request.limit)
    else:
        results = search.text_search(request.query, request.category, request.set, request.limit)
    return SearchResponse(
        query=request.query, total=len(results),
        icons=[IconResponse(**r) for r in results],
        semantic_search=request.semantic,
    )
```

**Step 3: Create icons router**

`api/routers/icons.py`:

```python
"""Icon CRUD and file endpoints."""

import re
from typing import Optional

from fastapi import APIRouter, Depends, File, Form, HTTPException, Query, UploadFile
from fastapi.responses import Response

from ..database import insert_icon, update_icon, delete_icon, get_icon
from ..dependencies import get_database, get_storage_backend, require_api_key
from ..models import IconResponse, IconUpdate
from ..services.annotation import annotate_icon as run_annotation
from ..services.embeddings import create_icon_text, generate_embedding
from ..services.search import SearchService

router = APIRouter(prefix="/api/icons", tags=["icons"])

MAX_FILE_SIZE = 5 * 1024 * 1024  # 5MB


def _make_icon_id(set_name: str, category: str, name: str) -> str:
    slug = re.sub(r"[^a-z0-9]+", "_", name.lower()).strip("_")
    cat_slug = re.sub(r"[^a-z0-9]+", "_", category.lower()).strip("_")
    return f"{set_name}_{cat_slug}_{slug}"


@router.get("")
async def list_icons(
    category: Optional[str] = None,
    set: Optional[str] = None,
    limit: int = Query(100, ge=1, le=500),
    offset: int = Query(0, ge=0),
    db=Depends(get_database),
):
    search = SearchService(db)
    return search.list_icons(category, set, limit, offset)


@router.get("/{icon_id}")
async def get_icon_detail(icon_id: str, db=Depends(get_database)):
    search = SearchService(db)
    icon = search.get_icon_by_id(icon_id)
    if not icon:
        raise HTTPException(404, "Icon not found")
    return icon


@router.post("", status_code=202)
async def upload_icon(
    file: UploadFile = File(...),
    category: str = Form(...),
    set_name: str = Form("lingaro_set4"),
    name: Optional[str] = Form(None),
    _auth=Depends(require_api_key),
    db=Depends(get_database),
    storage=Depends(get_storage_backend),
):
    """Upload a new icon. Triggers background annotation."""
    # Validate file type
    if not file.filename.endswith((".svg", ".png")):
        raise HTTPException(400, "Only SVG and PNG files are accepted")

    data = await file.read()
    if len(data) > MAX_FILE_SIZE:
        raise HTTPException(400, f"File too large (max {MAX_FILE_SIZE // 1024 // 1024}MB)")

    icon_name = name or file.filename.rsplit(".", 1)[0]
    icon_id = _make_icon_id(set_name, category, icon_name)

    if get_icon(db, icon_id):
        raise HTTPException(409, f"Icon '{icon_id}' already exists")

    # Store file
    storage_key = f"{set_name}/{category}/{file.filename}"
    storage.save(storage_key, data)

    # Insert with processing status
    insert_icon(db, {
        "id": icon_id,
        "name": icon_name,
        "filename": file.filename,
        "path": storage_key,
        "category": category,
        "set_name": set_name,
        "status": "processing",
    })

    # TODO: In Task 11 we add BackgroundTasks for annotation
    # For now, mark as ready immediately
    update_icon(db, icon_id, status="ready")

    return {"id": icon_id, "status": "processing", "message": "Icon uploaded, annotation in progress"}


@router.patch("/{icon_id}")
async def update_icon_metadata(
    icon_id: str,
    update: IconUpdate,
    _auth=Depends(require_api_key),
    db=Depends(get_database),
):
    icon = get_icon(db, icon_id)
    if not icon:
        raise HTTPException(404, "Icon not found")

    fields = {}
    if update.description is not None:
        fields["description"] = update.description
    if update.tags is not None:
        fields["tags"] = update.tags
    if update.use_cases is not None:
        fields["use_cases"] = update.use_cases

    updated = update_icon(db, icon_id, **fields)
    return updated


@router.delete("/{icon_id}", status_code=204)
async def delete_icon_endpoint(
    icon_id: str,
    _auth=Depends(require_api_key),
    db=Depends(get_database),
    storage=Depends(get_storage_backend),
):
    icon = get_icon(db, icon_id)
    if not icon:
        raise HTTPException(404, "Icon not found")
    storage.delete(icon["path"])
    delete_icon(db, icon_id)


@router.get("/{icon_id}/file")
async def get_icon_file(
    icon_id: str,
    db=Depends(get_database),
    storage=Depends(get_storage_backend),
):
    icon = get_icon(db, icon_id)
    if not icon:
        raise HTTPException(404, "Icon not found")
    data = storage.get(icon["path"])
    if not data:
        raise HTTPException(404, "Icon file not found")
    content_type = "image/svg+xml" if icon["filename"].endswith(".svg") else "image/png"
    return Response(content=data, media_type=content_type)
```

**Step 4: Create categories router**

`api/routers/categories.py`:

```python
"""Category and tag endpoints."""

from typing import Optional

from fastapi import APIRouter, Depends, Query

from ..dependencies import get_database
from ..services.search import SearchService

router = APIRouter(prefix="/api", tags=["categories"])


@router.get("/categories")
async def list_categories(db=Depends(get_database)):
    search = SearchService(db)
    return search.get_categories()


@router.get("/categories/{category}")
async def get_category_icons(
    category: str,
    limit: int = Query(100, ge=1, le=500),
    db=Depends(get_database),
):
    search = SearchService(db)
    return search.list_icons(category=category, limit=limit)


@router.get("/tags")
async def list_tags(
    limit: int = Query(50, ge=1, le=200),
    db=Depends(get_database),
):
    search = SearchService(db)
    return search.get_tags(limit)
```

**Step 5: Create admin router**

`api/routers/admin.py`:

```python
"""Admin endpoints — export, import, re-annotate."""

import json
from pathlib import Path

from fastapi import APIRouter, Depends, HTTPException, UploadFile, File
from fastapi.responses import JSONResponse

from ..database import insert_icon, get_icon, refresh_category_counts
from ..dependencies import get_database, require_api_key
from ..services.search import SearchService

router = APIRouter(prefix="/api/admin", tags=["admin"])


@router.get("/export")
async def export_catalog(db=Depends(get_database)):
    """Export the full catalog as JSON."""
    search = SearchService(db)
    icons = search.list_icons(limit=10000)
    categories = search.get_categories()
    return {
        "icons": icons,
        "categories": [c["name"] for c in categories],
        "meta": {"total_icons": len(icons)},
    }


@router.post("/import")
async def import_catalog(
    file: UploadFile = File(...),
    _auth=Depends(require_api_key),
    db=Depends(get_database),
):
    """Import icons from a JSON file (same format as export)."""
    content = await file.read()
    try:
        data = json.loads(content)
    except json.JSONDecodeError:
        raise HTTPException(400, "Invalid JSON")

    count = 0
    for icon in data.get("icons", []):
        if get_icon(db, icon["id"]):
            continue
        insert_icon(db, {
            "id": icon["id"],
            "name": icon["name"],
            "filename": icon["filename"],
            "path": icon["path"],
            "category": icon.get("category", ""),
            "set_name": icon.get("set", icon.get("set_name", "")),
            "description": icon.get("description"),
            "tags": icon.get("tags", []),
            "use_cases": icon.get("use_cases", []),
            "status": "ready",
        })
        count += 1

    refresh_category_counts(db)
    return {"imported": count}
```

**Step 6: Rewrite api/main.py**

Replace the contents of `api/main.py` with:

```python
"""Lingaro Icons Catalog — FastAPI application."""

import os
from contextlib import asynccontextmanager
from pathlib import Path

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles

from .database import init_db, DEFAULT_DB_PATH
from .models import HealthResponse, CatalogStats
from .dependencies import get_database
from .services.search import SearchService
from .routers import search, icons, categories, admin

BASE_DIR = Path(__file__).parent.parent
STATIC_INDEX = BASE_DIR / "index.html"


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Initialize database on startup."""
    db_path = Path(os.getenv("DATABASE_URL", str(DEFAULT_DB_PATH)))
    init_db(db_path)
    yield


app = FastAPI(
    title="Lingaro Icons Catalog API",
    description="Search, browse, and manage the Lingaro icon library",
    version="2.0.0",
    lifespan=lifespan,
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers
app.include_router(search.router)
app.include_router(icons.router)
app.include_router(categories.router)
app.include_router(admin.router)

# Static files
if (BASE_DIR / "assets").exists():
    app.mount("/assets", StaticFiles(directory=str(BASE_DIR / "assets")), name="assets")
if (BASE_DIR / "icons").exists():
    app.mount("/icons", StaticFiles(directory=str(BASE_DIR / "icons")), name="icons")


@app.get("/", response_class=HTMLResponse)
async def serve_index():
    if STATIC_INDEX.exists():
        return HTMLResponse(content=STATIC_INDEX.read_text(encoding="utf-8"))
    return HTMLResponse(content="<h1>Lingaro Icons Catalog API</h1><p>Visit <a href='/docs'>/docs</a></p>")


@app.get("/api")
async def api_root():
    return {"name": "Lingaro Icons Catalog API", "version": "2.0.0", "docs": "/docs"}


@app.get("/api/health")
async def health_check():
    return HealthResponse(status="ok", version="2.0.0")


@app.get("/api/stats")
async def get_stats(db=Depends(get_database)):
    svc = SearchService(db)
    cats = svc.get_categories()
    return CatalogStats(
        total_icons=svc.count_icons(),
        categories=[c["name"] for c in cats],
        sets=["lingaro_set4"],
        icons_with_embeddings=0,
    )
```

**Step 7: Write API integration tests**

`tests/test_api_search.py`:

```python
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
```

**Step 8: Run all tests**

Run: `python -m pytest tests/ -v`
Expected: all passed

**Step 9: Commit**

```bash
git add api/routers/ api/main.py api/models.py api/dependencies.py tests/test_api_search.py tests/test_api_icons.py
git commit -m "feat: refactor API into modular routers with SQLite backend"
```

---

## Task 11: Background Annotation on Upload

Wire up FastAPI's `BackgroundTasks` so icon uploads trigger annotation + embedding generation.

**Files:**
- Modify: `api/routers/icons.py` (add BackgroundTasks)
- Create: `tests/test_upload.py`

**Step 1: Write test**

`tests/test_upload.py`:

```python
"""Tests for icon upload endpoint."""

import os
from io import BytesIO
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
```

**Step 2: Update icons router to use BackgroundTasks**

In `api/routers/icons.py`, update the upload endpoint to accept `BackgroundTasks`:

```python
from fastapi import BackgroundTasks
# ... existing imports ...
import os
from openai import OpenAI
from ..services.annotation import annotate_icon as run_annotation
from ..services.embeddings import create_icon_text, generate_embedding
from ..database import update_icon as db_update_icon

def _background_annotate(icon_id: str, db_path: str, file_data: bytes, icon_name: str, category: str):
    """Background task: annotate icon and generate embedding."""
    import sqlite3
    from ..database import get_db, update_icon

    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        conn = get_db(Path(db_path))
        update_icon(conn, icon_id, status="ready")
        conn.close()
        return

    client = OpenAI(api_key=api_key)

    # Annotate
    svg_data = file_data if icon_name.endswith(".svg") else None
    metadata = run_annotation(client, icon_name, category, svg_data=svg_data)

    # Update metadata
    conn = get_db(Path(db_path))
    update_icon(conn, icon_id,
        description=metadata.get("description"),
        tags=metadata.get("tags", []),
        use_cases=metadata.get("use_cases", []),
        status="ready",
    )
    conn.close()
```

Then add `background_tasks: BackgroundTasks` to the `upload_icon` endpoint and call:

```python
background_tasks.add_task(
    _background_annotate, icon_id, str(db_path), data, icon_name, category
)
```

**Step 3: Run tests**

Run: `python -m pytest tests/test_upload.py -v`
Expected: all passed

**Step 4: Commit**

```bash
git add api/routers/icons.py tests/test_upload.py
git commit -m "feat: add background annotation on icon upload"
```

---

## Task 12: Update Requirements + .gitignore + Data Directory

**Files:**
- Modify: `requirements.txt`
- Modify: `.gitignore`

**Step 1: Update requirements.txt**

Add new dependencies:

```
# Existing
fastapi>=0.109.0
uvicorn[standard]>=0.27.0
pydantic>=2.5.0
openai>=1.0.0
numpy>=1.24.0
python-dotenv>=1.0.0
gunicorn>=21.0.0

# New
python-multipart>=0.0.6
azure-storage-blob>=12.19.0
sqlite-vec>=0.1.1
cairosvg>=2.7.0
Pillow>=10.0.0
```

**Step 2: Update .gitignore**

Add:

```
# Database
data/catalog.db
data/*.db
```

**Step 3: Create data directory with .gitkeep**

```bash
mkdir -p data
touch data/.gitkeep
```

**Step 4: Install new dependencies**

Run: `uv pip install python-multipart azure-storage-blob sqlite-vec cairosvg Pillow`

**Step 5: Commit**

```bash
git add requirements.txt .gitignore data/.gitkeep
git commit -m "feat: update dependencies and gitignore for SQLite + Blob storage"
```

---

## Task 13: Run Migration + Smoke Test

**Step 1: Run migration**

Run: `python scripts/migrate_to_sqlite.py`
Expected: "Imported 248 icons into SQLite" (or similar count)

**Step 2: Start API and smoke test**

Run: `python run_api.py --reload`

In another terminal:
```bash
curl http://localhost:8000/api/health
curl http://localhost:8000/api/stats
curl "http://localhost:8000/api/search?q=cloud&semantic=false"
curl http://localhost:8000/api/icons?limit=5
curl http://localhost:8000/api/categories
```

Verify all return valid JSON responses.

**Step 3: Run full test suite**

Run: `python -m pytest tests/ -v`
Expected: all passed

**Step 4: Commit**

```bash
git commit -m "chore: verify migration and API smoke tests pass"
```

---

## Task 14: TypeScript API Client — `@lingaro/icons-client`

**Files:**
- Create: `packages/icons-client/package.json`
- Create: `packages/icons-client/tsconfig.json`
- Create: `packages/icons-client/src/client.ts`
- Create: `packages/icons-client/src/types.ts`
- Create: `packages/icons-client/src/react.ts`
- Create: `packages/icons-client/src/index.ts`
- Create: `packages/icons-client/README.md`

**Step 1: Create package scaffolding**

`packages/icons-client/package.json`:

```json
{
  "name": "@lingaro/icons-client",
  "version": "1.0.0",
  "description": "TypeScript client for the Lingaro Icons Catalog API",
  "main": "dist/index.js",
  "module": "dist/index.mjs",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./react": {
      "import": "./dist/react.mjs",
      "require": "./dist/react.js",
      "types": "./dist/react.d.ts"
    }
  },
  "scripts": {
    "build": "tsup src/index.ts src/react.ts --format cjs,esm --dts",
    "dev": "tsup src/index.ts src/react.ts --format cjs,esm --dts --watch"
  },
  "peerDependencies": {
    "react": ">=18.0.0"
  },
  "peerDependenciesMeta": {
    "react": { "optional": true }
  },
  "devDependencies": {
    "tsup": "^8.0.0",
    "typescript": "^5.3.0",
    "@types/react": "^18.0.0"
  },
  "files": ["dist"],
  "license": "MIT"
}
```

**Step 2: Create types**

`packages/icons-client/src/types.ts`:

```typescript
export interface Icon {
  id: string;
  name: string;
  filename: string;
  path: string;
  category: string;
  set: string;
  description?: string;
  tags: string[];
  use_cases: string[];
  score?: number;
}

export interface SearchResponse {
  query: string;
  total: number;
  icons: Icon[];
  semantic_search: boolean;
}

export interface SearchOptions {
  category?: string;
  set?: string;
  limit?: number;
  semantic?: boolean;
}

export interface ClientConfig {
  baseUrl: string;
  apiKey?: string;
}
```

**Step 3: Create client**

`packages/icons-client/src/client.ts`:

```typescript
import type { Icon, SearchResponse, SearchOptions, ClientConfig } from "./types";

export class IconsClient {
  private baseUrl: string;
  private apiKey?: string;

  constructor(config: ClientConfig) {
    this.baseUrl = config.baseUrl.replace(/\/$/, "");
    this.apiKey = config.apiKey;
  }

  private headers(): Record<string, string> {
    const h: Record<string, string> = { "Content-Type": "application/json" };
    if (this.apiKey) h["X-API-Key"] = this.apiKey;
    return h;
  }

  async search(query: string, options: SearchOptions = {}): Promise<SearchResponse> {
    const params = new URLSearchParams({ q: query });
    if (options.category) params.set("category", options.category);
    if (options.set) params.set("set", options.set);
    if (options.limit) params.set("limit", String(options.limit));
    if (options.semantic !== undefined) params.set("semantic", String(options.semantic));

    const res = await fetch(`${this.baseUrl}/search?${params}`);
    if (!res.ok) throw new Error(`Search failed: ${res.status}`);
    return res.json();
  }

  async getIcon(id: string): Promise<Icon> {
    const res = await fetch(`${this.baseUrl}/icons/${id}`);
    if (!res.ok) throw new Error(`Icon not found: ${res.status}`);
    return res.json();
  }

  async getIconSvg(id: string): Promise<string> {
    const res = await fetch(`${this.baseUrl}/icons/${id}/file`);
    if (!res.ok) throw new Error(`Icon file not found: ${res.status}`);
    return res.text();
  }

  async getIconBlob(id: string): Promise<Blob> {
    const res = await fetch(`${this.baseUrl}/icons/${id}/file`);
    if (!res.ok) throw new Error(`Icon file not found: ${res.status}`);
    return res.blob();
  }

  async listIcons(options: { category?: string; set?: string; limit?: number; offset?: number } = {}): Promise<Icon[]> {
    const params = new URLSearchParams();
    if (options.category) params.set("category", options.category);
    if (options.set) params.set("set", options.set);
    if (options.limit) params.set("limit", String(options.limit));
    if (options.offset) params.set("offset", String(options.offset));

    const res = await fetch(`${this.baseUrl}/icons?${params}`);
    if (!res.ok) throw new Error(`List failed: ${res.status}`);
    return res.json();
  }

  async getCategories(): Promise<{ name: string; count: number }[]> {
    const res = await fetch(`${this.baseUrl}/categories`);
    if (!res.ok) throw new Error(`Categories failed: ${res.status}`);
    return res.json();
  }
}
```

**Step 4: Create React hooks**

`packages/icons-client/src/react.ts`:

```typescript
import { useState, useEffect, useCallback } from "react";
import { IconsClient } from "./client";
import type { Icon, SearchResponse, SearchOptions, ClientConfig } from "./types";

export { IconsClient } from "./client";
export type { Icon, SearchResponse, SearchOptions, ClientConfig } from "./types";

export function useIconsClient(config: ClientConfig): IconsClient {
  return new IconsClient(config);
}

export function useIconSearch(
  client: IconsClient,
  query: string,
  options: SearchOptions = {}
) {
  const [icons, setIcons] = useState<Icon[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!query || query.length < 1) {
      setIcons([]);
      setTotal(0);
      return;
    }
    let cancelled = false;
    setLoading(true);
    setError(null);

    client.search(query, options).then((res) => {
      if (!cancelled) {
        setIcons(res.icons);
        setTotal(res.total);
        setLoading(false);
      }
    }).catch((err) => {
      if (!cancelled) {
        setError(err);
        setLoading(false);
      }
    });

    return () => { cancelled = true; };
  }, [query, options.category, options.set, options.limit, options.semantic]);

  return { icons, loading, error, total };
}

export function useIcon(client: IconsClient, id: string) {
  const [icon, setIcon] = useState<Icon | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!id) return;
    let cancelled = false;
    setLoading(true);
    client.getIcon(id).then((data) => {
      if (!cancelled) { setIcon(data); setLoading(false); }
    }).catch((err) => {
      if (!cancelled) { setError(err); setLoading(false); }
    });
    return () => { cancelled = true; };
  }, [id]);

  return { icon, loading, error };
}
```

**Step 5: Create index export**

`packages/icons-client/src/index.ts`:

```typescript
export { IconsClient } from "./client";
export type { Icon, SearchResponse, SearchOptions, ClientConfig } from "./types";
```

**Step 6: Create tsconfig**

`packages/icons-client/tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "lib": ["ES2020", "DOM"],
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "declaration": true,
    "outDir": "dist",
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
```

**Step 7: Install and build**

```bash
cd packages/icons-client && pnpm install && pnpm build
```

**Step 8: Commit**

```bash
git add packages/icons-client/
git commit -m "feat: add @lingaro/icons-client TypeScript API client with React hooks"
```

---

## Task 15: Static Icons Package — `@lingaro/icons`

**Files:**
- Create: `packages/icons/package.json`
- Create: `packages/icons/tsconfig.json`
- Create: `packages/icons/scripts/build.ts`
- Create: `packages/icons/src/index.ts` (generated)
- Create: `packages/icons/src/react.tsx` (generated)
- Create: `packages/icons/README.md`

**Step 1: Create package.json**

`packages/icons/package.json`:

```json
{
  "name": "@lingaro/icons",
  "version": "1.0.0",
  "description": "Lingaro icon library — SVG strings and React components",
  "main": "dist/index.js",
  "module": "dist/index.mjs",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./react": {
      "import": "./dist/react.mjs",
      "require": "./dist/react.js",
      "types": "./dist/react.d.ts"
    },
    "./metadata": "./dist/metadata.json"
  },
  "scripts": {
    "generate": "tsx scripts/build.ts",
    "build": "tsx scripts/build.ts && tsup src/index.ts src/react.tsx --format cjs,esm --dts"
  },
  "peerDependencies": {
    "react": ">=18.0.0"
  },
  "peerDependenciesMeta": {
    "react": { "optional": true }
  },
  "devDependencies": {
    "tsup": "^8.0.0",
    "tsx": "^4.0.0",
    "typescript": "^5.3.0",
    "@types/react": "^18.0.0"
  },
  "files": ["dist"],
  "license": "MIT"
}
```

**Step 2: Create build script**

`packages/icons/scripts/build.ts`:

```typescript
/**
 * Generate index.ts and react.tsx from the icons catalog API export.
 * Usage: tsx scripts/build.ts [--api-url http://localhost:8000/api]
 */

import * as fs from "fs";
import * as path from "path";

const API_URL = process.argv.includes("--api-url")
  ? process.argv[process.argv.indexOf("--api-url") + 1]
  : "http://localhost:8000/api";

function toExportName(name: string): string {
  // "Data Analysis Charts" -> "DataAnalysisCharts"
  return name
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join("");
}

async function main() {
  console.log(`Fetching icons from ${API_URL}/admin/export...`);
  const res = await fetch(`${API_URL}/admin/export`);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  const data = await res.json();
  const icons: any[] = data.icons;

  const srcDir = path.join(__dirname, "..", "src");
  const distDir = path.join(__dirname, "..", "dist");
  fs.mkdirSync(srcDir, { recursive: true });
  fs.mkdirSync(distDir, { recursive: true });

  // Fetch SVG content for each icon
  const svgExports: string[] = [];
  const reactExports: string[] = [];
  const metadata: any[] = [];
  const seenNames = new Set<string>();

  for (const icon of icons) {
    if (!icon.filename.endsWith(".svg")) continue;

    let exportName = toExportName(icon.name);
    if (seenNames.has(exportName)) {
      exportName += toExportName(icon.category);
    }
    seenNames.add(exportName);

    // Fetch SVG
    const svgRes = await fetch(`${API_URL}/icons/${icon.id}/file`);
    if (!svgRes.ok) continue;
    const svg = await svgRes.text();
    const escaped = svg.replace(/`/g, "\\`").replace(/\$/g, "\\$");

    svgExports.push(`export const ${exportName} = \`${escaped}\`;`);
    reactExports.push(
      `export const ${exportName}Icon: React.FC<IconProps> = ({ size = 24, color, className, ...props }) => (
  <span
    className={className}
    style={{ display: 'inline-flex', width: size, height: size }}
    dangerouslySetInnerHTML={{ __html: ${exportName}.replace(/fill="[^"]*"/g, color ? \`fill="\${color}"\` : '$&') }}
    {...props}
  />
);`
    );
    metadata.push({ name: icon.name, exportName, id: icon.id, category: icon.category, tags: icon.tags });
  }

  // Write index.ts
  fs.writeFileSync(
    path.join(srcDir, "index.ts"),
    svgExports.join("\n\n") + "\n"
  );

  // Write react.tsx
  const reactContent = `import React from "react";
import { ${Array.from(seenNames).join(", ")} } from "./index";

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: number;
  color?: string;
}

${reactExports.join("\n\n")}
`;
  fs.writeFileSync(path.join(srcDir, "react.tsx"), reactContent);

  // Write metadata
  fs.writeFileSync(path.join(distDir, "metadata.json"), JSON.stringify(metadata, null, 2));

  console.log(`Generated ${svgExports.length} icon exports`);
}

main().catch(console.error);
```

**Step 3: Create tsconfig.json**

`packages/icons/tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "lib": ["ES2020", "DOM"],
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "declaration": true,
    "outDir": "dist",
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
```

**Step 4: Commit**

```bash
git add packages/icons/
git commit -m "feat: add @lingaro/icons static SVG package with React components"
```

---

## Task 16: Update Deployment Script

**Files:**
- Modify: `deploy-azure.ps1`

Update to include the new `data/` directory and `api/services/` and `api/routers/` in the deployment ZIP. Add SQLite migration to the startup sequence.

In `startup.txt`, add:
```
python -c "from scripts.migrate_to_sqlite import main; main()" && gunicorn api.main:app ...
```

**Commit:**

```bash
git add deploy-azure.ps1 startup.txt
git commit -m "feat: update Azure deployment to include SQLite migration on startup"
```

---

## Task 17: End-to-End Verification

**Step 1: Run full test suite**

Run: `python -m pytest tests/ -v --tb=short`
Expected: all passed

**Step 2: Start API and test all new endpoints**

```bash
python scripts/migrate_to_sqlite.py
python run_api.py --reload
```

Test:
- `GET /api/search?q=cloud` — semantic search
- `GET /api/icons` — list
- `GET /api/icons/{id}` — detail
- `POST /api/icons` — upload (with curl multipart)
- `PATCH /api/icons/{id}` — update
- `GET /api/categories` — categories
- `GET /api/tags` — tags
- `GET /api/admin/export` — export

**Step 3: Build TS packages**

```bash
cd packages/icons-client && pnpm install && pnpm build
cd packages/icons && pnpm install && pnpm run generate && pnpm build
```

**Step 4: Final commit**

```bash
git add -A
git commit -m "chore: end-to-end verification complete"
```

---

## Summary

| Task | Component | Est. Complexity |
|------|-----------|----------------|
| 1 | Test infrastructure | Small |
| 2 | Database schema + connection | Small |
| 3 | Database CRUD operations | Medium |
| 4 | Storage abstraction (local + Azure) | Medium |
| 5 | Annotation service | Medium |
| 6 | Embeddings service | Small |
| 7 | Search service (SQLite-backed) | Large |
| 8 | Migration script | Small |
| 9 | Auth dependency | Small |
| 10 | API router refactor | Large |
| 11 | Background annotation on upload | Medium |
| 12 | Requirements + gitignore | Small |
| 13 | Run migration + smoke test | Small |
| 14 | @lingaro/icons-client TS package | Medium |
| 15 | @lingaro/icons static package | Medium |
| 16 | Deployment update | Small |
| 17 | End-to-end verification | Small |

**Dependency order:** 1 → 2 → 3 → (4, 5, 6 in parallel) → 7 → 8 → 9 → 10 → 11 → 12 → 13 → (14, 15 in parallel) → 16 → 17
