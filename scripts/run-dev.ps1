$ErrorActionPreference = 'SilentlyContinue'

param(
  [switch]$CleanNodeModules = $false,
  [int]$Port = 3001
)

Write-Host "[run-dev] stop node processes..." -ForegroundColor Cyan
Stop-Process -Name node -Force -ErrorAction SilentlyContinue

Write-Host "[run-dev] clean .next" -ForegroundColor Cyan
Remove-Item -Recurse -Force "$PSScriptRoot\..\ .next".Replace(' ','') -ErrorAction SilentlyContinue

if ($CleanNodeModules) {
  Write-Host "[run-dev] clean node_modules" -ForegroundColor Yellow
  Remove-Item -Recurse -Force "$PSScriptRoot\..\ node_modules".Replace(' ','') -ErrorAction SilentlyContinue
}

Write-Host "[run-dev] ensure CHOKIDAR_USEPOLLING=1" -ForegroundColor Cyan
$env:CHOKIDAR_USEPOLLING = "1"

Write-Host "[run-dev] install deps if needed (npm ci skipped when up-to-date)" -ForegroundColor Cyan
if ($CleanNodeModules) { npm ci --no-audit --no-fund }

Write-Host "[run-dev] starting next dev on 127.0.0.1:$Port (no turbo)..." -ForegroundColor Green
npx --yes next@latest dev -H 127.0.0.1 -p $Port --no-turbo


