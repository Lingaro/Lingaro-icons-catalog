# Lingaro Icons Catalog CLI

Command-line interface for the Lingaro Icons Catalog API.

## Installation

```bash
cd agent-harness
pip install -e .
```

## Quick Start

```bash
# Configure API URL (default: http://localhost:8000)
cli-anything-lingaro-catalog config set base_url http://localhost:8000

# Set API key (or use LINGARO_API_KEY env var)
cli-anything-lingaro-catalog config set api_key your-key-here

# Check server health
cli-anything-lingaro-catalog server health

# Search for icons
cli-anything-lingaro-catalog search "cloud database"

# Semantic search
cli-anything-lingaro-catalog search --semantic "data pipeline"

# List icons
cli-anything-lingaro-catalog icons list --category "Data Analysis Charts"

# Get icon details
cli-anything-lingaro-catalog icons get lingaro_set4_data-analysis-charts_cloud

# Download an icon
cli-anything-lingaro-catalog icons download lingaro_set4_data-analysis-charts_cloud -o cloud.svg

# Upload an icon (admin)
cli-anything-lingaro-catalog icons upload my-icon.svg -c "Custom" -s "my_set"

# List categories
cli-anything-lingaro-catalog categories list

# List collections
cli-anything-lingaro-catalog categories collections

# Show tags
cli-anything-lingaro-catalog categories tags

# Export catalog
cli-anything-lingaro-catalog admin export -o catalog.json

# Refresh Azure icons
cli-anything-lingaro-catalog admin refresh-azure

# Start API server
cli-anything-lingaro-catalog server start

# Interactive REPL
cli-anything-lingaro-catalog repl
```

## JSON Output

Add `--json` to any command for machine-readable output:

```bash
cli-anything-lingaro-catalog --json search "database"
cli-anything-lingaro-catalog --json icons list --limit 5
cli-anything-lingaro-catalog --json categories collections
```

## Configuration

Config is stored at `~/.config/lingaro-catalog-cli/config.json`.

Environment variables:
- `LINGARO_CATALOG_URL` — API base URL
- `LINGARO_API_KEY` — API authentication key

## REPL Mode

```
$ cli-anything-lingaro-catalog repl
Lingaro Icons Catalog CLI — Interactive Mode
Type 'help' for commands, 'quit' to exit.

lingaro> search cloud
Found 15 icons (text):
  lingaro_set4_data-analysis-charts_cloud — cloud (42.00)
  ...

lingaro> icons get lingaro_set4_data-analysis-charts_cloud
  ID:          lingaro_set4_data-analysis-charts_cloud
  Name:        cloud
  Category:    Data Analysis Charts
  ...

lingaro> quit
Bye!
```
