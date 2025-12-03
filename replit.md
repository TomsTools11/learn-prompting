# Prompt Engineering Course Platform

## Overview

This is a web-based learning platform for teaching prompt engineering concepts and techniques. The application provides an interactive educational experience with structured course modules, individual lessons, and a techniques browser for exploring various prompt engineering methods. Built as a full-stack application, it currently uses in-memory storage with planned PostgreSQL integration via Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript using Vite as the build tool and development server.

**Routing**: Client-side routing implemented with Wouter, providing a lightweight alternative to React Router. The application has five main routes:
- Home page (`/`)
- Module listing (`/modules`)
- Module detail view (`/modules/:moduleId`)
- Lesson viewer (`/modules/:moduleId/lessons/:lessonId`)
- Techniques browser (`/techniques`)

**State Management**: TanStack Query (React Query) handles server state and data fetching with custom query configuration for error handling and caching strategies.

**UI Components**: The application uses shadcn/ui component library built on Radix UI primitives, providing accessible, customizable components. The design system follows a "new-york" style variant with Tailwind CSS for styling.

**Styling Approach**: Tailwind CSS with CSS variables for theming, supporting both custom design tokens (colors like `colormain`, `colorsecondary`, etc.) and shadcn/ui's semantic color system. Custom fonts include Exo for headings and Jost for body text.

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript, configured as ES modules.

**API Structure**: RESTful API pattern with all routes prefixed with `/api`. The current implementation includes a placeholder route registration system in `server/routes.ts`.

**Development vs Production**: 
- Development mode uses Vite middleware for hot module replacement and serves the client directly through Express
- Production mode serves pre-built static files from the `dist/public` directory
- Custom logging middleware tracks API request duration and response data

**Build Process**: Uses esbuild for server bundling and Vite for client bundling, with separate output directories for server code and client static assets.

### Data Storage Solutions

**Current Implementation**: In-memory storage using a `MemStorage` class that implements the `IStorage` interface. This provides basic CRUD operations for user management with a Map-based data structure.

**Planned Database**: PostgreSQL integration configured via Drizzle ORM. The schema defines a users table with:
- UUID primary key with automatic generation
- Username (unique, required)
- Password (required)

**ORM Configuration**: Drizzle Kit configured with:
- PostgreSQL dialect
- Schema located at `./shared/schema.ts`
- Migrations output to `./migrations` directory
- Connection via `DATABASE_URL` environment variable

**Schema Validation**: Zod schemas generated from Drizzle tables for runtime type validation, particularly for user insertion operations.

### Design Patterns and Architectural Decisions

**Monorepo Structure**: The codebase uses a shared structure where:
- `client/` contains all frontend code
- `server/` contains all backend code
- `shared/` contains code used by both client and server (currently database schema)

**Type Safety**: Full TypeScript implementation across the stack with path aliases configured for cleaner imports (`@/`, `@shared/`, `@assets/`).

**Error Handling**: Centralized error handling middleware catches and formats errors consistently. Client-side query errors are managed through React Query's built-in error boundaries.

**Session Management**: Infrastructure prepared for session-based authentication using `connect-pg-simple` for PostgreSQL session storage, though not currently implemented.

**Content Management**: Course data currently stored as TypeScript objects in `client/src/data/courseData.ts`, defining structured interfaces for Techniques, Lessons, and Modules. This allows for easy content updates without database changes.

## External Dependencies

### Third-Party Services

**Database**: Configured for Neon serverless PostgreSQL (`@neondatabase/serverless`), a cloud-native Postgres provider optimized for serverless and edge deployments.

### Key Libraries

**Frontend Dependencies**:
- `@tanstack/react-query`: Server state management and data synchronization
- `wouter`: Lightweight client-side routing
- `react-hook-form` with `@hookform/resolvers`: Form handling and validation
- `react-markdown`: Markdown rendering for lesson content
- `date-fns`: Date manipulation and formatting
- `cmdk`: Command palette interface component
- `embla-carousel-react`: Carousel/slider functionality
- Extensive Radix UI component primitives for accessible UI elements

**Backend Dependencies**:
- `express`: Web server framework
- `drizzle-orm`: Type-safe ORM for database operations
- `drizzle-zod`: Integration between Drizzle schemas and Zod validation
- `connect-pg-simple`: PostgreSQL session store for Express sessions

**Development Tools**:
- `vite`: Frontend build tool and dev server
- `tsx`: TypeScript execution for development
- `esbuild`: Fast JavaScript bundler for production builds
- Replit-specific plugins for development environment integration

**Styling and UI**:
- `tailwindcss`: Utility-first CSS framework
- `class-variance-authority`: Type-safe variant styling
- `clsx` and `tailwind-merge`: Conditional class name utilities