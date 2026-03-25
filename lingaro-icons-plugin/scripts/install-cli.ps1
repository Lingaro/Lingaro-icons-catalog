# Install cli-anything-lingaro-catalog from the bundled source.
# Usage: .\scripts\install-cli.ps1 [-FromPyPI]
param(
    [switch]$FromPyPI
)

$PluginRoot = Split-Path $PSScriptRoot -Parent
$CliSrc = Join-Path $PluginRoot "cli-src"

if ($FromPyPI) {
    Write-Host "Installing cli-anything-lingaro-catalog from PyPI..."
    pip install cli-anything-lingaro-catalog
    exit 0
}

Write-Host "Installing cli-anything-lingaro-catalog from bundled source..."

$uvAvailable = Get-Command uv -ErrorAction SilentlyContinue
if ($uvAvailable) {
    try {
        uv pip install -e $CliSrc
    } catch {
        Write-Host "uv failed, retrying with UV_NO_CACHE=1..."
        $env:UV_NO_CACHE = "1"
        uv pip install -e $CliSrc
    }
} else {
    pip install -e $CliSrc
}

Write-Host ""
Write-Host "Installed. Verify with:"
Write-Host "  cli-anything-lingaro-catalog --version"
Write-Host ""
Write-Host "Next: set LINGARO_CATALOG_URL and LINGARO_API_KEY in ~/.claude/settings.json"
Write-Host "Or run /lingaro-icons:configure inside Claude Code."
