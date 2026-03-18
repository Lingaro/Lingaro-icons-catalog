# Personal API Tokens (PAT) — Design Spec

**Date:** 2026-03-18
**Status:** Approved

## Problem

The app currently has one global `API_KEY` shared by all CLI/agent users. There is no way to identify which user is making a request, revoke access for one person, or let individuals manage their own credentials.

## Solution

Personal API Tokens: authenticated users (Azure AD login) generate their own token via the web UI, set it as `LINGARO_API_KEY` in their CLI config, and the API validates it against a database lookup. One token per user, selectable expiry of 30/60/90 days.

## Constraints

- Only Azure AD authenticated users can generate PATs (Bearer token required — PATs cannot create or revoke PATs)
- One active token per user (generating a new one replaces the old)
- Tokens expire after 30, 60, or 90 days (user selects at generation time)
- Raw token shown once at generation — never stored, only the SHA-256 hash is persisted
- CLI requires no code changes — token is used via existing `X-API-Key` header
- Global `API_KEY` env var continues to work for admin/system use

## Database

New table added in `api/database.py` alongside existing `icons` and `categories` tables:

```sql
CREATE TABLE IF NOT EXISTS personal_tokens (
    id TEXT PRIMARY KEY,           -- UUID4, regenerated on each token replacement
    user_email TEXT NOT NULL UNIQUE,
    token_hash TEXT NOT NULL,      -- SHA-256(raw_token) as hex string
    name TEXT NOT NULL,
    expires_at TIMESTAMP NOT NULL, -- stored as UTC
    created_at TIMESTAMP NOT NULL  -- UTC, set explicitly (not DEFAULT) so replacement resets it correctly
);

CREATE INDEX IF NOT EXISTS idx_personal_tokens_hash ON personal_tokens(token_hash);
```

**Upsert strategy:** use `INSERT INTO ... ON CONFLICT(user_email) DO UPDATE SET id=..., token_hash=..., name=..., expires_at=..., created_at=...` (explicit conflict resolution rather than `INSERT OR REPLACE`, which would silently reset all defaults). `created_at` reflects when the *current token* was generated — it resets on replacement, which is intentional.

## Token Format

- Raw token: `lingaro_` prefix (8 chars) + 32 random bytes as hex (64 chars) = **72 chars total**
- Stored: `SHA-256(raw_token)` as hex string
- Validation: hash incoming `X-API-Key` value, compare to DB

The prefix makes PATs visually distinguishable from other secrets.

## CurrentUser — auth_method field

`CurrentUser` dataclass gains an `auth_method` field:

```python
@dataclass
class CurrentUser:
    email: str
    name: str
    is_admin: bool = False
    auth_method: str = "bearer"  # "bearer" | "api_key" | "pat"
```

This allows token endpoints to enforce that only Bearer-authenticated users can manage tokens.

## Auth Flow Change

`api/dependencies.py` updated with:

### New dependency: `require_bearer_auth`

```python
def require_bearer_auth(user: CurrentUser = Depends(require_auth)) -> CurrentUser:
    if user.auth_method != "bearer":
        raise HTTPException(status_code=401, detail="Bearer authentication required")
    return user
```

Used only by the token router — prevents PATs from generating or revoking PATs.

### Updated `_resolve_user()`

```
1. No AZURE_CLIENT_ID and no API_KEY → dev mode
   CurrentUser(email="dev-mode", is_admin=True, auth_method="api_key")

2. X-API-Key present:
   a. Matches global API_KEY env var (constant-time comparison via hmac.compare_digest)
      → CurrentUser(email="api-key-user", is_admin=True, auth_method="api_key")
   b. Hash matches personal_tokens table AND token not expired
      → CurrentUser(email=token.user_email, is_admin=False, auth_method="pat")
   c. Hash matches but token IS expired → 401 "Token expired"
   d. No match → 401 "Invalid token"

3. Authorization: Bearer present → Azure AD JWT validation (unchanged)
   → CurrentUser(..., auth_method="bearer")

4. No auth → 401
```

**Note on timing safety:** global `API_KEY` comparison now uses `hmac.compare_digest()` instead of `==` to prevent timing side-channel attacks.

**Note on dev mode:** in local dev (no env vars set), token endpoints are reachable and will operate against the local DB under `email="dev-mode"`. `DELETE /api/tokens/me` will return 404 until a token is generated in the same session. This is acceptable for local development.

**Token rotation atomicity:** the upsert is a single SQL statement — atomic. In-flight requests using the old token will fail immediately after replacement. This is a documented trade-off (no grace period).

## API

New router: `api/routers/tokens.py`, mounted at `/api/tokens` in `api/main.py`.
All endpoints use `require_bearer_auth` (Azure AD Bearer token only).

### `GET /api/tokens/me`
Returns current token metadata, or 404 if no token exists.

```json
{
  "name": "My CLI token",
  "expires_at": "2026-06-17T10:23:00Z",
  "created_at": "2026-03-18T10:23:00Z",
  "expired": false
}
```

`expired` is a computed field: `expires_at < utcnow()`. Returns 200 even if expired (metadata is still readable).

### `POST /api/tokens/me`
Generate or replace token. Request body:

```json
{
  "expires_days": 30,
  "name": "My CLI token"
}
```

- `expires_days`: must be one of `[30, 60, 90]` — Pydantic `Literal[30, 60, 90]`
- `name`: required, 1–100 characters

Returns raw token **once**:

```json
{
  "token": "lingaro_a3f2...",
  "expires_at": "2026-06-17T10:23:00Z",
  "warning": "Copy this token now — it will not be shown again."
}
```

All timestamps are UTC (ISO 8601 with Z suffix).

### `DELETE /api/tokens/me`
Revoke current token. Returns 204 No Content. Returns 404 if no token exists.

## Error Handling

| Scenario | Response |
|---|---|
| Expired token in `X-API-Key` | 401 `{"detail": "Token expired"}` |
| Unknown token in `X-API-Key` | 401 `{"detail": "Invalid token"}` |
| `expires_days` not in [30,60,90] | 422 Unprocessable Entity |
| `name` empty or > 100 chars | 422 Unprocessable Entity |
| `POST /api/tokens/me` with PAT auth | 401 `{"detail": "Bearer authentication required"}` |
| `DELETE /api/tokens/me` with PAT auth | 401 `{"detail": "Bearer authentication required"}` |
| `GET /api/tokens/me` — no token exists | 404 |
| `DELETE /api/tokens/me` — no token exists | 404 |

## Web UI

Changes to `index.html` and `assets/js/search.js`.

### UI placement
"My Token" section added to the header, visible only when user is logged in (Bearer auth). Shown next to user name / sign-out button.

### States

**No token:**
- Expiry selector: radio buttons for 30 / 60 / 90 days
- Token name input (default: "My CLI token")
- "Generate Token" button

**Token just generated:**
- Raw token displayed in a read-only `<input>` with "Copy" button
- Warning banner: "Copy this token now — it will not be shown again."
- Expiry date shown
- "Done" button dismisses the token display

**Token exists (not expired):**
- Token name and expiry date shown
- "Revoke" button (with confirmation dialog)
- No raw value shown

**Token exists (expired):**
- Token name, expiry date, "Expired" badge
- "Generate New Token" button
- No raw value shown

### Implementation
Uses existing `authFetch()` for all `/api/tokens/me` calls. Plain JS, no new dependencies.

## Testing

**Unit tests:**
- `hash_token(raw) → hex_string`
- `verify_token(raw, hash) → bool`
- Expiry check: `is_expired(expires_at_utc) → bool`
- `hmac.compare_digest` used for global key comparison

**Integration tests (FastAPI TestClient):**
- Generate token → use token → verify identity (correct email in `/api/me`)
- Expired token rejected with 401 "Token expired"
- Replace token → old token rejected, new token accepted
- Revoke token → 204, subsequent use → 401
- PAT user cannot call `POST /api/tokens/me` → 401
- PAT user cannot call `DELETE /api/tokens/me` → 401
- `GET /api/tokens/me` with no token → 404
- `GET /api/tokens/me` with expired token → 200 with `expired: true`
- `DELETE /api/tokens/me` with no token → 404
- PAT user cannot call admin endpoints → 403

## What Does NOT Change

- Global `API_KEY` env var behaviour (except comparison now uses `hmac.compare_digest`)
- Azure AD login flow
- CLI code — users set `LINGARO_API_KEY=<their-pat>` same as before
- All existing routes and auth dependencies (except `_resolve_user` internals)
