#!/usr/bin/env node

// Simple deployment test script
const { execSync } = require('child_process');

console.log('Testing deployment setup...');

try {
  // Test that required commands are available
  console.log('Checking for required tools...');
  
  // Check Node.js
  const nodeVersion = execSync('node --version', { encoding: 'utf8' });
  console.log(`✓ Node.js: ${nodeVersion.trim()}`);
  
  // Check npm
  const npmVersion = execSync('npm --version', { encoding: 'utf8' });
  console.log(`✓ npm: ${npmVersion.trim()}`);
  
  // Check MongoDB (if running locally)
  try {
    const mongoVersion = execSync('mongod --version', { encoding: 'utf8' });
    console.log('✓ MongoDB: Available');
  } catch (error) {
    console.log('⚠ MongoDB: Not found locally (may be using cloud instance)');
  }
  
  // Test environment variables
  console.log('\nChecking environment variables...');
  const requiredEnvVars = ['NODE_ENV', 'PORT', 'DATABASE_URL'];
  const missingEnvVars = [];
  
  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      missingEnvVars.push(envVar);
    }
  }
  
  if (missingEnvVars.length > 0) {
    console.log(`⚠ Missing environment variables: ${missingEnvVars.join(', ')}`);
    console.log('  Please set these variables in your .env file or deployment environment');
  } else {
    console.log('✓ All required environment variables are set');
  }
  
  console.log('\nDeployment test completed!');
  console.log('To deploy, run: npm run build:deploy && npm start');

} catch (error) {
  console.error('Deployment test failed:', error.message);
  process.exit(1);
}