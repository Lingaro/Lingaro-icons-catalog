<#
.SYNOPSIS
    Prepare deployment package for Azure Cloud Shell

.DESCRIPTION
    Creates a ZIP file ready to upload to Azure Cloud Shell and
    outputs the commands to run there.

.EXAMPLE
    .\prepare-deploy.ps1
#>

$ErrorActionPreference = "Stop"
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ZipFile = Join-Path $ScriptDir "lingaro-icons-deploy.zip"

# Cross-platform temp directory
$TempDir = if ($env:TEMP) { $env:TEMP } elseif ($env:TMPDIR) { $env:TMPDIR } else { "/tmp" }

Write-Host "`n=== Preparing Deployment Package ===" -ForegroundColor Cyan

# Files to include
$includeItems = @(
    "api",
    "assets",
    "icons",
    "requirements.txt",
    "app.py"
)

# Create staging folder
$staging = Join-Path $TempDir "lingaro-staging-$(Get-Random)"
New-Item -ItemType Directory -Path $staging -Force | Out-Null

# Copy files
foreach ($item in $includeItems) {
    $src = Join-Path $ScriptDir $item
    if (Test-Path $src) {
        Copy-Item $src (Join-Path $staging $item) -Recurse
        Write-Host "  + $item" -ForegroundColor Green
    }
}

# Remove pycache
Get-ChildItem $staging -Recurse -Directory -Filter "__pycache__" | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue

# Create ZIP
if (Test-Path $ZipFile) { Remove-Item $ZipFile -Force }
Compress-Archive -Path "$staging\*" -DestinationPath $ZipFile -CompressionLevel Optimal
Remove-Item $staging -Recurse -Force

$size = [math]::Round((Get-Item $ZipFile).Length / 1MB, 2)
Write-Host "`nCreated: $ZipFile ($size MB)" -ForegroundColor Green

Write-Host @"

=== NEXT STEPS ===

1. Open Azure Cloud Shell: https://shell.azure.com

2. Upload the ZIP file:
   - Click the upload button in Cloud Shell
   - Select: $ZipFile

3. Copy and paste these commands in Cloud Shell:

"@ -ForegroundColor Yellow

Write-Host @"
# --- COPY FROM HERE ---

# Configuration (change APP_NAME to something unique!)
RG="lingaro-icons-rg"
LOCATION="westeurope"
PLAN="lingaro-icons-plan"
APP="lingaro-icons-$(Get-Random -Maximum 9999)"
OPENAI_KEY="your-openai-key-here"

# Create resources
az group create --name `$RG --location `$LOCATION

az appservice plan create --name `$PLAN --resource-group `$RG --is-linux --sku B1

az webapp create --name `$APP --resource-group `$RG --plan `$PLAN --runtime "PYTHON:3.11"

# Configure
az webapp config appsettings set --name `$APP --resource-group `$RG \
  --settings OPENAI_API_KEY=`$OPENAI_KEY SCM_DO_BUILD_DURING_DEPLOYMENT=true

az webapp config set --name `$APP --resource-group `$RG \
  --startup-file "gunicorn -w 2 -k uvicorn.workers.UvicornWorker api.main:app --bind 0.0.0.0:8000"

# Deploy
az webapp deploy --name `$APP --resource-group `$RG --src-path lingaro-icons-deploy.zip --type zip

# Show URL
echo "Your app: https://`$APP.azurewebsites.net"
echo "API docs: https://`$APP.azurewebsites.net/docs"

# --- END COPY ---
"@ -ForegroundColor White

Write-Host "`nAfter deployment, your API will be at: https://<APP_NAME>.azurewebsites.net/docs" -ForegroundColor Cyan
