# Microsoft Authentication for Lingaro Icons Catalog

**Date:** 2026-03-15
**Status:** Approved

## Overview

Add Microsoft Entra ID (Azure AD) authentication to the Lingaro Icons Catalog. All users must sign in with their Lingaro corporate account to access the app. Admin operations (upload, delete, modify icons) are restricted to a configurable list of email addresses.

## Decisions

- **Auth approach:** MSAL.js on frontend + JWT validation on backend (stateless)
- **Tenant:** Single tenant — Lingaro only (`2ee548e1-6be8-4729-b86e-f482e29d2c9f`)
- **Admin mechanism:** Hardcoded email list via `ADMIN_EMAILS` environment variable
- **Login UX:** Redirect flow (most common, works everywhere)
- **PowerPoint add-in:** Unchanged — continues using API key, no auth required
- **App registration:** Already exists — client ID `aa55ba68-4d3e-46bb-a4a2-d1d38c431a06`

## Azure AD App Registration

- **Application (client) ID:** `aa55ba68-4d3e-46bb-a4a2-d1d38c431a06`
- **Directory (tenant) ID:** `2ee548e1-6be8-4729-b86e-f482e29d2c9f`
- **Object ID:** `2bda8732-06ed-41d7-b4e3-bb051f1cec05`

### Required Portal Configuration

1. **Authentication** → Add redirect URIs:
   - `http://localhost:8000` (development)
   - `https://lingaro-icons-catalog.azurewebsites.net` (production)
2. **Authentication** → Enable "ID tokens" and "Access tokens" under Implicit grant
3. Confirm "Single tenant" is selected

## Authentication Flow

1. User visits the app → MSAL.js checks for cached session
2. If not logged in → show login screen with "Sign in with Microsoft" button
3. User clicks "Sign in" → redirect to `login.microsoftonline.com/2ee548e1-...`
4. After successful login → redirect back with tokens
5. MSAL.js stores tokens in browser session storage
6. All API calls include `Authorization: Bearer <access_token>` header
7. MSAL.js handles silent token refresh automatically (~1h token lifetime)
8. "Sign out" clears MSAL cache and redirects to Microsoft logout endpoint

## Backend Token Validation

### New Dependencies

Two new FastAPI dependencies replace `require_api_key()`:

**`require_auth()`** — applied to all `/api/*` endpoints:
- Extracts Bearer token from `Authorization` header
- Validates JWT signature against Azure AD's JWKS endpoint (`https://login.microsoftonline.com/2ee548e1-.../discovery/v2.0/keys`)
- Validates: signature, audience (`aa55ba68-...`), issuer, expiry
- JWKS keys cached in memory with ~24h TTL, refreshed on cache miss
- Returns `CurrentUser` object (email, name, roles)
- Also accepts `X-API-Key` header as alternative (for PowerPoint add-in backward compatibility)

**`require_admin()`** — applied to write/admin endpoints:
- Calls `require_auth()` first
- Checks if user's email (from `preferred_username` or `email` claim) is in `ADMIN_EMAILS` list
- Returns 403 Forbidden if not an admin

### Endpoint Protection Matrix

| Endpoint group | Current auth | New auth |
|---|---|---|
| `GET /api/search`, `/api/icons`, `/api/categories`, etc. | None | `require_auth()` |
| `POST/PATCH/DELETE /api/icons`, `/api/admin/*` | API key | `require_admin()` |
| `GET /` (index.html), `/assets/*`, `/icons/*` | None | None (static files) |

## Frontend Changes

### MSAL.js Integration (`assets/js/search.js`)

- Load MSAL.js v3 from CDN (`@azure/msal-browser`)
- Initialize `PublicClientApplication` with:
  - `clientId`: `aa55ba68-4d3e-46bb-a4a2-d1d38c431a06`
  - `authority`: `https://login.microsoftonline.com/2ee548e1-6be8-4729-b86e-f482e29d2c9f`
  - `redirectUri`: `window.location.origin`

### Login Screen

- Before loading collections/icons, check if user is authenticated
- If not → show centered login screen with Lingaro branding and "Sign in with Microsoft" button
- If yes → load the app normally

### Header Changes (`index.html`)

- Add user info display (name) in the top-right corner
- Add "Sign out" button
- If user is admin → show subtle indicator badge

### API Call Changes

- Wrap all `fetch()` calls to attach Bearer token header automatically
- Before each call, use `acquireTokenSilent()` for fresh token
- If silent acquisition fails → redirect to login

## Configuration

### New Environment Variables

| Variable | Value | Required |
|---|---|---|
| `AZURE_CLIENT_ID` | `aa55ba68-4d3e-46bb-a4a2-d1d38c431a06` | Yes |
| `AZURE_TENANT_ID` | `2ee548e1-6be8-4729-b86e-f482e29d2c9f` | Yes |
| `ADMIN_EMAILS` | `piotr.palka@lingarogroup.com` | Yes |

### Local Development

- Add vars to `.env` file
- Without `AZURE_CLIENT_ID` set, fall back to "no auth" mode (current behavior) for easy local dev

## Files Changed

| File | Change |
|---|---|
| `api/dependencies.py` | Replace `require_api_key()` with `require_auth()`, `require_admin()`, add JWKS validation, `CurrentUser` model |
| `api/routers/admin.py` | Switch from `require_api_key` to `require_admin` dependency |
| `api/routers/icons.py` | Add `require_auth` to read endpoints, `require_admin` to write endpoints |
| `api/routers/categories.py` | Add `require_auth` to all endpoints |
| `api/routers/search.py` | Add `require_auth` to search endpoints |
| `index.html` | Add MSAL.js CDN script, user info in header, sign-out button |
| `assets/js/search.js` | Add MSAL init, login screen, token-attached fetch wrapper, auth gating |
| `requirements.txt` | Add `python-jose[cryptography]`, `httpx` |
| `.env` | Add `AZURE_CLIENT_ID`, `AZURE_TENANT_ID`, `ADMIN_EMAILS` |
| `deploy-azure.ps1` | Add new env vars to Azure config |
| `tests/test_auth.py` | Update tests for new auth mechanism |

### Unchanged

- PowerPoint add-in (continues using API key)
- Database schema (no user tables needed)
- Storage layer
- Icon processing/annotation logic

## New Python Dependencies

- `python-jose[cryptography]` — JWT validation
- `httpx` — fetching JWKS keys (async-friendly)
