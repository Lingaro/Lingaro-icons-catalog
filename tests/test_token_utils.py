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
