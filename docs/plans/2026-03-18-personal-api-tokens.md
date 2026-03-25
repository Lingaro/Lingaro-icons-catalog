# Personal API Tokens (PAT) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Allow each Azure AD authenticated user to generate a personal API token via the web UI, usable with the CLI via `LINGARO_API_KEY`.

**Architecture:** New `personal_tokens` SQLite table stores hashed tokens. `_resolve_user()` in `api/dependencies.py` gains a PAT lookup branch after the global key check. A new `api/routers/tokens.py` exposes GET/POST/DELETE `/api/tokens/me` protected by a new `require_bearer_auth` dependency. The web UI gains a "My Token" panel in the header.

**Tech Stack:** Python 3.11, FastAPI, SQLite, Pydantic v2, pytest, plain JS (no new dependencies)

---

## Files Changed

| File | Change |
|------|--------|
| `api/services/token_utils.py` | **Create** — `generate_token`, `hash_token`, `verify_token`, `make_expires_at`, `is_expired` |
| `api/database.py` | **Modify** — add `personal_tokens` table + hash index to `DB_SCHEMA` |
| `api/auth.py` | **Modify** — add `auth_method: str = "bearer"` field to `CurrentUser` |
| `api/dependencies.py` | **Modify** — update `_validate_api_key` (timing-safe), `_resolve_user` (PAT lookup), add `require_bearer_auth` |
| `api/routers/tokens.py` | **Create** — GET/POST/DELETE `/api/tokens/me` |
| `api/main.py` | **Modify** — import and mount tokens router |
| `index.html` | **Modify** — add "My Token" panel HTML |
| `assets/js/search.js` | **Modify** — add token management JS (fetch, render, copy) |
| `tests/test_token_utils.py` | **Create** — unit tests for token utilities |
| `tests/test_tokens.py` | **Create** — integration tests for token endpoints + auth flow |
| `tests/test_dependencies.py` | **Modify** — add tests for PAT auth path and `require_bearer_auth` |

---

### Task 1: Token utilities + DB schema

**Files:**
- Create: `api/services/token_utils.py`
- Modify: `api/database.py`
- Create: `tests/test_token_utils.py`

- [ ] **Step 1: Write failing unit tests**

Create `tests/test_token_utils.py`:

```python
"""Unit tests for token utilities."""

import pytest
from datetime import datetime, timezone, timedelta


class TestGenerateToken:
    def test_token_has_lingaro_prefix(self):
        from api.services.token_utils import generate_token
        token = generate_token()
        assert token.startswith("lingaro_")

    def test_token_is_72_chars(self):
        from api.services.token_utils import generate_token
        token = generate_token()
        assert len(token) == 72  # "lingaro_" (8) + 64 hex chars

    def test_tokens_are_unique(self):
        from api.services.token_utils import generate_token
        assert generate_token() != generate_token()


class TestHashToken:
    def test_hash_is_deterministic(self):
        from api.services.token_utils import hash_token
        assert hash_token("lingaro_abc") == hash_token("lingaro_abc")

    def test_hash_is_hex_string(self):
        from api.services.token_utils import hash_token
        h = hash_token("lingaro_abc")
        assert len(h) == 64
        int(h, 16)  # raises ValueError if not valid hex

    def test_different_inputs_produce_different_hashes(self):
        from api.services.token_utils import hash_token
        assert hash_token("lingaro_abc") != hash_token("lingaro_xyz")


class TestVerifyToken:
    def test_correct_token_verifies(self):
        from api.services.token_utils import hash_token, verify_token
        raw = "lingaro_abc123"
        h = hash_token(raw)
        assert verify_token(raw, h) is True

    def test_wrong_token_fails(self):
        from api.services.token_utils import hash_token, verify_token
        h = hash_token("lingaro_correct")
        assert verify_token("lingaro_wrong", h) is False


class TestExpiry:
    def test_future_date_not_expired(self):
        from api.services.token_utils import is_expired
        future = datetime.now(timezone.utc) + timedelta(days=1)
        assert is_expired(future) is False

    def test_past_date_is_expired(self):
        from api.services.token_utils import is_expired
        past = datetime.now(timezone.utc) - timedelta(seconds=1)
        assert is_expired(past) is True

    def test_make_expires_at_adds_correct_days(self):
        from api.services.token_utils import make_expires_at
        now = datetime.now(timezone.utc)
        expires = make_expires_at(30)
        delta = expires - now
        assert 29 <= delta.days <= 30
```

- [ ] **Step 2: Run tests to confirm they fail**

```bash
cd C:\Users\piotr.palka\workspace\lingaro\Lingaro-icons-catalog
.venv/Scripts/pytest tests/test_token_utils.py -v 2>&1 | head -30
```

Expected: `ModuleNotFoundError: No module named 'api.services.token_utils'`

- [ ] **Step 3: Create `api/services/token_utils.py`**

```python
"""Token generation, hashing, and expiry utilities for Personal API Tokens."""

import hashlib
import hmac
import secrets
from datetime import datetime, timezone, timedelta


def generate_token() -> str:
    """Generate a new raw PAT. Format: 'lingaro_' + 32 random bytes as hex (72 chars total)."""
    return "lingaro_" + secrets.token_hex(32)


def hash_token(raw: str) -> str:
    """SHA-256 hash of a raw token, returned as a hex string."""
    return hashlib.sha256(raw.encode()).hexdigest()


def verify_token(raw: str, stored_hash: str) -> bool:
    """Constant-time comparison of a raw token against a stored hash."""
    return hmac.compare_digest(hash_token(raw), stored_hash)


def make_expires_at(days: int) -> datetime:
    """Return a UTC datetime `days` from now."""
    return datetime.now(timezone.utc) + timedelta(days=days)


def is_expired(expires_at: datetime) -> bool:
    """Return True if expires_at (UTC) is in the past."""
    if expires_at.tzinfo is None:
        expires_at = expires_at.replace(tzinfo=timezone.utc)
    return datetime.now(timezone.utc) > expires_at
```

- [ ] **Step 4: Run tests to confirm they pass**

```bash
.venv/Scripts/pytest tests/test_token_utils.py -v
```

Expected: all 12 tests PASS.

- [ ] **Step 5: Add `personal_tokens` table to `api/database.py`**

In `api/database.py`, append to the `DB_SCHEMA` string (before the closing `"""`):

```python
CREATE TABLE IF NOT EXISTS personal_tokens (
    id TEXT PRIMARY KEY,
    user_email TEXT NOT NULL UNIQUE,
    token_hash TEXT NOT NULL,
    name TEXT NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_personal_tokens_hash ON personal_tokens(token_hash);
```

- [ ] **Step 6: Verify schema is valid**

```bash
python -c "from api.database import DB_SCHEMA; print('OK')"
```

Expected: `OK`

- [ ] **Step 7: Commit**

```bash
git add api/services/token_utils.py api/database.py tests/test_token_utils.py
git commit -m "feat(pat): add token utilities and personal_tokens DB schema"
```

---

### Task 2: Add `auth_method` to `CurrentUser`

**Files:**
- Modify: `api/auth.py` (line 11-15)
- Modify: `tests/test_dependencies.py` (add new tests)

- [ ] **Step 1: Add `auth_method` field to `CurrentUser`**

In `api/auth.py`, update the `CurrentUser` dataclass from:

```python
@dataclass
class CurrentUser:
    email: str
    name: str
    is_admin: bool = False
```

To:

```python
@dataclass
class CurrentUser:
    email: str
    name: str
    is_admin: bool = False
    auth_method: str = "bearer"  # "bearer" | "api_key" | "pat"
```

- [ ] **Step 2: Verify existing tests still pass**

```bash
.venv/Scripts/pytest tests/test_auth.py tests/test_dependencies.py -v
```

Expected: all existing tests PASS. (Adding a field with a default does not break existing instantiations.)

- [ ] **Step 3: Commit**

```bash
git add api/auth.py
git commit -m "feat(pat): add auth_method field to CurrentUser"
```

---

### Task 3: Update auth dependencies for PAT lookup

**Files:**
- Modify: `api/dependencies.py`
- Modify: `tests/test_dependencies.py`

- [ ] **Step 1: Write new failing tests**

Append to `tests/test_dependencies.py`:

```python
class TestPATAuth:
    def test_valid_pat_resolves_user(self, tmp_path):
        """A valid, non-expired PAT in X-API-Key resolves to the token owner."""
        from api.services.token_utils import generate_token, hash_token, make_expires_at
        from api.dependencies import _resolve_user
        import sqlite3
        from api.database import DB_SCHEMA

        # Create a temp DB with a PAT
        db_path = tmp_path / "test.db"
        conn = sqlite3.connect(str(db_path))
        conn.executescript(DB_SCHEMA)
        raw = generate_token()
        conn.execute(
            "INSERT INTO personal_tokens (id, user_email, token_hash, name, expires_at, created_at) "
            "VALUES (?, ?, ?, ?, ?, ?)",
            ("test-id", "alice@example.com", hash_token(raw), "CLI",
             make_expires_at(30).isoformat(), "2026-01-01T00:00:00")
        )
        conn.commit()
        conn.close()

        with patch.dict(os.environ, {"AZURE_CLIENT_ID": "cid", "DATABASE_URL": str(db_path)}):
            user = _resolve_user(authorization=None, x_api_key=raw)
        assert user.email == "alice@example.com"
        assert user.auth_method == "pat"
        assert user.is_admin is False

    def test_expired_pat_raises_401(self, tmp_path):
        """An expired PAT returns 401 with 'Token expired'."""
        from api.services.token_utils import generate_token, hash_token
        from api.dependencies import _resolve_user
        import sqlite3
        from api.database import DB_SCHEMA
        from datetime import datetime, timezone, timedelta

        db_path = tmp_path / "test.db"
        conn = sqlite3.connect(str(db_path))
        conn.executescript(DB_SCHEMA)
        raw = generate_token()
        past = (datetime.now(timezone.utc) - timedelta(days=1)).isoformat()
        conn.execute(
            "INSERT INTO personal_tokens (id, user_email, token_hash, name, expires_at, created_at) "
            "VALUES (?, ?, ?, ?, ?, ?)",
            ("test-id", "alice@example.com", hash_token(raw), "CLI", past, "2026-01-01T00:00:00")
        )
        conn.commit()
        conn.close()

        with patch.dict(os.environ, {"AZURE_CLIENT_ID": "cid", "DATABASE_URL": str(db_path)}):
            with pytest.raises(HTTPException) as exc_info:
                _resolve_user(authorization=None, x_api_key=raw)
        assert exc_info.value.status_code == 401
        assert "expired" in exc_info.value.detail.lower()

    def test_unknown_key_raises_401(self):
        """An unknown X-API-Key value returns 401."""
        from api.dependencies import _resolve_user

        with patch.dict(os.environ, {"AZURE_CLIENT_ID": "cid"}):
            with pytest.raises(HTTPException) as exc_info:
                _resolve_user(authorization=None, x_api_key="lingaro_unknowntoken000")
        assert exc_info.value.status_code == 401


class TestRequireBearerAuth:
    def test_bearer_user_passes(self):
        from api.dependencies import require_bearer_auth
        from api.auth import CurrentUser

        user = CurrentUser(email="user@example.com", name="User", auth_method="bearer")
        result = require_bearer_auth(user)
        assert result.email == "user@example.com"

    def test_pat_user_raises_401(self):
        from api.dependencies import require_bearer_auth
        from api.auth import CurrentUser

        user = CurrentUser(email="user@example.com", name="User", auth_method="pat")
        with pytest.raises(HTTPException) as exc_info:
            require_bearer_auth(user)
        assert exc_info.value.status_code == 401

    def test_api_key_user_raises_401(self):
        from api.dependencies import require_bearer_auth
        from api.auth import CurrentUser

        user = CurrentUser(email="api-key-user", name="API Key", auth_method="api_key")
        with pytest.raises(HTTPException) as exc_info:
            require_bearer_auth(user)
        assert exc_info.value.status_code == 401


class TestGlobalApiKeyTimingSafe:
    def test_valid_global_key_resolves_admin(self):
        """Global API_KEY uses hmac.compare_digest (timing-safe) and returns admin user."""
        from api.dependencies import _resolve_user

        with patch.dict(os.environ, {"AZURE_CLIENT_ID": "cid", "API_KEY": "secret123"}):
            user = _resolve_user(authorization=None, x_api_key="secret123")
        assert user.email == "api-key-user"
        assert user.is_admin is True
        assert user.auth_method == "api_key"

    def test_wrong_global_key_falls_through_to_pat_lookup(self):
        """Wrong global key does not short-circuit — it tries PAT lookup, which returns 401 for unknown token."""
        from api.dependencies import _resolve_user

        with patch.dict(os.environ, {"AZURE_CLIENT_ID": "cid", "API_KEY": "correct_key"}):
            with pytest.raises(HTTPException) as exc_info:
                _resolve_user(authorization=None, x_api_key="wrong_key")
        assert exc_info.value.status_code == 401
```

- [ ] **Step 2: Run to confirm they fail**

```bash
.venv/Scripts/pytest tests/test_dependencies.py::TestPATAuth tests/test_dependencies.py::TestRequireBearerAuth -v
```

Expected: FAIL (functions not yet updated)

- [ ] **Step 3: Update `api/dependencies.py`**

Replace the entire file content with:

```python
"""FastAPI dependencies for auth, DB connections, storage."""

import hmac
import os
import sqlite3
from datetime import datetime, timezone
from pathlib import Path
from typing import Optional

from fastapi import Header, HTTPException, Depends

from .auth import AzureADTokenValidator, CurrentUser
from .database import get_db, init_db, DEFAULT_DB_PATH
from .services.storage import get_storage, StorageBackend
from .services.token_utils import hash_token, is_expired

_validator: Optional[AzureADTokenValidator] = None


def _get_validator() -> Optional[AzureADTokenValidator]:
    global _validator
    client_id = os.getenv("AZURE_CLIENT_ID")
    tenant_id = os.getenv("AZURE_TENANT_ID")
    if not client_id or not tenant_id:
        return None
    if _validator is None:
        _validator = AzureADTokenValidator(tenant_id=tenant_id, client_id=client_id)
    return _validator


def _validate_bearer_token(authorization: str) -> CurrentUser:
    validator = _get_validator()
    if validator is None:
        raise HTTPException(status_code=500, detail="Auth not configured")
    if not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Invalid authorization header")
    token = authorization[7:]
    try:
        user = validator.validate_token(token)
        user.auth_method = "bearer"
        return user
    except Exception as e:
        raise HTTPException(status_code=401, detail=f"Invalid token: {e}")


def _validate_api_key(x_api_key: str) -> Optional[CurrentUser]:
    """Check against the global API_KEY env var using constant-time comparison."""
    expected = os.getenv("API_KEY")
    if expected and hmac.compare_digest(x_api_key, expected):
        return CurrentUser(email="api-key-user", name="API Key", is_admin=True, auth_method="api_key")
    return None


def _lookup_pat_user(raw_token: str) -> Optional[CurrentUser]:
    """Look up a PAT in the database. Raises 401 if expired. Returns None if not found."""
    token_hash = hash_token(raw_token)
    db_path = Path(os.getenv("DATABASE_URL", str(DEFAULT_DB_PATH)))
    conn = get_db(db_path)
    try:
        row = conn.execute(
            "SELECT user_email, expires_at FROM personal_tokens WHERE token_hash = ?",
            (token_hash,)
        ).fetchone()
    finally:
        conn.close()

    if not row:
        return None

    expires_at = datetime.fromisoformat(row["expires_at"])
    if expires_at.tzinfo is None:
        expires_at = expires_at.replace(tzinfo=timezone.utc)
    if is_expired(expires_at):
        raise HTTPException(status_code=401, detail="Token expired")

    return CurrentUser(
        email=row["user_email"],
        name=row["user_email"],
        is_admin=False,
        auth_method="pat",
    )


def _resolve_user(
    authorization: Optional[str] = Header(None),
    x_api_key: Optional[str] = Header(None),
) -> CurrentUser:
    if not os.getenv("AZURE_CLIENT_ID") and not os.getenv("API_KEY"):
        return CurrentUser(email="dev-mode", name="Developer", is_admin=True, auth_method="api_key")

    if x_api_key:
        # Try global API key first
        user = _validate_api_key(x_api_key)
        if user:
            return user
        # Try personal token lookup
        pat_user = _lookup_pat_user(x_api_key)
        if pat_user:
            return pat_user
        raise HTTPException(status_code=401, detail="Invalid token")

    if authorization:
        return _validate_bearer_token(authorization)

    raise HTTPException(status_code=401, detail="Authentication required")


def _check_admin(user: CurrentUser) -> CurrentUser:
    admin_emails_str = os.getenv("ADMIN_EMAILS", "")
    admin_emails = [e.strip().lower() for e in admin_emails_str.split(",") if e.strip()]
    if user.email.lower() in admin_emails:
        user.is_admin = True
        return user
    if user.email == "api-key-user":
        return user
    if user.email == "dev-mode":
        return user
    raise HTTPException(status_code=403, detail="Admin access required")


def require_auth(
    authorization: Optional[str] = Header(None),
    x_api_key: Optional[str] = Header(None),
) -> CurrentUser:
    return _resolve_user(authorization, x_api_key)


def require_bearer_auth(user: CurrentUser = Depends(require_auth)) -> CurrentUser:
    """Require Azure AD Bearer token. Rejects PATs and API keys."""
    if user.auth_method != "bearer":
        raise HTTPException(status_code=401, detail="Bearer authentication required")
    return user


def require_admin(user: CurrentUser = Depends(require_auth)) -> CurrentUser:
    return _check_admin(user)


def require_api_key(x_api_key: Optional[str] = Header(None)) -> bool:
    """Deprecated: use require_admin instead."""
    expected = os.getenv("API_KEY")
    if not expected:
        return True
    if not x_api_key or not hmac.compare_digest(x_api_key, expected):
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

- [ ] **Step 4: Run all dependency tests**

```bash
.venv/Scripts/pytest tests/test_dependencies.py -v
```

Expected: all tests PASS (including existing ones + new PAT and bearer tests).

- [ ] **Step 5: Commit**

```bash
git add api/dependencies.py tests/test_dependencies.py
git commit -m "feat(pat): update auth dependencies with PAT lookup and require_bearer_auth"
```

---

### Task 4: Token router + mount in main

**Files:**
- Create: `api/routers/tokens.py`
- Modify: `api/main.py` (line 20, line 79)
- Create: `tests/test_tokens.py`

- [ ] **Step 1: Write failing integration tests**

Create `tests/test_tokens.py`:

```python
"""Integration tests for Personal API Token endpoints."""

import os
import sqlite3
import tempfile
from datetime import datetime, timezone, timedelta
from pathlib import Path
from unittest.mock import patch

import pytest
from fastapi.testclient import TestClient


@pytest.fixture
def db_path(tmp_path):
    return tmp_path / "test_tokens.db"


@pytest.fixture
def app_client(db_path):
    """TestClient with a fresh in-memory DB and no Azure AD configured (dev mode)."""
    from api.database import init_db
    init_db(db_path)

    # Override DATABASE_URL to point to temp DB; clear auth env so dev mode activates
    env = {k: v for k, v in os.environ.items() if k not in ("AZURE_CLIENT_ID", "AZURE_TENANT_ID", "API_KEY")}
    env["DATABASE_URL"] = str(db_path)

    with patch.dict(os.environ, env, clear=True):
        from api.main import app
        with TestClient(app) as client:
            yield client


@pytest.fixture
def bearer_client(db_path):
    """TestClient that simulates a Bearer-authenticated user (mock Azure AD)."""
    from api.database import init_db
    from api.auth import CurrentUser
    init_db(db_path)

    env = {k: v for k, v in os.environ.items() if k not in ("AZURE_CLIENT_ID", "AZURE_TENANT_ID", "API_KEY")}
    env["DATABASE_URL"] = str(db_path)
    env["AZURE_CLIENT_ID"] = "test-client-id"

    mock_user = CurrentUser(email="alice@example.com", name="Alice", auth_method="bearer")

    with patch.dict(os.environ, env, clear=True):
        from api.main import app
        from api import dependencies
        # Override require_bearer_auth to return the mock user
        app.dependency_overrides[dependencies.require_bearer_auth] = lambda: mock_user
        with TestClient(app) as client:
            yield client
        app.dependency_overrides.clear()


class TestGetMyToken:
    def test_no_token_returns_404(self, bearer_client):
        resp = bearer_client.get("/api/tokens/me")
        assert resp.status_code == 404

    def test_returns_token_info_after_creation(self, bearer_client):
        bearer_client.post("/api/tokens/me", json={"expires_days": 30, "name": "Test"})
        resp = bearer_client.get("/api/tokens/me")
        assert resp.status_code == 200
        data = resp.json()
        assert data["name"] == "Test"
        assert data["expired"] is False
        assert "expires_at" in data
        assert "created_at" in data

    def test_expired_token_returns_200_with_expired_true(self, bearer_client, db_path):
        """GET /api/tokens/me returns 200 with expired=True when the token is expired (spec: metadata is still readable)."""
        from api.database import get_db
        from api.services.token_utils import generate_token, hash_token
        # Insert an expired token directly for alice@example.com (the mocked bearer user)
        past = (datetime.now(timezone.utc) - timedelta(days=1)).isoformat()
        conn = get_db(db_path)
        conn.execute(
            "INSERT OR REPLACE INTO personal_tokens (id, user_email, token_hash, name, expires_at, created_at) "
            "VALUES (?, ?, ?, ?, ?, ?)",
            ("exp-id", "alice@example.com", hash_token(generate_token()), "Old CLI",
             past, "2026-01-01T00:00:00")
        )
        conn.commit()
        conn.close()
        resp = bearer_client.get("/api/tokens/me")
        assert resp.status_code == 200
        data = resp.json()
        assert data["expired"] is True


class TestCreateMyToken:
    def test_create_returns_token_once(self, bearer_client):
        resp = bearer_client.post("/api/tokens/me", json={"expires_days": 30, "name": "CLI"})
        assert resp.status_code == 201
        data = resp.json()
        assert data["token"].startswith("lingaro_")
        assert len(data["token"]) == 72
        assert "warning" in data
        assert "expires_at" in data

    def test_invalid_expires_days_returns_422(self, bearer_client):
        resp = bearer_client.post("/api/tokens/me", json={"expires_days": 45, "name": "CLI"})
        assert resp.status_code == 422

    def test_empty_name_returns_422(self, bearer_client):
        resp = bearer_client.post("/api/tokens/me", json={"expires_days": 30, "name": ""})
        assert resp.status_code == 422

    def test_replacing_token_invalidates_old_and_new_works(self, bearer_client, db_path):
        # Create first token
        resp1 = bearer_client.post("/api/tokens/me", json={"expires_days": 30, "name": "Old"})
        old_token = resp1.json()["token"]

        # Replace with new token
        resp2 = bearer_client.post("/api/tokens/me", json={"expires_days": 60, "name": "New"})
        new_token = resp2.json()["token"]

        env = {k: v for k, v in os.environ.items()}
        env["DATABASE_URL"] = str(db_path)
        env["AZURE_CLIENT_ID"] = "test-client-id"
        with patch.dict(os.environ, env, clear=True):
            from api.main import app
            with TestClient(app) as client:
                # Old token should no longer work
                resp = client.get("/api/search?q=test", headers={"X-API-Key": old_token})
                assert resp.status_code == 401
                # New token should work
                resp = client.get("/api/search?q=test", headers={"X-API-Key": new_token})
                assert resp.status_code == 200


class TestDeleteMyToken:
    def test_revoke_existing_token(self, bearer_client):
        bearer_client.post("/api/tokens/me", json={"expires_days": 30, "name": "CLI"})
        resp = bearer_client.delete("/api/tokens/me")
        assert resp.status_code == 204

    def test_revoke_nonexistent_returns_404(self, bearer_client):
        resp = bearer_client.delete("/api/tokens/me")
        assert resp.status_code == 404

    def test_revoked_token_rejected(self, bearer_client, db_path):
        create_resp = bearer_client.post("/api/tokens/me", json={"expires_days": 30, "name": "CLI"})
        token = create_resp.json()["token"]
        bearer_client.delete("/api/tokens/me")

        env = {k: v for k, v in os.environ.items()}
        env["DATABASE_URL"] = str(db_path)
        env["AZURE_CLIENT_ID"] = "test-client-id"
        with patch.dict(os.environ, env, clear=True):
            from api.main import app
            with TestClient(app) as client:
                resp = client.get("/api/search?q=test", headers={"X-API-Key": token})
                assert resp.status_code == 401


class TestPATAsApiKey:
    def test_valid_pat_authenticates_and_identity_correct(self, bearer_client, db_path):
        """Generate token → use token → verify /api/me returns the correct owner email."""
        create_resp = bearer_client.post("/api/tokens/me", json={"expires_days": 30, "name": "CLI"})
        token = create_resp.json()["token"]

        env = {k: v for k, v in os.environ.items()}
        env["DATABASE_URL"] = str(db_path)
        env["AZURE_CLIENT_ID"] = "test-client-id"
        with patch.dict(os.environ, env, clear=True):
            from api.main import app
            with TestClient(app) as client:
                resp = client.get("/api/me", headers={"X-API-Key": token})
                assert resp.status_code == 200
                assert resp.json()["email"] == "alice@example.com"

    def test_pat_user_cannot_call_admin_endpoints(self, bearer_client, db_path):
        """PAT users (is_admin=False) cannot access admin endpoints."""
        create_resp = bearer_client.post("/api/tokens/me", json={"expires_days": 30, "name": "CLI"})
        token = create_resp.json()["token"]

        env = {k: v for k, v in os.environ.items()}
        env["DATABASE_URL"] = str(db_path)
        env["AZURE_CLIENT_ID"] = "test-client-id"
        with patch.dict(os.environ, env, clear=True):
            from api.main import app
            with TestClient(app) as client:
                resp = client.get("/api/admin/export", headers={"X-API-Key": token})
                assert resp.status_code == 403

    def test_pat_cannot_generate_pat(self, bearer_client, db_path):
        """A PAT cannot be used to call the token generation endpoint."""
        create_resp = bearer_client.post("/api/tokens/me", json={"expires_days": 30, "name": "CLI"})
        token = create_resp.json()["token"]

        env = {k: v for k, v in os.environ.items()}
        env["DATABASE_URL"] = str(db_path)
        env["AZURE_CLIENT_ID"] = "test-client-id"
        with patch.dict(os.environ, env, clear=True):
            from api.main import app
            with TestClient(app) as client:
                resp = client.post(
                    "/api/tokens/me",
                    json={"expires_days": 30, "name": "CLI"},
                    headers={"X-API-Key": token},
                )
                assert resp.status_code == 401

    def test_pat_cannot_delete_pat(self, bearer_client, db_path):
        """A PAT cannot be used to call the token revocation endpoint."""
        create_resp = bearer_client.post("/api/tokens/me", json={"expires_days": 30, "name": "CLI"})
        token = create_resp.json()["token"]

        env = {k: v for k, v in os.environ.items()}
        env["DATABASE_URL"] = str(db_path)
        env["AZURE_CLIENT_ID"] = "test-client-id"
        with patch.dict(os.environ, env, clear=True):
            from api.main import app
            with TestClient(app) as client:
                resp = client.delete("/api/tokens/me", headers={"X-API-Key": token})
                assert resp.status_code == 401


class TestExpiredPAT:
    def test_expired_pat_returns_401(self, db_path):
        """An expired PAT is rejected at the auth layer."""
        from api.database import init_db, get_db
        from api.services.token_utils import generate_token, hash_token
        init_db(db_path)

        raw = generate_token()
        past = (datetime.now(timezone.utc) - timedelta(days=1)).isoformat()
        conn = get_db(db_path)
        conn.execute(
            "INSERT INTO personal_tokens (id, user_email, token_hash, name, expires_at, created_at) "
            "VALUES (?, ?, ?, ?, ?, ?)",
            ("eid", "expired@example.com", hash_token(raw), "old", past, "2026-01-01T00:00:00")
        )
        conn.commit()
        conn.close()

        env = {k: v for k, v in os.environ.items()}
        env["DATABASE_URL"] = str(db_path)
        env["AZURE_CLIENT_ID"] = "test-client-id"
        with patch.dict(os.environ, env, clear=True):
            from api.main import app
            with TestClient(app) as client:
                resp = client.get("/api/search?q=test", headers={"X-API-Key": raw})
                assert resp.status_code == 401
                assert "expired" in resp.json()["detail"].lower()
```

- [ ] **Step 2: Run to confirm tests fail**

```bash
.venv/Scripts/pytest tests/test_tokens.py -v 2>&1 | head -20
```

Expected: `ImportError` or `404` — token endpoints don't exist yet.

- [ ] **Step 3: Create `api/routers/tokens.py`**

```python
"""Personal API Token endpoints — GET/POST/DELETE /api/tokens/me."""

import uuid
from datetime import datetime, timezone
from typing import Literal

from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel, Field

from ..auth import CurrentUser
from ..database import get_db
from ..dependencies import require_bearer_auth, get_database
from ..services.token_utils import generate_token, hash_token, make_expires_at, is_expired

router = APIRouter(prefix="/api/tokens", tags=["tokens"])


class TokenCreate(BaseModel):
    expires_days: Literal[30, 60, 90]
    name: str = Field(default="My CLI token", min_length=1, max_length=100)


class TokenInfo(BaseModel):
    name: str
    expires_at: datetime
    created_at: datetime
    expired: bool


class TokenCreated(BaseModel):
    token: str
    expires_at: datetime
    warning: str


def _parse_utc(value: str) -> datetime:
    dt = datetime.fromisoformat(value)
    if dt.tzinfo is None:
        dt = dt.replace(tzinfo=timezone.utc)
    return dt


@router.get("/me", response_model=TokenInfo)
def get_my_token(
    user: CurrentUser = Depends(require_bearer_auth),
    db=Depends(get_database),
):
    row = db.execute(
        "SELECT name, expires_at, created_at FROM personal_tokens WHERE user_email = ?",
        (user.email,),
    ).fetchone()
    if not row:
        raise HTTPException(status_code=404, detail="No token found")
    expires_at = _parse_utc(row["expires_at"])
    created_at = _parse_utc(row["created_at"])
    return TokenInfo(
        name=row["name"],
        expires_at=expires_at,
        created_at=created_at,
        expired=is_expired(expires_at),
    )


@router.post("/me", response_model=TokenCreated, status_code=201)
def create_my_token(
    body: TokenCreate,
    user: CurrentUser = Depends(require_bearer_auth),
    db=Depends(get_database),
):
    raw = generate_token()
    expires_at = make_expires_at(body.expires_days)
    created_at = datetime.now(timezone.utc)
    token_id = str(uuid.uuid4())

    db.execute(
        """INSERT INTO personal_tokens (id, user_email, token_hash, name, expires_at, created_at)
           VALUES (?, ?, ?, ?, ?, ?)
           ON CONFLICT(user_email) DO UPDATE SET
               id = excluded.id,
               token_hash = excluded.token_hash,
               name = excluded.name,
               expires_at = excluded.expires_at,
               created_at = excluded.created_at""",
        (token_id, user.email, hash_token(raw), body.name,
         expires_at.isoformat(), created_at.isoformat()),
    )
    db.commit()

    return TokenCreated(
        token=raw,
        expires_at=expires_at,
        warning="Copy this token now — it will not be shown again.",
    )


@router.delete("/me", status_code=204)
def delete_my_token(
    user: CurrentUser = Depends(require_bearer_auth),
    db=Depends(get_database),
):
    result = db.execute(
        "DELETE FROM personal_tokens WHERE user_email = ?", (user.email,)
    )
    db.commit()
    if result.rowcount == 0:
        raise HTTPException(status_code=404, detail="No token found")
```

- [ ] **Step 4: Mount the router in `api/main.py`**

Add `tokens` to the import on line 20:

```python
from .routers import search, icons, categories, admin, tokens
```

Add `app.include_router(tokens.router)` after the other routers (around line 79):

```python
app.include_router(search.router)
app.include_router(icons.router)
app.include_router(categories.router)
app.include_router(admin.router)
app.include_router(tokens.router)
```

- [ ] **Step 5: Run all token tests**

```bash
.venv/Scripts/pytest tests/test_tokens.py -v
```

Expected: all tests PASS.

- [ ] **Step 6: Run full test suite to check for regressions**

```bash
.venv/Scripts/pytest tests/ -v --tb=short
```

Expected: all tests PASS.

- [ ] **Step 7: Commit**

```bash
git add api/routers/tokens.py api/main.py tests/test_tokens.py
git commit -m "feat(pat): add token router with GET/POST/DELETE /api/tokens/me"
```

---

### Task 5: Web UI — "My Token" panel

**Files:**
- Modify: `index.html`
- Modify: `assets/js/search.js`

This task has no automated tests — verify manually by running the dev server.

- [ ] **Step 1: Add HTML panel to `index.html`**

Find the header section that contains the user info / sign-out button. Add the following HTML block immediately before the sign-out button:

```html
<!-- My Token panel -->
<div id="token-panel" style="display:none; margin-right: 12px;">
  <!-- No token state -->
  <div id="token-none">
    <label><input type="radio" name="token-expires" value="30"> 30 days</label>
    <label style="margin:0 6px;"><input type="radio" name="token-expires" value="60"> 60 days</label>
    <label style="margin-right:6px;"><input type="radio" name="token-expires" value="90" checked> 90 days</label>
    <input id="token-name-input" type="text" value="My CLI token"
           maxlength="100" style="margin-right:6px; width:140px;" />
    <button onclick="generateToken()">Generate Token</button>
  </div>
  <!-- Token just generated state -->
  <div id="token-new" style="display:none;">
    <div style="background:#fff3cd; border:1px solid #ffc107; padding:6px 10px; border-radius:4px; margin-bottom:6px; font-size:13px;">
      ⚠️ Copy this token now — it will not be shown again.
    </div>
    <input id="token-value" type="text" readonly style="width:400px; font-family:monospace;" />
    <button onclick="copyToken()">Copy</button>
    <button onclick="dismissToken()">Done</button>
    <div id="token-expires-info" style="font-size:12px; color:#666; margin-top:4px;"></div>
  </div>
  <!-- Token exists (active) state -->
  <div id="token-exists" style="display:none;">
    <span id="token-meta" style="font-size:13px; color:#555; margin-right:8px;"></span>
    <button onclick="revokeToken()">Revoke Token</button>
  </div>
  <!-- Token exists (expired) state -->
  <div id="token-expired" style="display:none;">
    <span id="token-expired-meta" style="font-size:13px; color:#555; margin-right:8px;"></span>
    <span style="background:#dc3545; color:#fff; border-radius:3px; padding:1px 6px; font-size:11px; margin-right:8px;">Expired</span>
    <button onclick="showTokenState('none')">Generate New Token</button>
  </div>
</div>
```

- [ ] **Step 2: Add JS to `assets/js/search.js`**

Append the following to `assets/js/search.js`:

```javascript
// ── Personal API Token management ─────────────────────────────────────────

async function loadTokenInfo() {
  try {
    const resp = await authFetch('/api/tokens/me');
    if (resp.status === 404) {
      showTokenState('none');
    } else if (resp.ok) {
      const data = await resp.json();
      showTokenState(data.expired ? 'expired' : 'exists', data);
    }
  } catch (e) {
    console.warn('Could not load token info', e);
  }
}

function showTokenState(state, data) {
  document.getElementById('token-panel').style.display = 'inline-block';
  document.getElementById('token-none').style.display = state === 'none' ? 'inline-block' : 'none';
  document.getElementById('token-new').style.display = state === 'new' ? 'block' : 'none';
  document.getElementById('token-exists').style.display = state === 'exists' ? 'inline-block' : 'none';
  document.getElementById('token-expired').style.display = state === 'expired' ? 'inline-block' : 'none';

  if (state === 'exists' && data) {
    const expires = new Date(data.expires_at).toLocaleDateString();
    document.getElementById('token-meta').textContent =
      `Token "${data.name}" — expires ${expires}`;
  }
  if (state === 'expired' && data) {
    const expires = new Date(data.expires_at).toLocaleDateString();
    document.getElementById('token-expired-meta').textContent =
      `Token "${data.name}" — expired ${expires}`;
  }
}

async function generateToken() {
  const selected = document.querySelector('input[name="token-expires"]:checked');
  const days = selected ? parseInt(selected.value) : 90;
  const name = document.getElementById('token-name-input').value.trim() || 'My CLI token';
  try {
    const resp = await authFetch('/api/tokens/me', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ expires_days: days, name }),
    });
    if (!resp.ok) { alert('Failed to generate token'); return; }
    const data = await resp.json();
    document.getElementById('token-value').value = data.token;
    document.getElementById('token-expires-info').textContent =
      `Expires: ${new Date(data.expires_at).toLocaleDateString()}`;
    showTokenState('new');
  } catch (e) {
    alert('Error generating token: ' + e.message);
  }
}

function copyToken() {
  const input = document.getElementById('token-value');
  input.select();
  navigator.clipboard.writeText(input.value).catch(() => {
    document.execCommand('copy');
  });
}

function dismissToken() {
  loadTokenInfo();
}

async function revokeToken() {
  if (!confirm('Revoke your API token? CLI access will stop working immediately.')) return;
  try {
    const resp = await authFetch('/api/tokens/me', { method: 'DELETE' });
    if (resp.ok || resp.status === 404) {
      showTokenState('none');
    } else {
      alert('Failed to revoke token');
    }
  } catch (e) {
    alert('Error revoking token: ' + e.message);
  }
}
```

- [ ] **Step 3: Call `loadTokenInfo()` after successful login**

Find the section in `assets/js/search.js` where `showApp()` or user info is displayed after login. Add `loadTokenInfo()` call there so the panel loads on page load.

Search for the line that calls `showApp()` or sets the user display name, and add `loadTokenInfo()` immediately after.

- [ ] **Step 4: Manual verification**

Start the local dev server:
```bash
python run_api.py
```

Open http://localhost:8000. Log in with Azure AD. Verify:
1. "My Token" panel appears in header
2. Generate a token — raw value shown with warning
3. Copy button works
4. "Done" dismisses the raw value, shows token metadata
5. Revoke button prompts for confirmation, then shows "Generate" state
6. Use the generated token in CLI: `LINGARO_API_KEY=<token> cli-anything-lingaro-catalog search "test"`
   Expected: results returned, no 401.

- [ ] **Step 5: Commit**

```bash
git add index.html assets/js/search.js
git commit -m "feat(pat): add My Token panel to web UI"
```

---

### Task 6: Final smoke test + deploy

- [ ] **Step 1: Run full test suite**

```bash
.venv/Scripts/pytest tests/ -v --tb=short
```

Expected: all tests PASS.

- [ ] **Step 2: Redeploy to Azure**

```bash
bash redeploy.sh
```

Or via the deploy script:
```powershell
.\deploy-azure.ps1 -ApiKey "ba43333bb579eb6c75455de1401e6a67dba7e3a397950d0afff8168d0d9fc5f3"
```

- [ ] **Step 3: End-to-end on production**

1. Open https://lingaro-icons-catalog.azurewebsites.net
2. Log in → "My Token" panel appears
3. Generate a 30-day token → copy it
4. Run in CLI:
   ```bash
   LINGARO_CATALOG_URL=https://lingaro-icons-catalog.azurewebsites.net \
   LINGARO_API_KEY=<your-new-pat> \
   cli-anything-lingaro-catalog search "database"
   ```
   Expected: results, no 401.
5. Revoke the token via UI → repeat CLI search → expect 401.
