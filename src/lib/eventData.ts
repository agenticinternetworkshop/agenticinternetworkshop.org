import { Event } from './types'

// Event data storage for all workshop instances
export const events: Record<string, Event> = {
  '1': {
    eventId: '1',
    eventNumber: 1,
    date: 'October 24, 2025',
    dateISO: '2025-10-24',
    location: {
      name: 'Computer History Museum',
      address: '1401 N Shoreline Blvd',
      city: 'Mountain View',
      state: 'CA',
      zipCode: '94043',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.0123456789!2d-122.0776843!3d37.4145694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7495bec0189%3A0x7c17d44a466baf9b!2sComputer%20History%20Museum!5e0!3m2!1sen!2sus!4v1234567890123'
    },
    status: 'archived',
    topics: [
      {
        id: 'topic-1',
        title: 'Identity & Trust Infrastructure',
        description: 'Topics include: The role of decentralized identity in personal AI agents, The role of SSI in agentic identity and inter-agent protocols, Trust & identity, Identity, trust in general for AgenticAI, Trust and identity frameworks for Agentic AI, How to anchor agents to ground truth, DIDs and DIDCOMM are central to the overall Web 7.9 Agentic OS architecture, How is trust maintained across a network of downstream services?',
        category: 'Identity & Privacy'
      },
      {
        id: 'topic-2',
        title: 'Agentic Commerce & Markets',
        description: 'Topics include: How will agentic commerce work? What are the UX, liability, and payment implications?, AI agent marketplaces and negotiation mechanisms, Equitable compute/resources for agentic AI markets',
        category: 'Use Cases'
      },
      {
        id: 'topic-3',
        title: 'Security, Access & Policy',
        description: 'Topics include: AI permissions vs Human permissions, Managing access rights, Access control to data, Agents access control who are accessing on behalf of users, Particularly interested in delegation issues as well as dynamic authorization, I would like to see how state management tokens are held in a secure way so that there is no privacy loss, How will cryptographic tokens represent delegation?, How to express security policies to authorize access, enforce restrictions, and track obligations?, Access control and delegation in agentic systems, Cryptographic tokens for delegation and dynamic authorization, MCP security frameworks and evaluation, How to ensure fairness and accountability across the agentic web, Security, Identity, & Trust (human-in-the-loop by default): Credential safety for UI-driven agents with E2E channels and explicit user approval',
        category: 'Identity & Privacy'
      },
      {
        id: 'topic-4',
        title: 'Protocols & Standards',
        description: 'Topics include: MCP MCP MCP MCP!, MCP security, Why OAuth is not a fit for MCP, I think I\'m interested most in learning about MCP and how OAuth might relate to it, and specifically, how/whether browsers can help, A2A protocol and cross app for Agentic AI, ERC-8004, A2A, MCP, The current state of standard and to see if an issue we see is being discussed or not, Agent to agent negotiation, MCP, A2A, ERC-8004, and beyond, Why OAuth isn\'t a fit for MCP, Browser integration and the role of credential managers, Agentic Internet registries and credential registries, Project NANDA & Agentic Registries',
        category: 'Technical Protocols'
      },
      {
        id: 'topic-5',
        title: 'Credential Management & Registries',
        description: 'Topics include: Agentic Internet Registries, The role of credential managers in the agentic AI ecosystem, How to incorporate an access layer and a payment layer in a decentralized way',
        category: 'Identity & Privacy'
      },
      {
        id: 'topic-6',
        title: 'Web & Browser Integration',
        description: 'Topics include: I\'m interested in learning how / whether the web and browsers can help, My goal for XMLUI is that a developer using agents to build XMLUI apps will enjoy a level of MCP support that reliably steers agents to correct patterns. I don\'t think this requires more or different protocols, it does require discovery and application of practical techniques. agentic experiences, and in what ways they may need to change, Browser-native Agents (beyond APIs): Computer-Use agents that operate UIs like humans—navigating, clicking, form-filling—expanding automation to services without clean APIs',
        category: 'Technical Protocols'
      },
      {
        id: 'topic-7',
        title: 'Governance & Infrastructure',
        description: 'Topics include: How will we govern agentic AI? What tools are needed that don\'t exist today? What are the limits of identity for governance?, What are the risks of delay while security and culture evolves to keep pace with existing progress?, Policy derivations with AI agents, Decentralized agentic swarms, Infrastructure requirements for the agentic web, Governance models and limits of identity in AI governance, Enterprise Guidance & Benchmarks: What\'s actually working in agentic AI deployments and governance frameworks, Infra Economics: Optimizing infrastructure for throughput, cost, and energy efficiency in agentic systems',
        category: 'Policy & Governance'
      },
      {
        id: 'topic-8',
        title: 'Human-Agent Experience & Design',
        description: 'Topics include: Semantic interoperability, Modeling social and collaborative agentic situations, Agentic DevEx: Development environments that integrate AI agents for coding assistance and task delegation',
        category: 'Human-AI Interaction'
      },
      {
        id: 'topic-9',
        title: 'Research & Collaboration',
        description: 'Topics include: Project NANDA, There is a ton of work going on in very different places. I\'m hoping to leave this day with a better sense of who is doing what, Ongoing work at Project NANDA and other research initiatives, Mapping who\'s working on what across the ecosystem',
        category: 'Other'
      }
    ],
    attendees: [
      { id: 'att-1', name: 'Google', affiliation: 'Google' },
      { id: 'att-2', name: 'Okta', affiliation: 'Okta' },
      { id: 'att-3', name: 'Consumer Reports', affiliation: 'Consumer Reports' },
      { id: 'att-4', name: 'Adobe', affiliation: 'Adobe' },
      { id: 'att-5', name: 'Indeed', affiliation: 'Indeed' },
      { id: 'att-6', name: 'Amazon Web Services', affiliation: 'Amazon Web Services' },
      { id: 'att-7', name: 'JLINC', affiliation: 'JLINC' },
      { id: 'att-8', name: '121&0n2', affiliation: '121&0n2' },
      { id: 'att-9', name: 'Adiuco', affiliation: 'Adiuco' },
      { id: 'att-10', name: 'Advatar Systems AB', affiliation: 'Advatar Systems AB' },
      { id: 'att-11', name: 'Agent Overlay', affiliation: 'Agent Overlay' },
      { id: 'att-12', name: 'Agentry, Inc.', affiliation: 'Agentry, Inc.' },
      { id: 'att-13', name: 'Arcade.dev', affiliation: 'Arcade.dev' },
      { id: 'att-14', name: 'AVRWell', affiliation: 'AVRWell' },
      { id: 'att-15', name: 'Ayra', affiliation: 'Ayra' },
      { id: 'att-16', name: 'Beyond Identity', affiliation: 'Beyond Identity' },
      { id: 'att-17', name: 'BOTLabs GmbH', affiliation: 'BOTLabs GmbH' },
      { id: 'att-18', name: 'CIVICS.com Consulting Services', affiliation: 'CIVICS.com Consulting Services' },
      { id: 'att-19', name: 'Companion Intelligence', affiliation: 'Companion Intelligence' },
      { id: 'att-20', name: 'Data Transfer Initiative', affiliation: 'Data Transfer Initiative' },
      { id: 'att-21', name: 'DataPal', affiliation: 'DataPal' },
      { id: 'att-22', name: 'Digital Trust Venture Partners', affiliation: 'Digital Trust Venture Partners' },
      { id: 'att-23', name: 'Dock Labs', affiliation: 'Dock Labs' },
      { id: 'att-24', name: 'First Person Project', affiliation: 'First Person Project' },
      { id: 'att-25', name: 'Future Forge Innovation', affiliation: 'Future Forge Innovation' },
      { id: 'att-26', name: 'Galaniprojects GmbH', affiliation: 'Galaniprojects GmbH' },
      { id: 'att-27', name: 'Glide Identity', affiliation: 'Glide Identity' },
      { id: 'att-28', name: 'Gluu', affiliation: 'Gluu' },
      { id: 'att-29', name: 'Hellō', affiliation: 'Hellō' },
      { id: 'att-30', name: 'IDv4', affiliation: 'IDv4' },
      { id: 'att-31', name: 'Identity Praxis, Inc.', affiliation: 'Identity Praxis, Inc.' },
      { id: 'att-32', name: 'LoginID', affiliation: 'LoginID' },
      { id: 'att-33', name: 'Microsoft', affiliation: 'Microsoft' },
      { id: 'att-34', name: 'RichCanvas LLC', affiliation: 'RichCanvas LLC' },
      { id: 'att-35', name: 'Self', affiliation: 'Self' },
      { id: 'att-36', name: 'Solibre', affiliation: 'Solibre' },
      { id: 'att-37', name: 'Spherical Cow Consulting', affiliation: 'Spherical Cow Consulting' },
      { id: 'att-38', name: 'Swisscom', affiliation: 'Swisscom' },
      { id: 'att-39', name: 'Tauxbe Data', affiliation: 'Tauxbe Data' },
      { id: 'att-40', name: 'Verana Foundation', affiliation: 'Verana Foundation' },
      { id: 'att-41', name: 'WSO2', affiliation: 'WSO2' },
      { id: 'att-42', name: 'XMLUI.org', affiliation: 'XMLUI.org' }
    ],
    sponsors: [
      {
        id: 'sponsor-1',
        name: 'Consumer Reports',
        tier: 'Bronze',
        logoUrl: '/sponsors/consumer_reports.png',
        websiteUrl: 'https://www.consumerreports.org',
        description: 'Breakfast Sponsor'
      },
      {
        id: 'sponsor-2',
        name: 'Amazon Web Services',
        tier: 'Coffee',
        logoUrl: '/sponsors/aws.png',
        websiteUrl: 'https://aws.amazon.com',
        description: 'Barista Sponsor'
      },
      {
        id: 'sponsor-3',
        name: 'JLINC',
        tier: 'Bronze',
        logoUrl: '/sponsors/jlinc.png',
        websiteUrl: 'https://www.jlinc.com',
        description: 'WiFi Sponsor'
      },
      {
        id: 'sponsor-4',
        name: 'Glide Identity',
        tier: 'Snack Table',
        logoUrl: '/sponsors/glide.png',
        websiteUrl: 'https://www.glideidentity.com',
        description: 'Snacks Sponsor'
      },
      {
        id: 'sponsor-5',
        name: 'Agent Overlay',
        tier: 'Bronze',
        logoUrl: '/sponsors/agentoverlay.png',
        websiteUrl: 'https://www.agentoverlay.com',
        description: 'Open Gifting Sponsor'
      }
    ],
    schedule: [
      {
        id: 'schedule-1',
        startTime: '08:00',
        endTime: '09:00',
        title: 'Registration & Welcome',
        description: 'Doors open, breakfast and coffee',
        sessionType: 'Break'
      },
      {
        id: 'schedule-2',
        startTime: '09:00',
        endTime: '10:00',
        title: 'Opening Circle',
        description: 'Agenda Creation using Open Space Technology',
        sessionType: 'Opening'
      },
      {
        id: 'schedule-3',
        startTime: '10:00',
        endTime: '11:00',
        title: 'Session 1',
        description: 'Community-driven discussions',
        sessionType: 'Discussion'
      },
      {
        id: 'schedule-4',
        startTime: '11:00',
        endTime: '12:00',
        title: 'Session 2',
        description: 'Community-driven discussions',
        sessionType: 'Discussion'
      },
      {
        id: 'schedule-5',
        startTime: '12:00',
        endTime: '13:00',
        title: 'Lunch',
        description: 'Networking and informal discussions',
        sessionType: 'Lunch'
      },
      {
        id: 'schedule-6',
        startTime: '13:00',
        endTime: '14:00',
        title: 'Session 3',
        description: 'Community-driven discussions',
        sessionType: 'Discussion'
      },
      {
        id: 'schedule-7',
        startTime: '14:00',
        endTime: '15:00',
        title: 'Session 4',
        description: 'Community-driven discussions',
        sessionType: 'Discussion'
      },
      {
        id: 'schedule-8',
        startTime: '15:00',
        endTime: '16:00',
        title: 'Closing Circle',
        description: 'Session Summaries and Next Steps',
        sessionType: 'Closing'
      }
    ],
    details: {
      registrationUrl: 'https://www.eventbrite.com/e/agentic-internet-workshop-tickets-1657366079559',
      contactEmail: 'phil@windley.org',
      capacity: 200,
      isRegistrationOpen: false
    }
  },
  '2': {
    eventId: '2',
    eventNumber: 2,
    date: 'May 1, 2026',
    dateISO: '2026-05-01',
    location: {
      name: 'Computer History Museum',
      address: '1401 N Shoreline Blvd',
      city: 'Mountain View',
      state: 'CA',
      zipCode: '94043'
    },
    status: 'current',
    topics: [
      {
        id: 'topic-placeholder',
        title: 'Topics Coming Soon',
        description: 'We\'ll be asking attendees!',
        category: 'Other'
      }
    ],
    attendees: [],
    sponsors: [
      {
        id: 'sponsor-aiw2-1',
        name: 'Lunch Sponsor',
        tier: 'Lunch',
        logoUrl: '/sponsors/placeholder.png',
        websiteUrl: '#',
        description: 'Lunch Sponsor',
        isAvailable: true
      },
      {
        id: 'sponsor-aiw2-2',
        name: 'Breakfast Sponsor',
        tier: 'Breakfast',
        logoUrl: '/sponsors/placeholder.png',
        websiteUrl: '#',
        description: 'Breakfast Sponsor',
        isAvailable: true
      },
      {
        id: 'sponsor-aiw2-3',
        name: 'Snack Table Sponsor',
        tier: 'Snack Table',
        logoUrl: '/sponsors/placeholder.png',
        websiteUrl: '#',
        description: 'Snack Table Sponsor',
        isAvailable: true
      },
      {
        id: 'sponsor-aiw2-4',
        name: 'Barista Sponsor',
        tier: 'Barista',
        logoUrl: '/sponsors/placeholder.png',
        websiteUrl: '#',
        description: 'Barista Sponsor',
        isAvailable: true
      },
      {
        id: 'sponsor-aiw2-5',
        name: 'WiFi Sponsor',
        tier: 'WiFi',
        logoUrl: '/sponsors/placeholder.png',
        websiteUrl: '#',
        description: 'WiFi Sponsor',
        isAvailable: true
      },
      {
        id: 'sponsor-aiw2-6',
        name: 'Open Gifting Sponsor',
        tier: 'Open Gifting',
        logoUrl: '/sponsors/placeholder.png',
        websiteUrl: '#',
        description: 'Open Gifting Sponsor',
        isAvailable: true
      },
      {
        id: 'sponsor-aiw2-7',
        name: 'Documentation Center Sponsor',
        tier: 'Documentation Center',
        logoUrl: '/sponsors/placeholder.png',
        websiteUrl: '#',
        description: 'Documentation Center Sponsor',
        isAvailable: true
      }
    ],
    schedule: [],
    details: {
      contactEmail: 'phil@windley.org',
      isRegistrationOpen: false,
      registrationUrl: 'https://www.eventbrite.com/e/agentic-internet-workshop-2-tickets-1976356257769?aff=oddtdtcreator',
      contactEmail: 'phil@windley.org',

    }
  }
}

/**
 * Get the current (non-archived) event
 */
export function getCurrentEvent(): Event {
  const currentEvent = Object.values(events).find(e => e.status === 'current')
  if (!currentEvent) {
    throw new Error('No current event found')
  }
  return currentEvent
}

/**
 * Get event by ID
 */
export function getEventById(eventId: string): Event | undefined {
  return events[eventId]
}

/**
 * Get all archived events
 */
export function getArchivedEvents(): Event[] {
  return Object.values(events).filter(e => e.status === 'archived')
}
