# Quickstart: Adding a New Event

**Feature**: 001-archive-aiw1-setup-aiw2
**Audience**: Developers maintaining the Agentic Internet Workshop website
**Date**: 2025-12-08

## Overview

This guide shows you how to add a new workshop event (AIW #3, #4, etc.) using the event versioning system created for AIW #1 and AIW #2.

**Time Required**: ~15 minutes for data entry + build/test time

**Prerequisites**:
- Node.js 20+ installed
- Familiarity with TypeScript
- Access to event information (date, location, topics, sponsors, etc.)

---

## Step 1: Archive the Current Event

When it's time to prepare for AIW #3, first archive AIW #2.

### 1.1 Update Event Status

Edit `src/app/lib/eventData.ts`:

```typescript
export const events: Record<string, Event> = {
  // ... existing events ...

  '2': {
    eventId: '2',
    eventNumber: 2,
    date: 'May 9, 2026',
    dateISO: '2026-05-09',
    status: 'archived', // ← Change from 'current' to 'archived'
    // ... rest of event 2 data ...
  }
}
```

### 1.2 Add AIW #2 Attendee Data

Populate the `attendees` array for event 2 with final registration data:

```typescript
'2': {
  // ... other fields ...
  attendees: [
    {
      id: 'att-001',
      name: 'Jane Smith',
      affiliation: 'Tech Corp',
      role: 'Identity Architect',
      avatarUrl: '/events/2/avatars/jane-smith.jpg'
    },
    // ... more attendees ...
  ]
}
```

### 1.3 Update Static Route Generation

Edit `src/app/events/[eventId]/page.tsx`:

```typescript
export async function generateStaticParams() {
  return [
    { eventId: '1' }, // AIW #1
    { eventId: '2' }, // ← Add AIW #2
  ]
}
```

---

## Step 2: Create AIW #3 Data

### 2.1 Add Event Entry

In `src/app/lib/eventData.ts`, add the new event:

```typescript
export const events: Record<string, Event> = {
  // ... existing events 1 and 2 ...

  '3': {
    eventId: '3',
    eventNumber: 3,
    date: 'October 15, 2026', // ← New event date
    dateISO: '2026-10-15',
    location: {
      name: 'Computer History Museum',
      address: '1401 N Shoreline Blvd',
      city: 'Mountain View',
      state: 'CA',
      zipCode: '94043'
    },
    status: 'current', // ← This is now the current event
    topics: [], // ← Start empty or source from previous event
    attendees: [], // ← Empty until registration opens
    sponsors: [],
    schedule: [],
    details: {
      contactEmail: 'contact@agenticinternetworkshop.org',
      isRegistrationOpen: false
    }
  }
}
```

### 2.2 Source Topics (Optional)

If you want to show AIW #2 topics as placeholders for AIW #3:

```typescript
'3': {
  // ... other fields ...
  topics: events['2'].topics, // ← Reference previous event topics
  isSourcedFrom: '2', // ← Indicates topics are sourced from AIW #2
}
```

**Note**: The `TopicSourceNotice` component will automatically display:
> "Topics shown below are sourced from AIW #2. New topic submissions for AIW #3 will be appearing as the event approaches."

---

## Step 3: Verify and Test

### 3.1 Validate Event Data

Run the event validation (should be part of build process):

```bash
npm run build
```

If validation fails, you'll see errors like:
```
Error: Event 3 validation failed:
- dateISO must be valid ISO 8601 date
```

Fix any errors in `eventData.ts`.

### 3.2 Test Locally

```bash
npm run dev
```

Visit:
- `http://localhost:3000/` → Should show AIW #3
- `http://localhost:3000/events/1/` → Should show AIW #1 (archived)
- `http://localhost:3000/events/2/` → Should show AIW #2 (archived)

### 3.3 Check Event Navigation

Verify the event navigation tabs show:
- **AIW #3 (Current)** ← Active tab at `/`
- **AIW #2 Archive** ← Links to `/events/2/`
- **AIW #1 Archive** ← Links to `/events/1/`

### 3.4 Manual Testing Checklist

Per constitution quality standards:

**Desktop**:
- [ ] Chrome/Edge: All events load correctly
- [ ] Firefox: All events load correctly
- [ ] Safari: All events load correctly

**Mobile**:
- [ ] iOS Safari: Navigation tabs are tappable (44px+)
- [ ] Android Chrome: All pages render responsively

**Content Verification**:
- [ ] AIW #3 date displays correctly
- [ ] Archived event dates unchanged
- [ ] Topic source notice appears if `isSourcedFrom` set
- [ ] "Who's Coming" empty state shows correctly
- [ ] All internal links work (topics, details, etc.)

---

## Step 4: Update Page Content (If Needed)

If AIW #3 has location changes, special sections, or unique content, update pages:

### 4.1 Homepage Customization

Edit `src/app/page.tsx`:

```typescript
import { getCurrentEvent } from '@/lib/eventData'

export default function HomePage() {
  const event = getCurrentEvent() // ← Automatically gets AIW #3

  return (
    <main>
      <h1>Agentic Internet Workshop #{event.eventNumber}</h1>
      <p>{event.date} • {event.location.city}, {event.location.state}</p>

      {/* Add any AIW #3-specific sections here */}
      {event.eventNumber === 3 && (
        <section>
          <h2>Special Theme for AIW #3</h2>
          <p>...</p>
        </section>
      )}
    </main>
  )
}
```

### 4.2 Details Page Customization

If AIW #3 has different venue or logistics, update `src/app/details/page.tsx`:

```typescript
import { getCurrentEvent } from '@/lib/eventData'

export default function DetailsPage() {
  const event = getCurrentEvent()

  return (
    <section>
      <h2>Event Details</h2>
      <div className="location">
        <h3>Location</h3>
        <address>
          {event.location.name}<br />
          {event.location.address}<br />
          {event.location.city}, {event.location.state} {event.location.zipCode}
        </address>
        {event.location.mapUrl && (
          <a href={event.location.mapUrl}>View Map</a>
        )}
      </div>
    </section>
  )
}
```

---

## Step 5: Build and Deploy

### 5.1 Production Build

```bash
npm run build
```

This generates static HTML in the `dist/` directory:
```
dist/
├── index.html                      # AIW #3 homepage
├── topics/index.html               # AIW #3 topics
├── details/index.html              # AIW #3 details
├── whos-coming/index.html          # AIW #3 attendees
├── events/
│   ├── 1/
│   │   ├── index.html              # AIW #1 archive homepage
│   │   ├── topics/index.html       # AIW #1 topics
│   │   └── ...
│   └── 2/
│       ├── index.html              # AIW #2 archive homepage
│       ├── topics/index.html       # AIW #2 topics
│       └── ...
└── ...
```

### 5.2 Verify Build Output

Check that all routes generated:

```bash
ls -R dist/events/
```

Should show directories for `1/` and `2/`.

### 5.3 Deploy

Deploy the `dist/` directory to your static hosting (Netlify, Vercel, GitHub Pages, etc.).

---

## Advanced: Updating Sponsors and Schedule

### Adding Sponsors

Edit the event's `sponsors` array:

```typescript
'3': {
  // ... other fields ...
  sponsors: [
    {
      id: 'sponsor-001',
      name: 'Acme Corp',
      tier: 'Diamond',
      logoUrl: '/sponsors/acme-logo.png',
      websiteUrl: 'https://acme.com',
      description: 'Leading provider of...'
    },
    {
      id: 'sponsor-002',
      name: 'Tech Innovations',
      tier: 'Gold',
      logoUrl: '/sponsors/tech-innovations-logo.png',
      websiteUrl: 'https://techinnovations.com'
    }
  ]
}
```

**Sponsor Logo Assets**:
- Place logos in `/public/sponsors/`
- Optimize images (< 100KB each)
- Use consistent dimensions (e.g., 200x100px)

### Adding Schedule

Edit the event's `schedule` array:

```typescript
'3': {
  // ... other fields ...
  schedule: [
    {
      id: 'schedule-001',
      startTime: '9:00 AM',
      endTime: '9:30 AM',
      title: 'Registration & Coffee',
      sessionType: 'Break'
    },
    {
      id: 'schedule-002',
      startTime: '9:30 AM',
      endTime: '10:00 AM',
      title: 'Opening Remarks',
      description: 'Welcome and overview of the day',
      sessionType: 'Opening',
      facilitator: 'Phil Windley'
    },
    {
      id: 'schedule-003',
      startTime: '10:00 AM',
      endTime: '11:30 AM',
      title: 'Morning Session: Agent Protocols',
      description: 'Discussion of emerging agent communication protocols',
      sessionType: 'Discussion'
    }
    // ... more schedule items ...
  ]
}
```

---

## Troubleshooting

### Build Fails with "Event Validation Error"

**Problem**: `npm run build` shows validation errors.

**Solution**:
1. Check error message for specific field
2. Verify data in `eventData.ts` matches TypeScript interfaces
3. Common issues:
   - `dateISO` format incorrect (use YYYY-MM-DD)
   - `status` not one of 'upcoming', 'current', 'archived'
   - Required fields missing (eventId, eventNumber, date, location)

### Links on Archived Pages 404

**Problem**: Clicking links on `/events/2/` results in 404 errors.

**Solution**:
1. Ensure `generateStaticParams()` includes `{ eventId: '2' }`
2. Rebuild: `npm run build`
3. Verify `dist/events/2/` directory exists

### Topic Source Notice Not Appearing

**Problem**: Notice doesn't show even though `isSourcedFrom` is set.

**Solution**:
1. Check `src/app/topics/page.tsx` includes `<TopicSourceNotice event={event} />`
2. Verify `event.isSourcedFrom` is a string (e.g., `'2'`, not `2`)
3. Confirm component is imported correctly

### Event Navigation Shows Wrong Active Tab

**Problem**: Active tab doesn't highlight correctly.

**Solution**:
1. Check `EventNavigation` component receives correct `currentEventId` prop
2. For root (`/`): `currentEventId` should be `undefined`
3. For archived (`/events/2/`): `currentEventId` should be `'2'`
4. Clear browser cache and test

---

## Best Practices

### Content Management

1. **Single Source of Truth**: All event data lives in `eventData.ts`
2. **Type Safety**: Always use TypeScript interfaces, never `any` types
3. **Data Validation**: Run build to validate before deploying
4. **Asset Organization**: Keep event-specific assets in `/public/events/[id]/` if needed

### Adding New Event Sections

If AIW #3 introduces a new section (e.g., "Workshops"):

1. Create new page: `src/app/workshops/page.tsx`
2. Add archived version: `src/app/events/[eventId]/workshops/page.tsx`
3. Use `EventContext` and `EventLink` for consistency
4. Add navigation link to both current and archived layouts

### Maintaining Historical Accuracy

- **Never** modify archived event data (`status: 'archived'`) except to fix errors
- Preserve original wording, topics, and attendee lists
- If correcting historical errors, document in commit message

---

## Summary Checklist

When adding a new event:

- [ ] Update previous event `status` to `'archived'`
- [ ] Add previous event attendee data
- [ ] Update `generateStaticParams()` to include previous event
- [ ] Create new event entry in `eventData.ts`
- [ ] Set new event `status` to `'current'`
- [ ] Decide whether to source topics from previous event
- [ ] Run `npm run build` to validate
- [ ] Test locally: current event, all archived events, navigation
- [ ] Manual testing per constitution (desktop + mobile browsers)
- [ ] Verify all links work correctly
- [ ] Build for production
- [ ] Deploy `dist/` directory

**Time Estimate**:
- Data entry: 10-15 minutes
- Testing: 15-20 minutes
- Build & deploy: 5-10 minutes
- **Total**: ~30-45 minutes

---

## Need Help?

- **Data Model Reference**: See `data-model.md` for entity structures
- **Component API**: See `contracts/component-api.md` for component usage
- **Constitution**: Review `.specify/memory/constitution.md` for quality standards
- **Build Errors**: Check TypeScript compiler output for type mismatches
