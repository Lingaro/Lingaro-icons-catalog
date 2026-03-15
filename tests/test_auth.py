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

from cryptography.hazmat.primitives.asymmetric import rsa
from cryptography.hazmat.primitives import serialization

_private_key = rsa.generate_private_key(public_exponent=65537, key_size=2048)
_public_key = _private_key.public_key()

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
    v = AzureADTokenValidator(tenant_id=TEST_TENANT_ID, client_id=TEST_CLIENT_ID)
    v._signing_keys = {"test-key-id": PUBLIC_KEY_PEM}
    v._keys_fetched_at = time.time()
    return v


class TestTokenValidation:
    def test_valid_token(self, validator):
        token = _make_token()
        user = validator.validate_token(token)
        assert isinstance(user, CurrentUser)
        assert user.email == "user@lingarogroup.com"
        assert user.name == "Test User"

    def test_expired_token(self, validator):
        token = _make_token(expired=True)
        with pytest.raises(Exception):
            validator.validate_token(token)

    def test_wrong_audience(self, validator):
        token = _make_token({"aud": "wrong-client-id"})
        with pytest.raises(Exception):
            validator.validate_token(token)

    def test_wrong_issuer(self, validator):
        token = _make_token({"iss": "https://evil.com"})
        with pytest.raises(Exception):
            validator.validate_token(token)

    def test_email_claim_fallback(self, validator):
        token = _make_token({"preferred_username": None, "email": "fallback@lingarogroup.com"})
        user = validator.validate_token(token)
        assert user.email == "fallback@lingarogroup.com"

    def test_missing_email_claims(self, validator):
        token = _make_token({"preferred_username": None, "email": None})
        user = validator.validate_token(token)
        assert user.email == "unknown"


class TestAdminCheck:
    def test_is_admin(self):
        user = CurrentUser(email="admin@lingarogroup.com", name="Admin", is_admin=False)
        assert user.email in ["admin@lingarogroup.com", "other@lingarogroup.com"]

    def test_is_not_admin(self):
        user = CurrentUser(email="user@lingarogroup.com", name="User", is_admin=False)
        assert user.email not in ["admin@lingarogroup.com"]

    def test_case_insensitive_admin_check(self):
        user = CurrentUser(email="Admin@LingaroGroup.com", name="Admin", is_admin=False)
        assert user.email.lower() in ["admin@lingarogroup.com"]
