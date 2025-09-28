#!/bin/bash

# Production startup script for ClawnCore Multitech Company Website

# Check if required environment variables are set
if [ -z "$NODE_ENV" ]; then
  export NODE_ENV="production"
fi

if [ -z "$PORT" ]; then
  export PORT="3001"
fi

if [ -z "$DATABASE_URL" ]; then
  echo "Error: DATABASE_URL environment variable is required"
  exit 1
fi

# Check if MongoDB is accessible
echo "Checking MongoDB connection..."
# This is a simple check - you might want to add more robust connection testing

# Build the application if dist folder doesn't exist
if [ ! -d "dist" ]; then
  echo "Building application..."
  npm run build
fi

# Start the server
echo "Starting server in $NODE_ENV mode on port $PORT..."
npm start