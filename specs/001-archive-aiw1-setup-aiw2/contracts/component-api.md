# Component API Contracts

**Feature**: 001-archive-aiw1-setup-aiw2
**Phase**: 1 - Design & Contracts
**Date**: 2025-12-08

## Overview

This document defines the contracts for React components that enable event archiving and navigation. These components form the public API for the event versioning system.

---

## EventContext

**Purpose**: Provides event context to descendant components for path prefixing and event-aware rendering.

**Location**: `src/app/lib/EventContext.tsx`

### API

**Type Definitions**:
```typescript
interface EventContextValue {
  /** Current event ID ('current' for /, or specific ID like '1' for /events/1/) */
  eventId: string

  /** Base path for links ('' for current event, '/events/1' for archived) */
  basePath: string

  /** Full event data object */
  event: Event

  /** Whether this is an archived event */
  isArchived: boolean
}

interface EventContextProviderProps {
  eventId: string
  children: React.ReactNode
}
```

**Usage**:

```typescript
// Provider (in layout or page)
import { EventContextProvider } from '@/lib/EventContext'

export default function ArchivedEventLayout({
  children,
  params
}: {
  children: ReactNode
  params: { eventId: string }
}) {
  return (
    <EventContextProvider eventId={params.eventId}>
      {children}
    </EventContextProvider>
  )
}

// Consumer (in any descendant component)
import { useEventContext } from '@/lib/EventContext'

function MyComponent() {
  const { event, isArchived, basePath } = useEventContext()

  return (
    <div>
      <h1>{event.date}</h1>
      {isArchived && <span>Archived Event</span>}
    </div>
  )
}
```

**Contract Guarantees**:
- Context is available to all components within EventContextProvider
- `eventId` always matches the current route parameter
- `basePath` is always correct for the current event context
- `event` object is always fully populated from eventData.ts
- Throws error if useEventContext() called outside provider

---

## EventLink

**Purpose**: Context-aware link component that automatically prefixes paths based on current event context.

**Location**: `src/app/components/EventLink.tsx`

### API

**Type Definitions**:
```typescript
interface EventLinkProps {
  /** Relative path (e.g., '/topics', '/details') or absolute URL */
  href: string

  /** Link content */
  children: React.ReactNode

  /** Additional CSS classes */
  className?: string

  /** ARIA label for accessibility */
  'aria-label'?: string

  /** Opens in new tab if true */
  target?: '_blank' | '_self'

  /** All other Next.js Link props */
  [key: string]: any
}
```

**Usage**:

```typescript
import { EventLink } from '@/components/EventLink'

// In current event (/)
<EventLink href="/topics">Topics</EventLink>
// Renders: <Link href="/topics">Topics</Link>

// In archived event (/events/1/)
<EventLink href="/topics">Topics</EventLink>
// Renders: <Link href="/events/1/topics">Topics</Link>

// External links remain unchanged
<EventLink href="https://example.com">External</EventLink>
// Renders: <Link href="https://example.com">External</Link>

// With additional props
<EventLink
  href="/details"
  className="custom-class"
  aria-label="View event details"
>
  Details
</EventLink>
```

**Behavior Rules**:
1. **Internal relative paths** (starting with `/`):
   - Prefixed with `basePath` from EventContext
   - Example: `/topics` → `/events/1/topics` (in archived context)

2. **External URLs** (starting with `http://` or `https://`):
   - Passed through unchanged
   - Example: `https://example.com` → `https://example.com`

3. **Hash links** (starting with `#`):
   - Passed through unchanged
   - Example: `#section` → `#section`

4. **Query parameters preserved**:
   - Example: `/topics?filter=technical` → `/events/1/topics?filter=technical`

**Contract Guarantees**:
- Always renders Next.js `<Link>` component internally
- Automatically reads EventContext (no manual context passing required)
- Preserves all Next.js Link props (prefetch, scroll, etc.)
- Works correctly in both current and archived event contexts
- External links never prefixed
- Throws error if used outside EventContextProvider

---

## EventNavigation

**Purpose**: Tab-based navigation UI for switching between current and archived events.

**Location**: `src/app/components/EventNavigation.tsx`

### API

**Type Definitions**:
```typescript
interface EventNavigationProps {
  /** Current event ID (undefined for current event at /) */
  currentEventId?: string

  /** Additional CSS classes */
  className?: string
}
```

**Usage**:

```typescript
import { EventNavigation } from '@/components/EventNavigation'

// In root layout
<EventNavigation currentEventId={undefined} />

// In archived event layout
<EventNavigation currentEventId="1" />

// With custom styling
<EventNavigation
  currentEventId="1"
  className="custom-nav-class"
/>
```

**Rendered Output**:
```html
<nav role="tablist" aria-label="Event Navigation" class="event-navigation">
  <a
    href="/"
    role="tab"
    aria-selected="true"
    class="event-nav-tab active-tab"
  >
    AIW #2 (Current)
  </a>
  <a
    href="/events/1"
    role="tab"
    aria-selected="false"
    class="event-nav-tab"
  >
    AIW #1 Archive
  </a>
</nav>
```

**Behavior**:
- Fetches current event via `getCurrentEvent()`
- Fetches all archived events via `getArchivedEvents()`
- Marks active tab based on `currentEventId`
- Applies `active-tab` class to current event
- Sets `aria-selected="true"` on active tab

**Accessibility**:
- Uses `role="tablist"` and `role="tab"` for proper ARIA semantics
- Keyboard navigation works via Tab key (browser default)
- Active tab has visible focus state (via CSS)
- Screen readers announce active tab via `aria-selected`

**Contract Guarantees**:
- Always shows current event first
- Archived events ordered by event number (newest first)
- Only archived events appear in navigation (no future events)
- Active state always matches current route
- Minimum 44px touch targets (per constitution)

---

## EventIndicator

**Purpose**: Visual indicator showing which event the visitor is currently viewing.

**Location**: `src/app/components/EventIndicator.tsx`

### API

**Type Definitions**:
```typescript
interface EventIndicatorProps {
  /** Event to display */
  event: Event

  /** Visual variant */
  variant?: 'banner' | 'badge' | 'subtle'

  /** Additional CSS classes */
  className?: string
}
```

**Usage**:

```typescript
import { EventIndicator } from '@/components/EventIndicator'
import { useEventContext } from '@/lib/EventContext'

function MyPage() {
  const { event } = useEventContext()

  return (
    <div>
      <EventIndicator event={event} variant="banner" />
      {/* Page content */}
    </div>
  )
}

// For archived events only
{event.status === 'archived' && (
  <EventIndicator event={event} variant="badge" />
)}
```

**Variants**:

1. **banner**: Full-width notice banner
   ```html
   <aside role="note" class="event-indicator-banner">
     Viewing archived content from AIW #1 (October 24, 2025)
   </aside>
   ```

2. **badge**: Compact badge/pill
   ```html
   <span class="event-indicator-badge">
     AIW #1 Archive
   </span>
   ```

3. **subtle**: Minimal text indicator
   ```html
   <span class="event-indicator-subtle">
     October 24, 2025
   </span>
   ```

**Contract Guarantees**:
- Only renders for archived events by default
- Uses semantic HTML (`<aside role="note">` for banner)
- Accessible to screen readers
- Does not block or obscure main content

---

## TopicSourceNotice

**Purpose**: Notice banner indicating topics are sourced from a previous event (FR-004).

**Location**: `src/app/components/TopicSourceNotice.tsx`

### API

**Type Definitions**:
```typescript
interface TopicSourceNoticeProps {
  /** Current event (with isSourcedFrom field) */
  event: Event

  /** Additional CSS classes */
  className?: string
}
```

**Usage**:

```typescript
import { TopicSourceNotice } from '@/components/TopicSourceNotice'
import { getCurrentEvent } from '@/lib/eventData'

function TopicsPage() {
  const event = getCurrentEvent()

  return (
    <section>
      <h2>Topics</h2>
      <TopicSourceNotice event={event} />
      <TopicsList topics={event.topics} />
    </section>
  )
}
```

**Rendered Output** (when `event.isSourcedFrom` is set):
```html
<aside role="note" class="notice-banner topic-source-notice">
  <svg class="info-icon" aria-hidden="true"><!-- Info icon --></svg>
  <p>
    Topics shown below are sourced from AIW #1.
    New topic submissions for AIW #2 will be appearing as the event approaches.
  </p>
</aside>
```

**Behavior**:
- Only renders if `event.isSourcedFrom` is defined
- Returns `null` if topics are original to this event
- Displays source event number dynamically
- Uses info/notice styling (blue background, icon)

**Contract Guarantees**:
- Always appears above topics list
- Clearly visible (high contrast)
- Accessible to screen readers via `role="note"`
- Icon marked `aria-hidden` to avoid duplication

---

## WhosComingEmptyState

**Purpose**: Empty state component for "Who's Coming" section when no attendees (FR-006).

**Location**: `src/app/components/WhosComingEmptyState.tsx`

### API

**Type Definitions**:
```typescript
interface WhosComingEmptyStateProps {
  /** Link to archived event attendees */
  archiveLink: string

  /** Archived event number (e.g., 1) */
  archiveEventNumber: number

  /** Additional CSS classes */
  className?: string
}
```

**Usage**:

```typescript
import { WhosComingEmptyState } from '@/components/WhosComingEmptyState'

function WhosComingPage() {
  const event = getCurrentEvent()

  if (event.attendees.length === 0) {
    return (
      <section className="whos-coming">
        <h2>Who's Coming to AIW #{event.eventNumber}</h2>
        <WhosComingEmptyState
          archiveLink="/events/1/whos-coming"
          archiveEventNumber={1}
        />
      </section>
    )
  }

  return <AttendeeList attendees={event.attendees} />
}
```

**Rendered Output**:
```html
<div class="empty-state whos-coming-empty">
  <p class="placeholder-message">
    Registration for AIW #2 is coming soon. We'll update this page as attendees confirm.
  </p>
  <p>
    In the meantime, see
    <a href="/events/1/whos-coming">who attended AIW #1 in October 2025</a>.
  </p>
</div>
```

**Contract Guarantees**:
- Provides helpful context (registration coming soon)
- Includes link to previous event attendees
- Uses EventLink internally for proper path prefixing
- Semantic HTML structure

---

## generateStaticParams Export

**Purpose**: Next.js API for generating static routes for archived events.

**Location**: `src/app/events/[eventId]/page.tsx`

### API

**Type Definition**:
```typescript
type StaticParams = {
  eventId: string
}[]

export async function generateStaticParams(): Promise<StaticParams>
```

**Usage**:

```typescript
// src/app/events/[eventId]/page.tsx
export async function generateStaticParams() {
  // Return all archived event IDs
  return [
    { eventId: '1' },
    // Future: Add { eventId: '2' } when AIW #2 is archived
  ]
}

export default function ArchivedEventPage({ params }: { params: { eventId: string } }) {
  const event = getEventById(params.eventId)
  // Render page
}
```

**Contract Guarantees**:
- Must return array of objects with `eventId` field
- Each `eventId` must correspond to an entry in `eventData.ts`
- Build fails if `eventId` references non-existent event
- Generated at build time (not runtime)
- Supports incremental updates (add new params without changing existing)

---

## Summary

### Component Dependency Graph

```
EventContextProvider (root)
  ├─> EventNavigation (navigation)
  ├─> EventIndicator (visual context)
  ├─> EventLink (used everywhere)
  │     └─> uses EventContext (via hook)
  ├─> TopicSourceNotice (topics page)
  │     └─> uses EventContext
  └─> WhosComingEmptyState (attendees page)
        └─> uses EventLink
```

### Usage Requirements

1. **All pages** must wrap content in `EventContextProvider`
2. **All internal links** must use `EventLink` instead of Next.js `Link`
3. **Archived pages** should include `EventIndicator`
4. **Current event topics** should include `TopicSourceNotice` if sourced
5. **Empty attendees** should use `WhosComingEmptyState`

### Testing Checklist

- [ ] EventContext provides correct `basePath` in archived routes
- [ ] EventLink prefixes paths correctly in both contexts
- [ ] EventNavigation highlights active tab
- [ ] EventNavigation keyboard navigation works
- [ ] EventIndicator shows for archived events only
- [ ] TopicSourceNotice appears when `isSourcedFrom` is set
- [ ] TopicSourceNotice hidden when topics are original
- [ ] WhosComingEmptyState includes link to archived attendees
- [ ] generateStaticParams generates all required routes

---

## Next Steps

With contracts defined, proceed to:
- **quickstart.md**: Developer guide for using these components
- **Agent context update**: Add new components to AI agent's codebase knowledge
