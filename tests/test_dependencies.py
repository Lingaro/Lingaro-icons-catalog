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

    def test_dev_mode_no_auth_required(self):
        from api.dependencies import _resolve_user

        clean_env = {k: v for k, v in os.environ.items()
                     if k not in ("AZURE_CLIENT_ID", "AZURE_TENANT_ID", "API_KEY")}
        with patch.dict(os.environ, clean_env, clear=True):
            user = _resolve_user(authorization=None, x_api_key=None)
            assert user.email == "dev-mode"


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
