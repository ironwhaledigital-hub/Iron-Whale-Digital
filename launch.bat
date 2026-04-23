@echo off
cd /d "%~dp0"
echo Starting Iron Whale Digital...
start "Iron Whale Server" node server.js
timeout /t 2 /nobreak >nul
start http://localhost:3737
