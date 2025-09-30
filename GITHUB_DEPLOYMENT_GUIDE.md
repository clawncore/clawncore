# GitHub Deployment Guide

This guide will help you deploy your ClawnCore Multitech Company website to GitHub.

## Prerequisites

1. A GitHub account
2. GitHub Desktop application (recommended) or Git installed on your system

## Deployment Steps

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and log in to your account
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository (e.g., "clawncore-website")
4. Add a description (optional)
5. Choose to make it Public (recommended for portfolio projects)
6. **Do NOT initialize with a README**, .gitignore, or license
7. Click "Create repository"

### Step 2: Install GitHub Desktop (if not already installed)

1. Go to [desktop.github.com](https://desktop.github.com/) and download GitHub Desktop
2. Install the application following the installation wizard

### Step 3: Add Your Local Repository to GitHub Desktop

1. Open GitHub Desktop
2. Select "Add" → "Add Existing Repository" from the File menu
3. Browse to your project folder: `C:\xampp\htdocs\src\clawncore`
4. Click "Add Repository"

### Step 4: Publish Your Repository to GitHub

1. In GitHub Desktop, you should see your repository listed
2. Click the "Publish repository" button in the top right corner
3. If you haven't signed in to GitHub Desktop yet, sign in with your GitHub credentials
4. Make sure your repository name matches the one you created on GitHub
5. Ensure "Keep this code private" is unchecked if you want a public repository
6. Click "Publish Repository"

### Step 5: Verify Deployment

1. Go to your GitHub repository page
2. Refresh the page to see your code
3. Verify that all files have been uploaded (except those in .gitignore)
4. Check that your README.md is displayed properly

## Repository Structure

Your repository includes:

- **Frontend**: React frontend application in the `frontend/` directory
- **Backend**: Express.js backend in the `backend/` directory
- **Shared**: Shared types and schemas in the `backend/shared/` directory
- **Documentation**: Deployment guides and API documentation
- **Scripts**: Utility scripts for building and deployment

## Important Files

- `README.md`: Project overview and documentation
- `DEPLOYMENT.md`: Detailed deployment instructions
- `package.json`: Project dependencies and scripts
- `.gitignore`: Files and directories excluded from version control
- `.env.example`: Example environment variables

## Environment Variables

For security, environment variables are not committed to the repository. You'll need to set these in your deployment environment:

- `NODE_ENV`: Set to "production"
- `PORT`: Server port (default: 3001)
- `DATABASE_URL`: PostgreSQL connection string
- `EMAIL_USER` and `EMAIL_PASS`: Email credentials (optional)

## Deployment to Hosting Platforms

After pushing to GitHub, you can deploy to various platforms:

### GitHub Pages (Frontend Only)
For frontend hosting with separate backend:
1. Go to your repository settings on GitHub
2. Navigate to "Pages" under "Code and automation"
3. Under "Source", select "GitHub Actions"
4. The site will automatically deploy using the GitHub Actions workflow
5. Your site will be available at `https://<username>.github.io/<repository-name>/`

### Netlify (Frontend Only)
For frontend hosting with separate backend:
1. Import your GitHub repository
2. Set the build command to `npm run build`
3. Set the publish directory to `frontend/dist`
4. Set the base directory to `frontend`

### Vercel (Frontend Only)
For frontend hosting with separate backend:
1. Import your GitHub repository
2. Set the build command to `npm run build`
3. Set the output directory to `frontend/dist`
4. Set the root directory to `frontend`

### Render/Railway/Heroku (Backend Only)
For backend deployment:
1. Connect your GitHub repository
2. Set the root directory to `backend`
3. Set environment variables in the dashboard
4. Deploy using the platform's CI/CD

### Traditional Hosting (VPS/Dedicated Server)
1. Clone the repository to your server
2. Install dependencies with `npm install` in both frontend and backend directories
3. Build the application with `npm run build` from the root directory
4. Start the server with `cd backend && npm start`

## Post-Deployment

After deployment:

1. Test all functionality
2. Verify API endpoints work
3. Check contact form submission
4. Validate user authentication
5. Confirm database connections
6. Test on different devices and browsers

## Updates and Maintenance

To update your deployed application:

1. Make changes to your local code
2. Commit changes in GitHub Desktop
3. Push to GitHub
4. If using automatic deployments, the platform will update automatically
5. If using manual deployments, trigger a new deployment

## Support

For issues with deployment:
1. Check the console logs for errors
2. Verify environment variables are set correctly
3. Ensure database connections are working
4. Refer to DEPLOYMENT.md for detailed instructions