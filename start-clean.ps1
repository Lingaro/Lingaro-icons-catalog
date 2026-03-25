# Clean Start - Kill any existing instances and start fresh
Write-Host "=== Lingaro Icons Catalog - Clean Start ===" -ForegroundColor Cyan

# Kill any existing Python processes running the app
Write-Host "`nStopping any existing instances..." -ForegroundColor Yellow
Get-NetTCPConnection -LocalPort 8000 -ErrorAction SilentlyContinue | ForEach-Object {
    $proc = Get-Process -Id $_.OwningProcess -ErrorAction SilentlyContinue
    if ($proc) {
        Write-Host "  Killing process $($proc.Id) ($($proc.ProcessName))"
        Stop-Process -Id $proc.Id -Force
    }
}

Start-Sleep -Seconds 1

# Verify port is free
$portCheck = Get-NetTCPConnection -LocalPort 8000 -ErrorAction SilentlyContinue
if ($portCheck) {
    Write-Host "`nERROR: Port 8000 is still in use!" -ForegroundColor Red
    exit 1
}

Write-Host "`nPort 8000 is free. Starting application..." -ForegroundColor Green
Write-Host ""

# Start the app
python app.py
