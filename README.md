# Agentic Internet Workshop

A Next.js website for the Agentic Internet Workshop taking place on October 24, 2025 at the Computer History Museum in Mountain View, California.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

To create a production build:

```bash
npm run build
```

This will generate a static export in the `out` directory that can be deployed to any static hosting service.

## Project Structure

- `/src/app/page.tsx` - Main landing page component
- `/src/app/layout.tsx` - Root layout with font configuration
- `/src/app/globals.css` - Design system CSS
- `/public/` - Static assets (including logo.png)

## Features

- Responsive design with mobile-first approach
- Professional design system with Urbanist and Inter fonts
- Interactive tabs for content organization
- Smooth scrolling navigation
- Accessible focus states and keyboard navigation
- Static export ready for deployment

## Adding the Logo

Place your `logo.png` file in the `/public/` directory. The logo should be optimized for web use and will display at 32px height in the header.
