# Railway Deployment Guide

This guide explains how to deploy the ClawnCore Multitech Company website to Railway.

## Prerequisites

1. A Railway account (https://railway.app/)
2. A GitHub account
3. This repository pushed to GitHub

## Deployment Steps

### Step 1: Create a Railway Project

1. Go to [Railway](https://railway.app/) and sign in or create an account
2. Click "New Project"
3. Select "Deploy from GitHub Repo"
4. Connect your GitHub account if prompted
5. Select your `clawncore-multitech` repository

### Step 2: Configure Environment Variables

Railway will automatically detect the project settings, but you need to configure environment variables:

1. In your Railway project dashboard, click on "Variables"
2. Add the following environment variables:
   - `NODE_ENV`: `production`
   - `PORT`: `3001`
   - `DATABASE_URL`: Your MongoDB connection string (MongoDB Atlas recommended)
   - `EMAIL_USER`: Your email address (optional)
   - `EMAIL_PASS`: Your email app password (optional)

### Step 3: Configure Build and Start Commands

Railway should automatically detect the correct commands, but you can verify them:

- Build Command: `npm run build`
- Start Command: `npm start`

### Step 4: Deploy

1. Railway will automatically start deploying your application
2. Wait for the deployment to complete
3. Click on "Deployments" to see the deployment logs
4. Once deployment is complete, click on "Settings" and then "Domains"
5. Your application will be available at the provided Railway domain

## MongoDB Configuration

For production deployment, it's recommended to use MongoDB Atlas:

1. Create a MongoDB Atlas account: https://www.mongodb.com/cloud/atlas
2. Create a new cluster
3. Add a database user
4. Add your Railway app's IP address to the IP whitelist (or allow access from anywhere for development)
5. Get the connection string and add it as the `DATABASE_URL` environment variable

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NODE_ENV` | Environment mode (`production`) | Yes |
| `PORT` | Port for the server to listen on (default: 3001) | Yes |
| `DATABASE_URL` | MongoDB connection string | Yes |
| `EMAIL_USER` | Email address for sending notifications | No |
| `EMAIL_PASS` | App password for email account | No |

## Troubleshooting

### Common Issues

1. **Build Failures**: Check the deployment logs for any errors during the build process
2. **MongoDB Connection Errors**: Ensure your `DATABASE_URL` is correct and the MongoDB instance is accessible
3. **Port Conflicts**: Railway automatically assigns a port through the `PORT` environment variable

### Logs

You can view detailed logs in the Railway dashboard under the "Deployments" tab.

## Custom Domain

To use a custom domain:

1. In your Railway project, go to "Settings" → "Domains"
2. Click "Add Domain"
3. Enter your custom domain
4. Follow the instructions to configure DNS records with your domain provider

## Scaling

Railway automatically scales your application based on demand. You can configure additional scaling options in the Railway dashboard.

## Support

For deployment issues:
1. Check the Railway documentation: https://docs.railway.app/
2. Verify environment variables are set correctly
3. Ensure database connections are working
4. Refer to DEPLOYMENT.md for detailed instructions