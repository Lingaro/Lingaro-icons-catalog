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
