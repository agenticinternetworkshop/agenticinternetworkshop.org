import Link from 'next/link'
import { Event } from '@/lib/types'

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  // Show approximate attendee count for archived events
  const attendeeCount = event.eventId === '1' ? '~125' : event.attendees.length.toString()

  return (
    <Link href={`/events/${event.eventId}`} className="event-card">
      <div className="event-card-header">
        <h3>AIW #{event.eventNumber}</h3>
        <span className="event-card-badge">Archived</span>
      </div>
      <div className="event-card-content">
        <div className="event-card-date">{event.date}</div>
        <div className="event-card-location">{event.location.name}</div>
        {event.attendees && event.attendees.length > 0 && (
          <div className="event-card-attendees">{attendeeCount} Attendees</div>
        )}
      </div>
      <div className="event-card-footer">
        <span className="event-card-link">View Archive →</span>
      </div>
    </Link>
  )
}
