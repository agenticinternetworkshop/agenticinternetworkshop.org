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
    status: 'archived',
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
        name: 'Amazon Web Services',
        tier: 'Lunch',
        logoUrl: '/sponsors/AWS_logo_RGB_1c_Gray850.png',
        websiteUrl: 'https://aws.amazon.com',
        description: 'Lunch Sponsor',
        isAvailable: false
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
  },
  '3': {
    eventId: '3',
    eventNumber: 3,
    date: 'November 6, 2026',
    dateISO: '2026-11-06',
    location: {
      name: 'Computer History Museum',
      address: '1401 N Shoreline Blvd',
      city: 'Mountain View',
      state: 'CA',
      zipCode: '94043'
    },
    status: 'current',
    topicsOverview:
      'The largest cluster is delegation and authorization: how authority passes from a person or organization to an agent, and stays bounded and revocable as agents call tools and other agents across MCP, A2A, OAuth and GNAP. Next come agent identity and credentials (what an agent ID should contain, who signs it, and how it maps to a human) and safety and human control (audit logs, intent drift, and how to stop a running agent). Newer threads include agent payments and the agreement layer that should come before them, consumer protection, and how the IETF, W3C and DIF efforts fit together. The last group lists what people want to test hands-on at Interop Day on November 5.',
    topics: [
      {
        id: 'aiw3-topic-1',
        title: 'Agent Identity & Credentials',
        description:
          'Topics include: Agent identity using verifiable credentials and DIDs, Non-human agent provenance and accountability, What does the "relying party" look like when it’s an agent, not a human?, Extending OpenID4VP and wallet architectures to agent-to-agent flows, Proof of control and verified credentials for personal agents, What should an agent disclose about the model behind it?, If a service could ask one thing about the model powering an agent, what should it be?, Should agent credentials be ephemeral or persistent?, Who signs the ID — the provider, the deployer, or both?, Agent identity is not enough: the authority, memory, and intent layer above it, Sovereign identity for organizations: what agent authority looks like when AI joins the org chart, Are identifiers even the right way to think about agentic identification?, How agentic identity maps to a human identity, How teams are handling agentic identity in practice, Autonomous agent identity and agent security, Licensing AI agents like cars - we solved this problem 100 years ago, Agentic identity, authorization, attestation and verification, Is it possible to define a fundamental AI agent identity primitive?, What it means to define persistent identity states, Agent identity and sovereign computing, Secure identity primitives and key management, SD-JWT, ID-JAG and DPoP, Agentic Git signing',
        bullets: [
          'Agent identity using verifiable credentials and DIDs',
          'Non-human agent provenance and accountability',
          'What does the "relying party" look like when it’s an agent, not a human?',
          'Extending OpenID4VP and wallet architectures to agent-to-agent flows',
          'Proof of control and verified credentials for personal agents',
          'What should an agent disclose about the model behind it?',
          'If a service could ask one thing about the model powering an agent, what should it be?',
          'Should agent credentials be ephemeral or persistent?',
          'Who signs the ID — the provider, the deployer, or both?',
          'Agent identity is not enough: the authority, memory, and intent layer above it',
          'Sovereign identity for organizations: what agent authority looks like when AI joins the org chart',
          'Are identifiers even the right way to think about agentic identification?',
          'How agentic identity maps to a human identity',
          'How teams are handling agentic identity in practice',
          'Autonomous agent identity and agent security',
          'Licensing AI agents like cars - we solved this problem 100 years ago',
          'Agentic identity, authorization, attestation and verification',
          'Is it possible to define a fundamental AI agent identity primitive?',
          'What it means to define persistent identity states',
          'Agent identity and sovereign computing',
          'Secure identity primitives and key management',
          'SD-JWT, ID-JAG and DPoP',
          'Agentic Git signing'
        ],
        category: 'Identity & Privacy'
      },
      {
        id: 'aiw3-topic-2',
        title: 'Delegation & Authorization',
        description:
          'Topics include: Agent-to-agent delegation without impersonation, GNAP vs. OAuth patterns for agent authorization, Cryptographic proof of delegation for AI agents, Enforcing least-privilege at the tool-call layer, How intent and obligations travel alongside A2A / MCP calls, Capability-based vs. policy-based approaches for delegation, Does the ID carry authorization, or point at it?, Can identity and authorization stay distinct and still interoperate?, Secure mandates for agent chains: carrying revocable, auditable authority across MCP and A2A hops, Human authority at machine speed: execution-time consent and revocation, Keeping mandates sovereignty-preserving, not surveillance, Progress on A2A, AAuth, OAuth support for agentic-driven flows, OAuth-related metadata standards evolution, Implications to JWTs and claims for supporting agentic workflows, Workload-based access grants and flows, Where agent-to-agent and agent-to-tool authorization is actually heading: GNAP and OAuth extensions for agents, AuthZEN for fine-grained authorization, capability narrowing and revocation across delegation hops, KERI/ACDC and SEDI for cryptographic authority, How the community keeps a human, a company, or a nation the source of authority at execution time as agents chain calls across tools and organizations, Mission-based authorization and governance for agents, Mission-based agent-team governance, Separating human intent, governance decisions, delegated authority, and execution evidence in agentic systems, Human ownership provenance and authorized delegation, MCP auth, The latest OAuth-based and credential-based agent identity protocols, Best-of-class capability-based authorization protocols for AI, Authorization for agents: why existing RFCs will not help, Agentic JWT protocol (IETF draft), AI agent action delegation mandates using the EUDI Wallet and MachineMandate, How identity, delegation and agent-passport efforts (KYA, ERC-8004, Visa TAP, OpenVTC) represent a principal\'s authority to commit to terms on their behalf, not just to log in or pay, Delegation chains where each hop stays in bounds but the whole chain does not, Proving an agent\'s authority without revealing the principal behind it, Identity and access management challenges with agents, Privilege management for AI agents',
        bullets: [
          'Agent-to-agent delegation without impersonation',
          'GNAP vs. OAuth patterns for agent authorization',
          'Cryptographic proof of delegation for AI agents',
          'Enforcing least-privilege at the tool-call layer',
          'How intent and obligations travel alongside A2A / MCP calls',
          'Capability-based vs. policy-based approaches for delegation',
          'Does the ID carry authorization, or point at it?',
          'Can identity and authorization stay distinct and still interoperate?',
          'Secure mandates for agent chains: carrying revocable, auditable authority across MCP and A2A hops',
          'Human authority at machine speed: execution-time consent and revocation',
          'Keeping mandates sovereignty-preserving, not surveillance',
          'Progress on A2A, AAuth, OAuth support for agentic-driven flows',
          'OAuth-related metadata standards evolution',
          'Implications to JWTs and claims for supporting agentic workflows',
          'Workload-based access grants and flows',
          'Where agent-to-agent and agent-to-tool authorization is actually heading: GNAP and OAuth extensions for agents, AuthZEN for fine-grained authorization, capability narrowing and revocation across delegation hops, KERI/ACDC and SEDI for cryptographic authority',
          'How the community keeps a human, a company, or a nation the source of authority at execution time as agents chain calls across tools and organizations',
          'Mission-based authorization and governance for agents',
          'Mission-based agent-team governance',
          'Separating human intent, governance decisions, delegated authority, and execution evidence in agentic systems',
          'Human ownership provenance and authorized delegation',
          'MCP auth',
          'The latest OAuth-based and credential-based agent identity protocols',
          'Best-of-class capability-based authorization protocols for AI',
          'Authorization for agents: why existing RFCs will not help',
          'Agentic JWT protocol (IETF draft)',
          'AI agent action delegation mandates using the EUDI Wallet and MachineMandate',
          'How identity, delegation and agent-passport efforts (KYA, ERC-8004, Visa TAP, OpenVTC) represent a principal\'s authority to commit to terms on their behalf, not just to log in or pay',
          'Delegation chains where each hop stays in bounds but the whole chain does not',
          'Proving an agent\'s authority without revealing the principal behind it',
          'Identity and access management challenges with agents',
          'Privilege management for AI agents'
        ],
        category: 'Technical Protocols'
      },
      {
        id: 'aiw3-topic-3',
        title: 'Trust Frameworks & Verification',
        description:
          'Topics include: How a receiving agent verifies a presenting agent is authorized to act on behalf of a person or organization, Cryptographic trust decisions without human-in-the-loop consent, Trust boundaries and threat modeling for multi-agent systems, Trust registries and registries of registries, Thin ID with a registry lookup, or fat ID that carries everything?, How do you stop an agent ID from being replayed by a malicious service?, How do two different agent ID schemes recognize each other?, Behavioral coherence as a runtime trust signal (trust asymmetry and the completion drive), How trust and behavioral signals can travel with an agent without becoming surveillance, AI and human trust, TSP (Trust Spanning Protocol) and trust-enabled AI agents, Accountable Entity is the root of agentic trust, Agentic identity and accountability, worked on together with other protocol and standards developers, Trust registries, Evaluating intent both before and after an AI agent transaction is initiated',
        bullets: [
          'How a receiving agent verifies a presenting agent is authorized to act on behalf of a person or organization',
          'Cryptographic trust decisions without human-in-the-loop consent',
          'Trust boundaries and threat modeling for multi-agent systems',
          'Trust registries and registries of registries',
          'Thin ID with a registry lookup, or fat ID that carries everything?',
          'How do you stop an agent ID from being replayed by a malicious service?',
          'How do two different agent ID schemes recognize each other?',
          'Behavioral coherence as a runtime trust signal (trust asymmetry and the completion drive)',
          'How trust and behavioral signals can travel with an agent without becoming surveillance',
          'AI and human trust',
          'TSP (Trust Spanning Protocol) and trust-enabled AI agents',
          'Accountable Entity is the root of agentic trust',
          'Agentic identity and accountability, worked on together with other protocol and standards developers',
          'Trust registries',
          'Evaluating intent both before and after an AI agent transaction is initiated'
        ],
        category: 'Identity & Privacy'
      },
      {
        id: 'aiw3-topic-4',
        title: 'Structural & Governance Questions',
        description:
          'Topics include: Which entities belong in an agent ID — agent, instance, provider, deployer, model?, Should a low-risk agent carry less ID than a high-risk one?, Whose privacy wins — the deployer’s, or the service’s need to know who it is dealing with?, Who should have access to the information inside an agent ID?, Should agent trust scores and traffic statistics be public?, Voluntary adoption or mandated compliance — which one actually gets agent IDs deployed?, Where will the market fail to build agent IDs, and who fills that gap?, What can governments coordinate that industry cannot?, When an agent causes harm, who is responsible?, Is there such a thing as "apparent authority" in AI? Respondeat superior and agentic liability, AI agent fiduciaries, Network effects of AI:AI and AI:Human interactions',
        bullets: [
          'Which entities belong in an agent ID — agent, instance, provider, deployer, model?',
          'Should a low-risk agent carry less ID than a high-risk one?',
          'Whose privacy wins — the deployer’s, or the service’s need to know who it is dealing with?',
          'Who should have access to the information inside an agent ID?',
          'Should agent trust scores and traffic statistics be public?',
          'Voluntary adoption or mandated compliance — which one actually gets agent IDs deployed?',
          'Where will the market fail to build agent IDs, and who fills that gap?',
          'What can governments coordinate that industry cannot?',
          'When an agent causes harm, who is responsible?',
          'Is there such a thing as "apparent authority" in AI? Respondeat superior and agentic liability',
          'AI agent fiduciaries',
          'Network effects of AI:AI and AI:Human interactions'
        ],
        category: 'Policy & Governance'
      },
      {
        id: 'aiw3-topic-5',
        title: 'Policy, Permissions & Governance',
        description:
          'Topics include: Where policy enforcement should live in multi-agent systems, Agent permissions and scoped capabilities (allow/ask/deny/escalate), Policy portability across frameworks, Governance of agentic AI — embedding alignment in protocols, Agentic AI and consumer protection, and the privacy issues that may arise, Agentic AI and advertising, How consumers can be part of the design of agentic AI policy and products',
        bullets: [
          'Where policy enforcement should live in multi-agent systems',
          'Agent permissions and scoped capabilities (allow/ask/deny/escalate)',
          'Policy portability across frameworks',
          'Governance of agentic AI — embedding alignment in protocols',
          'Agentic AI and consumer protection, and the privacy issues that may arise',
          'Agentic AI and advertising',
          'How consumers can be part of the design of agentic AI policy and products'
        ],
        category: 'Policy & Governance'
      },
      {
        id: 'aiw3-topic-6',
        title: 'Safety, Security & Human Control',
        description:
          'Topics include: Human approval UX and interruption/rollback mechanisms, Securing MCP servers and A2A protocols, Standardized audit logs and telemetry for agent actions, Safe defaults and sandbox design for local-first workflows, Practical patterns for trustworthy agent systems, When an agent goes wrong at 2am, who do you call?, What does an ID have to carry for anyone to stop a running agent?, What should a service log when an agent calls it?, Systems that block anything not authenticated, Flipping the narrative from human-in-the-loop to agent-in-the-loop, Authentication and compliance for agents, AI control planes, A shared, vendor-neutral threat taxonomy for agents: the Agent Threat Matrix (9 tactics, 57 techniques), What attributable evidence for an agent action needs to contain, Intent drift in AI agents, Agents in critical business processes, Goal/action alignment of LLM agents, How to prevent LLM creativity from exceeding its prescribed functions over time, Best AI agent harness design techniques, Is it hopeless? Will AI agents eventually build so much intelligence that humans cannot control them?, SAFE AI metrics, measurements and uncertainty certificates',
        bullets: [
          'Human approval UX and interruption/rollback mechanisms',
          'Securing MCP servers and A2A protocols',
          'Standardized audit logs and telemetry for agent actions',
          'Safe defaults and sandbox design for local-first workflows',
          'Practical patterns for trustworthy agent systems',
          'When an agent goes wrong at 2am, who do you call?',
          'What does an ID have to carry for anyone to stop a running agent?',
          'What should a service log when an agent calls it?',
          'Systems that block anything not authenticated',
          'Flipping the narrative from human-in-the-loop to agent-in-the-loop',
          'Authentication and compliance for agents',
          'AI control planes',
          'A shared, vendor-neutral threat taxonomy for agents: the Agent Threat Matrix (9 tactics, 57 techniques)',
          'What attributable evidence for an agent action needs to contain',
          'Intent drift in AI agents',
          'Agents in critical business processes',
          'Goal/action alignment of LLM agents',
          'How to prevent LLM creativity from exceeding its prescribed functions over time',
          'Best AI agent harness design techniques',
          'Is it hopeless? Will AI agents eventually build so much intelligence that humans cannot control them?',
          'SAFE AI metrics, measurements and uncertainty certificates'
        ],
        category: 'Human-AI Interaction'
      },
      {
        id: 'aiw3-topic-7',
        title: 'Personal Agents & Data',
        description:
          'Topics include: User-controlled agents and personal data sovereignty, Personal data, memory, and secure authorization, Consent-aware edge and embodied agents, Personal portable memory, Personal AI "lock-boxes", A path toward human-empowering AIs, Agentic permissioned storage',
        bullets: [
          'User-controlled agents and personal data sovereignty',
          'Personal data, memory, and secure authorization',
          'Consent-aware edge and embodied agents',
          'Personal portable memory',
          'Personal AI "lock-boxes"',
          'A path toward human-empowering AIs',
          'Agentic permissioned storage'
        ],
        category: 'Identity & Privacy'
      },
      {
        id: 'aiw3-topic-8',
        title: 'Infrastructure & Discovery',
        description:
          'Topics include: AgenticDNS and agent registries, Agent discovery and interoperability across protocol stacks, Browser roles in the agentic ecosystem, Can MCP carry identity, or does it need extension?, Does DNS hold as the anchor for agent identity?, Which agent ID efforts actually exist, and what does each one cover?, How MCP and A2A are converging on identity and mandate, MCP, Agent Network Protocol (ANP), Agentic Profiles (A2A + DIDs), AGNTCY and its 3 layers: Agent Discovery, Agent Identity, and SLIM, A2A Agent Cards, Which protocol is best suited to carry an "obfuscated broadcast, local-only computation" pattern: A2A Artifact model, AGNTCY SLIM messaging, or ANP DID-based discovery?, Newest state of AI agents, Agents++ open source library, Agentic AI communication via X-Road, Setting up a local network of Apple Silicon devices for local LLM development',
        bullets: [
          'AgenticDNS and agent registries',
          'Agent discovery and interoperability across protocol stacks',
          'Browser roles in the agentic ecosystem',
          'Can MCP carry identity, or does it need extension?',
          'Does DNS hold as the anchor for agent identity?',
          'Which agent ID efforts actually exist, and what does each one cover?',
          'How MCP and A2A are converging on identity and mandate',
          'MCP',
          'Agent Network Protocol (ANP)',
          'Agentic Profiles (A2A + DIDs)',
          'AGNTCY and its 3 layers: Agent Discovery, Agent Identity, and SLIM',
          'A2A Agent Cards',
          'Which protocol is best suited to carry an "obfuscated broadcast, local-only computation" pattern: A2A Artifact model, AGNTCY SLIM messaging, or ANP DID-based discovery?',
          'Newest state of AI agents',
          'Agents++ open source library',
          'Agentic AI communication via X-Road',
          'Setting up a local network of Apple Silicon devices for local LLM development'
        ],
        category: 'Technical Protocols'
      },
      {
        id: 'aiw3-topic-9',
        title: 'Agent Payments & Commerce',
        description:
          'Topics include: Agent Payments, Agentic Commerce, KYAPay, Payment layers for agent-to-agent transactions, Privacy-preserving agent-to-agent matching for regulated personal data: feasibility of minimal-disclosure marketplaces on A2A/AGNTCY, Agent identity and commerce, Terms before transactions: the missing agreement layer. Payment protocols (x402, ACP, AP2, MPP) move money between agents, but none record which terms were accepted, by whose authority, or what the approving human actually saw, How terms discovery, acceptance and evidence should fit with payment and identity protocols, including the Legal Context Protocol and Consenti: agree, prove authority, then pay, Verifiable evidence of agent behavior at commerce scale: what Proof-of-Control-style evidence a purchase needs, and what it costs when agents make thousands of sub-cent payments, Agent commerce under Proof-of-Control: a walkthrough of an agent-to-agent purchase built by Blocksee, Secret Labs (SecretVM) and Certisyn',
        bullets: [
          'Agent Payments',
          'Agentic Commerce',
          'KYAPay',
          'Payment layers for agent-to-agent transactions',
          'Privacy-preserving agent-to-agent matching for regulated personal data: feasibility of minimal-disclosure marketplaces on A2A/AGNTCY',
          'Agent identity and commerce',
          'Terms before transactions: the missing agreement layer. Payment protocols (x402, ACP, AP2, MPP) move money between agents, but none record which terms were accepted, by whose authority, or what the approving human actually saw',
          'How terms discovery, acceptance and evidence should fit with payment and identity protocols, including the Legal Context Protocol and Consenti: agree, prove authority, then pay',
          'Verifiable evidence of agent behavior at commerce scale: what Proof-of-Control-style evidence a purchase needs, and what it costs when agents make thousands of sub-cent payments',
          'Agent commerce under Proof-of-Control: a walkthrough of an agent-to-agent purchase built by Blocksee, Secret Labs (SecretVM) and Certisyn'
        ],
        category: 'Use Cases'
      },
      {
        id: 'aiw3-topic-10',
        title: 'Standards Landscape',
        description:
          'Topics include: Are standards relevant in the age of AI?, Where are standards being developed today for Agentic AI? What is good/bad/ugly about these different orgs?, How should agent identity/discovery protocols defend against a coordinator that sends inconsistent versions to isolate one participant\'s data?, Progress on agentic AI standards over the last six months, How the IETF audit and delegation drafts converge on a common record model for agent actions, Where IETF, W3C and DIF efforts on agent identity overlap and where they diverge, Implementation experience mapping an agent identity platform to the IETF audit architecture record types, The PEDIGREE draft and SURADAR SDK architecture',
        bullets: [
          'Are standards relevant in the age of AI?',
          'Where are standards being developed today for Agentic AI? What is good/bad/ugly about these different orgs?',
          'How should agent identity/discovery protocols defend against a coordinator that sends inconsistent versions to isolate one participant\'s data?',
          'Progress on agentic AI standards over the last six months',
          'How the IETF audit and delegation drafts converge on a common record model for agent actions',
          'Where IETF, W3C and DIF efforts on agent identity overlap and where they diverge',
          'Implementation experience mapping an agent identity platform to the IETF audit architecture record types',
          'The PEDIGREE draft and SURADAR SDK architecture'
        ],
        category: 'Policy & Governance'
      },
      {
        id: 'aiw3-topic-11',
        title: 'Interop Day (November 5): What People Want to Test',
        description:
          'Topics include: Trust Spanning Protocol (TSP) implementations, MCP auth, Agent identity with SPIFFE, WIMSE, OAuth, CIMD and EMA, Agent identity, delegated authorization, credential exchange, trust discovery and revocation in MCP-based agent interactions, Business wallets and Digital Product Passports (DPP), A dual-signed (Ed25519 and ML-DSA-65) agent credential verified against published conformance fixtures, and alignment testing with SPIFFE/WIMSE verifiers and the RATS EAT model, OpenPreference.org, Interop parallels and challenges between OpenVTC, Truststackers and the ProHuman AI stack, Testing agent behavior in benchmarks, Finding partners to work with, Agents++, Enclave-backed execution',
        bullets: [
          'Trust Spanning Protocol (TSP) implementations',
          'MCP auth',
          'Agent identity with SPIFFE, WIMSE, OAuth, CIMD and EMA',
          'Agent identity, delegated authorization, credential exchange, trust discovery and revocation in MCP-based agent interactions',
          'Business wallets and Digital Product Passports (DPP)',
          'A dual-signed (Ed25519 and ML-DSA-65) agent credential verified against published conformance fixtures, and alignment testing with SPIFFE/WIMSE verifiers and the RATS EAT model',
          'OpenPreference.org',
          'Interop parallels and challenges between OpenVTC, Truststackers and the ProHuman AI stack',
          'Testing agent behavior in benchmarks',
          'Finding partners to work with',
          'Agents++',
          'Enclave-backed execution'
        ],
        category: 'Technical Protocols'
      }
    ],
    attendees: [
      { id: 'aiw3-att-1', name: 'Jefferson Braswell', role: 'Founding Partner and CEO', affiliation: 'Tahoe Blue Ltd' },
      { id: 'aiw3-att-2', name: 'Marina Piller', role: 'Founder, CEO', affiliation: 'otislabs.ai', socialLinks: { website: 'https://otislabs.ai/' } },
      { id: 'aiw3-att-3', name: 'Michel Sahli', role: 'Fintech & Digital Trust Expert', affiliation: 'Swisscom', socialLinks: { website: 'https://swisscom.com' } },
      { id: 'aiw3-att-4', name: 'Colin Jaccino', role: 'Consultant', affiliation: 'EPAM Systems', socialLinks: { website: 'https://www.epam.com' } },
      { id: 'aiw3-att-5', name: 'Alan Karp', role: 'Principled Architect', affiliation: 'SitePassword', socialLinks: { website: 'https://alanhkarp.com' } },
      { id: 'aiw3-att-6', name: 'Yulia Stepanova' },
      { id: 'aiw3-att-7', name: 'Mahesh Balan', role: 'Doctoral Candidate', affiliation: 'Claremont Graduate University', socialLinks: { website: 'https://maheshbalan.github.io' } },
      { id: 'aiw3-att-8', name: 'Mark Scott', role: 'Information Security Consultant', affiliation: 'Authentic Data Enterprises' },
      { id: 'aiw3-att-9', name: 'Richard Esplin', role: 'Head of Product', affiliation: 'Dock Labs' },
      { id: 'aiw3-att-10', name: 'Debbie Bucci', affiliation: 'Independent' },
      { id: 'aiw3-att-11', name: 'Matthew MacAdam', role: 'Senior CIAM Engineer', affiliation: 'BECU', socialLinks: { website: 'https://www.becu.org' } },
      { id: 'aiw3-att-12', name: 'Michael Jones', role: 'Principal', affiliation: 'Self-Issued Consulting', socialLinks: { website: 'https://self-issued.info/' } },
      { id: 'aiw3-att-13', name: 'Ankit Agarwal', role: 'CTO', affiliation: 'Skyfire Systems Inc.', socialLinks: { website: 'https://skyfire.xyz' } },
      { id: 'aiw3-att-14', name: 'Dan Finlay' },
      { id: 'aiw3-att-15', name: 'Grace Rachmany', role: 'Executive Director', affiliation: 'Decentralized Identity Foundation (DIF)', socialLinks: { website: 'https://www.identity.foundation' } },
      { id: 'aiw3-att-16', name: 'Andrew Maffei', affiliation: 'The Visual Connection' },
      { id: 'aiw3-att-17', name: 'Takayuki SADAHIRO', role: 'Senior Specialist', affiliation: 'ITOCHU Techno-Solutions Co.' },
      { id: 'aiw3-att-18', name: 'Dave Sanford', role: 'Author', affiliation: 'Greater Good Trust' },
      { id: 'aiw3-att-19', name: 'Sean MacGuire', role: 'Human in the Loop', affiliation: 'Maclawran LLC', socialLinks: { website: 'https://maclawran.ca' } },
      { id: 'aiw3-att-20', name: 'Tor Hagemann', role: 'CEO', affiliation: 'Lovarys', socialLinks: { website: 'https://lovarys.onetooneandon.to' } },
      { id: 'aiw3-att-21', name: 'Dick Hardt', role: 'Founder/CEO', affiliation: 'Hellō', socialLinks: { website: 'https://hello.coop' } },
      { id: 'aiw3-att-22', name: 'Lisa Dusseault', role: 'CTO', affiliation: 'DTI', socialLinks: { website: 'https://dtinit.org' } },
      { id: 'aiw3-att-23', name: 'Vic Cooper' },
      { id: 'aiw3-att-24', name: 'Wenjing Chu', role: 'Senior Director of AI and Human Trust', affiliation: 'Futurewei Technologies Inc.' },
      { id: 'aiw3-att-25', name: 'Jon Udell', role: 'Consultant', socialLinks: { website: 'https://jonudell.info' } },
      { id: 'aiw3-att-26', name: 'Beth Porter' },
      { id: 'aiw3-att-27', name: 'Dan Yamamoto', affiliation: 'Internet Initiative Japan Inc.' },
      { id: 'aiw3-att-28', name: 'Sharath Rajasekar', role: 'CEO, Founder', affiliation: 'Highflame', socialLinks: { website: 'https://www.highflame.com' } },
      { id: 'aiw3-att-29', name: 'Abdel Fane', role: 'CEO & Founder', affiliation: 'OpenA2A', socialLinks: { website: 'https://opena2a.org' } },
      { id: 'aiw3-att-30', name: 'Janak Amarasena', role: 'Technical Lead', affiliation: 'WSO2' },
      { id: 'aiw3-att-31', name: 'Robin Monks', role: 'CTO', socialLinks: { website: 'https://robinmonks.com' } },
      { id: 'aiw3-att-32', name: 'Sam Curren' },
      { id: 'aiw3-att-33', name: 'Joe Andrieu', role: 'President', affiliation: 'Legendary Requirements', socialLinks: { website: 'https://legreq.com' } },
      { id: 'aiw3-att-34', name: 'Margeigh Novotny', role: 'Strategy & Operations', affiliation: 'First Person Cooperative', socialLinks: { website: 'https://www.firstperson.network' } },
      { id: 'aiw3-att-35', name: 'Aditya Desai' },
      { id: 'aiw3-att-36', name: 'Jamie Clark', role: 'Counsel', affiliation: 'Independent' },
      { id: 'aiw3-att-37', name: 'Jaime Caso', role: 'Innovation Engineer', affiliation: 'Veridian Attributions AG', socialLinks: { website: 'https://veridian.id' } },
      { id: 'aiw3-att-38', name: 'Roberto Carlos Morano', role: 'Lead DevOps Advocate', affiliation: 'Veridian Attributions AG', socialLinks: { website: 'https://veridian.id' } },
      { id: 'aiw3-att-39', name: 'Dan Leininger', role: 'Director, Experimental Engineering', affiliation: 'Consumer Reports', socialLinks: { website: 'https://consumerreports.org' } },
      { id: 'aiw3-att-40', name: 'Prasenjit Shil', role: 'Cofounder', affiliation: 'Unforge', socialLinks: { website: 'https://www.unforge.io' } },
      { id: 'aiw3-att-41', name: 'Deva Senapathy', role: 'Founder and CEO' },
      { id: 'aiw3-att-42', name: 'Sam Rajan', role: 'Vice President' },
      { id: 'aiw3-att-43', name: 'Abhishek Goswami', role: 'Strategic Leader in Data & AI' },
      { id: 'aiw3-att-44', name: 'Ivan Moreno Mendoza', role: 'CTO', affiliation: 'Trustlayer Foundation', socialLinks: { website: 'https://www.trustlayer.foundation' } },
      { id: 'aiw3-att-45', name: 'Adolfo Grego Micha', role: 'Secretary', affiliation: 'Trustlayer Foundation', socialLinks: { website: 'https://www.trustlayer.foundation' } },
      { id: 'aiw3-att-46', name: 'Aaron Grego', role: 'Presidente', affiliation: 'Trustlayer Foundation', socialLinks: { website: 'https://www.trustlayer.foundation' } },
      { id: 'aiw3-att-47', name: 'Vladimir Berger', role: 'Field CTO', affiliation: 'PlainID', socialLinks: { website: 'https://plainid.com' } },
      { id: 'aiw3-att-48', name: 'Emiliano Berenbaum' },
      { id: 'aiw3-att-49', name: 'Kyle Marsh', role: 'Identity Architect', affiliation: 'Duende Software', socialLinks: { website: 'https://duendesoftware.com/' } },
      { id: 'aiw3-att-50', name: 'Vinod Choyi', role: 'Security Architect', socialLinks: { linkedin: 'https://www.linkedin.com/in/vinodchoyi/' } },
      { id: 'aiw3-att-51', name: 'Keiron McCammon', role: 'Founder', affiliation: 'Spark of Trust', socialLinks: { website: 'https://www.sparkoftrust.com/' } },
      { id: 'aiw3-att-52', name: 'Haodong Wang', role: 'Software Engineer Manager', affiliation: 'Amazon' },
      { id: 'aiw3-att-53', name: 'Mark Armstrong' },
      { id: 'aiw3-att-54', name: 'Richard Schaefer', role: 'Principal AI/ML Architect & Team Lead', affiliation: 'Abaxx Technologies', socialLinks: { website: 'https://abaxx.tech' } },
      { id: 'aiw3-att-55', name: 'Jason Law' },
      { id: 'aiw3-att-56', name: 'Naveed Ihsanullah', role: 'CTO', affiliation: 'Known Systems', socialLinks: { website: 'https://www.knownsystems.ai' } },
      { id: 'aiw3-att-57', name: 'Andrea Belen Vega Talledo', role: 'Policy and Programme Specialist, Digital Rights', affiliation: 'Consumers International', socialLinks: { website: 'https://www.consumersinternational.org/' } },
      { id: 'aiw3-att-58', name: 'Anton Sokolov', role: 'Researcher', affiliation: 'Tyche Institute', socialLinks: { website: 'https://tyche.institute' } },
      { id: 'aiw3-att-59', name: 'Eric Forst', role: 'CEO', affiliation: 'Blocksee', socialLinks: { website: 'https://www.blocksee.co/' } },
      { id: 'aiw3-att-60', name: 'Peter Kaminski', role: 'Principal', affiliation: 'peterkaminski.ai', socialLinks: { website: 'https://peterkaminski.ai/' } },
      { id: 'aiw3-att-61', name: 'Dmitri Zagidulin', affiliation: 'Interop Alliance', socialLinks: { website: 'https://interopalliance.org' } },
      { id: 'aiw3-att-62', name: 'Carey Janecka', role: 'Staff Software Engineer', affiliation: 'Turnkey', socialLinks: { website: 'https://turnkey.com' } }
    ],
    sponsors: [
      {
        id: 'sponsor-aiw3-1',
        name: 'Baselayer',
        tier: 'Lunch',
        logoUrl: '/sponsors/baselayer.svg',
        websiteUrl: 'https://baselayer.com',
        description: 'Lunch Sponsor',
        isAvailable: false
      },
      {
        id: 'sponsor-aiw3-2',
        name: 'Amazon Web Services',
        tier: 'Breakfast',
        logoUrl: '/sponsors/AWS_logo_RGB_1c_Gray850.png',
        websiteUrl: 'https://aws.amazon.com',
        description: 'Breakfast Sponsor',
        isSold: true,
        isAvailable: false
      },
      {
        id: 'sponsor-aiw3-3',
        name: 'Snack Table Sponsor',
        tier: 'Snack Table',
        logoUrl: '/sponsors/placeholder.png',
        websiteUrl: '#',
        description: 'Snack Table Sponsor',
        isAvailable: true
      },
      {
        id: 'sponsor-aiw3-4',
        name: 'Beltic',
        tier: 'Barista',
        logoUrl: '/sponsors/beltic.svg',
        websiteUrl: 'https://beltic.com',
        description: 'Barista Sponsor',
        isAvailable: false
      },
      {
        id: 'sponsor-aiw3-5',
        name: 'Skyfire',
        tier: 'WiFi',
        logoUrl: '/sponsors/skyfire.svg',
        websiteUrl: 'https://skyfire.xyz',
        description: 'WiFi Sponsor',
        isAvailable: false
      },
      {
        id: 'sponsor-aiw3-6',
        name: 'Open Gifting Sponsor',
        tier: 'Open Gifting',
        logoUrl: '/sponsors/placeholder.png',
        websiteUrl: '#',
        description: 'Open Gifting Sponsor',
        isAvailable: true
      },
      {
        id: 'sponsor-aiw3-7',
        name: 'OpenA2A',
        tier: 'Documentation Center',
        logoUrl: '/sponsors/opena2a.png',
        websiteUrl: 'https://opena2a.org',
        description: 'Documentation Center Sponsor',
        isSold: true,
        isAvailable: false
      }
    ],
    schedule: [],
    details: {
      registrationUrl: 'https://www.eventbrite.com/e/agentic-internet-workshop-3-aiw3-tickets-1988785710597?aff=oddtdtcreator',
      contactEmail: 'phil@windley.org',
      capacity: 200,
      isRegistrationOpen: true
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
