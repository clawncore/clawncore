// Simple script to start the server with environment variables
const { spawn } = require('child_process');

// Determine if we're in production mode
const isProduction = process.env.NODE_ENV === 'production';

// Start the server with tsx
const server = spawn('npx', [isProduction ? 'tsx' : 'tsx', 'server/index.ts'], {
    env: {
        ...process.env,
        NODE_ENV: process.env.NODE_ENV || 'development',
        PORT: process.env.PORT || '3001'
    },
    stdio: 'inherit'
});

server.on('close', (code) => {
    console.log(`Server process exited with code ${code}`);
});