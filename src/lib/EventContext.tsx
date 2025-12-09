'use client'

import { createContext, useContext, ReactNode } from 'react'
import { Event } from './types'
import { getEventById, getCurrentEvent } from './eventData'

interface EventContextValue {
  eventId: string | undefined
  basePath: string
  event: Event
  isArchived: boolean
}

const EventContext = createContext<EventContextValue | undefined>(undefined)

interface EventContextProviderProps {
  children: ReactNode
  eventId?: string
}

export function EventContextProvider({ children, eventId }: EventContextProviderProps) {
  // Determine which event to use
  const event = eventId ? getEventById(eventId) : getCurrentEvent()

  if (!event) {
    throw new Error(`Event not found: ${eventId || 'current'}`)
  }

  // Calculate base path and archived status
  const isArchived = event.status === 'archived'
  const basePath = isArchived ? `/events/${event.eventId}` : ''

  const value: EventContextValue = {
    eventId: eventId,
    basePath,
    event,
    isArchived
  }

  return (
    <EventContext.Provider value={value}>
      {children}
    </EventContext.Provider>
  )
}

export function useEventContext(): EventContextValue {
  const context = useContext(EventContext)

  if (context === undefined) {
    throw new Error('useEventContext must be used within EventContextProvider')
  }

  return context
}
