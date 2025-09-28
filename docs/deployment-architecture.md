# Deployment Architecture

## Overview

The ClawnCore Multitech Company website follows a modern full-stack architecture with a React frontend and Express.js backend, both served from the same server in production.

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    Client (Browser)                         │
└─────────────────────┬───────────────────────────────────────┘
                      │ HTTP Requests
                      ▼
┌─────────────────────────────────────────────────────────────┐
│                    Load Balancer                            │
│                    (Optional)                               │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│                    Web Server                               │
│                                                             │
│  ┌────────────────────────────────────────────────────────┐ │
│  │                   Express.js                           │ │
│  │                                                        │ │
│  │  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐ │ │
│  │  │   Routes    │◄──►│  Storage    │◄──►│   MongoDB   │ │ │
│  │  └─────────────┘    └─────────────┘    └─────────────┘ │ │
│  │                                                        │ │
│  │  ┌─────────────┐    ┌─────────────┐                    │ │
│  │  │   Vite      │◄──►│ Public Dir  │                    │ │
│  │  └─────────────┘    └─────────────┘                    │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

## Components

### 1. Frontend (React + Vite)
- Built with React and TypeScript
- Uses Vite for development and build processes
- Compiled to static files in `dist/public` directory
- Served by Express.js in production

### 2. Backend (Express.js)
- RESTful API for all application functionality
- Serves static files in production
- Handles authentication, data processing, and business logic
- Connects to MongoDB for data storage

### 3. Database (MongoDB)
- Stores user data, contact forms, logos, and application data
- Can be hosted locally or on MongoDB Atlas
- Connection configured via `DATABASE_URL` environment variable

### 4. Email Service (Optional)
- Sends OTPs and notifications via Nodemailer
- Configured with `EMAIL_USER` and `EMAIL_PASS` environment variables
- Falls back to console logging in development

## Deployment Flow

1. **Development**: 
   - Frontend and backend run separately with hot reloading
   - API requests proxied from Vite to backend server

2. **Build**:
   - React application compiled to static files
   - Output placed in `dist/public` directory

3. **Production**:
   - Express.js serves both API endpoints and static files
   - Single server handles all requests
   - Environment variables configure behavior

## Environment Configuration

The application uses environment variables for configuration:

- `NODE_ENV`: Determines development or production behavior
- `PORT`: Server port (default: 3001)
- `DATABASE_URL`: MongoDB connection string
- `EMAIL_USER`/`EMAIL_PASS`: Email credentials (optional)

## Scaling Considerations

### Horizontal Scaling
- Multiple server instances behind a load balancer
- Shared MongoDB database
- Session storage in database (currently in-memory)

### Vertical Scaling
- Increase server resources (CPU, RAM)
- Optimize MongoDB queries and indexes
- Implement caching strategies

## Security Considerations

- Environment variables stored securely
- MongoDB connection secured with authentication
- API endpoints validated with Zod schemas
- Email credentials protected
- CORS configured appropriately

## Monitoring and Logging

- API requests logged with timing information
- Error handling with detailed logging
- Health check endpoint for monitoring
- Console logging for debugging

## Backup and Recovery

- MongoDB database backups
- Git version control for source code
- Environment variable documentation
- Deployment scripts for recovery