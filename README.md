# ClawnCore Multitech Company

A modern semi-dark vibrant React website for ClawnCore Multitech Company.

## Project Structure

This project is organized into two main directories:

- `frontend/` - Contains all frontend code (React application)
- `backend/` - Contains all backend code (Node.js/Express API)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install root dependencies:
   ```bash
   npm install
   ```

2. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Install backend dependencies:
   ```bash
   cd ../backend
   npm install
   ```

### Development

To run both frontend and backend in development mode:

```bash
cd ..
npm run dev
```

This will start:
- Frontend development server on http://localhost:3000
- Backend API server on http://localhost:3001

### Building for Production

To build both frontend and backend for production:

```bash
npm run build
```

### Deployment

This project is configured for deployment on GitHub Pages. The frontend will be built and served statically, while the backend API will need to be deployed separately (e.g., on a Node.js hosting service).

## GitHub Pages Deployment

To deploy to GitHub Pages:

1. Make sure your repository settings are configured to use GitHub Actions for Pages deployment
2. Push your changes to the `main` branch
3. The GitHub Actions workflow will automatically build and deploy your site

The site will be available at `https://<username>.github.io/<repository-name>/`

For example, if your username is `clawncore` and your repository is named `clawncore`, the site will be available at:
`https://clawncore.github.io/clawncore/`

## Folder Structure

```
.
├── frontend/                 # Frontend React application
│   ├── src/                  # Source code
│   │   ├── components/       # React components
│   │   ├── contexts/         # React contexts
│   │   ├── hooks/            # Custom hooks
│   │   ├── lib/              # Utility functions
│   │   ├── pages/            # Page components
│   │   ├── App.tsx           # Main App component
│   │   ├── index.css         # Global styles
│   │   └── main.tsx          # Entry point
│   ├── index.html            # HTML template
│   ├── package.json          # Frontend dependencies
│   ├── tsconfig.json         # TypeScript configuration
│   └── vite.config.ts        # Vite configuration
│
├── backend/                  # Backend API
│   ├── shared/               # Shared code between frontend and backend
│   ├── index.ts              # Entry point
│   ├── routes.ts             # API routes
│   ├── storage.ts            # Data storage utilities
│   ├── localAuth.ts          # Authentication utilities
│   ├── db.ts                 # Database configuration
│   ├── package.json          # Backend dependencies
│   ├── tsconfig.json         # TypeScript configuration
│   └── vite.ts               # Vite utilities
│
├── attached_assets/          # Static assets
├── netlify.toml              # Netlify deployment configuration
└── package.json              # Root package with workspace scripts
```

## Technologies Used

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Radix UI
- React Query
- Wouter (routing)

### Backend
- Node.js
- Express
- TypeScript
- Drizzle ORM
- PostgreSQL (via Neon)

## Available Scripts

### Root scripts
- `npm run dev` - Start both frontend and backend in development mode
- `npm run build` - Build both frontend and backend for production

### Frontend scripts
- `npm run dev` - Start frontend development server
- `npm run build` - Build frontend for production
- `npm run preview` - Preview production build

### Backend scripts
- `npm run dev` - Start backend development server
- `npm run build` - Build backend for production