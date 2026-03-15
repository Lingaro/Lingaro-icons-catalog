"""FastAPI dependencies for auth, DB connections, storage."""

import os
import sqlite3
from pathlib import Path
from typing import Optional

from fastapi import Header, HTTPException, Depends

from .auth import AzureADTokenValidator, CurrentUser
from .database import get_db, init_db, DEFAULT_DB_PATH
from .services.storage import get_storage, StorageBackend

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
        return validator.validate_token(token)
    except Exception as e:
        raise HTTPException(status_code=401, detail=f"Invalid token: {e}")


def _validate_api_key(x_api_key: str) -> Optional[CurrentUser]:
    expected = os.getenv("API_KEY")
    if expected and x_api_key == expected:
        return CurrentUser(email="api-key-user", name="API Key", is_admin=True)
    return None


def _resolve_user(
    authorization: Optional[str] = Header(None),
    x_api_key: Optional[str] = Header(None),
) -> CurrentUser:
    if not os.getenv("AZURE_CLIENT_ID") and not os.getenv("API_KEY"):
        return CurrentUser(email="dev-mode", name="Developer", is_admin=True)

    if x_api_key:
        user = _validate_api_key(x_api_key)
        if user:
            return user

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


def require_admin(user: CurrentUser = Depends(require_auth)) -> CurrentUser:
    return _check_admin(user)


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
