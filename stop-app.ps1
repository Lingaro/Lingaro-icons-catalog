# Stop Lingaro Icons Catalog API
Write-Host "=== Stopping Lingaro Icons Catalog ===" -ForegroundColor Cyan

$stopped = $false

# Find and kill processes on port 8000
Get-NetTCPConnection -LocalPort 8000 -ErrorAction SilentlyContinue | ForEach-Object {
    $proc = Get-Process -Id $_.OwningProcess -ErrorAction SilentlyContinue
    if ($proc) {
        Write-Host "Stopping process $($proc.Id) ($($proc.ProcessName))" -ForegroundColor Yellow
        Stop-Process -Id $proc.Id -Force
        $stopped = $true
    }
}

if ($stopped) {
    Write-Host "`nApplication stopped." -ForegroundColor Green
} else {
    Write-Host "`nNo application running on port 8000." -ForegroundColor Gray
}
