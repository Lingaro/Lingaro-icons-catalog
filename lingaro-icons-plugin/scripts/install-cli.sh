#!/usr/bin/env bash
# Install cli-anything-lingaro-catalog from the bundled source.
# Usage: bash scripts/install-cli.sh [--from-pypi]

set -e

PLUGIN_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CLI_SRC="$PLUGIN_ROOT/cli-src"

if [[ "$1" == "--from-pypi" ]]; then
  echo "Installing cli-anything-lingaro-catalog from PyPI..."
  pip install cli-anything-lingaro-catalog
  exit 0
fi

echo "Installing cli-anything-lingaro-catalog from bundled source..."

if command -v uv &>/dev/null; then
  uv pip install -e "$CLI_SRC"
else
  pip install -e "$CLI_SRC"
fi

echo ""
echo "Installed. Verify with:"
echo "  cli-anything-lingaro-catalog --version"
echo ""
echo "Next: set LINGARO_CATALOG_URL and LINGARO_API_KEY in ~/.claude/settings.json"
echo "Or run /lingaro-icons:configure inside Claude Code."
