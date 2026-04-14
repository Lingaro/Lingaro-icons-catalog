"""Tests for FastAPI auth dependencies."""

import os
from unittest.mock import patch, MagicMock

import pytest
from fastapi import HTTPException

from api.auth import CurrentUser


class TestRequireAuth:
    def test_valid_bearer_token(self):
        from api.dependencies import _validate_bearer_token

        mock_validator = MagicMock()
        mock_validator.validate_token.return_value = CurrentUser(
            email="user@lingarogroup.com", name="Test User"
        )

        with patch("api.dependencies._get_validator", return_value=mock_validator):
            user = _validate_bearer_token("Bearer fake-token")
            assert user.email == "user@lingarogroup.com"

    def test_valid_api_key_fallback(self):
        from api.dependencies import _validate_api_key

        with patch.dict(os.environ, {"API_KEY": "test-key"}):
            user = _validate_api_key("test-key")
            assert user is not None
            assert user.email == "api-key-user"

    def test_no_auth_header_raises_401(self):
        from api.dependencies import _resolve_user

        with patch.dict(os.environ, {"AZURE_CLIENT_ID": "some-id", "AZURE_TENANT_ID": "some-tenant"}):
            with pytest.raises(HTTPException) as exc_info:
                _resolve_user(authorization=None, x_api_key=None)
            assert exc_info.value.status_code == 401

    def test_no_auth_configured_raises_503(self):
        from api.dependencies import _resolve_user

        clean_env = {k: v for k, v in os.environ.items()
                     if k not in ("AZURE_CLIENT_ID", "AZURE_TENANT_ID", "API_KEY")}
        with patch.dict(os.environ, clean_env, clear=True):
            with pytest.raises(HTTPException) as exc_info:
                _resolve_user(authorization=None, x_api_key=None)
            assert exc_info.value.status_code == 503


class TestRequireAdmin:
    def test_admin_user(self):
        from api.dependencies import _check_admin

        user = CurrentUser(email="piotr.palka@lingarogroup.com", name="Piotr")
        with patch.dict(os.environ, {"ADMIN_EMAILS": "piotr.palka@lingarogroup.com,other@lingarogroup.com"}):
            result = _check_admin(user)
            assert result.is_admin is True

    def test_non_admin_user_raises_403(self):
        from api.dependencies import _check_admin

        user = CurrentUser(email="regular@lingarogroup.com", name="Regular")
        with patch.dict(os.environ, {"ADMIN_EMAILS": "piotr.palka@lingarogroup.com"}):
            with pytest.raises(HTTPException) as exc_info:
                _check_admin(user)
            assert exc_info.value.status_code == 403

    def test_case_insensitive_admin(self):
        from api.dependencies import _check_admin

        user = CurrentUser(email="Piotr.Palka@LingaroGroup.com", name="Piotr")
        with patch.dict(os.environ, {"ADMIN_EMAILS": "piotr.palka@lingarogroup.com"}):
            result = _check_admin(user)
            assert result.is_admin is True


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

    def test_unknown_key_raises_401(self, tmp_path):
        """An unknown X-API-Key value returns 401."""
        from api.dependencies import _resolve_user

        with patch.dict(os.environ, {"AZURE_CLIENT_ID": "cid", "DATABASE_URL": str(tmp_path / "test.db")}):
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
