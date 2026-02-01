# Redeploy Lingaro Icons Catalog to Azure Web App
# Run: pwsh ./redeploy.ps1

$ErrorActionPreference = "Stop"

# Configuration
$APP = "lingaro-icons-catalog"
$RG = "rg-Lingaro-Databricks-Demo-01"

Write-Host "`n=== Lingaro Icons Catalog - Redeploy ===" -ForegroundColor Cyan

# Pull latest
Write-Host ">> Pulling latest from GitHub..." -ForegroundColor Yellow
git pull origin master

# Create ZIP
Write-Host ">> Creating deployment package..." -ForegroundColor Yellow
if (Test-Path deploy.zip) { Remove-Item deploy.zip -Force }
zip -r deploy.zip api assets icons index.html requirements.txt run_api.py

# Deploy
Write-Host ">> Deploying to Azure..." -ForegroundColor Yellow
az webapp deploy --name $APP --resource-group $RG --src-path deploy.zip --type zip --clean true

# Restart
Write-Host ">> Restarting app..." -ForegroundColor Yellow
az webapp restart --name $APP --resource-group $RG

# Done
Write-Host "`n=== Deployment complete! ===" -ForegroundColor Green
Write-Host "Site: https://$APP.azurewebsites.net" -ForegroundColor Cyan
Write-Host "API:  https://$APP.azurewebsites.net/api/docs" -ForegroundColor Cyan
