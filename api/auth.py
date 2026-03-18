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
    auth_method: str = "bearer"  # "bearer" | "api_key" | "pat"


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
        """Validate an Azure AD ID token and return user info."""
        unverified_header = jwt.get_unverified_header(token)
        kid = unverified_header.get("kid")

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
