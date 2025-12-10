import { getEventById } from '@/lib/eventData'
import { ArchivedEventPageClient } from './ArchivedEventPageClient'

export function generateStaticParams() {
  return [
    { eventId: '1' }, // AIW #1
  ]
}

export default function ArchivedEventPage({ params }: { params: { eventId: string } }) {
  const event = getEventById(params.eventId)

  if (!event) {
    return <div>Event not found</div>
  }

  return <ArchivedEventPageClient event={event} />
}
