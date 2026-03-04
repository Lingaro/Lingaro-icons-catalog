#Requires -Version 5.1
<#
.SYNOPSIS
    Deploy Lingaro Icons Catalog to Azure Web App

.DESCRIPTION
    This script prepares and deploys the Lingaro Icons Catalog API to Azure App Service.
    It creates a deployment ZIP, sets up Azure resources, and deploys the application.

.PARAMETER ResourceGroup
    Azure Resource Group name (default: lingaro-icons-rg)

.PARAMETER Location
    Azure region (default: westeurope)

.PARAMETER AppName
    Web App name - must be globally unique (default: lingaro-icons-catalog)

.PARAMETER OpenAIKey
    Your OpenAI API key for semantic search

.PARAMETER SkipZip
    Skip creating the ZIP file (use existing)

.PARAMETER ZipOnly
    Only create the ZIP file, don't deploy

.EXAMPLE
    .\deploy-azure.ps1 -OpenAIKey "sk-your-key-here"

.EXAMPLE
    .\deploy-azure.ps1 -AppName "my-icons-app" -ResourceGroup "my-rg" -OpenAIKey "sk-key"

.EXAMPLE
    .\deploy-azure.ps1 -ZipOnly

.NOTES
    Author: Lingaro Icons Catalog
    Requires: Azure CLI installed and logged in
#>

param(
    [string]$ResourceGroup = "rg-Lingaro-Databricks-Demo-01",
    [string]$Location = "westeurope",
    [string]$AppServicePlan = "dc-web-apps",
    [string]$AppName = "lingaro-icons-catalog",
    [string]$PythonVersion = "3.11",
    [string]$Sku = "F1",
    [string]$OpenAIKey = "sk--ousUN3HvMYwfzmEivgkgQ",
    [string]$OpenAIBaseURL = "https://llm.lingarogroup.com",
    [switch]$SkipZip,
    [switch]$ZipOnly
)

$ErrorActionPreference = "Stop"
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ZipFile = Join-Path $ScriptDir "lingaro-icons-deploy.zip"

# Cross-platform temp directory
$TempDir = if ($env:TEMP) { $env:TEMP } elseif ($env:TMPDIR) { $env:TMPDIR } else { "/tmp" }

# Colors for output
function Write-Step { param($msg) Write-Host "`n>> $msg" -ForegroundColor Cyan }
function Write-Success { param($msg) Write-Host "   $msg" -ForegroundColor Green }
function Write-Info { param($msg) Write-Host "   $msg" -ForegroundColor Yellow }
function Write-Err { param($msg) Write-Host "   ERROR: $msg" -ForegroundColor Red }

# Banner
Write-Host @"

===============================================
  Lingaro Icons Catalog - Azure Deployment
===============================================

"@ -ForegroundColor Magenta

# Step 1: Create deployment ZIP
if (-not $SkipZip) {
    Write-Step "Creating deployment ZIP package..."

    # Define files/folders to include
    $includeItems = @(
        "api",
        "assets",
        "data",
        "icons",
        "scripts",
        "requirements.txt",
        "run_api.py",
        "startup.txt"
    )

    # Create temp folder for staging
    $stagingDir = Join-Path $TempDir "lingaro-icons-staging"
    if (Test-Path $stagingDir) {
        Remove-Item $stagingDir -Recurse -Force
    }
    New-Item -ItemType Directory -Path $stagingDir | Out-Null

    # Copy items to staging
    foreach ($item in $includeItems) {
        $sourcePath = Join-Path $ScriptDir $item
        if (Test-Path $sourcePath) {
            $destPath = Join-Path $stagingDir $item
            if ((Get-Item $sourcePath).PSIsContainer) {
                Copy-Item $sourcePath $destPath -Recurse
                Write-Success "Added folder: $item"
            } else {
                Copy-Item $sourcePath $destPath
                Write-Success "Added file: $item"
            }
        } else {
            Write-Info "Skipping (not found): $item"
        }
    }

    # Remove __pycache__ folders
    Get-ChildItem $stagingDir -Recurse -Directory -Filter "__pycache__" | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue

    # Create ZIP
    if (Test-Path $ZipFile) {
        Remove-Item $ZipFile -Force
    }

    Compress-Archive -Path "$stagingDir\*" -DestinationPath $ZipFile -CompressionLevel Optimal

    # Cleanup staging
    Remove-Item $stagingDir -Recurse -Force

    $zipSize = (Get-Item $ZipFile).Length / 1MB
    Write-Success "Created: $ZipFile ($([math]::Round($zipSize, 2)) MB)"
}

if ($ZipOnly) {
    Write-Host "`nZIP file created. Upload to Azure Cloud Shell and run:" -ForegroundColor Green
    Write-Host @"

# In Azure Cloud Shell:
RESOURCE_GROUP="$ResourceGroup"
LOCATION="$Location"
APP_SERVICE_PLAN="$AppServicePlan"
WEB_APP_NAME="$AppName"

az group create --name `$RESOURCE_GROUP --location `$LOCATION

az appservice plan create --name `$APP_SERVICE_PLAN --resource-group `$RESOURCE_GROUP --is-linux --sku $Sku

az webapp create --name `$WEB_APP_NAME --resource-group `$RESOURCE_GROUP --plan `$APP_SERVICE_PLAN --runtime "PYTHON:$PythonVersion"

az webapp config appsettings set --name `$WEB_APP_NAME --resource-group `$RESOURCE_GROUP --settings OPENAI_API_KEY="your-key" SCM_DO_BUILD_DURING_DEPLOYMENT=true

az webapp config set --name `$WEB_APP_NAME --resource-group `$RESOURCE_GROUP --startup-file "gunicorn -w 2 -k uvicorn.workers.UvicornWorker api.main:app --bind 0.0.0.0:8000"

az webapp deploy --name `$WEB_APP_NAME --resource-group `$RESOURCE_GROUP --src-path lingaro-icons-deploy.zip --type zip

"@ -ForegroundColor White
    exit 0
}

# Step 2: Check Azure CLI
Write-Step "Checking Azure CLI..."
try {
    $azVersion = az version --output json | ConvertFrom-Json
    Write-Success "Azure CLI version: $($azVersion.'azure-cli')"
} catch {
    Write-Err "Azure CLI not found or not working. Please install it from https://docs.microsoft.com/en-us/cli/azure/install-azure-cli"
    exit 1
}

# Step 3: Check Azure login
Write-Step "Checking Azure login status..."
try {
    $account = az account show --output json | ConvertFrom-Json
    Write-Success "Logged in as: $($account.user.name)"
    Write-Success "Subscription: $($account.name)"
} catch {
    Write-Info "Not logged in. Opening browser for login..."
    az login
    $account = az account show --output json | ConvertFrom-Json
    Write-Success "Logged in as: $($account.user.name)"
}

# Step 4: Create Resource Group
#Write-Step "Creating Resource Group: $ResourceGroup..."
#$rgExists = az group exists --name $ResourceGroup
#if ($rgExists -eq "true") {
#    Write-Info "Resource group already exists"
#} else {
#    az group create --name $ResourceGroup --location $Location --output none
#    Write-Success "Resource group created"
#}

# Step 5: Create App Service Plan
#Write-Step "Creating App Service Plan: $AppServicePlan..."
#$planExists = az appservice plan show --name $AppServicePlan --resource-group $ResourceGroup 2>$null
#if ($planExists) {
#    Write-Info "App Service Plan already exists"
#} else {
#    az appservice plan create `
#        --name $AppServicePlan `
#        --resource-group $ResourceGroup `
#        --is-linux `
#        --sku $Sku `
#        --output none
#    Write-Success "App Service Plan created (SKU: $Sku)"
#}

# Step 6: Create Web App
Write-Step "Creating Web App: $AppName..."
$appExists = az webapp show --name $AppName --resource-group $ResourceGroup 2>$null
if ($appExists) {
    Write-Info "Web App already exists"
} else {
    az webapp create `
        --name $AppName `
        --resource-group $ResourceGroup `
        --plan $AppServicePlan `
        --runtime "PYTHON:$PythonVersion" `
        --output none
    Write-Success "Web App created"
}

# Step 7: Configure App Settings
Write-Step "Configuring App Settings..."

$settings = @(
    "SCM_DO_BUILD_DURING_DEPLOYMENT=true",
    "WEBSITE_RUN_FROM_PACKAGE=0"
)

if ($OpenAIKey) {
    $settings += "OPENAI_API_KEY=$OpenAIKey"
    Write-Success "OpenAI API key configured"
} else {
    Write-Info "No OpenAI key provided - semantic search will be disabled"
    Write-Info "Add it later: az webapp config appsettings set --name $AppName --resource-group $ResourceGroup --settings OPENAI_API_KEY=your-key"
}

az webapp config appsettings set `
    --name $AppName `
    --resource-group $ResourceGroup `
    --settings $settings `
    --output none

Write-Success "App settings configured"

# Step 8: Configure Startup Command
Write-Step "Configuring startup command..."
az webapp config set `
    --name $AppName `
    --resource-group $ResourceGroup `
    --startup-file "gunicorn -w 2 -k uvicorn.workers.UvicornWorker api.main:app --bind 0.0.0.0:8000" `
    --output none
Write-Success "Startup command configured"

# Step 9: Deploy
Write-Step "Deploying application..."
Write-Info "This may take a few minutes..."

az webapp deploy `
    --name $AppName `
    --resource-group $ResourceGroup `
    --src-path $ZipFile `
    --type zip `
    --output none

Write-Success "Deployment complete!"

# Step 10: Get URL and verify
Write-Step "Verifying deployment..."
$appUrl = az webapp show --name $AppName --resource-group $ResourceGroup --query defaultHostName --output tsv
$fullUrl = "https://$appUrl"

Write-Host @"

===============================================
  DEPLOYMENT SUCCESSFUL!
===============================================

"@ -ForegroundColor Green

Write-Host "Your app is now live at:" -ForegroundColor White
Write-Host "  $fullUrl" -ForegroundColor Cyan
Write-Host ""
Write-Host "API Documentation:" -ForegroundColor White
Write-Host "  $fullUrl/docs" -ForegroundColor Cyan
Write-Host ""
Write-Host "Test search:" -ForegroundColor White
Write-Host "  $fullUrl/search?q=money" -ForegroundColor Cyan
Write-Host ""

# Open in browser
$openBrowser = Read-Host "Open in browser? (Y/n)"
if ($openBrowser -ne "n") {
    Start-Process $fullUrl
}

Write-Host @"

Useful commands:
  # View logs
  az webapp log tail --name $AppName --resource-group $ResourceGroup

  # Restart app
  az webapp restart --name $AppName --resource-group $ResourceGroup

  # Update OpenAI key
  az webapp config appsettings set --name $AppName --resource-group $ResourceGroup --settings OPENAI_API_KEY=new-key

  # Delete all resources
  az group delete --name $ResourceGroup --yes

"@ -ForegroundColor Gray
