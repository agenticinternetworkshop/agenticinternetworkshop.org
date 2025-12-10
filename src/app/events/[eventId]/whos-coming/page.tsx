import { getEventById } from '@/lib/eventData'
import { ArchivedWhosComingPageClient } from './ArchivedWhosComingPageClient'

export function generateStaticParams() {
  return [
    { eventId: '1' }, // AIW #1
  ]
}

export default function ArchivedWhosComingPage({ params }: { params: { eventId: string } }) {
  const event = getEventById(params.eventId)

  if (!event) {
    return <div>Event not found</div>
  }

  return <ArchivedWhosComingPageClient event={event} />
}
