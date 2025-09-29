#!/usr/bin/env node

/**
 * Netlify Build Script
 * This script ensures the correct build process for Netlify deployment
 */

import { execSync } from 'child_process';
import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const projectRoot = process.cwd();

console.log('🚀 ClawnCore Netlify Build Script');
console.log('==================================\n');

try {
  // Ensure node_modules exists
  console.log('📦 Checking dependencies...');
  if (!existsSync(join(projectRoot, 'node_modules'))) {
    console.log('Installing dependencies...');
    execSync('npm ci', { stdio: 'inherit' });
  } else {
    console.log('✅ Dependencies found');
  }

  // Run Vite build
  console.log('\n🔨 Running Vite build...');
  execSync('npm run build', { stdio: 'inherit' });

  // Verify build output
  const buildOutput = join(projectRoot, 'dist', 'public');
  if (!existsSync(buildOutput)) {
    console.error('❌ Build output not found at dist/public');
    console.log('Creating directory structure...');
    mkdirSync(buildOutput, { recursive: true });
  }

  console.log('\n✅ Build completed successfully!');
  console.log(`📂 Build output: ${buildOutput}`);
  
  // List files in build output
  console.log('\n📋 Files in build output:');
  execSync('ls -la dist/public', { stdio: 'inherit' });

} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}