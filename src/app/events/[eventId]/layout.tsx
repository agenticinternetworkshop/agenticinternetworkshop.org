import { EventContextProvider } from '@/lib/EventContext'
import { EventIndicator } from '@/components/EventIndicator'
import { ReactNode } from 'react'

export default function ArchivedEventLayout({
  children,
  params,
}: {
  children: ReactNode
  params: { eventId: string }
}) {
  return (
    <EventContextProvider eventId={params.eventId}>
      <EventIndicator />
      {children}
    </EventContextProvider>
  )
}
