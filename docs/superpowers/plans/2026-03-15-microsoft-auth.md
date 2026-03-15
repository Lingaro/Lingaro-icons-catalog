# Microsoft Entra ID Authentication — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Microsoft Entra ID authentication so all users must sign in with Lingaro credentials, and only designated admins can perform write operations.

**Architecture:** MSAL.js v2 on the frontend handles login (Authorization Code + PKCE) and sends the ID token as a Bearer token. The FastAPI backend validates JWTs using Azure AD's JWKS public keys via PyJWT. A fallback API key path is preserved for the PowerPoint add-in.

**Tech Stack:** MSAL.js v2 (CDN), PyJWT[crypto], httpx, FastAPI dependencies

**Spec:** `docs/superpowers/specs/2026-03-15-microsoft-auth-design.md`

---

## Chunk 1: Backend Auth Infrastructure

### Task 1: Add Python dependencies

**Files:**
- Modify: `requirements.txt`

- [ ] **Step 1: Add PyJWT and httpx to requirements.txt**

Add these two lines to `requirements.txt`:

```
# Authentication - JWT validation
PyJWT[crypto]>=2.8.0

# HTTP client for fetching JWKS keys
httpx>=0.27.0
```

- [ ] **Step 2: Install dependencies**

Run: `cd C:/Users/piotr.palka/workspace/lingaro/Lingaro-icons-catalog && uv pip install PyJWT[crypto] httpx`

- [ ] **Step 3: Commit**

```bash
git add requirements.txt
git commit -m "feat(auth): add PyJWT and httpx dependencies"
```

---

### Task 2: Implement JWKS key fetching and JWT validation

**Files:**
- Create: `api/auth.py`
- Test: `tests/test_auth.py`

This is the core auth module. It fetches Azure AD's public signing keys, caches them, and validates ID tokens.

- [ ] **Step 1: Write failing tests for JWKS fetching and JWT validation**

Replace `tests/test_auth.py` entirely with:

```python
"""Tests for Azure AD JWT authentication."""

import time
import os
from unittest.mock import patch, AsyncMock, MagicMock

import pytest
import jwt

from api.auth import (
    AzureADTokenValidator,
    CurrentUser,
)


# ---------- Fixtures ----------

# Generate a real RSA key pair for test token signing
from cryptography.hazmat.primitives.asymmetric import rsa
from cryptography.hazmat.primitives import serialization

_private_key = rsa.generate_private_key(public_exponent=65537, key_size=2048)
_public_key = _private_key.public_key()

# PEM-encoded keys
PRIVATE_KEY_PEM = _private_key.private_bytes(
    serialization.Encoding.PEM,
    serialization.PrivateFormat.PKCS8,
    serialization.NoEncryption(),
)
PUBLIC_KEY_PEM = _public_key.public_bytes(
    serialization.Encoding.PEM,
    serialization.PublicFormat.SubjectPublicKeyInfo,
)

TEST_CLIENT_ID = "aa55ba68-4d3e-46bb-a4a2-d1d38c431a06"
TEST_TENANT_ID = "2ee548e1-6be8-4729-b86e-f482e29d2c9f"
TEST_ISSUER = f"https://login.microsoftonline.com/{TEST_TENANT_ID}/v2.0"


def _make_token(claims: dict | None = None, expired: bool = False) -> str:
    """Create a signed JWT for testing."""
    now = int(time.time())
    payload = {
        "aud": TEST_CLIENT_ID,
        "iss": TEST_ISSUER,
        "iat": now - 60,
        "nbf": now - 60,
        "exp": now - 10 if expired else now + 3600,
        "preferred_username": "user@lingarogroup.com",
        "name": "Test User",
        "tid": TEST_TENANT_ID,
    }
    if claims:
        payload.update(claims)
    return jwt.encode(payload, PRIVATE_KEY_PEM, algorithm="RS256", headers={"kid": "test-key-id"})


@pytest.fixture
def validator():
    """Create a validator with mocked JWKS fetching."""
    v = AzureADTokenValidator(
        tenant_id=TEST_TENANT_ID,
        client_id=TEST_CLIENT_ID,
    )
    # Pre-populate the signing key cache so we don't need to mock HTTP
    v._signing_keys = {"test-key-id": PUBLIC_KEY_PEM}
    v._keys_fetched_at = time.time()
    return v


# ---------- Token validation tests ----------

class TestTokenValidation:
    def test_valid_token(self, validator):
        token = _make_token()
        user = validator.validate_token(token)
        assert isinstance(user, CurrentUser)
        assert user.email == "user@lingarogroup.com"
        assert user.name == "Test User"

    def test_expired_token(self, validator):
        token = _make_token(expired=True)
        with pytest.raises(Exception, match="expired|Signature has expired"):
            validator.validate_token(token)

    def test_wrong_audience(self, validator):
        token = _make_token({"aud": "wrong-client-id"})
        with pytest.raises(Exception, match="audience|Invalid audience"):
            validator.validate_token(token)

    def test_wrong_issuer(self, validator):
        token = _make_token({"iss": "https://evil.com"})
        with pytest.raises(Exception, match="issuer|Invalid issuer"):
            validator.validate_token(token)

    def test_email_claim_fallback(self, validator):
        """If preferred_username is missing, fall back to email claim."""
        token = _make_token({
            "preferred_username": None,
            "email": "fallback@lingarogroup.com",
        })
        user = validator.validate_token(token)
        assert user.email == "fallback@lingarogroup.com"

    def test_missing_email_claims(self, validator):
        """If both email claims are missing, use 'unknown'."""
        token = _make_token({
            "preferred_username": None,
            "email": None,
        })
        user = validator.validate_token(token)
        assert user.email == "unknown"


class TestAdminCheck:
    def test_is_admin(self):
        user = CurrentUser(email="admin@lingarogroup.com", name="Admin", is_admin=False)
        admin_emails = ["admin@lingarogroup.com", "other@lingarogroup.com"]
        assert user.email in admin_emails

    def test_is_not_admin(self):
        user = CurrentUser(email="user@lingarogroup.com", name="User", is_admin=False)
        admin_emails = ["admin@lingarogroup.com"]
        assert user.email not in admin_emails

    def test_case_insensitive_admin_check(self):
        user = CurrentUser(email="Admin@LingaroGroup.com", name="Admin", is_admin=False)
        admin_emails = ["admin@lingarogroup.com"]
        assert user.email.lower() in [e.lower() for e in admin_emails]
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `cd C:/Users/piotr.palka/workspace/lingaro/Lingaro-icons-catalog && python -m pytest tests/test_auth.py -v`

Expected: FAIL — `ModuleNotFoundError: No module named 'api.auth'`

- [ ] **Step 3: Implement api/auth.py**

Create `api/auth.py`:

```python
"""Azure AD JWT token validation using PyJWT and JWKS."""

import time
from dataclasses import dataclass

import httpx
import jwt
from jwt import PyJWKClient


@dataclass
class CurrentUser:
    email: str
    name: str
    is_admin: bool = False


class AzureADTokenValidator:
    """Validates Azure AD ID tokens using JWKS public keys."""

    JWKS_CACHE_TTL = 86400  # 24 hours

    def __init__(self, tenant_id: str, client_id: str):
        self.tenant_id = tenant_id
        self.client_id = client_id
        self.issuer = f"https://login.microsoftonline.com/{tenant_id}/v2.0"
        self.jwks_url = (
            f"https://login.microsoftonline.com/{tenant_id}/discovery/v2.0/keys"
        )
        self._signing_keys: dict[str, bytes] = {}
        self._keys_fetched_at: float = 0

    def _refresh_keys_if_needed(self, force: bool = False):
        """Fetch JWKS keys from Azure AD if cache is stale."""
        now = time.time()
        if not force and self._signing_keys and (now - self._keys_fetched_at) < self.JWKS_CACHE_TTL:
            return
        response = httpx.get(self.jwks_url, timeout=10)
        response.raise_for_status()
        jwks = response.json()
        self._signing_keys = {}
        for key_data in jwks.get("keys", []):
            kid = key_data.get("kid")
            if kid:
                # Convert JWK to PEM using PyJWT's built-in support
                from jwt.algorithms import RSAAlgorithm
                public_key = RSAAlgorithm.from_jwk(key_data)
                from cryptography.hazmat.primitives import serialization
                pem = public_key.public_bytes(
                    serialization.Encoding.PEM,
                    serialization.PublicFormat.SubjectPublicKeyInfo,
                )
                self._signing_keys[kid] = pem
        self._keys_fetched_at = now

    def validate_token(self, token: str) -> CurrentUser:
        """Validate an Azure AD ID token and return user info.

        Raises jwt.InvalidTokenError (or subclass) on failure.
        """
        # Decode header to get key ID
        unverified_header = jwt.get_unverified_header(token)
        kid = unverified_header.get("kid")

        # Try cached keys first, refresh if kid not found
        self._refresh_keys_if_needed()
        if kid and kid not in self._signing_keys:
            self._refresh_keys_if_needed(force=True)

        signing_key = self._signing_keys.get(kid)
        if not signing_key:
            raise jwt.InvalidTokenError(f"Unknown signing key: {kid}")

        claims = jwt.decode(
            token,
            signing_key,
            algorithms=["RS256"],
            audience=self.client_id,
            issuer=self.issuer,
            options={"require": ["exp", "iat", "aud", "iss"]},
        )

        email = (
            claims.get("preferred_username")
            or claims.get("email")
            or "unknown"
        )
        name = claims.get("name", "")

        return CurrentUser(email=email, name=name)
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `cd C:/Users/piotr.palka/workspace/lingaro/Lingaro-icons-catalog && python -m pytest tests/test_auth.py -v`

Expected: All 7 tests PASS

- [ ] **Step 5: Commit**

```bash
git add api/auth.py tests/test_auth.py
git commit -m "feat(auth): implement Azure AD JWT validation with JWKS caching"
```

---

### Task 3: Create FastAPI auth dependencies

**Files:**
- Modify: `api/dependencies.py`
- Test: `tests/test_dependencies.py`

Wire the validator into FastAPI's dependency injection system. Support both Bearer token and API key (for PowerPoint add-in).

- [ ] **Step 1: Write failing tests for auth dependencies**

Create `tests/test_dependencies.py`:

```python
"""Tests for FastAPI auth dependencies."""

import os
import time
from unittest.mock import patch, MagicMock

import pytest
from fastapi import HTTPException

from api.auth import CurrentUser

# We need to test the dependency functions in isolation.
# They require a FastAPI Request-like object or header values.


class TestRequireAuth:
    """Test require_auth dependency."""

    def test_valid_bearer_token(self):
        """With valid Bearer token, returns CurrentUser."""
        from api.dependencies import _validate_bearer_token

        mock_validator = MagicMock()
        mock_validator.validate_token.return_value = CurrentUser(
            email="user@lingarogroup.com", name="Test User"
        )

        with patch("api.dependencies._get_validator", return_value=mock_validator):
            user = _validate_bearer_token("Bearer fake-token")
            assert user.email == "user@lingarogroup.com"

    def test_valid_api_key_fallback(self):
        """With valid X-API-Key, returns a generic CurrentUser."""
        from api.dependencies import _validate_api_key

        with patch.dict(os.environ, {"API_KEY": "test-key"}):
            user = _validate_api_key("test-key")
            assert user is not None
            assert user.email == "api-key-user"

    def test_no_auth_header_raises_401(self):
        """Without any auth, raises 401."""
        from api.dependencies import _resolve_user

        with patch.dict(os.environ, {"AZURE_CLIENT_ID": "some-id", "AZURE_TENANT_ID": "some-tenant"}):
            with pytest.raises(HTTPException) as exc_info:
                _resolve_user(authorization=None, x_api_key=None)
            assert exc_info.value.status_code == 401

    def test_dev_mode_no_auth_required(self):
        """Without AZURE_CLIENT_ID, auth is disabled (dev mode)."""
        from api.dependencies import _resolve_user

        # Remove all auth-related env vars to simulate dev mode
        clean_env = {k: v for k, v in os.environ.items()
                     if k not in ("AZURE_CLIENT_ID", "AZURE_TENANT_ID", "API_KEY")}
        with patch.dict(os.environ, clean_env, clear=True):
            user = _resolve_user(authorization=None, x_api_key=None)
            assert user.email == "dev-mode"


class TestRequireAdmin:
    """Test require_admin dependency."""

    def test_admin_user(self):
        from api.dependencies import _check_admin

        user = CurrentUser(email="piotr.palka@lingarogroup.com", name="Piotr")
        admin_emails = "piotr.palka@lingarogroup.com,other@lingarogroup.com"
        with patch.dict(os.environ, {"ADMIN_EMAILS": admin_emails}):
            result = _check_admin(user)
            assert result.is_admin is True

    def test_non_admin_user_raises_403(self):
        from api.dependencies import _check_admin

        user = CurrentUser(email="regular@lingarogroup.com", name="Regular")
        admin_emails = "piotr.palka@lingarogroup.com"
        with patch.dict(os.environ, {"ADMIN_EMAILS": admin_emails}):
            with pytest.raises(HTTPException) as exc_info:
                _check_admin(user)
            assert exc_info.value.status_code == 403

    def test_case_insensitive_admin(self):
        from api.dependencies import _check_admin

        user = CurrentUser(email="Piotr.Palka@LingaroGroup.com", name="Piotr")
        with patch.dict(os.environ, {"ADMIN_EMAILS": "piotr.palka@lingarogroup.com"}):
            result = _check_admin(user)
            assert result.is_admin is True
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `cd C:/Users/piotr.palka/workspace/lingaro/Lingaro-icons-catalog && python -m pytest tests/test_dependencies.py -v`

Expected: FAIL — cannot import `_validate_bearer_token`, `_validate_api_key`, etc.

- [ ] **Step 3: Rewrite api/dependencies.py**

Replace `api/dependencies.py` with:

```python
"""FastAPI dependencies for auth, DB connections, storage."""

import os
import sqlite3
from pathlib import Path
from typing import Optional

from fastapi import Header, HTTPException, Depends

from .auth import AzureADTokenValidator, CurrentUser
from .database import get_db, init_db, DEFAULT_DB_PATH
from .services.storage import get_storage, StorageBackend

# Singleton validator (created on first use)
_validator: Optional[AzureADTokenValidator] = None


def _get_validator() -> Optional[AzureADTokenValidator]:
    """Get or create the Azure AD token validator. Returns None if not configured."""
    global _validator
    client_id = os.getenv("AZURE_CLIENT_ID")
    tenant_id = os.getenv("AZURE_TENANT_ID")
    if not client_id or not tenant_id:
        return None
    if _validator is None:
        _validator = AzureADTokenValidator(tenant_id=tenant_id, client_id=client_id)
    return _validator


def _validate_bearer_token(authorization: str) -> CurrentUser:
    """Extract and validate a Bearer token. Raises on failure."""
    validator = _get_validator()
    if validator is None:
        raise HTTPException(status_code=500, detail="Auth not configured")
    if not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Invalid authorization header")
    token = authorization[7:]
    try:
        return validator.validate_token(token)
    except Exception as e:
        raise HTTPException(status_code=401, detail=f"Invalid token: {e}")


def _validate_api_key(x_api_key: str) -> Optional[CurrentUser]:
    """Validate API key and return a generic user. Returns None if invalid."""
    expected = os.getenv("API_KEY")
    if expected and x_api_key == expected:
        return CurrentUser(email="api-key-user", name="API Key", is_admin=True)
    return None


def _resolve_user(
    authorization: Optional[str] = Header(None),
    x_api_key: Optional[str] = Header(None),
) -> CurrentUser:
    """Resolve the current user from Bearer token or API key.

    In dev mode (no AZURE_CLIENT_ID set), returns a dev user.
    """
    # Dev mode: no auth configured
    if not os.getenv("AZURE_CLIENT_ID") and not os.getenv("API_KEY"):
        return CurrentUser(email="dev-mode", name="Developer", is_admin=True)

    # Try API key first (for PowerPoint add-in backward compatibility)
    if x_api_key:
        user = _validate_api_key(x_api_key)
        if user:
            return user

    # Try Bearer token
    if authorization:
        return _validate_bearer_token(authorization)

    raise HTTPException(status_code=401, detail="Authentication required")


def _check_admin(user: CurrentUser) -> CurrentUser:
    """Check if the user is in the admin list. Raises 403 if not."""
    admin_emails_str = os.getenv("ADMIN_EMAILS", "")
    admin_emails = [e.strip().lower() for e in admin_emails_str.split(",") if e.strip()]
    if user.email.lower() in admin_emails:
        user.is_admin = True
        return user
    # API key users are always admin
    if user.email == "api-key-user":
        return user
    # Dev mode users are always admin
    if user.email == "dev-mode":
        return user
    raise HTTPException(status_code=403, detail="Admin access required")


def require_auth(
    authorization: Optional[str] = Header(None),
    x_api_key: Optional[str] = Header(None),
) -> CurrentUser:
    """Dependency: require authenticated user (Bearer token or API key)."""
    return _resolve_user(authorization, x_api_key)


def require_admin(user: CurrentUser = Depends(require_auth)) -> CurrentUser:
    """Dependency: require authenticated admin user."""
    return _check_admin(user)


# Keep old name as alias for backward compatibility during migration
def require_api_key(x_api_key: Optional[str] = Header(None)) -> bool:
    """Deprecated: use require_admin instead."""
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
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `cd C:/Users/piotr.palka/workspace/lingaro/Lingaro-icons-catalog && python -m pytest tests/test_auth.py tests/test_dependencies.py -v`

Expected: All tests PASS

- [ ] **Step 5: Commit**

```bash
git add api/dependencies.py tests/test_dependencies.py
git commit -m "feat(auth): add require_auth and require_admin FastAPI dependencies"
```

---

### Task 4: Wire auth into routers + add /api/me endpoint

**Files:**
- Modify: `api/main.py`
- Modify: `api/routers/admin.py`
- Modify: `api/routers/icons.py`
- Modify: `api/routers/categories.py`
- Modify: `api/routers/search.py`

- [ ] **Step 1: Update api/routers/admin.py — switch to require_admin**

Replace all `require_api_key` references with `require_admin`. Fix the missing auth on `/export` and `/refresh-*/status` endpoints.

Changes:
- Line 8: change import from `require_api_key` to `require_admin`
- Line 20-21: add `_auth=Depends(require_admin)` to export endpoint
- Line 28-29: change `_auth=Depends(require_api_key)` to `_auth=Depends(require_admin)`
- Line 72-73: change `_auth=Depends(require_api_key)` to `_auth=Depends(require_admin)`
- Line 81-82: add `_auth=Depends(require_admin)` to azure status endpoint
- Line 87: change `_auth=Depends(require_api_key)` to `_auth=Depends(require_admin)`
- Add a new GCP status endpoint if missing, with `require_admin`

The full updated file:

```python
"""Admin endpoints -- export, import, re-annotate."""

import json

from fastapi import APIRouter, BackgroundTasks, Depends, HTTPException, UploadFile, File

from ..database import insert_icon, get_icon, refresh_category_counts, DEFAULT_DB_PATH
from ..dependencies import get_database, require_admin
from ..services.search import SearchService

router = APIRouter(prefix="/api/admin", tags=["admin"])

# Track refresh status per provider
_refresh_status = {
    "azure": {"running": False, "last_result": None},
    "gcp": {"running": False, "last_result": None},
}


@router.get("/export")
async def export_catalog(_auth=Depends(require_admin), db=Depends(get_database)):
    search = SearchService(db)
    icons = search.list_icons(limit=10000)
    categories = search.get_categories()
    return {"icons": icons, "categories": [c["name"] for c in categories], "meta": {"total_icons": len(icons)}}


@router.post("/import")
async def import_catalog(file: UploadFile = File(...), _auth=Depends(require_admin), db=Depends(get_database)):
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
            "id": icon["id"], "name": icon["name"], "filename": icon["filename"],
            "path": icon["path"], "category": icon.get("category", ""),
            "set_name": icon.get("set", icon.get("set_name", "")),
            "description": icon.get("description"),
            "tags": icon.get("tags", []), "use_cases": icon.get("use_cases", []),
            "status": "ready",
        })
        count += 1
    refresh_category_counts(db)
    return {"imported": count}


def _run_refresh(provider: str):
    """Background task: download and import icons for a provider."""
    status = _refresh_status[provider]
    try:
        status["running"] = True
        if provider == "azure":
            from scripts.import_azure_icons import import_azure_icons
            result = import_azure_icons(DEFAULT_DB_PATH)
        elif provider == "gcp":
            from scripts.import_gcp_icons import import_gcp_icons
            result = import_gcp_icons(DEFAULT_DB_PATH)
        else:
            result = {"error": f"Unknown provider: {provider}"}
        status["last_result"] = result
    except Exception as e:
        status["last_result"] = {"error": str(e)}
    finally:
        status["running"] = False


@router.post("/refresh-azure-icons")
async def refresh_azure_icons(background_tasks: BackgroundTasks, _auth=Depends(require_admin)):
    """Download latest Azure icons from Microsoft and sync with catalog."""
    if _refresh_status["azure"]["running"]:
        return {"status": "already_running", "message": "Azure icons refresh is already in progress"}
    background_tasks.add_task(_run_refresh, "azure")
    return {"status": "started", "message": "Azure icons refresh started in background"}


@router.get("/refresh-azure-icons/status")
async def refresh_azure_icons_status(_auth=Depends(require_admin)):
    return _refresh_status["azure"]


@router.post("/refresh-gcp-icons")
async def refresh_gcp_icons(background_tasks: BackgroundTasks, _auth=Depends(require_admin)):
    """Download latest GCP icons from Google and sync with catalog."""
    if _refresh_status["gcp"]["running"]:
        return {"status": "already_running", "message": "GCP icons refresh is already in progress"}
    background_tasks.add_task(_run_refresh, "gcp")
    return {"status": "started", "message": "GCP icons refresh started in background"}


@router.get("/refresh-gcp-icons/status")
async def refresh_gcp_icons_status(_auth=Depends(require_admin)):
    return _refresh_status["gcp"]
```

- [ ] **Step 2: Update api/routers/icons.py — add auth to all endpoints**

Changes:
- Import: replace `require_api_key` with `require_auth, require_admin`
- Add `user=Depends(require_auth)` to `list_icons` and `get_icon_detail` and `get_icon_file`
- Change `_auth=Depends(require_api_key)` to `_auth=Depends(require_admin)` on `upload_icon`, `update_icon_metadata`, `delete_icon_endpoint`

In `api/routers/icons.py`, change the import line:

```python
# Old:
from ..dependencies import get_database, get_storage_backend, require_api_key
# New:
from ..dependencies import get_database, get_storage_backend, require_auth, require_admin
```

Then update each endpoint's dependency:

For `list_icons` (line 72), `get_icon_detail` (line 84), and `get_icon_file` (line 158): add `user=Depends(require_auth)` parameter.

For `upload_icon` (line 100), `update_icon_metadata` (line 129), `delete_icon_endpoint` (line 147): change `_auth=Depends(require_api_key)` to `_auth=Depends(require_admin)`.

- [ ] **Step 3: Update api/routers/categories.py — add auth**

In `api/routers/categories.py`, add import and dependency:

```python
# Old:
from ..dependencies import get_database
# New:
from ..dependencies import get_database, require_auth
```

Add `user=Depends(require_auth)` to all 4 endpoints: `list_categories`, `get_category_icons`, `list_tags`, `list_collections`.

- [ ] **Step 4: Update api/routers/search.py — add auth**

In `api/routers/search.py`, add import and dependency:

```python
# Old:
from ..dependencies import get_database
# New:
from ..dependencies import get_database, require_auth
```

Add `user=Depends(require_auth)` to both `search_icons` and `search_icons_post`.

- [ ] **Step 5: Update api/main.py — add /api/me, tighten CORS, add auth to /api/stats**

Changes to `api/main.py`:
1. Import `require_auth` and `CurrentUser`
2. Tighten CORS origins
3. Add `require_auth` to `/api/stats`
4. Add `GET /api/me` endpoint

```python
"""Lingaro Icons Catalog -- FastAPI application."""

import os
from contextlib import asynccontextmanager
from pathlib import Path

from dotenv import load_dotenv
load_dotenv(Path(__file__).parent.parent / ".env")

from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles

from .database import init_db, DEFAULT_DB_PATH
from .models import HealthResponse, CatalogStats
from .dependencies import get_database, require_auth
from .auth import CurrentUser
from .services.search import SearchService
from .routers import search, icons, categories, admin

BASE_DIR = Path(__file__).parent.parent
STATIC_INDEX = BASE_DIR / "index.html"

CORS_ORIGINS = [
    "http://localhost:8000",
    "http://127.0.0.1:8000",
    "https://lingaro-icons-catalog.azurewebsites.net",
]


@asynccontextmanager
async def lifespan(app: FastAPI):
    db_path = Path(os.getenv("DATABASE_URL", str(DEFAULT_DB_PATH)))
    init_db(db_path)

    # Auto-seed from icons.json if DB is empty
    from .database import get_db
    conn = get_db(db_path)
    count = conn.execute("SELECT COUNT(*) FROM icons").fetchone()[0]
    conn.close()
    if count == 0:
        json_path = BASE_DIR / "assets" / "data" / "icons.json"
        if json_path.exists():
            from scripts.migrate_to_sqlite import migrate_icons_json
            imported = migrate_icons_json(json_path, db_path)
            print(f"Auto-seeded {imported} icons from icons.json")

    yield


app = FastAPI(
    title="Lingaro Icons Catalog API",
    description="Search, browse, and manage the Lingaro icon library",
    version="2.0.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(search.router)
app.include_router(icons.router)
app.include_router(categories.router)
app.include_router(admin.router)

if (BASE_DIR / "assets").exists():
    app.mount("/assets", StaticFiles(directory=str(BASE_DIR / "assets")), name="assets")
if (BASE_DIR / "icons").exists():
    app.mount("/icons", StaticFiles(directory=str(BASE_DIR / "icons")), name="icons")
if (BASE_DIR / "powerpoint-addin" / "dist").exists():
    app.mount("/addin", StaticFiles(directory=str(BASE_DIR / "powerpoint-addin" / "dist"), html=True), name="addin")


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


@app.get("/api/me")
async def get_current_user(user: CurrentUser = Depends(require_auth)):
    # Check admin status without raising 403 for non-admins
    admin_emails = [e.strip().lower() for e in os.getenv("ADMIN_EMAILS", "").split(",") if e.strip()]
    user.is_admin = user.email.lower() in admin_emails or user.email in ("api-key-user", "dev-mode")
    return {"email": user.email, "name": user.name, "is_admin": user.is_admin}


@app.get("/api/stats")
async def get_stats(user: CurrentUser = Depends(require_auth), db=Depends(get_database)):
    svc = SearchService(db)
    cats = svc.get_categories()
    sets_cursor = db.execute("SELECT DISTINCT set_name FROM icons WHERE status = 'ready'")
    sets_list = [row[0] for row in sets_cursor.fetchall()]
    return CatalogStats(
        total_icons=svc.count_icons(),
        categories=[c["name"] for c in cats],
        sets=sets_list,
        icons_with_embeddings=0,
    )
```

Note: `SearchService` import is included in the imports above.

- [ ] **Step 6: Run all tests**

Run: `cd C:/Users/piotr.palka/workspace/lingaro/Lingaro-icons-catalog && python -m pytest tests/ -v`

Expected: All tests PASS

- [ ] **Step 7: Commit**

```bash
git add api/main.py api/routers/admin.py api/routers/icons.py api/routers/categories.py api/routers/search.py
git commit -m "feat(auth): wire auth dependencies into all API endpoints"
```

---

## Chunk 2: Frontend Authentication

### Task 5: Add MSAL.js and auth config to index.html

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add MSAL.js CDN script and auth config**

In `index.html`, add the MSAL.js script tag before the existing `<script>` block (before line 122). Also add the auth config to `window`:

```html
  <script src="https://alcdn.msauth.net/browser/2.38.3/js/msal-browser.min.js"></script>
  <script>
    window.ICONS_DATA_URL = 'assets/data/icons.json';
    window.BASE_URL = '';
    window.API_URL = '';
    window.MSAL_CONFIG = {
      clientId: 'aa55ba68-4d3e-46bb-a4a2-d1d38c431a06',
      authority: 'https://login.microsoftonline.com/2ee548e1-6be8-4729-b86e-f482e29d2c9f',
      redirectUri: window.location.origin,
    };
  </script>
```

- [ ] **Step 2: Add user info and sign-out button to header**

In `index.html`, add a user info section to the `<nav>` element (after the upload button, around line 28):

```html
        <div class="user-info" id="user-info" style="display:none">
          <span class="user-name" id="user-name"></span>
          <span class="admin-badge" id="admin-badge" style="display:none">Admin</span>
          <button class="nav-link" id="sign-out-btn" type="button">Sign Out</button>
        </div>
```

- [ ] **Step 3: Add login screen overlay**

Add a login screen div right after `<body>` (before `<header>`):

```html
  <div id="login-screen" class="login-screen" style="display:none">
    <div class="login-card">
      <img src="assets/branding/Lingaro-Group.webp" alt="Lingaro" class="login-logo">
      <h1 class="login-title">Icons Catalog</h1>
      <p class="login-subtitle">Sign in with your Lingaro account to continue</p>
      <button class="login-btn" id="sign-in-btn" type="button">
        <svg width="20" height="20" viewBox="0 0 23 23" fill="none"><path fill="#f25022" d="M1 1h10v10H1z"/><path fill="#00a4ef" d="M1 12h10v10H1z"/><path fill="#7fba00" d="M12 1h10v10H12z"/><path fill="#ffb900" d="M12 12h10v10H12z"/></svg>
        Sign in with Microsoft
      </button>
    </div>
  </div>
```

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat(auth): add MSAL.js CDN, login screen, and user info to HTML"
```

---

### Task 6: Add login screen and user info CSS

**Files:**
- Modify: `assets/css/style.css`

- [ ] **Step 1: Add login screen and user info styles**

Append to `assets/css/style.css`:

```css
/* Login screen */
.login-screen{position:fixed;inset:0;z-index:2000;background:#fafafa;display:flex;align-items:center;justify-content:center}
.login-card{text-align:center;background:#fff;border-radius:16px;padding:48px;box-shadow:0 4px 24px rgba(0,0,0,0.08);max-width:400px;width:90%}
.login-logo{height:40px;margin-bottom:24px}
.login-title{font-size:1.75rem;font-weight:700;color:#1a1a2e;margin-bottom:8px}
.login-subtitle{font-size:1rem;color:#64648c;margin-bottom:32px}
.login-btn{display:inline-flex;align-items:center;gap:10px;padding:14px 28px;font-size:1rem;font-weight:600;font-family:inherit;background:#fff;border:2px solid #e5e5f0;border-radius:10px;cursor:pointer;color:#1a1a2e;transition:all 0.2s ease}
.login-btn:hover{border-color:#783cbe;box-shadow:0 4px 12px rgba(120,60,190,0.15)}

/* User info in header */
.user-info{display:flex;align-items:center;gap:8px}
.user-name{font-size:0.875rem;font-weight:500;color:#1a1a2e}
.admin-badge{font-size:0.7rem;font-weight:600;color:#783cbe;background:rgba(120,60,190,0.1);padding:2px 8px;border-radius:10px}
```

- [ ] **Step 2: Commit**

```bash
git add assets/css/style.css
git commit -m "feat(auth): add login screen and user info styles"
```

---

### Task 7: Integrate MSAL.js into search.js

**Files:**
- Modify: `assets/js/search.js`

This is the largest frontend change. We need to:
1. Initialize MSAL.js
2. Gate the app behind authentication
3. Wrap all fetch calls to attach Bearer tokens
4. Handle sign-in/sign-out

- [ ] **Step 1: Add MSAL initialization and auth-aware fetch wrapper at the top of search.js**

At the very beginning of the IIFE (after `'use strict';` on line 8), add:

```javascript
  // --- MSAL Authentication ---
  let msalInstance = null;
  let currentAccount = null;
  let currentUserInfo = null; // from /api/me

  function initMsal() {
    const config = window.MSAL_CONFIG;
    if (!config || !config.clientId) return false;
    msalInstance = new msal.PublicClientApplication({
      auth: {
        clientId: config.clientId,
        authority: config.authority,
        redirectUri: config.redirectUri,
      },
      cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: false,
      },
    });
    return true;
  }

  async function handleRedirectAndGetAccount() {
    if (!msalInstance) return null;
    // Handle redirect response (if returning from login)
    try {
      const response = await msalInstance.handleRedirectPromise();
      if (response) {
        return response.account;
      }
    } catch (e) {
      console.error('MSAL redirect error:', e);
    }
    // Check for cached accounts
    const accounts = msalInstance.getAllAccounts();
    return accounts.length > 0 ? accounts[0] : null;
  }

  async function getIdToken() {
    if (!msalInstance || !currentAccount) return null;
    try {
      const response = await msalInstance.acquireTokenSilent({
        scopes: ['openid', 'profile', 'email'],
        account: currentAccount,
      });
      return response.idToken;
    } catch (e) {
      console.warn('Silent token acquisition failed, redirecting to login:', e);
      msalInstance.acquireTokenRedirect({
        scopes: ['openid', 'profile', 'email'],
      });
      return null;
    }
  }

  async function authFetch(url, options = {}) {
    const token = await getIdToken();
    if (token) {
      options.headers = options.headers || {};
      if (options.headers instanceof Headers) {
        options.headers.set('Authorization', `Bearer ${token}`);
      } else {
        options.headers['Authorization'] = `Bearer ${token}`;
      }
    }
    return fetch(url, options);
  }

  function signIn() {
    if (!msalInstance) return;
    msalInstance.loginRedirect({
      scopes: ['openid', 'profile', 'email'],
    });
  }

  function signOut() {
    if (!msalInstance) return;
    msalInstance.logoutRedirect({
      postLogoutRedirectUri: window.location.origin,
    });
  }
```

- [ ] **Step 2: Modify the init() function to gate behind auth**

Replace the `init()` function (starting around line 26 after the auth code is added). The new init checks auth first, shows login screen if needed, then proceeds:

```javascript
  async function init() {
    try {
      const msalEnabled = initMsal();

      if (msalEnabled) {
        currentAccount = await handleRedirectAndGetAccount();

        if (!currentAccount) {
          // Show login screen
          document.getElementById('login-screen').style.display = 'flex';
          document.getElementById('sign-in-btn').addEventListener('click', signIn);
          return; // Stop initialization — user must log in
        }

        // Hide login screen, show app
        document.getElementById('login-screen').style.display = 'none';

        // Fetch user info from /api/me
        try {
          const apiBase = window.API_URL || '';
          const meRes = await authFetch(`${apiBase}/api/me`);
          if (meRes.ok) {
            currentUserInfo = await meRes.json();
            // Show user info in header
            const userInfoEl = document.getElementById('user-info');
            const userNameEl = document.getElementById('user-name');
            const adminBadge = document.getElementById('admin-badge');
            if (userInfoEl) userInfoEl.style.display = 'flex';
            if (userNameEl) userNameEl.textContent = currentUserInfo.name || currentUserInfo.email;
            if (adminBadge && currentUserInfo.is_admin) adminBadge.style.display = '';
          }
        } catch (e) {
          console.error('Failed to fetch user info:', e);
        }

        // Sign out button
        const signOutBtn = document.getElementById('sign-out-btn');
        if (signOutBtn) signOutBtn.addEventListener('click', signOut);
      }

      // Load collections for landing page
      await loadCollections();

      // Check URL hash for direct collection link
      const hash = window.location.hash;
      const collectionMatch = hash.match(/collection=(.+)/);

      if (collectionMatch) {
        const collectionName = decodeURIComponent(collectionMatch[1]);
        await showBrowseView(collectionName);
      } else {
        showLandingView();
      }

      // Landing search handler
      const landingSearch = document.getElementById('landing-search-input');
      if (landingSearch) {
        landingSearch.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' && landingSearch.value.trim()) {
            showBrowseView(null, landingSearch.value.trim());
          }
        });
      }

      // Back button
      const backBtn = document.getElementById('back-to-landing');
      if (backBtn) {
        backBtn.addEventListener('click', () => {
          history.pushState(null, '', window.location.pathname);
          showLandingView();
        });
      }

      // Handle browser back/forward
      function handleNavigation() {
        const h = window.location.hash;
        const m = h.match(/collection=(.+)/);
        if (m) {
          showBrowseView(decodeURIComponent(m[1]));
        } else {
          showLandingView();
        }
      }
      window.addEventListener('hashchange', handleNavigation);
      window.addEventListener('popstate', handleNavigation);
    } catch (error) {
      console.error('Init error:', error);
    }
  }
```

- [ ] **Step 3: Replace all fetch() calls with authFetch()**

Search for every `fetch(` call in the file and replace with `authFetch(`. The key instances are:

1. `loadCollections()` — `fetch(\`${apiBase}/api/collections\`)` → `authFetch(...)`
2. Refresh collection handler — `fetch(\`${apiBase}${endpoint}\`, ...)` and status poll → `authFetch(...)`
3. `loadBrowseView()` — the `Promise.all([fetch(...), fetch(...)])` → `Promise.all([authFetch(...), authFetch(...)])`
4. Fallback `loadAllIcons()` — `fetch(window.ICONS_DATA_URL ...)` → keep as regular `fetch` (static file, no auth needed)
5. All icon file fetches for download/copy (fetching from `/icons/` static path) — keep as regular `fetch` (static files don't need auth)
6. All `/api/icons` CRUD calls (PATCH, DELETE, POST) — `fetch(...)` → `authFetch(...)`

The rule: any fetch to `/api/*` endpoints uses `authFetch()`. Fetches to static files (`/icons/*`, `/assets/*`) stay as `fetch()`.

- [ ] **Step 4: Verify the app starts locally**

Run: `cd C:/Users/piotr.palka/workspace/lingaro/Lingaro-icons-catalog && python run_api.py`

Without `AZURE_CLIENT_ID` set, the app should work in dev mode (no login required). Verify the page loads at http://localhost:8000.

- [ ] **Step 5: Commit**

```bash
git add assets/js/search.js
git commit -m "feat(auth): integrate MSAL.js login, auth-gated fetch, user info display"
```

---

## Chunk 3: Configuration & Deployment

### Task 8: Update .env and deploy script

**Files:**
- Modify: `.env`
- Modify: `deploy-azure.ps1`

- [ ] **Step 1: Add auth env vars to .env (local, not committed)**

Append to `.env` (this file should be in `.gitignore` and not committed):

```
# Microsoft Entra ID Authentication
AZURE_CLIENT_ID=aa55ba68-4d3e-46bb-a4a2-d1d38c431a06
AZURE_TENANT_ID=2ee548e1-6be8-4729-b86e-f482e29d2c9f
ADMIN_EMAILS=piotr.palka@lingarogroup.com
```

Ensure `.env` is in `.gitignore`. If a `.env.example` does not exist, create one with placeholder values for documentation.

- [ ] **Step 2: Update deploy-azure.ps1 — add auth env vars**

In `deploy-azure.ps1`, add the new env vars to the `$settings` array (around line 226-229). Add after the existing settings:

```powershell
$settings = @(
    "SCM_DO_BUILD_DURING_DEPLOYMENT=true",
    "WEBSITE_RUN_FROM_PACKAGE=0",
    "AZURE_CLIENT_ID=aa55ba68-4d3e-46bb-a4a2-d1d38c431a06",
    "AZURE_TENANT_ID=2ee548e1-6be8-4729-b86e-f482e29d2c9f",
    "ADMIN_EMAILS=piotr.palka@lingarogroup.com"
)
```

- [ ] **Step 3: Commit**

```bash
git add deploy-azure.ps1
git commit -m "feat(auth): add Azure AD config to deploy script"
```

---

### Task 9: Run full test suite and verify

**Files:** None (verification only)

- [ ] **Step 1: Run all tests**

Run: `cd C:/Users/piotr.palka/workspace/lingaro/Lingaro-icons-catalog && python -m pytest tests/ -v`

Expected: All tests PASS

- [ ] **Step 2: Start the app and verify login flow works**

Run: `cd C:/Users/piotr.palka/workspace/lingaro/Lingaro-icons-catalog && python run_api.py`

With `AZURE_CLIENT_ID` set in `.env`:
1. Visit http://localhost:8000
2. Should see the login screen with "Sign in with Microsoft" button
3. Click sign in → redirect to Microsoft login
4. After login → app loads with user name in header
5. API calls should work with the token

- [ ] **Step 3: Verify dev mode still works**

Temporarily remove `AZURE_CLIENT_ID` from `.env`:
1. Restart the app
2. Visit http://localhost:8000
3. Should load directly without login screen
4. All API calls should work without auth

- [ ] **Step 4: Final commit if any fixes were needed**

```bash
git add -A
git commit -m "fix(auth): address issues found during manual testing"
```
