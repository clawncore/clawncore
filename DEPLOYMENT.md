# Deployment Guide

This guide explains how to deploy the ClawnCore Multitech Company website to a production environment.

## Prerequisites

1. Node.js (version 16 or higher)
2. PostgreSQL database (local or cloud instance like Neon)
3. Git

## Deployment Steps

### 1. Clone the Repository

```bash
git clone <repository-url>
cd clawncore
```

### 2. Install Root Dependencies

```bash
npm install
```

### 3. Install Frontend Dependencies

```bash
cd frontend
npm install
cd ..
```

### 4. Install Backend Dependencies

```bash
cd backend
npm install
cd ..
```

### 5. Configure Environment Variables

Create a `.env` file in the backend directory with the following variables:

```env
# Environment variables for production
NODE_ENV=production
PORT=3001

# PostgreSQL connection string (required)
DATABASE_URL=postgresql://user:password@localhost:5432/clawncore

# For email functionality (optional)
# EMAIL_USER=your-email@gmail.com
# EMAIL_PASS=your-app-password
```

### 6. Build the Application

```bash
npm run build
```

This will create a production-ready build in the `frontend/dist` directory.

### 7. Start the Production Server

```bash
cd backend
npm start
```

The application will be available at `http://localhost:3001` (or the port specified in your environment variables).

## Netlify Deployment (Frontend)

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Set the build command to `npm run build`
3. Set the publish directory to `frontend/dist`
4. Add environment variables in the Netlify dashboard if needed

## Backend Deployment Options

### Option 1: Deploy to Render

1. Create a new web service on Render
2. Connect your GitHub repository
3. Set the root directory to `backend`
4. Set the build command to `npm run build`
5. Set the start command to `npm start`
6. Add environment variables in the Render dashboard

### Option 2: Deploy to Railway

1. Create a new project on Railway
2. Connect your GitHub repository
3. Set the root directory to `backend`
4. Configure the build and start commands
5. Add environment variables in the Railway dashboard

### Option 3: Deploy to Heroku

1. Create a new app on Heroku
2. Connect your GitHub repository
3. Set the root directory to `backend`
4. Set environment variables in Heroku dashboard
5. Enable automatic deploys

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NODE_ENV` | Environment mode (`production` or `development`) | Yes |
| `PORT` | Port for the server to listen on | Yes |
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `EMAIL_USER` | Email address for sending notifications | No |
| `EMAIL_PASS` | App password for email account | No |

## Troubleshooting

### Common Issues

1. **Database Connection Errors**: Ensure your `DATABASE_URL` is correct and the PostgreSQL instance is accessible.

2. **Port Conflicts**: Change the `PORT` environment variable if the default port is in use.

3. **Build Failures**: Make sure all dependencies are installed correctly by running `npm install` in both frontend and backend directories.

### Logs

Check the server logs for any errors during startup or runtime. The application logs API requests and errors to the console.

## Support

For deployment issues, contact the development team or check the GitHub repository for updates.