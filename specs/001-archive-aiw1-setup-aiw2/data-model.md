# Data Model: Archive AIW #1 and Setup AIW #2

**Feature**: 001-archive-aiw1-setup-aiw2
**Phase**: 1 - Design & Contracts
**Date**: 2025-12-08

## Overview

This document defines the data structures for managing multiple workshop events (AIW #1, AIW #2, etc.) in the Next.js static site. The model supports event versioning, content archiving, and extensibility for future events.

---

## Core Entities

### Event

Represents a single Agentic Internet Workshop instance.

**Attributes**:
- `eventId`: Unique identifier (e.g., '1', '2', '3')
- `eventNumber`: Human-readable event number (1, 2, 3)
- `date`: Event date as human-readable string (e.g., "October 24, 2025")
- `dateISO`: ISO 8601 format date for machine processing (e.g., "2025-10-24")
- `location`: Venue details (object with name, address, city, state fields)
- `status`: Current state of the event
- `topics`: Array of Topic objects
- `attendees`: Array of Attendee objects (empty for future events)
- `sponsors`: Array of Sponsor objects
- `schedule`: Array of ScheduleItem objects
- `details`: Object containing event logistics (registration URL, contact info, etc.)

**Relationships**:
- One Event has many Topics (1:N)
- One Event has many Attendees (1:N)
- One Event has many Sponsors (1:N)
- Topics can be shared/sourced across Events (M:N)

**Validation Rules**:
- `eventId` must be unique across all events
- `eventNumber` must be sequential (1, 2, 3...)
- `date` and `dateISO` must represent the same date
- `status` must be one of: 'upcoming' | 'current' | 'archived'
- For archived events: `attendees` array must not be empty
- For upcoming events: `attendees` array may be empty

**State Transitions**:
```
upcoming → current → archived

upcoming: Event announced but not yet happening (AIW #3, #4...)
current: Active event accepting registrations (AIW #2)
archived: Past event, read-only (AIW #1)
```

**TypeScript Interface**:
```typescript
interface Event {
  eventId: string
  eventNumber: number
  date: string
  dateISO: string
  location: Location
  status: EventStatus
  topics: Topic[]
  attendees: Attendee[]
  sponsors: Sponsor[]
  schedule: ScheduleItem[]
  details: EventDetails
  isSourcedFrom?: string // If topics/content sourced from another event, references eventId
}

type EventStatus = 'upcoming' | 'current' | 'archived'

interface Location {
  name: string
  address: string
  city: string
  state: string
  zipCode?: string
  mapUrl?: string
}

interface EventDetails {
  registrationUrl?: string
  contactEmail?: string
  capacity?: number
  isRegistrationOpen: boolean
}
```

---

### Topic

Represents a discussion topic proposed for the workshop.

**Attributes**:
- `id`: Unique identifier for the topic
- `title`: Topic title/headline
- `description`: Detailed description of the topic
- `proposedBy`: Name of person who proposed (optional)
- `category`: Topic category (e.g., "Technical", "Policy", "Use Cases")
- `sourceEventId`: If topic sourced from previous event, reference to origin event

**Relationships**:
- Belongs to one or more Events (M:N relationship)
- Can reference source Event via `sourceEventId`

**Validation Rules**:
- `title` is required, max 200 characters
- `description` is required, max 1000 characters
- `category` must be from predefined list
- If `sourceEventId` is set, must reference a valid event

**TypeScript Interface**:
```typescript
interface Topic {
  id: string
  title: string
  description: string
  proposedBy?: string
  category: TopicCategory
  sourceEventId?: string // References Event.eventId
}

type TopicCategory =
  | 'Technical Protocols'
  | 'Policy & Governance'
  | 'Use Cases'
  | 'Identity & Privacy'
  | 'Agent Coordination'
  | 'Human-AI Interaction'
  | 'Other'
```

---

### Attendee

Represents a person registered for a specific event.

**Attributes**:
- `id`: Unique identifier
- `name`: Attendee full name
- `affiliation`: Organization/company (optional)
- `role`: Job title or role (optional)
- `bio`: Short biography (optional)
- `avatarUrl`: Profile image URL (optional)
- `socialLinks`: Object with links to social profiles (optional)

**Relationships**:
- Belongs to one Event (M:1 relationship via event's `attendees` array)

**Validation Rules**:
- `name` is required
- `avatarUrl` must be valid URL if provided
- `socialLinks` URLs must be valid if provided

**Privacy Considerations**:
- All fields except `name` are optional
- Attendees must consent to public display
- Data sourced from registration system (out of scope for this feature)

**TypeScript Interface**:
```typescript
interface Attendee {
  id: string
  name: string
  affiliation?: string
  role?: string
  bio?: string
  avatarUrl?: string
  socialLinks?: SocialLinks
}

interface SocialLinks {
  linkedin?: string
  twitter?: string
  github?: string
  website?: string
}
```

---

### Sponsor

Represents an organization sponsoring the event.

**Attributes**:
- `id`: Unique identifier
- `name`: Sponsor organization name
- `tier`: Sponsorship level
- `logoUrl`: Logo image path/URL
- `websiteUrl`: Sponsor website
- `description`: Brief description of sponsor

**Relationships**:
- Belongs to one Event (M:1 relationship via event's `sponsors` array)

**Validation Rules**:
- `name` is required
- `tier` must be from predefined tiers
- `logoUrl` is required
- `websiteUrl` must be valid URL

**TypeScript Interface**:
```typescript
interface Sponsor {
  id: string
  name: string
  tier: SponsorTier
  logoUrl: string
  websiteUrl: string
  description?: string
}

type SponsorTier = 'Diamond' | 'Platinum' | 'Gold' | 'Silver' | 'Bronze' | 'Coffee' | 'Snack Table'
```

---

### ScheduleItem

Represents a time slot in the event schedule.

**Attributes**:
- `id`: Unique identifier
- `startTime`: Start time (e.g., "9:00 AM")
- `endTime`: End time (e.g., "10:30 AM")
- `title`: Session title
- `description`: Session description
- `sessionType`: Type of session
- `facilitator`: Name of facilitator/speaker (optional)

**Relationships**:
- Belongs to one Event (M:1 relationship via event's `schedule` array)
- Ordered by `startTime`

**TypeScript Interface**:
```typescript
interface ScheduleItem {
  id: string
  startTime: string
  endTime: string
  title: string
  description?: string
  sessionType: SessionType
  facilitator?: string
}

type SessionType =
  | 'Opening'
  | 'Keynote'
  | 'Discussion'
  | 'Workshop'
  | 'Break'
  | 'Lunch'
  | 'Closing'
```

---

## Data Storage

**Location**: `src/app/lib/eventData.ts`

**Structure**:
```typescript
// src/app/lib/eventData.ts
import { Event } from './types'

export const events: Record<string, Event> = {
  '1': {
    eventId: '1',
    eventNumber: 1,
    date: 'October 24, 2025',
    dateISO: '2025-10-24',
    location: {
      name: 'Computer History Museum',
      address: '1401 N Shoreline Blvd',
      city: 'Mountain View',
      state: 'CA',
      zipCode: '94043',
      mapUrl: 'https://maps.google.com/...'
    },
    status: 'archived',
    topics: [
      // Array of Topic objects from AIW #1
    ],
    attendees: [
      // Array of Attendee objects from AIW #1
    ],
    sponsors: [
      // Array of Sponsor objects from AIW #1
    ],
    schedule: [
      // Array of ScheduleItem objects from AIW #1
    ],
    details: {
      registrationUrl: undefined, // Closed
      contactEmail: 'contact@agenticinternetworkshop.org',
      capacity: 100,
      isRegistrationOpen: false
    }
  },
  '2': {
    eventId: '2',
    eventNumber: 2,
    date: 'May 9, 2026',
    dateISO: '2026-05-09',
    location: {
      name: 'Computer History Museum', // Assumed same venue
      address: '1401 N Shoreline Blvd',
      city: 'Mountain View',
      state: 'CA',
      zipCode: '94043'
    },
    status: 'current',
    topics: events['1'].topics, // Sourced from AIW #1 initially
    attendees: [], // Empty per FR-006
    sponsors: [], // To be added later per A-004
    schedule: [], // To be added later per A-004
    details: {
      registrationUrl: undefined, // To be added when opens
      contactEmail: 'contact@agenticinternetworkshop.org',
      isRegistrationOpen: false
    },
    isSourcedFrom: '1' // Indicates topics sourced from event 1
  }
}

// Helper function to get current event
export function getCurrentEvent(): Event {
  return Object.values(events).find(e => e.status === 'current') || events['2']
}

// Helper function to get event by ID
export function getEventById(eventId: string): Event | undefined {
  return events[eventId]
}

// Helper function to get all archived events
export function getArchivedEvents(): Event[] {
  return Object.values(events).filter(e => e.status === 'archived')
}
```

---

## Data Access Patterns

### Pattern 1: Display Current Event

**Use Case**: Root page (/) shows AIW #2 content

```typescript
// src/app/page.tsx
import { getCurrentEvent } from '@/lib/eventData'

export default function HomePage() {
  const event = getCurrentEvent()
  return (
    <div>
      <h1>Agentic Internet Workshop #{event.eventNumber}</h1>
      <p>{event.date}</p>
      {/* Render event content */}
    </div>
  )
}
```

### Pattern 2: Display Archived Event

**Use Case**: /events/1/ shows AIW #1 archived content

```typescript
// src/app/events/[eventId]/page.tsx
import { getEventById } from '@/lib/eventData'

export default function ArchivedEventPage({ params }: { params: { eventId: string } }) {
  const event = getEventById(params.eventId)

  if (!event) {
    return <NotFound />
  }

  return (
    <div>
      <h1>Agentic Internet Workshop #{event.eventNumber}</h1>
      <p>{event.date}</p>
      <aside className="archive-notice">
        This is archived content from a past event.
      </aside>
      {/* Render event content */}
    </div>
  )
}

export async function generateStaticParams() {
  return [
    { eventId: '1' },
    // Add more as events are archived
  ]
}
```

### Pattern 3: Topic Sourcing Notice

**Use Case**: Show notice when topics are sourced from another event (FR-004)

```typescript
// src/app/topics/page.tsx
import { getCurrentEvent } from '@/lib/eventData'

export default function TopicsPage() {
  const event = getCurrentEvent()

  return (
    <section>
      <h2>Topics</h2>

      {event.isSourcedFrom && (
        <aside role="note" className="notice-banner">
          ℹ️ Topics shown below are sourced from AIW #{event.isSourcedFrom}.
          New topic submissions for AIW #{event.eventNumber} will be appearing
          as the event approaches.
        </aside>
      )}

      <TopicsList topics={event.topics} />
    </section>
  )
}
```

### Pattern 4: Event Navigation

**Use Case**: Tab navigation to switch between events

```typescript
// src/app/components/EventNavigation.tsx
import { getCurrentEvent, getArchivedEvents } from '@/lib/eventData'

export function EventNavigation({ currentEventId }: { currentEventId?: string }) {
  const currentEvent = getCurrentEvent()
  const archivedEvents = getArchivedEvents()

  return (
    <nav role="tablist" aria-label="Event Navigation">
      <Link
        href="/"
        role="tab"
        aria-selected={!currentEventId}
        className={!currentEventId ? 'active-tab' : ''}
      >
        AIW #{currentEvent.eventNumber} (Current)
      </Link>

      {archivedEvents.map(event => (
        <Link
          key={event.eventId}
          href={`/events/${event.eventId}`}
          role="tab"
          aria-selected={currentEventId === event.eventId}
          className={currentEventId === event.eventId ? 'active-tab' : ''}
        >
          AIW #{event.eventNumber} Archive
        </Link>
      ))}
    </nav>
  )
}
```

---

## Data Migration Strategy

### Extracting AIW #1 Data

**Source**: Current page.tsx components (`src/app/page.tsx`, `src/app/topics/page.tsx`, etc.)

**Process**:
1. Manually extract hardcoded content from existing components
2. Structure into Event object format
3. Validate all fields present
4. Store in `eventData.ts` as `events['1']`

**Example Extraction**:
```typescript
// From current src/app/topics/page.tsx (AIW #1)
// Extract topics array → events['1'].topics

// From current src/app/whos-coming/page.tsx (AIW #1)
// Extract attendees array → events['1'].attendees

// From current src/app/page.tsx (AIW #1)
// Extract date, location, details → events['1'] root fields
```

### Creating AIW #2 Data

**Process**:
1. Clone structure from `events['1']`
2. Update `eventNumber: 2`
3. Update `date: 'May 9, 2026'`
4. Copy `topics` array (reference same objects)
5. Empty `attendees` array
6. Set `isSourcedFrom: '1'`
7. Set `status: 'current'`

---

## Validation & Testing

### Data Validation Rules

Implemented in `src/app/lib/validateEvent.ts`:

```typescript
export function validateEvent(event: Event): ValidationResult {
  const errors: string[] = []

  if (!event.eventId) errors.push('eventId is required')
  if (!event.eventNumber) errors.push('eventNumber is required')
  if (!event.date) errors.push('date is required')
  if (!event.dateISO) errors.push('dateISO is required')

  // Validate date consistency
  if (new Date(event.dateISO).toISOString().split('T')[0] !== event.dateISO) {
    errors.push('dateISO must be valid ISO 8601 date')
  }

  // Validate status
  if (!['upcoming', 'current', 'archived'].includes(event.status)) {
    errors.push('status must be upcoming, current, or archived')
  }

  // Validate archived events have attendees
  if (event.status === 'archived' && event.attendees.length === 0) {
    errors.push('Archived events must have attendees')
  }

  return {
    valid: errors.length === 0,
    errors
  }
}

interface ValidationResult {
  valid: boolean
  errors: string[]
}
```

### Testing Strategy

**Manual Testing**:
- Verify all events render correctly
- Check topic sourcing notice appears for AIW #2
- Validate empty state for AIW #2 attendees
- Confirm event navigation shows correct active state

**Data Integrity**:
- Run `validateEvent()` for each event in `eventData.ts` during build
- Fail build if validation errors found

---

## Extensibility

### Adding AIW #3 (Future)

**Process**:
1. Add new entry to `events` object:
   ```typescript
   '3': {
     eventId: '3',
     eventNumber: 3,
     date: 'October 15, 2026',
     dateISO: '2026-10-15',
     status: 'upcoming',
     topics: [], // New topics or sourced
     attendees: [],
     // ... other fields
   }
   ```

2. Update `generateStaticParams()` in `/events/[eventId]/page.tsx`:
   ```typescript
   export async function generateStaticParams() {
     return [
       { eventId: '1' },
       { eventId: '2' }, // When AIW #2 becomes archived
       // { eventId: '3' }, // When AIW #3 becomes archived
     ]
   }
   ```

3. When AIW #2 transitions to archived:
   - Change `events['2'].status = 'archived'`
   - Change `events['3'].status = 'current'`
   - Add AIW #2 data (attendees, final topics, schedule)

**No Code Changes Required**: Only data updates in `eventData.ts` and `generateStaticParams()` array.

---

## Summary

This data model provides:
- ✅ **Type Safety**: Full TypeScript interfaces for all entities
- ✅ **Extensibility**: Adding events is data change, not code change (SC-004)
- ✅ **Topic Sourcing**: `isSourcedFrom` field enables FR-004 notice
- ✅ **Event Lifecycle**: Status transitions (upcoming → current → archived)
- ✅ **Validation**: Build-time checks ensure data integrity
- ✅ **Clean Architecture**: Separation of data (`eventData.ts`) from presentation (components)

**Next Steps**: Define contracts for EventLink component and event context API.
