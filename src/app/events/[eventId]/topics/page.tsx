import { getEventById } from '@/lib/eventData'
import { ArchivedTopicsPageClient } from './ArchivedTopicsPageClient'

export function generateStaticParams() {
  return [
    { eventId: '1' }, // AIW #1
    { eventId: '2' }, // AIW #2
  ]
}

export default function ArchivedTopicsPage({ params }: { params: { eventId: string } }) {
  const event = getEventById(params.eventId)

  if (!event) {
    return <div>Event not found</div>
  }

  return <ArchivedTopicsPageClient event={event} />
}
