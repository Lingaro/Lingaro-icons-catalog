---
name: find-icon
version: 1
description: This skill should be used when the user needs icons for architecture diagrams, presentations, slide decks, or technical documentation. It covers requests to find icons, download icons, build solution diagrams, or get technology logos — including Azure, GCP, Databricks, Microsoft Fabric, and the Lingaro custom icon set. Also applies when the user lists technologies or services and likely needs visual representations, even if they do not explicitly say "icon".
---

# Find Icon

Search the Lingaro Icons Catalog and download icons for architecture diagrams, presentations, and documentation.

## Available Icon Sets

- **Azure** — Microsoft Azure service icons (compute, storage, networking, AI, etc.)
- **Google Cloud** — GCP service icons
- **Microsoft Fabric** — Fabric workload and item icons (regular + color variants)
- **Databricks** — Databricks platform icons
- **lingaro_set4** — Lingaro custom icons (charts, personas, buildings, devices, etc.)
- **Data & Analytics**, **DevOps & Infra**, **ML & AI** — cross-platform themed sets

## Configuration

Before searching, confirm `LINGARO_CATALOG_URL` is set in the environment. If it is missing, direct the user to run `/lingaro-icons:configure`. The following env vars must be present:
- `LINGARO_CATALOG_URL` — catalog API base URL (default: `https://lingaro-icons-catalog.azurewebsites.net`)
- `LINGARO_API_KEY` — Personal API Token or shared key

## How to Find Icons

### Prefer MCP tools when available

If the `lingaro-catalog` MCP server is connected, use its tools directly:
- `search_icons` — keyword or semantic search
- `get_icon` — fetch icon details by ID
- `download_icon` — download icon to a local path
- `list_collections` — list all icon sets
- `list_categories` — list categories, optionally filtered by set

### CLI fallback

If MCP is unavailable, use `cli-anything-lingaro-catalog` (installed in PATH after setup):

```bash
# Text search — fast, keyword-based
cli-anything-lingaro-catalog search "virtual machine"

# Semantic search — understands meaning, better for abstract concepts
cli-anything-lingaro-catalog search --semantic "data pipeline orchestration"

# Filter by set or category
cli-anything-lingaro-catalog search "storage" --set "Azure"
cli-anything-lingaro-catalog search "database" --category "general"

# Get icon details
cli-anything-lingaro-catalog icons get <icon-id>

# Download
cli-anything-lingaro-catalog icons download <icon-id> -o path/to/icon.svg

# Browse
cli-anything-lingaro-catalog categories collections
cli-anything-lingaro-catalog icons list --set "Azure" --category "Compute" --limit 50
```

Use **text search** for specific names (e.g., "Cosmos DB"). Use **semantic search** for concepts (e.g., "data flow").

## Workflow for Architecture Diagrams

When the user describes an architecture (e.g., "diagram with App Service, Cosmos DB, Event Hub"):

1. Search for each component: `search "App Service" --set Azure`
2. Pick the best match from results
3. Download all icons to a working directory
4. Report what was found and where icons were saved

If an icon isn't found, say so — don't silently skip it. Suggest alternatives from close matches.

## Tips

- Azure icons: `Azure_<category>_<name>` (e.g., `Azure_compute_virtualmachines`)
- GCP icons: `GCP_<name>` (e.g., `GCP_cloud_storage`)
- Fabric icons: `Microsoft Fabric_<variant>_<name>` (e.g., `Microsoft Fabric_color_lakehouse`)
- Add `--json` flag for machine-readable output
- Not configured yet? Run `/lingaro-icons:configure`
