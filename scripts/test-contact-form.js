#!/usr/bin/env node

// Simple test script for contact form functionality
const https = require('https');
const http = require('http');

console.log('Testing contact form functionality...');

// Test data
const testContactData = {
  firstName: 'Test',
  lastName: 'User',
  email: 'test@example.com',
  message: 'This is a test message from the deployment verification script.'
};

// Function to make HTTP request
function makeRequest(url, options, postData) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;
    
    const req = lib.request(url, options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          data: data
        });
      });
    });
    
    req.on('error', (error) => {
      reject(error);
    });
    
    if (postData) {
      req.write(postData);
    }
    
    req.end();
  });
}

async function testContactForm() {
  try {
    // Test health check endpoint first
    console.log('Testing health check endpoint...');
    const healthResponse = await makeRequest('http://localhost:3001/api/health', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    console.log(`✓ Health check: ${healthResponse.statusCode}`);
    
    // Test contact form endpoint
    console.log('Testing contact form endpoint...');
    const contactResponse = await makeRequest('http://localhost:3001/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }, JSON.stringify(testContactData));
    
    console.log(`✓ Contact form: ${contactResponse.statusCode}`);
    
    if (contactResponse.statusCode === 200) {
      console.log('✓ Contact form submission successful');
    } else {
      console.log(`⚠ Contact form submission failed with status ${contactResponse.statusCode}`);
      console.log(`Response: ${contactResponse.data}`);
    }
    
    console.log('\nContact form test completed!');
    
  } catch (error) {
    console.error('Contact form test failed:', error.message);
    process.exit(1);
  }
}

// Run the test if this script is executed directly
if (require.main === module) {
  testContactForm();
}

module.exports = { testContactForm };