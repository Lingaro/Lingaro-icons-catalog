"""Integration tests for Personal API Token endpoints."""

import os
from datetime import datetime, timezone, timedelta
from unittest.mock import patch

import pytest
from fastapi.testclient import TestClient


@pytest.fixture
def db_path(tmp_path):
    return tmp_path / "test_tokens.db"


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
            from api import dependencies
            # Clear fixture's bearer override so require_bearer_auth runs for real
            saved = dict(app.dependency_overrides)
            app.dependency_overrides.clear()
            try:
                with TestClient(app) as client:
                    resp = client.post(
                        "/api/tokens/me",
                        json={"expires_days": 30, "name": "CLI"},
                        headers={"X-API-Key": token},
                    )
                    assert resp.status_code == 401
            finally:
                app.dependency_overrides.update(saved)

    def test_pat_cannot_delete_pat(self, bearer_client, db_path):
        """A PAT cannot be used to call the token revocation endpoint."""
        create_resp = bearer_client.post("/api/tokens/me", json={"expires_days": 30, "name": "CLI"})
        token = create_resp.json()["token"]

        env = {k: v for k, v in os.environ.items()}
        env["DATABASE_URL"] = str(db_path)
        env["AZURE_CLIENT_ID"] = "test-client-id"
        with patch.dict(os.environ, env, clear=True):
            from api.main import app
            from api import dependencies
            # Clear fixture's bearer override so require_bearer_auth runs for real
            saved = dict(app.dependency_overrides)
            app.dependency_overrides.clear()
            try:
                with TestClient(app) as client:
                    resp = client.delete("/api/tokens/me", headers={"X-API-Key": token})
                    assert resp.status_code == 401
            finally:
                app.dependency_overrides.update(saved)


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
