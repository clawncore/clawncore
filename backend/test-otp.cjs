const http = require('http');

// Test the registration endpoint
const data = JSON.stringify({
  email: 'test@example.com',
  password: 'test123'
});

const options = {
  hostname: 'localhost',
  port: 5000,  // Changed from 5173 to 5000
  path: '/api/auth/register',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data)
  }
};

const req = http.request(options, (res) => {
  console.log(`Status: ${res.statusCode}`);
  
  res.on('data', (chunk) => {
    console.log(`Body: ${chunk}`);
  });
  
  res.on('end', () => {
    console.log('Request completed');
  });
});

req.on('error', (error) => {
  console.error('Error:', error);
});

req.write(data);
req.end();