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
        id: 'aiw2-topic-1',
        title: 'Agent Delegation & Authorization',
        description:
          'Topics include: Delegated authorization and delegation semantics/chains, Cryptographic proof of delegation for AI agents, GNAP vs OAuth patterns for agent authorization, OAuth 2.1 extensions, SPIFFE/SPIRE hybrid patterns, Scoped, time- and task-bound agent tokens, The "4-legged identity problem": User → advisor → agent → resource, Delegated authentication for multi-party commerce, Proof of intent with AI agents, A2A delegation without impersonation, Privilege delegation, zcap-ld as local policies, Monotonic delegation of permissions on agents, How intent and obligations travel alongside A2A / MCP calls',
        bullets: [
          'Delegated authorization and delegation semantics/chains',
          'Cryptographic proof of delegation for AI agents',
          'GNAP vs OAuth patterns for agent authorization',
          'OAuth 2.1 extensions, SPIFFE/SPIRE hybrid patterns',
          'Scoped, time- and task-bound agent tokens',
          'The "4-legged identity problem": User → advisor → agent → resource',
          'Delegated authentication for multi-party commerce',
          'Proof of intent with AI agents',
          'A2A delegation without impersonation',
          'Privilege delegation',
          'zcap-ld as local policies',
          'Monotonic delegation of permissions on agents',
          'How intent and obligations travel alongside A2A / MCP calls'
        ],
        category: 'Technical Protocols'
      },
      {
        id: 'aiw2-topic-2',
        title: 'Agent Identity & Trust Establishment',
        description:
          'Topics include: AI/agent identity fundamentals, Key management and wallets for AI agents, Interoperable standards-based trust establishment, Non-human agent provenance and accountability (DIDs/KERI), Trust boundaries and threat modeling for multi-agent systems, DID-based agent identity and messaging (AWiki.ai as protocol playground), Agent discovery and authentication across organizations, What does the "relying party" look like when the relying party is an agent, not a human?, Successors to OpenID Connect in the agentic world',
        bullets: [
          'AI/agent identity fundamentals',
          'Key management and wallets for AI agents',
          'Interoperable standards-based trust establishment',
          'Non-human agent provenance and accountability (DIDs/KERI)',
          'Trust boundaries and threat modeling for multi-agent systems',
          'DID-based agent identity and messaging (AWiki.ai as protocol playground)',
          'Agent discovery and authentication across organizations',
          'What does the "relying party" look like when the relying party is an agent, not a human?',
          'Successors to OpenID Connect in the agentic world'
        ],
        category: 'Identity & Privacy'
      },
      {
        id: 'aiw2-topic-3',
        title: 'MCP (Model Context Protocol)',
        description:
          'Topics include: MCP security, OAuth + MCP integration, MCP-I and delegation mechanisms, MCP connector round-trips with consent policy gating, Differential privacy-wrapped MCP tool servers, MCP/A2A with identity',
        bullets: [
          'MCP security',
          'OAuth + MCP integration',
          'MCP-I and delegation mechanisms',
          'MCP connector round-trips with consent policy gating',
          'Differential privacy-wrapped MCP tool servers',
          'MCP/A2A with identity'
        ],
        category: 'Technical Protocols'
      },
      {
        id: 'aiw2-topic-4',
        title: 'Agentic Protocols Landscape',
        description:
          'Topics include: A2A, AP2, ANP, UCP protocols, Agentic JWT (IETF draft-goswami-agentic-jwt-00), AgenticDNS, Browser integration with agent protocols, Which protocols are converging vs. re-fighting the same fight at different SDOs, W3C DID-based agent identity and encrypted messaging (AWiki.ai), How DID-based agents authenticate with Web resources, IoT devices, and other agents',
        bullets: [
          'A2A, AP2, ANP, UCP protocols',
          'Agentic JWT (IETF draft-goswami-agentic-jwt-00)',
          'AgenticDNS',
          'Browser integration with agent protocols',
          'Which protocols are converging vs. re-fighting the same fight at different SDOs',
          'W3C DID-based agent identity and encrypted messaging (AWiki.ai)',
          'How DID-based agents authenticate with Web resources, IoT devices, and other agents'
        ],
        category: 'Technical Protocols'
      },
      {
        id: 'aiw2-topic-5',
        title: 'Agent Safety, Governance & Human-in-the-Loop',
        description:
          'Topics include: Governing agentic AI, Keeping agents under human control, Human approval UX, interruption/rollback mechanisms, Safe defaults and sandbox design, Policy enforcement location in multi-agent systems, Alignment and catastrophic risk mitigation, Agent permissions: allow/ask/deny/escalate, Standardized audit logs and telemetry for agent actions, Secure tool invocation (shell, file, network, API/MCP)',
        bullets: [
          'Governing agentic AI',
          'Keeping agents under human control',
          'Human approval UX, interruption/rollback mechanisms',
          'Safe defaults and sandbox design',
          'Policy enforcement location in multi-agent systems',
          'Alignment and catastrophic risk mitigation',
          'Agent permissions: allow/ask/deny/escalate',
          'Standardized audit logs and telemetry for agent actions',
          'Secure tool invocation (shell, file, network, API/MCP)'
        ],
        category: 'Policy & Governance'
      },
      {
        id: 'aiw2-topic-6',
        title: 'Verifiable Credentials & DIDs for Agents',
        description:
          'Topics include: Agent identity using VCs and DIDs, OpenID4VP / EUDI wallet architecture extended to agent-to-agent flows, Trust frameworks for autonomous agents, Proof of Control and verified credentials for personal agents, Cross-body standards convergence (IETF, W3C, OIDF, ToIP, DIF), User-controlled agents / OpenVTC, Cryptogram-based delegation',
        bullets: [
          'Agent identity using VCs and DIDs',
          'OpenID4VP / EUDI wallet architecture extended to agent-to-agent flows',
          'Trust frameworks for autonomous agents',
          'Proof of Control and verified credentials for personal agents',
          'Cross-body standards convergence (IETF, W3C, OIDF, ToIP, DIF)',
          'User-controlled agents / OpenVTC',
          'Cryptogram-based delegation'
        ],
        category: 'Identity & Privacy'
      },
      {
        id: 'aiw2-topic-7',
        title: 'Privacy & Compliance in Multi-Agent Systems',
        description:
          'Topics include: Differential privacy budget composition across agent protocol chains, Auditability, consent propagation, data minimization, What breaks when MCP + A2A meet compliance regimes (healthcare, finance), Multi-agent systems on regulated data',
        bullets: [
          'Differential privacy budget composition across agent protocol chains',
          'Auditability, consent propagation, data minimization',
          'What breaks when MCP + A2A meet compliance regimes (healthcare, finance)',
          'Multi-agent systems on regulated data'
        ],
        category: 'Policy & Governance'
      },
      {
        id: 'aiw2-topic-8',
        title: 'Non-Person Entity Identity',
        description:
          'Topics include: HomeID: identity for homes, buildings, households, Multi-party consent across owner/occupant/landlord/utility/insurer, Extending user-centric identity to non-person entities',
        bullets: [
          'HomeID: identity for homes, buildings, households',
          'Multi-party consent across owner/occupant/landlord/utility/insurer',
          'Extending user-centric identity to non-person entities'
        ],
        category: 'Identity & Privacy'
      },
      {
        id: 'aiw2-topic-9',
        title: 'Enterprise & Production',
        description:
          'Topics include: Securing agents in the enterprise, IAM specifications for agentic AI, Corporate agentic AI, What real multi-agent systems (beyond chatbot + one tool) are running in production, Intelligent approaches to user-signed-in computer use',
        bullets: [
          'Securing agents in the enterprise',
          'IAM specifications for agentic AI',
          'Corporate agentic AI',
          'What real multi-agent systems (beyond chatbot + one tool) are running in production',
          'Intelligent approaches to user-signed-in computer use'
        ],
        category: 'Technical Protocols'
      },
      {
        id: 'aiw2-topic-10',
        title: 'Creative & Non-Enterprise Use Cases',
        description:
          'Topics include: Agent protocols for creative/expressive work (design, art, music, games), Are current protocol primitives implicitly enterprise-shaped?, AI and media',
        bullets: [
          'Agent protocols for creative/expressive work (design, art, music, games)',
          'Are current protocol primitives implicitly enterprise-shaped?',
          'AI and media'
        ],
        category: 'Other'
      },
      {
        id: 'aiw2-topic-11',
        title: 'Personal Agents & Data',
        description:
          'Topics include: Personal data, memory, and secure authorization of agents, Consent-aware edge and embodied agents (robots, sensors)',
        bullets: [
          'Personal data, memory, and secure authorization of agents',
          'Consent-aware edge and embodied agents (robots, sensors)'
        ],
        category: 'Identity & Privacy'
      }
    ],
    attendees: [
      { id: 'aiw2-att-1', name: 'Debbie Bucci' },
      { id: 'aiw2-att-2', name: 'Alan Karp', role: 'Principled Architect', affiliation: 'SitePassword', socialLinks: { website: 'https://alanhkarp.com' } },
      { id: 'aiw2-att-3', name: 'When Leggett', role: 'CTO', affiliation: 'Human.ing', socialLinks: { website: 'https://human.ing' } },
      { id: 'aiw2-att-4', name: 'Swan Black', role: 'CEO', affiliation: 'Human.ing', socialLinks: { website: 'https://human.ing' } },
      { id: 'aiw2-att-5', name: 'Mike Parkhill', role: 'Head of Engineering', affiliation: 'Dock Labs', socialLinks: { website: 'https://dock.io' } },
      { id: 'aiw2-att-6', name: 'Jonathan Rayback', role: 'Owner', affiliation: 'Future Forge Innovation' },
      { id: 'aiw2-att-7', name: 'Abdul Farooqui', role: 'CTO', affiliation: 'SymSoft Solutions, LLC', socialLinks: { website: 'https://www.symsoftsolutions.com' } },
      { id: 'aiw2-att-8', name: 'Savita Farooqui', role: 'Founder', affiliation: 'SymSoft Solutions, LLC', socialLinks: { website: 'https://www.symsoftsolutions.com' } },
      { id: 'aiw2-att-9', name: 'Santosh Tripathi' },
      { id: 'aiw2-att-10', name: 'Brian Best', role: 'Engineer', affiliation: 'vouched.id', socialLinks: { website: 'https://kya.vouched.id' } },
      { id: 'aiw2-att-11', name: 'Dylan Hobbs', role: 'Principal Engineer', affiliation: 'vouched.id', socialLinks: { website: 'https://kya.vouched.id' } },
      { id: 'aiw2-att-12', name: 'Michael Becker', role: 'CEO', affiliation: 'Identity Praxis, Inc.', socialLinks: { website: 'https://www.identitypraxis.com' } },
      { id: 'aiw2-att-13', name: 'Michael Schwartz', role: 'Founder / CEO', affiliation: 'Gluu', socialLinks: { website: 'https://gluu.org' } },
      { id: 'aiw2-att-14', name: 'Harshit Kumar', role: 'Principal Security Software Engineer' },
      { id: 'aiw2-att-15', name: 'Ken Adler', role: 'Technical Fellow', affiliation: 'Indeed', socialLinks: { website: 'https://indeed.com' } },
      { id: 'aiw2-att-16', name: 'Samuel Goto', role: 'SWE', affiliation: 'Google', socialLinks: { website: 'https://code.sgo.to' } },
      { id: 'aiw2-att-17', name: 'Mark Scott', role: 'Information Security Consultant', affiliation: 'Authentic Data Enterprises' },
      { id: 'aiw2-att-18', name: 'George Fletcher', role: 'Identity Standards Architect', affiliation: 'Practical Identity LLC' },
      { id: 'aiw2-att-19', name: 'Lisa Dusseault', role: 'CTO', affiliation: 'Data Transfer Initiative', socialLinks: { website: 'https://dtinit.org' } },
      { id: 'aiw2-att-20', name: 'Steven McCown', role: 'Chief Architect', affiliation: 'Anonyome Labs', socialLinks: { website: 'https://anonyome.com' } },
      { id: 'aiw2-att-21', name: 'Omri Gazitt', affiliation: 'Independent' },
      { id: 'aiw2-att-22', name: 'Tor Hagemann' },
      { id: 'aiw2-att-23', name: 'Jason Chow' },
      { id: 'aiw2-att-24', name: 'Rob De Feo', role: 'CTO', affiliation: 'Vidos', socialLinks: { website: 'https://vidos.id' } },
      { id: 'aiw2-att-25', name: 'Niki Aimable Niyikiza', affiliation: 'Tenuo', socialLinks: { website: 'https://tenuo.ai' } },
      { id: 'aiw2-att-26', name: 'Philippe Le Hegaret', role: 'VP, Technical Strategy', affiliation: 'W3C' },
      { id: 'aiw2-att-27', name: 'Denny Wong', role: 'Founder', affiliation: 'Linfra.co', socialLinks: { website: 'https://linfra.co' } },
      { id: 'aiw2-att-28', name: 'Tim Boeckmann', role: 'CEO', affiliation: 'Vidos', socialLinks: { website: 'https://vidos.id' } },
      { id: 'aiw2-att-29', name: 'Joe Andrieu', role: 'President', affiliation: 'Legendary Requirements', socialLinks: { website: 'https://legreq.com/' } },
      { id: 'aiw2-att-30', name: 'Erica Connell', role: 'Director of Media', affiliation: 'Legendary Requirements', socialLinks: { website: 'https://legreq.com/' } },
      { id: 'aiw2-att-31', name: 'Kevin Triplett' },
      { id: 'aiw2-att-32', name: 'Lauren Paer', role: 'Programs Manager', affiliation: 'Sabbatical' },
      { id: 'aiw2-att-33', name: 'Tim Cappalli', role: 'Sr. Architect, Identity Standards', affiliation: 'Okta', socialLinks: { website: 'https://timcappalli.me' } },
      { id: 'aiw2-att-34', name: 'Colton Chojnacki', role: 'AI Security Builder', affiliation: 'Beyond Identity', socialLinks: { website: 'https://beyondidentity.ai' } },
      { id: 'aiw2-att-35', name: 'Andrew Hughes', role: 'VP of Global Standards', affiliation: 'FaceTec', socialLinks: { website: 'https://facetec.com' } },
      { id: 'aiw2-att-36', name: 'Dmitri Zagidulin', affiliation: 'Interop Alliance', socialLinks: { website: 'https://interopalliance.org/' } },
      { id: 'aiw2-att-37', name: 'Kai Otsuki' },
      { id: 'aiw2-att-38', name: 'Jordan Gimbel', role: 'AGC', affiliation: 'Microsoft' },
      { id: 'aiw2-att-39', name: 'Eve Maler' },
      { id: 'aiw2-att-40', name: 'Ankit Agarwal', role: 'CTO', affiliation: 'Skyfire Systems Inc.', socialLinks: { website: 'https://skyfire.xyz' } },
      { id: 'aiw2-att-41', name: 'Michael Jones', role: 'Standards Architect', affiliation: 'Self-Issued Consulting', socialLinks: { website: 'https://self-issued.info/' } },
      { id: 'aiw2-att-42', name: 'Macy Abbey', role: 'Software Architecet', affiliation: 'Okta' },
      { id: 'aiw2-att-43', name: 'Peter Kaminski', affiliation: 'Peter Kaminski', socialLinks: { website: 'https://peterkaminski.ai/' } },
      { id: 'aiw2-att-44', name: 'Fraser Edwards', role: 'CEO & co-founder', affiliation: 'cheqd', socialLinks: { website: 'https://cheqd.io' } },
      { id: 'aiw2-att-45', name: 'Sarah Cecchetti', role: 'Director of Product Management', affiliation: 'Semperis' },
      { id: 'aiw2-att-46', name: 'George Mcewan', role: 'Privacy Architect', affiliation: 'State of Utah/Office of Data Privacy' },
      { id: 'aiw2-att-47', name: 'Ryan P Page', role: 'Principal', affiliation: 'Fluent' },
      { id: 'aiw2-att-48', name: 'Vic Cooper', affiliation: 'Inteletry LLC', socialLinks: { website: 'https://www.inteletry.com' } },
      { id: 'aiw2-att-49', name: 'Brendan Miller', role: 'Principal Engineer', affiliation: 'Applied Social Media Lab, Harvard University', socialLinks: { website: 'https://asml.cyber.harvard.edu/' } },
      { id: 'aiw2-att-50', name: 'Tram Nguyen', role: 'Product Manager', affiliation: 'Semperis' },
      { id: 'aiw2-att-51', name: 'Reema Bajwa', role: 'Staff Software Engineer', affiliation: 'Google' },
      { id: 'aiw2-att-52', name: 'Unmesh Vartak' },
      { id: 'aiw2-att-53', name: 'Sam Curren', role: 'Tech Consultant' },
      { id: 'aiw2-att-54', name: 'Kurtis Welch', role: 'CEO', affiliation: 'Recursive AI', socialLinks: { website: 'https://recursiveai.net' } },
      { id: 'aiw2-att-55', name: 'Niels Flensted-Jensen', role: 'CEO', affiliation: 'Idura', socialLinks: { website: 'https://idura.eu' } },
      { id: 'aiw2-att-56', name: 'Jon Udell', role: 'consultant', socialLinks: { website: 'https://jonudell.info' } },
      { id: 'aiw2-att-57', name: 'Maxwell Gerber', role: 'Engineer', affiliation: 'Twilio', socialLinks: { website: 'https://maxgerber.com' } },
      { id: 'aiw2-att-58', name: 'Kenta Takahashi', role: 'Principal Researcher', affiliation: 'Hitachi, Ltd.', socialLinks: { website: 'https://www.hitachi.com/' } },
      { id: 'aiw2-att-59', name: 'Prasenjit Shil' },
      { id: 'aiw2-att-60', name: 'Abhishek Goswami' },
      { id: 'aiw2-att-61', name: 'HLS ASML RSM CTR DEPARTMENT CARD', role: 'Senior Software Engeineer', affiliation: 'Applied Social Media Lab at Berkman Klein Center at Harvard', socialLinks: { website: 'https://asml.cyber.harvard.edu/' } },
      { id: 'aiw2-att-62', name: 'Brad Tumy', role: 'Senior Architect', affiliation: 'Twilio', socialLinks: { website: 'https://twilio.com' } },
      { id: 'aiw2-att-63', name: 'SOSHI HAMAGUCHI', role: 'Identity Specialist', affiliation: 'Digital Agency, Government of Japan' },
      { id: 'aiw2-att-64', name: 'Geun-Hyung Kim' },
      { id: 'aiw2-att-65', name: 'Colin Jaccino', role: 'Consultant', affiliation: 'EPAM Systems', socialLinks: { website: 'https://epam.com/' } },
      { id: 'aiw2-att-66', name: 'Suprema Raj', role: 'Staff Sofware Engineer', affiliation: 'PayPal' },
      { id: 'aiw2-att-67', name: 'Sophia Castor', role: 'AIML Research Scientist' },
      { id: 'aiw2-att-68', name: 'Ariel Gentile', role: 'CTO', affiliation: 'Verana', socialLinks: { website: 'https://verana.io' } },
      { id: 'aiw2-att-69', name: 'Fabrice Rochette', role: 'CEO', affiliation: 'Verana', socialLinks: { website: 'https://verana.io' } },
      { id: 'aiw2-att-70', name: 'Melchior Labrousse', role: 'Dev Junior', affiliation: 'Reality' },
      { id: 'aiw2-att-71', name: 'Gregory Labrousse', role: 'CEO', affiliation: 'Reality' },
      { id: 'aiw2-att-72', name: 'Riley Hughes', role: 'CEO and Cofounder', affiliation: 'Trinsic', socialLinks: { website: 'https://www.trinsic.id/' } },
      { id: 'aiw2-att-73', name: 'Eleanor Meritt', role: 'President', affiliation: 'Arcon', socialLinks: { website: 'https://www.arconnet.com' } },
      { id: 'aiw2-att-74', name: 'JP George', role: 'CTO', affiliation: 'Trinsic', socialLinks: { website: 'https://www.trinsic.id/' } },
      { id: 'aiw2-att-75', name: 'Sathish Kuppuswamy' },
      { id: 'aiw2-att-76', name: 'Darius Dunlap', role: 'Technical Sales & Technical Support', affiliation: 'JLINC', socialLinks: { website: 'https://jlinc.com' } },
      { id: 'aiw2-att-77', name: 'Richard Schaefer', role: 'Software Architect and AI/ML Engineer', affiliation: 'Abaxx Technologies', socialLinks: { website: 'https://abaxx.tech' } },
      { id: 'aiw2-att-78', name: 'Steven Tamm', role: 'SVP', affiliation: 'Okta' },
      { id: 'aiw2-att-79', name: 'Shengyi Zhang', role: 'ANP community co-founder', affiliation: 'ANP Community and W3C AI Agent Protocol Community Group', socialLinks: { website: 'https://github.com/agent-network-protocol/AgentNetworkP' } },
      { id: 'aiw2-att-80', name: 'Jeff Braswell', role: 'Founding Partner and CEO', affiliation: 'Tahoe Blue Ltd' },
      { id: 'aiw2-att-81', name: 'Murphy Yip', role: 'software engineer', affiliation: 'loginid', socialLinks: { website: 'https://loginid.io' } },
      { id: 'aiw2-att-82', name: 'Jesse Ariss', role: 'Marketing', affiliation: 'LoginID', socialLinks: { website: 'https://loginid.io' } }
    ],
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
        name: 'Anonymous',
        tier: 'Breakfast',
        logoUrl: '/sponsors/placeholder.png',
        websiteUrl: '#',
        description: 'Anonymous (Breakfast Sponsor)',
        isAvailable: false
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
        name: 'Skyfire',
        tier: 'Barista',
        logoUrl: '/sponsors/skyfire.svg',
        websiteUrl: 'https://skyfire.xyz',
        description: 'Barista Sponsor',
        isAvailable: false
      },
      {
        id: 'sponsor-aiw2-5',
        name: 'JLINC',
        tier: 'WiFi',
        logoUrl: '/sponsors/jlinc.png',
        websiteUrl: 'https://www.jlinc.com',
        description: 'WiFi Sponsor',
        isAvailable: false
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
      registrationUrl: 'https://www.eventbrite.com/e/agentic-internet-workshop-2-tickets-1976356257769?aff=oddtdtcreator',
      contactEmail: 'phil@windley.org',
      capacity: 200,
      isRegistrationOpen: false
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
