---
name: find-icon
description: Find and download icons from the Lingaro Icons Catalog for architecture diagrams, presentations, slide decks, and technical documentation. Use this skill whenever the user mentions needing icons, looking for icons, architecture diagrams, solution diagrams, technology logos, cloud service icons, or wants visual assets for any kind of technical or business material. Also trigger when the user lists technologies or services and likely needs visual representations — even if they don't explicitly say "icon". Covers Azure, GCP, Databricks, Microsoft Fabric, and the Lingaro custom icon set.
---

# Find Icon

Search the Lingaro Icons Catalog and download icons for architecture diagrams, presentations, and documentation.

## Available Icon Sets

The catalog contains icons from these collections:
- **Azure** — Microsoft Azure service icons (compute, storage, networking, AI, etc.)
- **Google Cloud** — GCP service icons
- **Microsoft Fabric** — Fabric workload and item icons (regular + color variants)
- **Databricks** — Databricks platform icons
- **lingaro_set4** — Lingaro custom icons (charts, personas, buildings, devices, etc.)
- **Data & Analytics**, **DevOps & Infra**, **ML & AI** — cross-platform themed sets

## How to Find Icons

The CLI `cli-anything-lingaro-catalog` is installed in PATH. It connects to the production catalog at `https://lingaro-icons-catalog.azurewebsites.net` via `LINGARO_CATALOG_URL` and `LINGARO_API_KEY` env vars (set in `~/.claude/settings.json`). For local dev, omit those vars and run `cli-anything-lingaro-catalog server start`.

### Step 1: Search

```bash
# Text search — fast, keyword-based
cli-anything-lingaro-catalog search "virtual machine"

# Semantic search — understands meaning, better for abstract concepts
cli-anything-lingaro-catalog search --semantic "data pipeline orchestration"

# Filter by set
cli-anything-lingaro-catalog search "storage" --set "Azure"

# Filter by category
cli-anything-lingaro-catalog search "database" --category "general"
```

Use **text search** first for specific names (e.g., "Cosmos DB", "Cloud Storage"). Use **semantic search** when looking for conceptual matches (e.g., "something representing data flow").

### Step 2: Get Details

```bash
cli-anything-lingaro-catalog icons get <icon-id>
```

This shows description, tags, and use cases — helpful for confirming the icon matches what the user needs.

### Step 3: Download

```bash
# Download to specific path
cli-anything-lingaro-catalog icons download <icon-id> -o path/to/icon.svg

# Download multiple icons for a diagram
cli-anything-lingaro-catalog icons download Azure_compute_virtualmachines -o diagram/vm.svg
cli-anything-lingaro-catalog icons download Azure_databases_cosmosdb -o diagram/cosmos.svg
```

### Step 4: Browse (when search isn't enough)

```bash
# List all collections
cli-anything-lingaro-catalog categories collections

# List categories within a set
cli-anything-lingaro-catalog categories list

# Browse icons in a category
cli-anything-lingaro-catalog icons list --set "Azure" --category "Compute" --limit 50
```

## JSON Mode

Add `--json` for machine-readable output — useful when you need to process results programmatically:

```bash
cli-anything-lingaro-catalog --json search "database" --limit 5
```

## Workflow for Architecture Diagrams

When the user describes an architecture (e.g., "I need a diagram with App Service, Cosmos DB, and Event Hub"):

1. Search for each component: `search "App Service" --set Azure`
2. Pick the best match from results
3. Download all icons to a working directory
4. Report what was found and where icons were saved

If an icon isn't found in the catalog, say so — don't silently skip it. Suggest alternatives if the search returns close matches.

## Tips

- Azure icons use IDs like `Azure_<category>_<name>` (e.g., `Azure_compute_virtualmachines`)
- GCP icons use `GCP_<name>` (e.g., `GCP_cloud_storage`)
- Fabric icons include `Microsoft Fabric_<variant>_<name>` (e.g., `Microsoft Fabric_color_lakehouse`)
- Production is the default when `LINGARO_CATALOG_URL` is set. For local dev only: `cli-anything-lingaro-catalog server start`
