# Agentic Internet Workshop - AI Coding Instructions

## Project Overview

This is a Next.js 14 website for the Agentic Internet Workshop—a conference about protocols and systems for agents connecting in the agentic web. The site displays event information, topics, attendees, and sponsors with support for multiple workshop instances (current and archived).

## Architecture

### Stack
- **Framework**: Next.js 14 with App Router (static export mode)
- **Runtime**: React 18 + TypeScript 5
- **Build**: Static HTML export (`next build` outputs to `/dist`)
- **Styling**: CSS-in-JS with custom design tokens in `/src/app/globals.css`
- **Key Libraries**: `qrcode` (generates QR codes for registration links)

### Data Flow

**Event Data System** (`/src/lib/eventData.ts`)
- Single source of truth: `events` object keyed by `eventId` string
- Current event: determined by status `'current'` (fallback to ID `'1'`)
- Archived events: accessible via `getArchivedEvents()` and `/events/[eventId]` routes
- Event shape includes: `eventId`, `status`, `date`, `location`, `details`, `topics`, `attendees`, `sponsors`, `schedule`

**React Context** (`/src/lib/EventContext.tsx`)
- Provides event data and navigation context to all pages
- Calculates `basePath` for archived events (`/events/{eventId}`) vs. current event (root)
- Critical: Layout wraps entire app with `<EventContextProvider>` for event-aware routing

**Component Pattern**
- Archived event pages use "Client" suffix (e.g., `ArchivedEventPageClient.tsx`) with `'use client'` directive
- Main landing page (`/src/app/page.tsx`) is a client component managing tabs (`overview`, `schedule`, `pricing`, `protocols`, `reading`, `sponsors`, `become-sponsor`)
- Reusable components: `EventCard`, `SponsorCard`, `EventLink`, `EventNavigation`, `SiteHeader`

## Key Files & Patterns

| File | Purpose |
|------|---------|
| `src/lib/eventData.ts` | All event data (365 lines)—add new events here, update attendee/sponsor lists |
| `src/lib/types.ts` | TypeScript interfaces (`Event`, `Topic`, `Sponsor`, etc.); defines allowed enums (`EventStatus`, `SponsorTier`, `TopicCategory`) |
| `src/app/page.tsx` | Main landing page with interactive tabs and QR code generation; imports from `eventData` |
| `src/app/layout.tsx` | Root layout; initializes fonts (Urbanist, Inter) and `EventContextProvider`; sets metadata |
| `src/components/` | Reusable widgets—check here before duplicating UI logic |
| `src/app/events/[eventId]/` | Archived event page templates; use `useEventContext()` hook for event data |

## Development Workflow

```bash
npm install  # Install dependencies (pnpm or yarn also work)
npm run dev  # Start dev server on http://localhost:3000 (hot reload)
npm run build  # Production build → /dist (static HTML export)
npm run lint  # TypeScript + ESLint check
```

**Key Commands**
- Development: `npm run dev` (watches src/ and reloads browser)
- Production: `npm run build` then `npm run start` or serve `/dist` directly
- Type checking: TypeScript compilation happens automatically; use IDE for real-time checks

## Important Conventions

### Adding Content
1. **New Event**: Add to `events` object in `eventData.ts`, set `status: 'archived'` or `'current'`
2. **New Topic/Sponsor/Attendee**: Update the relevant array in the event object
3. **Type Safety**: Always use types from `types.ts`; don't use `any`

### Client vs. Server Components
- Use `'use client'` only for interactivity (tabs, scroll effects, QR code generation)
- Prefer server components for static content
- Main page is client-only due to tab state and parallax effects

### URL Patterns
- Current event: `/`, `/topics`, `/whos-coming`, `/details`
- Archived event #1: `/events/1`, `/events/1/topics`, `/events/1/whos-coming`, `/events/1/details`
- Use `<EventLink>` component to auto-handle routing based on `basePath`

### Design System
- CSS variables in `globals.css` (e.g., `--accent-600`, `--neutral-900`)
- Fonts: Urbanist (headings), Inter (body) via `next/font/google`
- Responsive design includes parallax effects disabled on mobile (<960px)

## Integration Points

- **Event Data**: Modify `eventData.ts` to change content (no database needed)
- **Registration**: Update `event.details.registrationUrl` to point to Eventbrite or other ticketing service
- **Static Deployment**: Configure hosting for `/dist` output; works with Netlify, Vercel, S3+CloudFront

## Commands for Agents

- Use `npm run dev` to test changes locally
- For content updates only (no code changes): edit `eventData.ts` and restart
- When adding new routes or components: update `types.ts` first, then implement pages
- Always run `npm run lint` before submitting changes

