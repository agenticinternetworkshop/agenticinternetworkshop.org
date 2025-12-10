// TypeScript interfaces for Agentic Internet Workshop event management

export type EventStatus = 'upcoming' | 'current' | 'archived'

export type TopicCategory =
  | 'Technical Protocols'
  | 'Policy & Governance'
  | 'Use Cases'
  | 'Identity & Privacy'
  | 'Agent Coordination'
  | 'Human-AI Interaction'
  | 'Other'

export type SponsorTier =
  | 'Diamond'
  | 'Platinum'
  | 'Gold'
  | 'Silver'
  | 'Bronze'
  | 'Coffee'
  | 'Snack Table'
  | 'Breakfast'
  | 'Lunch'
  | 'Barista'
  | 'WiFi'
  | 'Open Gifting'
  | 'Documentation Center'
  | 'Qiqochat Workshop Hub'

export type SessionType =
  | 'Opening'
  | 'Keynote'
  | 'Discussion'
  | 'Workshop'
  | 'Break'
  | 'Lunch'
  | 'Closing'

export interface Location {
  name: string
  address: string
  city: string
  state: string
  zipCode?: string
  mapUrl?: string
}

export interface EventDetails {
  registrationUrl?: string
  contactEmail?: string
  capacity?: number
  isRegistrationOpen: boolean
}

export interface SocialLinks {
  linkedin?: string
  twitter?: string
  github?: string
  website?: string
}

export interface Topic {
  id: string
  title: string
  description: string
  proposedBy?: string
  category: TopicCategory
  sourceEventId?: string
}

export interface Attendee {
  id: string
  name: string
  affiliation?: string
  role?: string
  bio?: string
  avatarUrl?: string
  socialLinks?: SocialLinks
}

export interface Sponsor {
  id: string
  name: string
  tier: SponsorTier
  logoUrl: string
  websiteUrl: string
  description?: string
  isSold?: boolean
  isAvailable?: boolean
}

export interface ScheduleItem {
  id: string
  startTime: string
  endTime: string
  title: string
  description?: string
  sessionType: SessionType
  facilitator?: string
}

export interface Event {
  eventId: string
  eventNumber: number
  date: string
  dateISO: string
  location: Location
  status: EventStatus
  topics: Topic[]
  attendees: Attendee[]
  sponsors: Sponsor[]
  schedule: ScheduleItem[]
  details: EventDetails
  isSourcedFrom?: string
}
