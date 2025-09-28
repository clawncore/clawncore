# Deployment Guide

This guide explains how to deploy the ClawnCore Multitech Company website to a production environment.

## Prerequisites

1. Node.js (version 16 or higher)
2. MongoDB database (local or cloud instance)
3. Git

## Deployment Steps

### 1. Clone the Repository

```bash
git clone <repository-url>
cd clawncore
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Environment variables for production
NODE_ENV=production
PORT=3001

# MongoDB connection string (required)
DATABASE_URL=mongodb://localhost:27017/clawncore

# For email functionality (optional)
# EMAIL_USER=your-email@gmail.com
# EMAIL_PASS=your-app-password
```

### 4. Build the Application

```bash
npm run build
```

This will create a production-ready build in the `dist/public` directory.

### 5. Start the Production Server

```bash
npm start
```

The application will be available at `http://localhost:3001` (or the port specified in your environment variables).

## GitHub Deployment Options

### Option 1: Deploy to Heroku

1. Create a new app on Heroku
2. Connect your GitHub repository
3. Set environment variables in Heroku dashboard
4. Enable automatic deploys

### Option 2: Deploy to Vercel

1. Import your repository into Vercel
2. Configure environment variables in the Vercel dashboard
3. Set the build command to `npm run build`
4. Set the output directory to `dist/public`

### Option 3: Deploy to Render

1. Create a new web service on Render
2. Connect your GitHub repository
3. Set the build command to `npm run build`
4. Set the start command to `npm start`
5. Add environment variables in the Render dashboard

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NODE_ENV` | Environment mode (`production` or `development`) | Yes |
| `PORT` | Port for the server to listen on | Yes |
| `DATABASE_URL` | MongoDB connection string | Yes |
| `EMAIL_USER` | Email address for sending notifications | No |
| `EMAIL_PASS` | App password for email account | No |

## Troubleshooting

### Common Issues

1. **MongoDB Connection Errors**: Ensure your `DATABASE_URL` is correct and the MongoDB instance is accessible.

2. **Port Conflicts**: Change the `PORT` environment variable if the default port is in use.

3. **Build Failures**: Make sure all dependencies are installed correctly by running `npm install`.

### Logs

Check the server logs for any errors during startup or runtime. The application logs API requests and errors to the console.

## Support

For deployment issues, contact the development team or check the GitHub repository for updates.