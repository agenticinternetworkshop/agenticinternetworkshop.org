'use client'

import Link from 'next/link'
import { getArchivedEvents, getCurrentEvent } from '@/lib/eventData'
import { useEventContext } from '@/lib/EventContext'

export function EventNavigation() {
  const { eventId, isArchived } = useEventContext()
  const currentEvent = getCurrentEvent()
  const archivedEvents = getArchivedEvents()

  return (
    <nav className="event-navigation" role="tablist" aria-label="Event navigation">
      {/* Current Event Tab */}
      <Link
        href="/"
        role="tab"
        aria-selected={!isArchived}
        aria-label={`AIW #${currentEvent.eventNumber} (Current Event)`}
        className={`event-nav-tab ${!isArchived ? 'active' : ''}`}
      >
        <span className="tab-label">AIW #{currentEvent.eventNumber}</span>
        <span className="tab-badge">Current</span>
      </Link>

      {/* Archived Event Tabs */}
      {archivedEvents.map((event) => (
        <Link
          key={event.eventId}
          href={`/events/${event.eventId}`}
          role="tab"
          aria-selected={eventId === event.eventId}
          aria-label={`AIW #${event.eventNumber} (Archived)`}
          className={`event-nav-tab ${eventId === event.eventId ? 'active' : ''}`}
        >
          <span className="tab-label">AIW #{event.eventNumber}</span>
          <span className="tab-badge">Archive</span>
        </Link>
      ))}
    </nav>
  )
}
