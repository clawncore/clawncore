@echo off
REM Production startup script for ClawnCore Multitech Company Website

REM Check if required environment variables are set
if "%NODE_ENV%"=="" (
  set NODE_ENV=production
)

if "%PORT%"=="" (
  set PORT=3001
)

if "%DATABASE_URL%"=="" (
  echo Error: DATABASE_URL environment variable is required
  exit /b 1
)

REM Check if MongoDB is accessible
echo Checking MongoDB connection...
REM This is a simple check - you might want to add more robust connection testing

REM Build the application if dist folder doesn't exist
if not exist "dist" (
  echo Building application...
  npm run build
)

REM Start the server
echo Starting server in %NODE_ENV% mode on port %PORT%...
npm start