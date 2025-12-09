# Research: Archive AIW #1 and Setup AIW #2

**Feature**: 001-archive-aiw1-setup-aiw2
**Phase**: 0 - Outline & Research
**Date**: 2025-12-08

## Research Questions

This document addresses technical unknowns and design decisions required for implementing event archiving and multi-event support in the Next.js static site.

---

## R1: Next.js Static Export with Dynamic Routes

**Question**: How do Next.js dynamic routes (`/events/[eventId]/`) work with static export mode?

**Research Findings**:

Next.js 14 App Router supports static export for dynamic routes, but requires `generateStaticParams` to pre-generate all possible route combinations at build time.

**Key Mechanism**:
```typescript
// src/app/events/[eventId]/page.tsx
export async function generateStaticParams() {
  // Return array of all event IDs to generate
  return [
    { eventId: '1' }, // Generates /events/1/
    // Future: { eventId: '2' }, { eventId: '3' }, etc.
  ]
}
```

**Build Behavior**:
- Build process generates static HTML for each parameter combination
- Output: `dist/events/1/index.html`, `dist/events/2/index.html`, etc.
- Client-side routing works without server after initial load

**Decision**: Use dynamic routes with `generateStaticParams` to support `/events/[eventId]/` pattern

**Rationale**:
- Satisfies SC-004 (extensibility requirement): Adding AIW #3 only requires adding `{ eventId: '3' }` to params array
- No code changes needed for new events
- Maintains static export compatibility (next.config.js `output: 'export'`)

**Alternatives Considered**:
- ❌ **Separate static routes** (`/events/1/`, `/events/2/` as individual directories): Requires duplicating page components for each event
- ❌ **Client-side routing library**: Adds unnecessary dependency, conflicts with static export simplicity

---

## R2: Content Migration Strategy for Archived Events

**Question**: How should we structure content for archived events to avoid duplication while preserving original content?

**Research Findings**:

**Approach 1: Component Reuse with Event-Specific Data**
- Single set of page components in `/events/[eventId]/`
- Event content stored in data files (`lib/eventData.ts`)
- Components fetch event-specific data based on `eventId` parameter

**Approach 2: Snapshot Components**
- Duplicate current page components into `/events/[eventId]/`
- Freeze them as snapshots of AIW #1 content
- New events require new component copies

**Decision**: Component Reuse with Event-Specific Data

**Rationale**:
- **DRY Principle**: Single page component definition reduces maintenance
- **Type Safety**: Centralized event data structure ensures consistency
- **Extensibility**: Adding events is data change, not code change
- **Constitution Alignment**: Clean Code Standards principle (IV) - reduces code duplication

**Implementation Pattern**:
```typescript
// lib/eventData.ts
export const events = {
  '1': {
    eventNumber: 1,
    date: 'October 24, 2025',
    topics: [...],
    attendees: [...],
    isArchived: true
  },
  '2': {
    eventNumber: 2,
    date: 'May 9, 2026',
    topics: [...], // Initially copied from event 1
    attendees: [],
    isArchived: false
  }
}

// src/app/events/[eventId]/page.tsx
export default function ArchivedEventPage({ params }: { params: { eventId: string } }) {
  const event = events[params.eventId]
  // Render using event data
}
```

**Alternatives Considered**:
- ❌ **Snapshot approach**: Violates DRY, creates maintenance burden when fixing bugs
- ❌ **Database storage**: Incompatible with static export requirement

---

## R3: Link Migration for Archived Content

**Question**: What's the best approach to ensure all internal links in archived content use `/events/1/` prefix?

**Research Findings**:

**Challenge**: Next.js `<Link>` components in current pages use relative paths like `/topics`, `/details`, etc. When archived to `/events/1/`, these need to become `/events/1/topics`, `/events/1/details`.

**Approach 1: URL Rewriting at Build Time**
- Run post-build script to rewrite HTML href attributes
- Works for static content, but fragile for client-side routing

**Approach 2: Context-Aware Link Component**
- Create wrapper around Next.js `<Link>` that prefixes paths based on event context
- Uses React Context to determine if in archived event route

**Approach 3: Explicit Path Construction**
- All links explicitly construct paths using event context
- Example: `<Link href={`/events/${eventId}/topics`}>`

**Decision**: Context-Aware Link Component with Event Context

**Rationale**:
- **Automatic Prefix**: Links work correctly without manual path construction everywhere
- **Maintainable**: Single component handles all link logic
- **Type Safe**: TypeScript ensures correct usage
- **Constitution Alignment**: Clean Code Standards (IV) - centralized logic

**Implementation**:
```typescript
// lib/EventContext.tsx
const EventContext = createContext({ eventId: 'current', basePath: '' })

// components/EventLink.tsx
export function EventLink({ href, children }: { href: string, children: ReactNode }) {
  const { basePath } = useContext(EventContext)
  const fullHref = href.startsWith('/') ? `${basePath}${href}` : href
  return <Link href={fullHref}>{children}</Link>
}

// Usage in archived pages
<EventContext.Provider value={{ eventId: '1', basePath: '/events/1' }}>
  <EventLink href="/topics">Topics</EventLink> {/* Renders as /events/1/topics */}
</EventContext.Provider>
```

**Alternatives Considered**:
- ❌ **Build-time rewriting**: Fragile, doesn't handle client-side navigation
- ❌ **Manual path construction**: Error-prone, violates DRY

---

## R4: Asset Handling for Archived Events

**Question**: How should images and static assets be organized for archived events?

**Research Findings**:

**Next.js Static Export Asset Behavior**:
- Assets in `/public` directory are copied to build output root
- Image references like `/logo.png` resolve to `dist/logo.png`
- Nested public paths like `/public/events/1/logo.png` become `dist/events/1/logo.png`

**Challenge**: If AIW #1 and AIW #2 use different logos or images with same filename, they'll conflict.

**Approach 1: Event-Specific Asset Directories**
```
public/
├── events/
│   ├── 1/
│   │   ├── logo.png
│   │   └── sponsor-logos/
│   └── 2/
│       ├── logo.png
│       └── sponsor-logos/
└── shared/
    └── common-assets.png
```

**Approach 2: Shared Assets Only**
- Assume all events use same assets
- Only create event-specific paths if conflicts arise

**Decision**: Shared Assets with On-Demand Event-Specific Paths

**Rationale**:
- **Assumption A-002**: Event format remains consistent, implies shared design system
- **Pragmatic**: Most assets (logo, favicon, background patterns) will be shared
- **On-Demand**: Create `/public/events/1/` only if AIW #2 needs different assets
- **YAGNI**: Don't build event-specific asset infrastructure until needed

**Implementation Guidance**:
1. Initially, AIW #2 reuses all AIW #1 assets from `/public`
2. If conflict arises (e.g., different sponsor logos), create `/public/events/2/sponsors/`
3. Update eventData.ts to reference event-specific paths:
   ```typescript
   events['2'].assets = {
     sponsorLogos: '/events/2/sponsors/'
   }
   ```

**Alternatives Considered**:
- ❌ **Pre-create all event directories**: Violates YAGNI, adds unnecessary complexity
- ❌ **Dynamic asset loading**: Incompatible with static export

---

## R5: Event Navigation UI Pattern

**Question**: What's the best UI pattern for tab/button navigation between current and archived events?

**Research Findings**:

**Constitution Requirements**:
- Principle V (Accessibility): Must be keyboard accessible, visible focus states
- Principle III (Responsive Design): Must work on mobile (44px touch targets)

**Pattern 1: Tab Navigation**
- Visual tabs at top of page
- Active tab indicates current event
- Example: `[AIW #2] [AIW #1 Archive]`

**Pattern 2: Dropdown Menu**
- Single button that expands to show event list
- More compact, scales better with many events

**Pattern 3: Inline Link**
- Simple link/button: "View Past Events →"
- Minimal visual footprint

**Decision**: Tab Navigation Pattern with Event Context Indicator

**Rationale**:
- **User Request**: User specifically mentioned "tab" in feature description
- **Discoverability**: Tabs are immediately visible, high affordance for switching
- **Context Clarity**: Active tab satisfies FR-012 (clearly indicate which event viewing)
- **Scalability**: Can show 2-4 events without overwhelming UI
- **Accessibility**: Standard tab pattern has well-established keyboard navigation (arrow keys, Enter)

**Implementation Sketch**:
```typescript
// components/EventNavigation.tsx
<nav role="tablist" aria-label="Event Navigation">
  <Link
    href="/"
    role="tab"
    aria-selected={eventId === 'current'}
    className={eventId === 'current' ? 'active-tab' : ''}
  >
    AIW #2 (Current)
  </Link>
  <Link
    href="/events/1"
    role="tab"
    aria-selected={eventId === '1'}
    className={eventId === '1' ? 'active-tab' : ''}
  >
    AIW #1 Archive
  </Link>
</nav>
```

**Alternatives Considered**:
- ❌ **Dropdown**: Less discoverable, requires click to see options
- ❌ **Inline link**: Doesn't clearly show which event you're viewing

---

## R6: Topic Sourcing Notice Implementation

**Question**: How should the "topics sourced from AIW #1" notice be displayed per FR-004?

**Research Findings**:

**Constitution Requirement**:
- Principle I (Educational Clarity): Notice must prevent visitor confusion

**Approach 1: Inline Notice Above Topics**
```tsx
<div className="notice-banner">
  ℹ️ Topics shown below are sourced from AIW #1. New topic submissions for AIW #2 will be appearing as the event approaches.
</div>
<TopicsList topics={topics} />
```

**Approach 2: Callout Box**
```tsx
<aside className="info-callout">
  <h3>About These Topics</h3>
  <p>Topics shown below are sourced from AIW #1...</p>
</aside>
```

**Approach 3: Tooltip/Hint Icon**
- Small icon next to "Topics" heading
- Shows notice on hover/click

**Decision**: Inline Notice Banner (Approach 1)

**Rationale**:
- **High Visibility**: Ensures visitors see notice before reading topics
- **Educational Clarity**: Aligns with constitution principle I
- **Accessibility**: Screen readers encounter notice in logical reading order
- **No Interaction Required**: Doesn't rely on hover/click that may be missed

**Implementation Details**:
- **Visual Design**: Use `info` color (typically blue), icon for visual distinction
- **Semantic HTML**: `<aside>` or `<div role="note">` for proper ARIA semantics
- **Responsive**: Full-width on mobile, comfortable padding
- **Conditional**: Only show for AIW #2, not for archived AIW #1 or future events when they have unique topics

**Alternatives Considered**:
- ❌ **Callout box**: Too heavy-weight, may be visually skipped
- ❌ **Tooltip**: Easily missed, violates Educational Clarity principle

---

## R7: Empty "Who's Coming" Section Pattern

**Question**: What's the best way to handle empty "Who's Coming" for AIW #2 per FR-006?

**Research Findings**:

**Requirement**: "Who's Coming section MUST either be empty or show placeholder message with link to /events/1/ to view AIW #1 past attendees"

**Approach 1: Completely Hide Section**
- Don't render section at all if no attendees
- Cleaner UI

**Approach 2: Empty State with CTA**
```tsx
<section>
  <h2>Who's Coming</h2>
  <div className="empty-state">
    <p>Registration for AIW #2 hasn't opened yet.</p>
    <p>See <Link href="/events/1/whos-coming">who attended AIW #1</Link></p>
  </div>
</section>
```

**Approach 3: Registration Prompt**
```tsx
<section>
  <h2>Who's Coming</h2>
  <p>Be the first to register for AIW #2!</p>
  <Link href="/register">Register Now</Link>
</section>
```

**Decision**: Empty State with Link to AIW #1 (Approach 2)

**Rationale**:
- **Maintains Structure**: Keeps navigation consistent (visitors expect "Who's Coming" section)
- **Educational Value**: Provides historical context by linking to past attendees
- **Sets Expectations**: Clarifies that registration process exists but hasn't opened
- **FR-006 Compliance**: Explicitly includes link to /events/1/whos-coming

**Implementation**:
```typescript
// src/app/whos-coming/page.tsx (AIW #2)
export default function WhosComingPage() {
  return (
    <section className="whos-coming">
      <h2>Who's Coming to AIW #2</h2>
      <div className="empty-state">
        <p className="placeholder-message">
          Registration for AIW #2 is coming soon. We'll update this page as attendees confirm.
        </p>
        <p>
          In the meantime, see{' '}
          <EventLink href="/events/1/whos-coming">
            who attended AIW #1 in October 2025
          </EventLink>
          .
        </p>
      </div>
    </section>
  )
}
```

**Alternatives Considered**:
- ❌ **Hide section**: Breaks navigation consistency, confusing UX
- ❌ **Registration prompt**: Assumes registration is ready (may not be per A-004)

---

## Summary of Research Decisions

| Research ID | Topic | Decision | Impact |
|-------------|-------|----------|--------|
| R1 | Dynamic Routes | Use `generateStaticParams` for `/events/[eventId]/` | Enables extensibility (SC-004) |
| R2 | Content Migration | Component reuse with event data files | Reduces duplication, satisfies DRY |
| R3 | Link Migration | Context-aware EventLink component | Automatic prefix, maintainable |
| R4 | Asset Handling | Shared assets with on-demand event paths | YAGNI compliance, simple initial setup |
| R5 | Navigation UI | Tab pattern with ARIA roles | User request, discoverable, accessible |
| R6 | Topic Notice | Inline banner above topics list | Educational clarity, high visibility |
| R7 | Empty Attendees | Empty state with link to AIW #1 | Historical context, FR-006 compliance |

---

## Implementation Risks & Mitigations

**Risk 1: Link Migration Errors**
- **Risk**: Missing EventLink usage causes broken links in archived content
- **Mitigation**:
  - Build-time verification script to check all `<Link>` components in `/events/` routes
  - Manual testing per constitution quality standards
  - SC-002 mandates 100% link verification

**Risk 2: Asset Path Conflicts**
- **Risk**: AIW #2 asset references break AIW #1 archived content
- **Mitigation**:
  - Test archived content after any asset changes
  - Document asset paths in eventData.ts
  - FR-011 requires asset loading verification

**Risk 3: Static Export Build Performance**
- **Risk**: Generating all event pages slows build time as events grow
- **Mitigation**:
  - Currently only 2 events (minimal impact)
  - Future: Consider incremental static regeneration if build time exceeds 1 minute
  - Next.js 14 build caching helps

**Risk 4: Mobile Navigation Usability**
- **Risk**: Tab navigation may be cramped on small screens
- **Mitigation**:
  - Responsive design: Stack tabs vertically on mobile if needed
  - 44px minimum touch target per constitution
  - Manual mobile testing required (iOS Safari, Android Chrome)

---

## Next Phase: Design & Contracts

With research complete, we can proceed to Phase 1:
- **data-model.md**: Define TypeScript interfaces for Event, Topic, Attendee
- **contracts/**: Document event data structure and EventLink API
- **quickstart.md**: Developer guide for adding new events

All research decisions are now resolved. No NEEDS CLARIFICATION markers remain.
