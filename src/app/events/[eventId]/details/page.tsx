import { getEventById } from '@/lib/eventData'
import { ArchivedDetailsPageClient } from './ArchivedDetailsPageClient'

export function generateStaticParams() {
  return [
    { eventId: '1' }, // AIW #1
  ]
}

export default function ArchivedDetailsPage({ params }: { params: { eventId: string } }) {
  const event = getEventById(params.eventId)

  if (!event) {
    return <div>Event not found</div>
  }

  return <ArchivedDetailsPageClient event={event} />
}
