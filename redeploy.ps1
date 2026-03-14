# Redeploy Lingaro Icons Catalog to Azure Web App
# Run: pwsh ./redeploy.ps1

$ErrorActionPreference = "Stop"

# Configuration
$APP = "lingaro-icons-catalog"
$RG = "rg-Lingaro-Databricks-Demo-01"

Write-Host "`n=== Lingaro Icons Catalog - Redeploy ===" -ForegroundColor Cyan

# Ensure we're in the project root
if (-not (Test-Path "api/main.py")) {
    Write-Error "Must run from project root (where api/ directory exists)"
    exit 1
}

# Create ZIP using .NET for reliable directory structure
Write-Host ">> Creating deployment package..." -ForegroundColor Yellow

Add-Type -AssemblyName System.IO.Compression.FileSystem

# Use temp file to avoid lock issues with stale deploy.zip
$zipPath = Join-Path (Get-Location) "deploy_new.zip"
if (Test-Path $zipPath) {
    [GC]::Collect()
    [GC]::WaitForPendingFinalizers()
    Remove-Item $zipPath -Force -ErrorAction SilentlyContinue
    Start-Sleep -Milliseconds 500
}
if (Test-Path "deploy.zip") {
    [GC]::Collect()
    [GC]::WaitForPendingFinalizers()
    Remove-Item "deploy.zip" -Force -ErrorAction SilentlyContinue
    Start-Sleep -Milliseconds 500
}
$zip = [System.IO.Compression.ZipFile]::Open($zipPath, 'Create')

$itemsToInclude = @(
    @{ Path = "api";           Type = "dir" },
    @{ Path = "assets";        Type = "dir" },
    @{ Path = "data";          Type = "dir" },
    @{ Path = "icons";         Type = "dir" },
    @{ Path = "scripts";       Type = "dir" },
    @{ Path = "powerpoint-addin/dist"; Type = "dir" },
    @{ Path = "index.html";    Type = "file" },
    @{ Path = "requirements.txt"; Type = "file" },
    @{ Path = "run_api.py";    Type = "file" },
    @{ Path = "gunicorn.conf.py"; Type = "file" },
    @{ Path = "startup.txt";   Type = "file" }
)

# Also include .env if it exists
if (Test-Path ".env") {
    $itemsToInclude += @{ Path = ".env"; Type = "file" }
}

foreach ($item in $itemsToInclude) {
    if (-not (Test-Path $item.Path)) {
        Write-Host "   SKIP (not found): $($item.Path)" -ForegroundColor DarkYellow
        continue
    }

    if ($item.Type -eq "dir") {
        $files = Get-ChildItem -Path $item.Path -Recurse -File |
            Where-Object { $_.Name -ne "__pycache__" -and $_.DirectoryName -notmatch "__pycache__" -and $_.Extension -ne ".db" -and $_.Name -ne "catalog.db-shm" -and $_.Name -ne "catalog.db-wal" }
        foreach ($f in $files) {
            $entryName = $f.FullName.Substring((Get-Location).Path.Length + 1).Replace("\", "/")
            [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, $f.FullName, $entryName) | Out-Null
        }
        $count = ($files | Measure-Object).Count
        Write-Host "   + $($item.Path)/ ($count files)" -ForegroundColor Gray
    } else {
        $fullPath = (Resolve-Path $item.Path).Path
        $entryName = $item.Path.Replace("\", "/")
        [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, $fullPath, $entryName) | Out-Null
        Write-Host "   + $($item.Path)" -ForegroundColor Gray
    }
}

$zip.Dispose()

# Replace old deploy.zip with new one
if (Test-Path deploy.zip) { Remove-Item deploy.zip -Force -ErrorAction SilentlyContinue }
Rename-Item $zipPath "deploy.zip"
$zipPath = Join-Path (Get-Location) "deploy.zip"

$zipSize = [math]::Round((Get-Item $zipPath).Length / 1MB, 2)
Write-Host "   Package size: ${zipSize} MB" -ForegroundColor Gray

# Verify zip contains api/main.py
$verifyZip = [System.IO.Compression.ZipFile]::OpenRead($zipPath)
$hasApi = $verifyZip.Entries | Where-Object { $_.FullName -eq "api/main.py" }
$verifyZip.Dispose()
if (-not $hasApi) {
    Write-Error "ZIP verification failed: api/main.py not found in archive!"
    exit 1
}
Write-Host "   Verified: api/main.py present in zip" -ForegroundColor Green

# Set app settings
Write-Host ">> Configuring app settings..." -ForegroundColor Yellow
az webapp config appsettings set --name $APP --resource-group $RG --settings `
    SCM_DO_BUILD_DURING_DEPLOYMENT=true `
    WEBSITE_RUN_FROM_PACKAGE=0 `
    OPENAI_API_KEY="sk--ousUN3HvMYwfzmEivgkgQ" `
    OPENAI_BASE_URL="https://llm.lingarogroup.com" `
    OPENAI_MODEL="gemini-2.5-flash" `
    --output none

# Set startup command directly (not file reference)
Write-Host ">> Setting startup command..." -ForegroundColor Yellow
$startupCmd = "python -m scripts.migrate_to_sqlite 2>/dev/null; gunicorn -c gunicorn.conf.py api.main:app"
az webapp config set --name $APP --resource-group $RG --startup-file $startupCmd --output none

# Deploy (without --clean to preserve files during build)
Write-Host ">> Deploying to Azure..." -ForegroundColor Yellow
az webapp deploy --name $APP --resource-group $RG --src-path $zipPath --type zip --async true

# Wait for deployment to finish
Write-Host ">> Waiting for deployment to complete (up to 5 min)..." -ForegroundColor Yellow
$maxWait = 300
$waited = 0
while ($waited -lt $maxWait) {
    Start-Sleep -Seconds 15
    $waited += 15
    $deployLog = az webapp log deployment show --name $APP --resource-group $RG --query "[-1].message" -o tsv 2>$null
    Write-Host "   [${waited}s] $deployLog" -ForegroundColor Gray
    if ($deployLog -match "Deployment successful" -or $deployLog -match "Triggering container recycle") {
        Write-Host "   Build completed!" -ForegroundColor Green
        break
    }
    if ($waited -ge $maxWait) {
        Write-Host "   WARNING: Timed out waiting for build. Check Azure portal for status." -ForegroundColor Red
    }
}

# Restart
Write-Host ">> Restarting app..." -ForegroundColor Yellow
az webapp restart --name $APP --resource-group $RG

# Done
Write-Host "`n=== Deployment complete! ===" -ForegroundColor Green
Write-Host "Site: https://$APP.azurewebsites.net" -ForegroundColor Cyan
Write-Host "Docs: https://$APP.azurewebsites.net/docs" -ForegroundColor Cyan
