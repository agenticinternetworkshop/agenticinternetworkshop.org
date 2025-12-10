'use client'

import { useEventContext } from '@/lib/EventContext'

export function EventIndicator() {
  const { event, isArchived } = useEventContext()

  if (!isArchived) {
    return null // Don't show indicator for current event
  }

  return (
    <aside className="event-indicator" role="note" aria-label="Archived event notice">
      <div className="container">
        <strong>📦 Archived Content</strong>
        {' '}
        You are viewing archived content from AIW #{event.eventNumber} ({event.date}).
        {' '}
        <a href="/" style={{ textDecoration: 'underline' }}>View current event</a>
      </div>
    </aside>
  )
}
