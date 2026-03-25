# CLI API Key Auth for Production — Design Spec

**Date:** 2026-03-18
**Status:** Approved

## Problem

The production deployment at `https://lingaro-icons-catalog.azurewebsites.net/` requires Azure AD
authentication. The CLI (`cli-anything-lingaro-catalog`) only supports `X-API-Key` header auth,
so AI agents (Claude Code `find-icon` skill) cannot connect to production.

## Root Cause

`api/dependencies.py` `_resolve_user()` checks auth in this order:

1. If neither `AZURE_CLIENT_ID` nor `API_KEY` is set → dev mode (no auth)
2. If `X-API-Key` header present and matches `API_KEY` env var → granted
3. If `Authorization: Bearer` header present → validate Azure AD JWT
4. Otherwise → 401

Production has `AZURE_CLIENT_ID` set (so dev mode is inactive) but **no `API_KEY`**,
so the `X-API-Key` branch never fires. The CLI has no Bearer token capability.
Setting `API_KEY` activates the already-implemented key branch — no code changes needed.

## Changes

### 1. Azure App Service — set `API_KEY` (one-time)

```bash
az webapp config appsettings set \
  --name lingaro-icons-catalog \
  --resource-group rg-Lingaro-Databricks-Demo-01 \
  --settings "API_KEY=<secret>"
```

`az webapp config appsettings set` merges settings, so this does not affect other settings.
No app deployment needed.

### 2. `deploy-azure.ps1` — add `-ApiKey` parameter

**Why this is required:** future runs of the deploy script call `az webapp config appsettings set`
with the `$settings` array. If `API_KEY` is not in that array, Azure will preserve existing
settings it doesn't mention — but only if the `--settings` call doesn't explicitly overwrite.
To be safe and self-documenting, add a parameter so the key is always passed:

```powershell
param(
    ...
    [string]$ApiKey = ""
)

# In the $settings array block:
if ($ApiKey) {
    $settings += "API_KEY=$ApiKey"
    Write-Success "API key configured"
} else {
    Write-Info "No API key provided - CLI/agent auth will be disabled"
}
```

The key should NOT be committed as a hardcoded default. Pass it at deploy time:
```powershell
.\deploy-azure.ps1 -ApiKey "<secret>"
```

### 3. Claude Code env vars — set in `~/.claude/settings.json`

Add to the `env` block in Claude Code's user settings so all sessions inherit them:

```json
{
  "env": {
    "LINGARO_CATALOG_URL": "https://lingaro-icons-catalog.azurewebsites.net",
    "LINGARO_API_KEY": "<secret>"
  }
}
```

`CLIConfig.load()` reads `LINGARO_CATALOG_URL` and `LINGARO_API_KEY` from env.
`CatalogClient._headers()` sends `X-API-Key: <value>` when `api_key` is set.
No code changes needed.

### 4. `find-icon` SKILL.md — update for production

File: `.claude/skills/find-icon/SKILL.md`

**Line 22** — replace:
```
The CLI `cli-anything-lingaro-catalog` is installed in PATH. The API server must be running at the configured URL (default: http://localhost:8000).
```
With:
```
The CLI `cli-anything-lingaro-catalog` is installed in PATH. It connects to the production catalog at `https://lingaro-icons-catalog.azurewebsites.net` via `LINGARO_CATALOG_URL` and `LINGARO_API_KEY` env vars (set in `~/.claude/settings.json`). For local dev, omit those vars and run `cli-anything-lingaro-catalog server start`.
```

**Line 98** — replace:
```
- If the server isn't running, suggest: `cli-anything-lingaro-catalog server start`
```
With:
```
- Production is the default when `LINGARO_CATALOG_URL` is set. For local dev only: `cli-anything-lingaro-catalog server start`
```

## Verification

Run all commands in bash (git bash on Windows).

**Step 1 — raw CLI against production:**
```bash
LINGARO_CATALOG_URL=https://lingaro-icons-catalog.azurewebsites.net LINGARO_API_KEY=<secret> cli-anything-lingaro-catalog search "database"
```
Expected: search results returned, no 401 error.

**Step 2 — confirm deploy script parameter:**
```powershell
.\deploy-azure.ps1 -ZipOnly -ApiKey "test-value"
```
Expected: script runs without error and shows "API key configured" message (ZipOnly skips actual deploy).

**Step 3 — find-icon skill end-to-end:**
With env vars set in `~/.claude/settings.json`, invoke the `find-icon` skill in a Claude Code
session and confirm it returns results from the production catalog without errors.

## What is NOT changing

- No API application code changes
- No CLI source code changes
- Azure AD browser login flow for human users is unaffected
- Local dev mode (no env vars set) still works as before
