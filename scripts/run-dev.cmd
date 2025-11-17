@echo off
setlocal

REM Usage:
REM   run-dev.cmd            -> .next만 정리 후 3001 포트로 실행
REM   run-dev.cmd clean      -> node_modules까지 정리 후 재설치 후 실행
REM   run-dev.cmd 3000       -> 3000 포트로 실행
REM   run-dev.cmd clean 3000 -> node_modules 정리 + 3000 포트

set CLEAN=%1
set PORT=%2
if "%PORT%"=="" (
  if /I "%CLEAN%"=="clean" ( set PORT=3001 ) else ( set PORT=%CLEAN% & set CLEAN= )
)
if "%PORT%"=="" set PORT=3001

echo [run-dev] stop node processes...
for /f "tokens=2" %%P in ('tasklist ^| findstr /i node.exe') do taskkill /PID %%P /F >nul 2>&1

echo [run-dev] clean .next
rmdir /s /q ".next" 2>nul

if /I "%CLEAN%"=="clean" (
  echo [run-dev] clean node_modules
  rmdir /s /q "node_modules" 2>nul
)

set CHOKIDAR_USEPOLLING=1

if /I "%CLEAN%"=="clean" (
  echo [run-dev] npm ci
  npm ci --no-audit --no-fund
)

echo [run-dev] starting next dev on 127.0.0.1:%PORT% (no turbo)...
npx --yes next@latest dev -H 127.0.0.1 -p %PORT% --no-turbo

endlocal


