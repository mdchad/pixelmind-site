# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `bun run dev` - Start development server (localhost:3000)
- `bun run build` - Build production version
- `bun run start` - Start production server
- `bun run lint` - Run ESLint
- `bun run export` - Export static site
- `bun run deploy` - Build, export, and deploy to Vercel

### Additional Commands
- `bun run postbuild` - Generate sitemap (runs automatically after build)

## Project Architecture

This is a Next.js 13 portfolio/agency website with Sanity CMS integration and modern styling frameworks.

### Key Technologies
- **Frontend**: Next.js 13 with TypeScript, React 18
- **Styling**: Tailwind CSS with SCSS modules, Styled Components
- **CMS**: Sanity v3 with custom studio at `/studio`
- **Animations**: Framer Motion, React PowerGlitch, Spline 3D
- **Deployment**: Vercel with automatic sitemap generation

### Project Structure
- `src/pages/` - Next.js pages with file-based routing
- `src/components/` - Reusable React components
- `src/sanity/schemas/` - Sanity schema definitions
- `lib/` - Sanity client configuration and queries
- `src/styles/` - Global CSS and SCSS files

### Sanity CMS Integration
- Studio accessible at `/studio` route
- Environment variables required: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`
- Client configured in `lib/sanity.client.ts`
- Custom studio components in `src/components/Studio/`
- Schemas define content types: projects, posts, services, authors, etc.

### Styling System
- Tailwind CSS for utility-first styling
- Custom font family configuration using Inter
- SCSS modules for component-specific styles
- Styled Components for dynamic styling
- Custom shimmer animation keyframes

### Code Conventions
- TypeScript for type safety
- ESLint with Next.js core web vitals rules
- Prettier with single quotes, no semicolons, 2-space indentation
- React strict mode enabled
- Component imports use `@/` and `@components/` aliases

### Key Features
- Blog system with Sanity CMS
- Project portfolio with categories
- Team/about pages
- Link tree functionality
- SEO optimization with next-seo
- Responsive design with mobile-first approach
