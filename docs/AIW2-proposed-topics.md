# AIW2 Proposed Topics

## Agent Identity and Credentials
- Agent identity and authorisation using verifiable credentials and DIDs
- Non-human agent provenance and accountability (DIDs / KERI-style)
- Protocol-level identity, provenance, and non-repudiation for agents
- Proof of Control and verified credentials for personal agents
- Extending OpenID4VP and the EUDI wallet architecture to agent-to-agent flows
- Agent-to-agent identity, authentication, and trust establishment using digital credentials (VCs, MDLs, EUDI wallets)
- What does the "relying party" look like when it's an agent, not a human clicking a consent screen?
- AI agent automation with human identity
- Where the industry is headed on identity with agents
- Emerging protocols for agentic identity and permissions

## Delegation and Authorization
- Agent-to-agent (A2A) delegation without impersonation
- Delegated authorization (OAuth, MCP)
- GNAP vs OAuth patterns for agent authorization
- Building on existing protocols like OAuth and AuthZEN for fine-grained authorization in agentic systems
- Cryptographic proof of delegation for AI agents
- Cryptogram-based delegation
- Enforcing least-privilege at the tool-call layer when agents delegate to sub-agents
- Delegation of responsibility with constraints in agents
- Capability-based vs policy-based approaches for agent-to-agent delegation
- Interoperability between agent authorization primitives and existing identity protocols like WIMSE
- Identity and fine-grained authorization in agentic systems
- How intent and obligations travel alongside A2A / MCP calls

## Trust Frameworks and Verification
- Trust frameworks for autonomous agents: how a receiving agent verifies a presenting agent is authorised to act on behalf of a person or organisation
- Cryptographic trust decisions without human-in-the-loop consent
- Trust boundaries and threat modeling for multi-agent systems
- Proof of intent with AI agents

## Policy, Permissions, and Governance
- Where policy enforcement should live in multi-agent systems
- Agent permissions and scoped capabilities (allow/ask/deny/escalate)
- Policy portability across frameworks (OpenCode, Claude Code, Codex-style)
- Governance of agentic AI
- Embedding alignment in protocols to mitigate and prevent catastrophic risks

## Safety, Security, and Human Control
- Human approval UX and interruption/rollback mechanisms
- Agent-user interaction protocols to prevent agents escaping human control or causing damage to people/infrastructure
- Secure tool invocation (shell, file, network, API/MCP)
- Safe defaults and sandbox design for local-first workflows
- Securing agents in the enterprise
- Agentic AI security trends
- Standardized audit logs and telemetry for agent actions
- Real-world case studies on preventing unsafe agent actions in local and cloud workflows
- Practical patterns for trustworthy agent systems: permissioning, runtime observability, policy enforcement, human-in-the-loop controls

## Personal Agents and Data
- Personal data, memory, and secure authorization of agents
- Consent-aware edge and embodied agents (robots, sensors)

## Infrastructure and Protocols
- AgenticDNS
- Browsers
- Practical patterns for agent delegation, non-human provenance, and policy enforcement (beyond standards meetings toward demonstrable, interoperable patterns)

## AI and Media
- AI and media
