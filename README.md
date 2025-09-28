# ClawnCore Multitech Company Website

This is a modern React website for ClawnCore Multitech Company with a semi-dark vibrant theme.

## Features

- Responsive design with mobile-friendly navigation
- Dark/light theme toggle
- Services showcase (Agriculture, Cloud Computing, Cybersecurity)
- Video gallery with YouTube integration
- Contact form with validation
- Logo gallery with featured logos section
- Admin panel for logo management
- Subscription system
- Clawn AI integration
- User authentication and profile management
- Inline video players for service demos

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode with hot reloading.

### `npm run dev:server`

Runs the backend server in development mode.

### `npm run build`

Builds the app for production to the `dist/public` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### `npm run build:deploy`

Runs a complete build process with cleanup and verification steps.

### `npm run test:deploy`

Tests the deployment setup and verifies required tools and environment variables.

### `npm start`

Runs the production server that serves both the API and the built client files.
Make sure to run `npm run build` first.

### Deployment

To deploy the application:

1. Build the client: `npm run build` or `npm run build:deploy`
2. Start the server: `npm start`
3. The application will be available on the port specified in your environment variables (default: 3001)

For production deployment, make sure to set the following environment variables:
- `NODE_ENV=production`
- `PORT` (optional, defaults to 3001)
- `DATABASE_URL` (MongoDB connection string)
- `EMAIL_USER` and `EMAIL_PASS` (for email functionality, optional)

### Health Check

The application includes a health check endpoint at `GET /api/health` that can be used to verify the deployment is working correctly.

## Logo Management

The website includes a complete logo management system with:

- Database storage for logos
- RESTful API endpoints for CRUD operations
- Client-side React hooks for easy integration
- Featured logos section on the homepage
- Dedicated logo gallery page
- Admin panel for managing logos

### API Endpoints

- `GET /api/logos` - Get all logos
- `GET /api/logos/featured` - Get featured logos
- `GET /api/logos/:id` - Get a specific logo
- `POST /api/logos` - Create a new logo (authenticated)
- `PATCH /api/logos/:id` - Update a logo (authenticated)
- `DELETE /api/logos/:id` - Delete a logo (authenticated)
- `GET /api/health` - Health check endpoint for deployment verification

See [Logo API Documentation](server/docs/logo-api.md) for detailed information.

## Authentication

The website uses Replit authentication with a custom login flow:

- Direct login page as the entry point
- Profile page for authenticated users
- Automatic redirection for unauthenticated users

## Service Demos

Each service page includes an inline video player to showcase the technology:

- Agriculture solutions page with demo video
- Cloud computing platform with demo video
- Cybersecurity protection with demo video

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)