'use client'

import { Event } from '@/lib/types'
import { getEventById } from '@/lib/eventData'

interface TopicSourceNoticeProps {
  event: Event
}

export function TopicSourceNotice({ event }: TopicSourceNoticeProps) {
  // Only show if topics are sourced from another event
  if (!event.isSourcedFrom) {
    return null
  }

  const sourceEvent = getEventById(event.isSourcedFrom)

  if (!sourceEvent) {
    return null
  }

  return (
    <aside className="callout" role="note" aria-label="Topic source notice">
      <strong>📋 Topics Notice</strong><br />
      Topics shown below are sourced from AIW #{sourceEvent.eventNumber}. New topic submissions for AIW #{event.eventNumber} will be appearing as the event approaches.
    </aside>
  )
}
