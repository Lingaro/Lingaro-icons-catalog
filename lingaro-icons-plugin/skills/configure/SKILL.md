---
name: configure
version: 1
description: This skill should be used when the user runs /lingaro-icons:configure, asks how to set up the Lingaro Icons plugin, wants to add or change their API key, or reports that icon search is not working. It installs the CLI tool, sets the catalog URL, and configures authentication.
---

# Lingaro Icons — Configure

Walk the user through configuring the Lingaro Icons plugin step by step.

## Step 1: Check CLI installation

```bash
cli-anything-lingaro-catalog --version 2>/dev/null || echo "NOT_INSTALLED"
```

If `NOT_INSTALLED`, first verify the plugin root is available:

```bash
echo "${CLAUDE_PLUGIN_ROOT:-NOT_SET}"
```

If `NOT_SET`, inform the user that `$CLAUDE_PLUGIN_ROOT` is not available and they should install the CLI manually:
```bash
pip install cli-anything-lingaro-catalog
```

If the plugin root is available, install from the bundled source:

```bash
uv pip install -e "$CLAUDE_PLUGIN_ROOT/cli-src" 2>/dev/null || \
  pip install -e "$CLAUDE_PLUGIN_ROOT/cli-src"
```

If `uv` fails with hardlink error on Windows, retry with `UV_NO_CACHE=1`. If neither `uv` nor `pip` is available, instruct the user to install Python first (python.org).

Confirm install succeeded:
```bash
cli-anything-lingaro-catalog --version
```

## Step 2: Set catalog URL

Check if already set:
```bash
echo "${LINGARO_CATALOG_URL:-NOT_SET}"
```

If not set, ask the user which catalog to use:
- **Production** (recommended): `https://lingaro-icons-catalog.azurewebsites.net`
- **Local dev**: `http://localhost:8000`

Then guide them to add it to `~/.claude/settings.json` under `env`:

```json
{
  "env": {
    "LINGARO_CATALOG_URL": "https://lingaro-icons-catalog.azurewebsites.net"
  }
}
```

Or to a `.env` file in their project or home directory:
```env
LINGARO_CATALOG_URL=https://lingaro-icons-catalog.azurewebsites.net
```

## Step 3: Set API key

> **Security:** Never log, display, or echo the full API token value at any point in this workflow.

Check if already set:
```bash
echo "${LINGARO_API_KEY:+SET}"
```

If not set (`NOT_SET` or empty output), explain how to get a Personal API Token:
1. Open `https://lingaro-icons-catalog.azurewebsites.net` in a browser
2. Sign in with Azure AD (Microsoft account)
3. Click your name in the top right → "Generate API Token"
4. Choose expiry (30/60/90 days), click Generate
5. Copy the token (shown only once — starts with `lingaro_`)

If the user provides a token (as argument or in chat), add it to `~/.claude/settings.json`:

```json
{
  "env": {
    "LINGARO_CATALOG_URL": "https://lingaro-icons-catalog.azurewebsites.net",
    "LINGARO_API_KEY": "lingaro_..."
  }
}
```

## Step 4: Test the setup

```bash
cli-anything-lingaro-catalog search "azure storage" --limit 3
```

If results appear, configuration is complete. Tell the user they can now:
- Ask for icons naturally ("find me an Azure Storage icon")
- Run `cli-anything-lingaro-catalog search "..."` directly
- Use MCP tools if the `lingaro-catalog` MCP server is connected

If the test fails, diagnose:
- 401/403 → API key missing or invalid → repeat Step 3
- Connection refused → wrong URL or server not running → repeat Step 2
- Command not found → CLI not installed → repeat Step 1
