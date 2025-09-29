#!/usr/bin/env node

/**
 * Netlify Deployment Configuration Script
 * This script helps configure and verify Netlify deployment settings
 */

import { writeFileSync, existsSync, readFileSync } from 'fs';
import { join } from 'path';

const projectRoot = process.cwd();

console.log('🔧 Netlify Deployment Configuration Helper');
console.log('========================================\n');

// Check if required files exist
const requiredFiles = [
  'package.json',
  'vite.config.ts',
  'client/src/App.tsx'
];

console.log('✅ Checking project structure...');
for (const file of requiredFiles) {
  const filePath = join(projectRoot, file);
  if (!existsSync(filePath)) {
    console.error(`❌ Required file not found: ${file}`);
    process.exit(1);
  }
  console.log(`✅ Found: ${file}`);
}

// Create/update netlify.toml
console.log('\n📝 Configuring netlify.toml...');
const netlifyTomlContent = `# Netlify configuration for SPA routing
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# Opting out of Netlify Analytics
[analytics]
  # to disable, use false
  opt_out = true`;

const netlifyTomlPath = join(projectRoot, 'netlify.toml');
writeFileSync(netlifyTomlPath, netlifyTomlContent);
console.log('✅ netlify.toml updated with SPA routing rules');

// Create _redirects file
console.log('\n📝 Configuring public/_redirects...');
const redirectsContent = `# SPA routing fallback for client-side routing
/*    /index.html   200`;

const redirectsPath = join(projectRoot, 'public', '_redirects');
writeFileSync(redirectsPath, redirectsContent);
console.log('✅ _redirects file created with SPA routing rules');

// Verify build configuration
console.log('\n🏗️  Verifying build configuration...');
const packageJsonPath = join(projectRoot, 'package.json');
const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));

if (!packageJson.scripts || !packageJson.scripts.build) {
  console.error('❌ No build script found in package.json');
  process.exit(1);
}

console.log(`✅ Build script: ${packageJson.scripts.build}`);

// Check Vite configuration
const viteConfigPath = join(projectRoot, 'vite.config.ts');
if (existsSync(viteConfigPath)) {
  const viteConfig = readFileSync(viteConfigPath, 'utf8');
  if (viteConfig.includes('outDir')) {
    console.log('✅ Vite build output directory configured');
  } else {
    console.log('⚠️  Vite build output directory not explicitly configured (using default)');
  }
}

console.log('\n✅ Netlify deployment configuration completed!');
console.log('\n📋 Next steps:');
console.log('1. Commit these files to your repository:');
console.log('   git add netlify.toml public/_redirects');
console.log('   git commit -m "Configure Netlify SPA routing"');
console.log('2. Push to your GitHub repository');
console.log('3. In Netlify dashboard, ensure:');
console.log('   - Build command: npm run build');
console.log('   - Publish directory: dist/public');
console.log('4. Trigger a new deploy on Netlify');

console.log('\n💡 Troubleshooting tips:');
console.log('- If you still see 404 errors, check that your publish directory is set to "dist/public"');
console.log('- Ensure your build command is "npm run build"');
console.log('- Verify that your routes are properly defined in App.tsx');