# ClawnCore Multitech Company Website

## Overview

This is a modern React-based website for ClawnCore Multitech Company, a technology company specializing in multiple domains including drone technology, artificial intelligence, agriculture solutions, cloud computing, and cybersecurity. The website features a semi-dark theme with vibrant gradient accents, smooth animations, and a comprehensive showcase of the company's services and capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a modern React-based frontend built with TypeScript and Vite as the build tool. The architecture follows these key patterns:

- **Component-Based Architecture**: Modular React components organized by functionality (Header, Hero, Services, Contact, etc.)
- **Routing**: Client-side routing implemented with Wouter for lightweight navigation
- **State Management**: React Query for server state management and React Context for theme management
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design system
- **Form Handling**: React Hook Form with Zod validation for type-safe form management

### Backend Architecture
The server follows an Express.js-based REST API architecture with the following design decisions:

- **Framework**: Express.js with TypeScript for type safety
- **Database Layer**: Drizzle ORM for PostgreSQL with type-safe database operations
- **Authentication**: Replit Auth integration for OAuth-based authentication
- **Session Management**: Express sessions with PostgreSQL store for persistent user sessions
- **API Design**: RESTful endpoints with proper error handling and logging middleware

### Design System
The application implements a comprehensive design system:

- **Color Scheme**: Semi-dark theme with CSS custom properties for dynamic theming
- **Typography**: Clean, modern fonts with gradient text effects for headers
- **Components**: Reusable UI components from shadcn/ui with consistent styling
- **Animations**: Smooth transitions and hover effects throughout the interface
- **Responsive Design**: Mobile-first approach with responsive breakpoints

### Data Layer
The data architecture uses:

- **Schema Definition**: Centralized schema definitions in shared folder for type consistency
- **Database Connection**: Neon PostgreSQL with connection pooling
- **Type Safety**: Drizzle-Zod integration for runtime validation
- **Migrations**: Database schema versioning through Drizzle migrations

## External Dependencies

### Database
- **Neon PostgreSQL**: Serverless PostgreSQL database for production deployment
- **Drizzle ORM**: Type-safe ORM for database operations and schema management
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### Authentication
- **Replit Auth**: OAuth-based authentication service integrated with OpenID Connect
- **Passport.js**: Authentication middleware for handling OAuth flows
- **Express Sessions**: Session management with secure cookie handling

### UI/UX Libraries
- **Radix UI**: Accessible component primitives for complex UI elements
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Icon library for consistent iconography
- **React Hook Form**: Form handling with validation
- **Zod**: Schema validation for type safety

### Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Type safety across the entire application
- **React Query**: Server state management and caching
- **PostCSS**: CSS processing with Tailwind integration

### Production Services
- **Replit**: Hosting platform with integrated development environment
- **Environment Variables**: Secure configuration management for database URLs and secrets
- **Session Storage**: PostgreSQL-backed session persistence for user authentication