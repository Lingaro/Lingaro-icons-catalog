# Troubleshoot Port 8000 Issues
Write-Host "=== Checking Port 8000 ===" -ForegroundColor Cyan

# Check if port 8000 is in use
$port = 8000
$connection = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue

if ($connection) {
    Write-Host "`nPort $port IS IN USE:" -ForegroundColor Yellow
    $connection | Format-Table LocalAddress, LocalPort, State, OwningProcess

    # Get process details
    $connection | ForEach-Object {
        $proc = Get-Process -Id $_.OwningProcess -ErrorAction SilentlyContinue
        if ($proc) {
            Write-Host "`nProcess Details:" -ForegroundColor Yellow
            Write-Host "  PID: $($proc.Id)"
            Write-Host "  Name: $($proc.ProcessName)"
            Write-Host "  Path: $($proc.Path)"
            Write-Host "  Started: $($proc.StartTime)"

            Write-Host "`nTo kill this process, run:" -ForegroundColor Red
            Write-Host "  Stop-Process -Id $($proc.Id) -Force"
        }
    }
} else {
    Write-Host "`nPort $port is FREE - ready to use!" -ForegroundColor Green
}

Write-Host "`n=== All Python Processes ===" -ForegroundColor Cyan
Get-Process python* -ErrorAction SilentlyContinue | Format-Table Id, ProcessName, StartTime, Path

Write-Host "`nTo test the Icons Catalog API:" -ForegroundColor Cyan
Write-Host "  python app.py --port 8001  # Use different port"
Write-Host "  python app.py               # After killing the conflicting process"
