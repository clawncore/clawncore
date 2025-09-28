#!/usr/bin/env node

// Simple build script for deployment
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Starting build process...');

try {
  // Clean previous builds
  console.log('Cleaning previous builds...');
  const distPath = path.join(import.meta.dirname, '..', 'dist');
  if (fs.existsSync(distPath)) {
    fs.rmSync(distPath, { recursive: true });
  }

  // Build the client
  console.log('Building client application...');
  execSync('npm run build', { stdio: 'inherit' });

  console.log('Build completed successfully!');
  console.log('To start the production server, run: npm start');

} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}