# lingaro-icons — Claude Code Plugin

Search and download icons from the Lingaro Icons Catalog directly in Claude Code.

Covers **Azure**, **Google Cloud**, **Databricks**, **Microsoft Fabric**, and **Lingaro** custom icon sets.

## Features

- **`find-icon` skill** — auto-activates when you describe an architecture or ask for icons
- **`/lingaro-icons:configure`** — one-time setup: installs CLI, sets API key and catalog URL
- **MCP tools** — `search_icons`, `get_icon`, `download_icon`, `list_collections`, `list_categories` (direct API access, no CLI needed)

## Quick Start

1. Install the plugin in Claude Code
2. Run `/lingaro-icons:configure` to set up your API key
3. Ask Claude: *"Find me an Azure Storage icon"* or *"I need icons for a diagram with App Service, Cosmos DB, and Event Hub"*

## Setup

### API Key

Generate a Personal API Token at [lingaro-icons-catalog.azurewebsites.net](https://lingaro-icons-catalog.azurewebsites.net):
1. Sign in with your Microsoft account
2. Click your name → **Generate API Token**
3. Copy the token (shown once, starts with `lingaro_`)

Add to `~/.claude/settings.json`:
```json
{
  "env": {
    "LINGARO_CATALOG_URL": "https://lingaro-icons-catalog.azurewebsites.net",
    "LINGARO_API_KEY": "lingaro_your_token_here"
  }
}
```

Or put in a `.env` file in your project or home directory.

### CLI (manual install)

```bash
# Unix
bash scripts/install-cli.sh

# Windows
.\scripts\install-cli.ps1

# From PyPI (when published)
pip install cli-anything-lingaro-catalog
```

### MCP server dependencies

```bash
pip install mcp httpx
```

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `LINGARO_CATALOG_URL` | `http://localhost:8000` | Catalog API base URL |
| `LINGARO_API_KEY` | *(none)* | Personal API Token or shared key |

## Icon Sets

| Set | Examples |
|-----|---------|
| Azure | Virtual Machines, Cosmos DB, Event Hub, App Service |
| Google Cloud | Cloud Storage, BigQuery, Pub/Sub |
| Microsoft Fabric | Lakehouse, Dataflow, Warehouse |
| Databricks | Unity Catalog, Mosaic AI, Lakeflow |
| lingaro_set4 | Charts, personas, buildings, devices |
| Data & Analytics, DevOps & Infra, ML & AI | Cross-platform themed sets |
