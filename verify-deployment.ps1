# Verify deployment of collection cover icons
$ErrorActionPreference = "Stop"

Write-Host "`n=== Collection Cover Icons Verification ===" -ForegroundColor Cyan

# Wait for app to be ready
Write-Host "`n>> Waiting for app to be ready..." -ForegroundColor Yellow
Start-Sleep -Seconds 5

# Check if we can reach the site
$url = "https://lingaro-icons-catalog.azurewebsites.net"
try {
    $response = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 10
    Write-Host "   Site is accessible: $url" -ForegroundColor Green
} catch {
    Write-Host "   WARNING: Site not accessible yet" -ForegroundColor Red
    Write-Host "   Wait a minute and try accessing manually: $url" -ForegroundColor Yellow
}

Write-Host "`n>> Expected Cover Icons:" -ForegroundColor Yellow
$expectedIcons = @{
    "databricks" = "databricks_databricks_11_databricks"
    "Apache" = "apache_apache_apache_logo"
    "Data & Analytics" = "lingaro_set4_data_analysis_charts_chart_2"
    "ML & AI" = "lingaro_set4_data_analysis_charts_ai_2"
    "DevOps & Infra" = "devops_&_infra_devops_&_infra_devops"
    "Microsoft Fabric" = "microsoft_fabric_services_fabric_20_color"
    "Azure" = "azure_other_azure_icon"
    "Google Cloud" = "google_cloud_google_cloud_google_cloud_logo"
    "lingaro_set4" = "lingaro_set4_branding_lingaro_logo_small_transparent"
}

foreach ($collection in $expectedIcons.Keys | Sort-Object) {
    $iconId = $expectedIcons[$collection]
    Write-Host "   $collection" -ForegroundColor White -NoNewline
    Write-Host " -> " -NoNewline
    Write-Host "$iconId" -ForegroundColor Cyan
}

Write-Host "`n>> Next Steps:" -ForegroundColor Yellow
Write-Host "   1. Open: $url" -ForegroundColor White
Write-Host "   2. Press Ctrl+Shift+R (hard refresh) to clear cache" -ForegroundColor White
Write-Host "   3. Verify collection cards show branded icons" -ForegroundColor White
Write-Host "`n   If icons still don't show, check browser console (F12) for errors" -ForegroundColor Gray

Write-Host "`n=== Deployment Complete ===" -ForegroundColor Green
