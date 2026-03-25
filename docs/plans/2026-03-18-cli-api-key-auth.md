# CLI API Key Auth for Production — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Enable the CLI and `find-icon` skill to authenticate against the production Azure-hosted API using a static API key.

**Architecture:** The server's `X-API-Key` auth path already exists in `api/dependencies.py` but is dormant — activating it requires only setting `API_KEY` in Azure App Service. The CLI already sends `X-API-Key` when configured. The plan is four independent changes: set the server env var, harden the deploy script, configure Claude Code env vars, and update the skill docs.

**Tech Stack:** Azure CLI, PowerShell, Claude Code `~/.claude/settings.json`, bash

---

## Files Changed

| File | Change |
|------|--------|
| `deploy-azure.ps1` | Add `-ApiKey` param + conditional settings block |
| `~/.claude/settings.json` | Add `env` block with `LINGARO_CATALOG_URL` + `LINGARO_API_KEY` |
| `.claude/skills/find-icon/SKILL.md` | Update lines 22 and 98 for production-first docs |

No application code is changed.

---

### Task 1: Set `API_KEY` on Azure App Service

**Files:** none (Azure config only)

- [ ] **Step 1: Verify you are logged into Azure CLI**

```bash
az account show --query "user.name" -o tsv
```

Expected: your Lingaro email address. If not logged in, run `az login`.

- [ ] **Step 2: Set the API key in Azure App Service**

Choose a strong random secret (e.g. generate with `openssl rand -hex 32`), then:

```bash
az webapp config appsettings set \
  --name lingaro-icons-catalog \
  --resource-group rg-Lingaro-Databricks-Demo-01 \
  --settings "API_KEY=<your-secret>"
```

Expected output: JSON list of all app settings including the new `API_KEY` entry.

- [ ] **Step 3: Verify the setting was saved**

```bash
az webapp config appsettings list \
  --name lingaro-icons-catalog \
  --resource-group rg-Lingaro-Databricks-Demo-01 \
  --query "[?name=='API_KEY'].value" -o tsv
```

Expected: your secret value printed. No deployment needed — Azure hot-reloads env vars.

---

### Task 2: Update `deploy-azure.ps1` to accept `-ApiKey`

**Files:**
- Modify: `deploy-azure.ps1` (param block ~line 42, settings block ~lines 226-240)

- [ ] **Step 1: Add `-ApiKey` to the param block**

In `deploy-azure.ps1`, line 52 currently reads `[switch]$ZipOnly` with no trailing comma (it was the last param). Two edits needed:

1. Add a comma to make it `[switch]$ZipOnly,`
2. Add a new line after it: `    [string]$ApiKey = ""`

The full param block should now end:
```powershell
    [switch]$SkipZip,
    [switch]$ZipOnly,
    [string]$ApiKey = ""
)
```

- [ ] **Step 2: Add API key handling to the settings block**

The `$settings` array is consumed by `az webapp config appsettings set` at line 242. Insert the following block **between** the closing `}` of the `if ($OpenAIKey)` block (line 240) and the `az webapp config appsettings set` call (line 242), so the key is included in the array before it is sent:

```powershell
if ($ApiKey) {
    $settings += "API_KEY=$ApiKey"
    Write-Success "API key configured"
} else {
    Write-Info "No API key provided - CLI/agent auth will be disabled"
    Write-Info "Pass -ApiKey <secret> to enable"
}
```

- [ ] **Step 3: Add `-ApiKey` to the .SYNOPSIS docs block**

In the comment block at the top of the script (around line 19), add after the `OpenAIKey` param doc:

```powershell
.PARAMETER ApiKey
    Static API key for CLI/agent access (machine-to-machine auth). Do not hardcode — pass at deploy time.
```

- [ ] **Step 4: Verify the script parses and the param is documented**

```powershell
Get-Help .\deploy-azure.ps1 -Parameter ApiKey
```

Expected: shows the ApiKey parameter description. Note: `-ZipOnly` exits before the settings block runs, so you cannot use `-ZipOnly` to test the `API_KEY` setting logic — a real deploy (or dry-run without `-ZipOnly`) is needed to exercise that path.

- [ ] **Step 5: Commit**

```bash
git add deploy-azure.ps1
git commit -m "feat(deploy): add -ApiKey parameter for CLI/agent auth"
```

---

### Task 3: Configure Claude Code env vars

**Files:**
- Modify: `~/.claude/settings.json`

- [ ] **Step 1: Open your Claude Code user settings**

```bash
cat ~/.claude/settings.json
```

Note the current content. You will merge into it.

- [ ] **Step 2: Add the env block**

Add (or merge into existing) `env` block with the production URL and API key:

```json
{
  "env": {
    "LINGARO_CATALOG_URL": "https://lingaro-icons-catalog.azurewebsites.net",
    "LINGARO_API_KEY": "<your-secret>"
  }
}
```

Use the same secret value from Task 1. This file is not in the project repo — it lives in your home directory and is not committed.

- [ ] **Step 3: Verify env vars are picked up inside Claude Code**

The env vars in `~/.claude/settings.json` are injected by the Claude Code process — they are NOT visible in a standalone terminal. To verify, start a new Claude Code session and use the Bash tool to run:

```bash
echo $LINGARO_CATALOG_URL
echo $LINGARO_API_KEY
```

Expected: the production URL and secret printed. If empty, restart Claude Code to reload settings.

---

### Task 4: Update `find-icon` SKILL.md for production

**Files:**
- Modify: `.claude/skills/find-icon/SKILL.md` (lines 22 and 98)

- [ ] **Step 1: Update line 22 — server connection description**

Replace:
```
The CLI `cli-anything-lingaro-catalog` is installed in PATH. The API server must be running at the configured URL (default: http://localhost:8000).
```

With:
```
The CLI `cli-anything-lingaro-catalog` is installed in PATH. It connects to the production catalog at `https://lingaro-icons-catalog.azurewebsites.net` via `LINGARO_CATALOG_URL` and `LINGARO_API_KEY` env vars (set in `~/.claude/settings.json`). For local dev, omit those vars and run `cli-anything-lingaro-catalog server start`.
```

- [ ] **Step 2: Update line 98 — tips section**

Replace:
```
- If the server isn't running, suggest: `cli-anything-lingaro-catalog server start`
```

With:
```
- Production is the default when `LINGARO_CATALOG_URL` is set. For local dev only: `cli-anything-lingaro-catalog server start`
```

- [ ] **Step 3: Commit**

```bash
git add .claude/skills/find-icon/SKILL.md
git commit -m "docs(find-icon): update skill for production API key auth"
```

---

### Task 5: Verify end-to-end

- [ ] **Step 1: Test raw CLI against production**

In bash (git bash on Windows):

```bash
LINGARO_CATALOG_URL=https://lingaro-icons-catalog.azurewebsites.net LINGARO_API_KEY=<your-secret> cli-anything-lingaro-catalog search "database"
```

Expected: a table of matching icons, no `401` or `Connection failed` error.

- [ ] **Step 2: Test with env vars from settings (new Claude Code session)**

Open a fresh Claude Code session (so env vars from `~/.claude/settings.json` are loaded), then run:

```bash
cli-anything-lingaro-catalog search "database"
```

Expected: same results as Step 1 — confirms `settings.json` env injection is working.

- [ ] **Step 3: Test find-icon skill end-to-end**

In the Claude Code session with env vars loaded, invoke the `find-icon` skill:

```
/find-icon database icon
```

Expected: skill searches and returns icons from the production catalog (not `localhost`), with no auth error.

- [ ] **Step 4: Confirm Azure AD browser flow still works**

Open `https://lingaro-icons-catalog.azurewebsites.net` in a browser. Expected: redirects to Microsoft login, then shows the catalog after login. (API key auth does not break browser users.)
