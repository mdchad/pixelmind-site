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

This is a modern Next.js 16 portfolio/agency website with a minimalist terminal-inspired design.

### Key Technologies
- **Frontend**: Next.js 16 with TypeScript, React 19
- **Styling**: Tailwind CSS 4 with custom CSS variables
- **Animations**: Framer Motion, React PowerGlitch, ASCII canvas animations
- **Deployment**: Vercel with automatic sitemap generation

### Project Structure
- `src/pages/` - Next.js pages with file-based routing
- `src/components/landing/` - Landing page components (Header, Hero, Services, Contact, etc.)
- `src/styles/` - Global CSS with CSS variables and Tailwind
- `lib/` - Utility functions

### Design System
- **Terminal-inspired aesthetic**: Monospace fonts, crosshair cursor, mix-blend-mode effects
- **Color scheme**: Black background (#000), white foreground (#fff), dim accents (#444)
- **Typography**: Space Mono for monospace, Inter for sans-serif
- **Layout**: Grid-based services, horizontal scrolling testimonials
- **Animations**: Rotating ASCII donut, blinking cursor, button hover effects

### Styling System
- Tailwind CSS 4 for utility-first styling
- CSS variables for theming (--bg, --fg, --dim, --accent)
- Custom font configuration with Space Mono and Inter
- Custom animations and transitions
- Crosshair cursor throughout

### Code Conventions
- TypeScript for type safety
- ESLint with Next.js core web vitals rules
- Prettier with single quotes, 2-space indentation
- React strict mode enabled
- Component imports use `@/` and `@components/` aliases

### Key Features
- ASCII canvas animation background
- Real-time clock in header
- Smooth scroll navigation
- Contact form with custom styling
- Responsive grid layout
- Mix-blend-mode visual effects
- SEO optimization with next-seo
- Mobile-first responsive design
