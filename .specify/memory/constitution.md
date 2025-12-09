<!--
Sync Impact Report
==================
Version Change: N/A → 1.0.0
Initial constitution creation for Agentic Internet Workshop website project

Core Principles Defined:
- Educational Clarity (Primary)
- Content Quality & Accuracy
- Responsive Design
- Clean Code Standards
- Accessibility Awareness

Sections Added:
- Core Principles (5 principles)
- Development Workflow
- Quality Standards
- Governance

Templates Status:
✅ plan-template.md - Reviewed, constitution check section aligns
✅ spec-template.md - Reviewed, user scenarios and requirements align
✅ tasks-template.md - Reviewed, task organization aligns
⚠️  No command files found - N/A

Project Context:
- Mission: Advance next generation of protocols for agent connectivity and collaboration
- Legacy: Building on 20+ years of Internet Identity Workshop heritage
- Focus: Educational resource for learning about agentic protocols and preserving human judgment

Deferred Items: None
-->

# Agentic Internet Workshop Website Constitution

## Core Principles

### I. Educational Clarity

**Primary Directive**: This website is an educational resource for people learning about the Agentic Internet Workshop, its mission, and the protocols advancing agent connectivity and collaboration.

**Non-Negotiable Rules**:
- Content MUST prioritize clarity and usefulness for visitors learning about agentic protocols
- Complex concepts (agent connectivity, collaboration protocols, human judgment preservation) MUST be explained accessibly
- Navigation and information architecture MUST guide visitors from awareness to understanding to action
- Technical jargon MUST be accompanied by plain-language explanations or context
- Honor the 20+ year Internet Identity Workshop legacy while clearly articulating what makes this workshop distinct

**Rationale**: The workshop advances next-generation protocols in an emerging field. Visitors need to understand not just event logistics, but the vision, purpose, and significance of this work. Educational clarity serves both newcomers and experts.

### II. Content Quality & Accuracy

**Primary Directive**: Deliver accurate, timely information about the workshop event and its broader mission.

**Non-Negotiable Rules**:
- All workshop details (date, time, location, speakers, agenda) MUST be verified before publication
- Content updates MUST reflect current event status (registration open/closed, speaker changes, venue updates)
- Information accuracy takes precedence over visual design or technical features
- Outdated or incorrect content MUST be flagged and corrected immediately
- Links to external resources (protocols, research, related workshops) MUST be verified and maintained

**Rationale**: Visitors rely on this site as the authoritative source for workshop information. Inaccurate details undermine trust and the workshop's educational mission.

### III. Responsive Design

**Primary Directive**: The website MUST function seamlessly across all device sizes and orientations.

**Non-Negotiable Rules**:
- Mobile-first development approach - design for small screens first
- Test all changes on mobile (iOS/Android), tablet, and desktop viewports
- No horizontal scrolling on any viewport size
- Touch targets MUST be minimum 44px × 44px for interactive elements
- Images and media MUST be responsive and optimized for different screen sizes

**Rationale**: Workshop attendees will access the site from various devices, especially mobile while traveling to the event. Poor mobile experience creates friction in the registration and information-gathering process.

### IV. Clean Code Standards

**Primary Directive**: Maintain readable, maintainable code that future developers (or AI agents) can understand and modify safely.

**Non-Negotiable Rules**:
- Follow Next.js and React best practices consistently
- Component files MUST have clear, descriptive names matching their purpose
- Use TypeScript types for all props and function signatures - no `any` types except with explicit justification
- CSS classes MUST follow a consistent naming convention (existing pattern uses semantic names)
- Remove unused code, commented-out blocks, and console.logs before committing

**Rationale**: This website will evolve over time with different contributors. Clean, consistent code reduces maintenance burden and prevents bugs during updates.

### V. Accessibility Awareness

**Primary Directive**: Strive for inclusive design that works for users with diverse abilities.

**Non-Negotiable Rules**:
- Use semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<section>`) over generic `<div>` where appropriate
- All images MUST have descriptive alt text or be marked decorative
- Maintain sufficient color contrast (minimum WCAG AA for normal text)
- Keyboard navigation MUST work for all interactive elements
- Focus states MUST be visible (don't remove default outlines without replacement)

**Rationale**: While full WCAG compliance is not mandated for this project, basic accessibility practices ensure broader reach and demonstrate respect for all potential attendees.

## Development Workflow

### Branch Strategy

- **main**: Production-ready code that reflects live website
- **feature/***: Feature branches for development work
- All changes MUST go through pull requests - no direct commits to main

### Pull Request Process

1. Create feature branch from main with descriptive name (e.g., `feature/update-speakers`, `feature/add-registration-form`)
2. Make changes with clear, focused commits
3. Open pull request with:
   - Clear title describing the change
   - Description explaining what changed and why
   - Screenshots for visual changes
4. Request review from team member or project owner
5. Address review feedback
6. Merge only after approval

### Review Criteria

Reviewers MUST verify:
- Content accuracy (dates, names, links, information)
- Responsive behavior across viewport sizes
- No TypeScript errors or console warnings
- Code follows established patterns in the project
- Commit messages are clear and descriptive

## Quality Standards

### Manual Testing Requirements

Before submitting a pull request, developer MUST manually verify:

1. **Desktop Testing**:
   - Chrome/Edge (Windows/Mac)
   - Firefox
   - Safari (Mac)

2. **Mobile Testing** (at minimum):
   - iOS Safari (real device or simulator)
   - Android Chrome (real device or emulator)

3. **Responsive Testing**:
   - Mobile (320px - 767px)
   - Tablet (768px - 1023px)
   - Desktop (1024px+)

### Build Verification

- `npm run build` MUST complete without errors
- `npm run lint` MUST pass with no errors (warnings acceptable with justification)
- Static export in `/out` directory MUST be deployable

### Content Verification Checklist

For content changes, verify:
- [ ] Dates are in correct format and timezone
- [ ] Links open in correct tab (internal: same, external: new)
- [ ] Email addresses and contact info are current
- [ ] Sponsor logos and names are correct
- [ ] Speaker names, titles, and photos are accurate

## Governance

### Constitution Authority

This constitution defines the development standards for the Agentic Internet Workshop website project. When practices conflict, constitution principles take precedence.

### Amendment Process

Constitution changes require:
1. Documented rationale for the change
2. Review and approval from project owner
3. Version increment following semantic versioning:
   - **MAJOR**: Removing or fundamentally changing a core principle
   - **MINOR**: Adding new principle or section
   - **PATCH**: Clarifications, wording improvements, typo fixes
4. Update to dependent templates (plan, spec, tasks)

### Compliance

- Pull request reviews MUST reference constitution principles when relevant
- Violations of non-negotiable rules require immediate correction or clear justification
- Constitution compliance is a shared responsibility - any team member can flag violations

### Complexity Justification

The constitution emphasizes simplicity. Any introduction of complexity (new dependencies, architectural patterns, build tools) MUST be justified in the pull request against:
- What problem does it solve?
- Why can't existing tools solve it?
- What is the maintenance cost?
- Does it violate any principles?

**Version**: 1.0.0 | **Ratified**: 2025-12-08 | **Last Amended**: 2025-12-08
