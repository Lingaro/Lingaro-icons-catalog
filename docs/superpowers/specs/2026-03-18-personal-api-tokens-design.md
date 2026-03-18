# Personal API Tokens (PAT) — Design Spec

**Date:** 2026-03-18
**Status:** Approved

## Problem

The app currently has one global `API_KEY` shared by all CLI/agent users. There is no way to identify which user is making a request, revoke access for one person, or let individuals manage their own credentials.

## Solution

Personal API Tokens: authenticated users (Azure AD login) generate their own token via the web UI, set it as `LINGARO_API_KEY` in their CLI config, and the API validates it against a database lookup. One token per user, selectable expiry of 30/60/90 days.

## Constraints

- Only Azure AD authenticated users can generate PATs
- One active token per user (generating a new one replaces the old)
- Tokens expire after 30, 60, or 90 days (user selects at generation time)
- Raw token shown once at generation — never stored, only the SHA-256 hash is persisted
- CLI requires no code changes — token is used via existing `X-API-Key` header
- Global `API_KEY` env var continues to work for admin/system use

## Database

New table added in `api/database.py` alongside existing `icons` and `categories` tables:

```sql
CREATE TABLE IF NOT EXISTS personal_tokens (
    id TEXT PRIMARY KEY,
    user_email TEXT NOT NULL UNIQUE,
    token_hash TEXT NOT NULL,
    name TEXT NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

`user_email` is UNIQUE — enforces one token per user at the DB level. Generating a new token does an `INSERT OR REPLACE` (upsert), atomically invalidating the previous one.

## Token Format

- Raw token: `lingaro_` prefix + 32 random hex bytes = 71 chars total (e.g. `lingaro_a3f2...`)
- Stored: `SHA-256(raw_token)` as hex string
- Validation: hash incoming `X-API-Key` value, compare to DB

The prefix makes PATs visually distinguishable from other secrets.

## API

New router: `api/routers/tokens.py`, mounted at `/api/tokens` in `api/main.py`.
All endpoints require `require_auth` (Azure AD Bearer token — not a PAT itself, to prevent bootstrapping issues).

### `GET /api/tokens/me`
Returns current token metadata for the authenticated user, or 404 if none exists.

```json
{
  "name": "My CLI token",
  "expires_at": "2026-06-17T10:23:00",
  "created_at": "2026-03-18T10:23:00",
  "expired": false
}
```

### `POST /api/tokens/me`
Generate or replace token. Request body:

```json
{
  "expires_days": 30,
  "name": "My CLI token"
}
```

`expires_days` must be one of `[30, 60, 90]` — validated via Pydantic. Returns raw token **once**:

```json
{
  "token": "lingaro_a3f2...",
  "expires_at": "2026-06-17T10:23:00",
  "warning": "Copy this token now — it will not be shown again."
}
```

### `DELETE /api/tokens/me`
Revoke current token. Returns 204 No Content. If no token exists, returns 404.

## Auth Flow Change

`api/dependencies.py` `_resolve_user()` updated:

```
1. No AZURE_CLIENT_ID and no API_KEY → dev mode (unchanged)
2. X-API-Key present:
   a. Matches global API_KEY env var → CurrentUser(email="api-key-user", is_admin=True)
   b. Hash matches personal_tokens table → CurrentUser(email=token.user_email, is_admin=False)
      - If token expired → 401 "Token expired"
   c. No match → 401 "Invalid token"
3. Authorization: Bearer present → Azure AD JWT validation (unchanged)
4. No auth → 401
```

PAT users get `is_admin=False`. Admin operations remain restricted to Azure AD users in `ADMIN_EMAILS` and global API key users.

## Web UI

Changes to `index.html` and `assets/js/search.js`.

### UI placement
"My Token" section added to the header, visible only when user is logged in. Shown next to the user name / sign-out button.

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

**Token exists:**
- Token name and expiry date shown
- "Revoke" button (with confirmation)
- No raw value shown

### Implementation
Uses existing `authFetch()` for all `/api/tokens/me` calls. Plain JS, no new dependencies.

## Error Handling

| Scenario | Response |
|---|---|
| Expired token in `X-API-Key` | 401 `{"detail": "Token expired"}` |
| Unknown token in `X-API-Key` | 401 `{"detail": "Invalid token"}` |
| `expires_days` not in [30,60,90] | 422 Unprocessable Entity |
| `POST /api/tokens/me` with PAT auth | 401 (PATs cannot generate PATs) |
| `DELETE /api/tokens/me` — no token | 404 |

## Testing

- Unit tests: `hash_token()`, `verify_token()`, expiry check logic
- Integration tests (FastAPI `TestClient`):
  - Generate token → use token → verify identity
  - Expired token rejected
  - Revoke token → old token rejected
  - Replace token → old token invalid, new token works
  - PAT user cannot call admin endpoints

## What Does NOT Change

- Global `API_KEY` env var behaviour
- Azure AD login flow
- CLI code — users set `LINGARO_API_KEY=<their-pat>` same as before
- All existing routes and auth dependencies
