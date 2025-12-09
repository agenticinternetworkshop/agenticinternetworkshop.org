# Implementation Plan: Archive AIW #1 and Setup AIW #2

**Branch**: `001-archive-aiw1-setup-aiw2` | **Date**: 2025-12-08 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/001-archive-aiw1-setup-aiw2/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Archive the current AIW #1 website to `/events/1/` path and prepare the website for AIW #2 with updated content at the root `/` path. AIW #2 is scheduled for May 9, 2026. The solution involves restructuring the Next.js static site to support event versioning, migrating current content while preserving all links and assets, and creating a navigation mechanism for visitors to switch between current and archived events.

## Technical Context

**Language/Version**: TypeScript 5.x, Next.js 14.0.0, React 18
**Primary Dependencies**: Next.js (static export mode), React, React-DOM, qrcode (existing)
**Storage**: Static files (Next.js static export to `dist/` directory)
**Testing**: Manual browser testing per constitution (no automated testing framework currently in project)
**Target Platform**: Static hosting (any CDN or static file server)
**Project Type**: Web application (Next.js App Router with static export)
**Performance Goals**: < 2 second page load on 3G connection, Core Web Vitals within "Good" thresholds
**Constraints**: Static export only (no server-side rendering), must maintain existing build output to `dist/`, trailing slashes required, images unoptimized (per next.config.js)
**Scale/Scope**: Single-page application expanding to multi-route structure, supports 2 events initially (extensible to N events), expected traffic < 10k concurrent visitors

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### I. Educational Clarity ✅

**Assessment**: PASS

- Feature adds event navigation that enhances educational mission by preserving historical context
- Topics section notice requirement (FR-004) ensures visitors understand content sourcing
- Archive access (FR-007) provides learning resource about workshop evolution

**Alignment**:
- Navigation guides visitors from awareness (current event) to understanding (past events) to action
- Clear indication of which event being viewed (FR-012) prevents confusion

### II. Content Quality & Accuracy ✅

**Assessment**: PASS

- FR-002 explicitly requires accurate date display (May 9, 2026)
- FR-008 ensures all internal links are verified and updated
- FR-009 preserves external links to maintain reference accuracy
- SC-002 mandates 100% link verification

**Requirements**:
- All migrated content must be manually verified for accuracy
- Link migration must be tested comprehensively before deployment

### III. Responsive Design ✅

**Assessment**: PASS

- Feature is content restructuring, not UI redesign
- Existing responsive design patterns continue to apply
- Navigation element (tab/button) must follow 44px minimum touch target (constitution requirement)

**Requirements**:
- Archive navigation UI must be tested across mobile/tablet/desktop
- /events/1/ content must maintain responsive behavior of original

### IV. Clean Code Standards ✅

**Assessment**: PASS

- No new dependencies required (uses existing Next.js routing)
- TypeScript types required for any new components
- Follows existing Next.js App Router conventions

**Requirements**:
- Event data structure must have explicit TypeScript interfaces
- Navigation component must have clear, descriptive naming
- No `any` types permitted

### V. Accessibility Awareness ✅

**Assessment**: PASS

- Navigation between events requires keyboard accessibility
- Archive navigation must have visible focus states
- Event context indicator must be programmatically determinable (for screen readers)

**Requirements**:
- Navigation element must be semantic HTML (button or link with proper ARIA if needed)
- Keyboard navigation testing required per constitution

### Development Workflow ✅

**Assessment**: PASS

- Feature follows PR-based workflow
- Manual testing requirements align with constitution
- Build verification required before merge

### Quality Standards ✅

**Assessment**: PASS

- Manual testing across browsers required (Chrome, Firefox, Safari)
- Mobile testing required (iOS Safari, Android Chrome)
- Content verification checklist applies (dates, links)

### Overall Gate Status: ✅ PASS

**No constitution violations.** Feature aligns with all core principles and follows established development workflow. No complexity justification required.

---

## Post-Design Constitution Re-Evaluation

*Required after Phase 1 design completion*

### Design Decisions Review

**Research Findings** (from research.md):
- Dynamic routes with `generateStaticParams` (R1)
- Component reuse with event data files (R2)
- Context-aware EventLink component (R3)
- Shared assets with on-demand event paths (R4)
- Tab navigation pattern (R5)
- Inline notice banner for topic sourcing (R6)
- Empty state with link to archived attendees (R7)

**Constitution Compliance Assessment**:

#### I. Educational Clarity ✅ PASS
- **R6 (Topic Notice)**: Inline banner ensures high visibility, preventing confusion
- **R7 (Empty Attendees)**: Provides historical context via link to past events
- Research decisions enhance educational value through clear context and navigation

#### II. Content Quality & Accuracy ✅ PASS
- **R3 (EventLink)**: Context-aware links prevent broken links (SC-002: 100% verification)
- **Data Model**: Validation rules ensure data integrity
- **Contracts**: Component API prevents implementation errors

#### III. Responsive Design ✅ PASS
- **R5 (Tab Navigation)**: 44px minimum touch targets specified
- **Quickstart**: Manual mobile testing required per constitution
- All components designed mobile-first

#### IV. Clean Code Standards ✅ PASS
- **TypeScript Interfaces**: Full type safety in data-model.md
- **Component Contracts**: Clear API boundaries, no `any` types
- **DRY Principle**: R2 decision (component reuse) reduces duplication
- **Naming**: EventLink, EventContext, EventNavigation - descriptive and clear

#### V. Accessibility Awareness ✅ PASS
- **R5 (Navigation)**: ARIA roles (`role="tablist"`, `role="tab"`) specified
- **Component Contracts**: Semantic HTML requirements documented
- **EventIndicator**: Uses `<aside role="note">` for screen readers
- Keyboard navigation patterns defined

### New Risks Identified

**None.** All research decisions and design choices align with constitution principles.

### Final Gate Status: ✅ PASS

**Constitution compliance maintained post-design.** All Phase 1 artifacts (research, data model, contracts, quickstart) follow established principles. Ready for implementation via `/speckit.tasks`.

## Project Structure

### Documentation (this feature)

```text
specs/001-archive-aiw1-setup-aiw2/
├── plan.md              # This file (/speckit.plan command output)
├── spec.md              # Feature specification (completed)
├── research.md          # Phase 0 output (generated below)
├── data-model.md        # Phase 1 output (generated below)
├── quickstart.md        # Phase 1 output (generated below)
├── contracts/           # Phase 1 output (generated below)
│   └── events-api.md    # Event data contract
├── checklists/
│   └── requirements.md  # Spec quality validation (completed)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

**Current Structure** (Next.js 14 App Router):
```text
src/app/
├── page.tsx                    # Current: AIW #1 homepage → Will become: AIW #2 homepage
├── layout.tsx                  # Root layout (shared across all pages)
├── globals.css                 # Global styles
├── favicon.ico                 # Site favicon
├── details/
│   └── page.tsx               # Current: AIW #1 details → Will become: AIW #2 details
├── topics/
│   └── page.tsx               # Current: AIW #1 topics → Will become: AIW #2 topics
└── whos-coming/
    └── page.tsx               # Current: AIW #1 attendees → Will become: AIW #2 attendees placeholder

public/
└── [static assets]            # Images, logos, etc.
```

**Target Structure** (After Implementation):
```text
src/app/
├── page.tsx                    # ✏️ MODIFIED: AIW #2 homepage
├── layout.tsx                  # ✏️ MODIFIED: Add event context
├── globals.css                 # ✏️ MODIFIED: Add event navigation styles
├── favicon.ico                 # UNCHANGED
├── components/                 # ➕ NEW DIRECTORY
│   ├── EventNavigation.tsx    # ➕ NEW: Tab/button to switch between events
│   └── EventIndicator.tsx     # ➕ NEW: Shows which event user is viewing
├── lib/                        # ➕ NEW DIRECTORY
│   ├── types.ts               # ➕ NEW: Event, Topic, Attendee TypeScript interfaces
│   └── eventData.ts           # ➕ NEW: Event configuration data
├── details/
│   └── page.tsx               # ✏️ MODIFIED: AIW #2 details
├── topics/
│   └── page.tsx               # ✏️ MODIFIED: AIW #2 topics with source notice
├── whos-coming/
│   └── page.tsx               # ✏️ MODIFIED: Placeholder with link to /events/1/whos-coming
└── events/
    └── [eventId]/             # ➕ NEW: Dynamic route for archived events
        ├── page.tsx           # ➕ NEW: Archived event homepage
        ├── layout.tsx         # ➕ NEW: Archived event layout wrapper
        ├── details/
        │   └── page.tsx       # ➕ NEW: Archived event details
        ├── topics/
        │   └── page.tsx       # ➕ NEW: Archived event topics
        └── whos-coming/
            └── page.tsx       # ➕ NEW: Archived event attendees

public/
├── [existing assets]          # PRESERVED: Current images
└── events/                    # ➕ NEW DIRECTORY (if assets need event-specific paths)
    └── 1/
        └── [images]           # ➕ NEW: AIW #1 specific images (if path conflicts occur)
```

**Structure Decision**:

This is a **Next.js App Router web application** using static export mode. The structure uses:
- **Dynamic routes** (`/events/[eventId]/`) to support N archived events without code changes
- **Component composition** for shared navigation and event context
- **Type-safe data layer** (`lib/types.ts`) for Event, Topic, Attendee entities
- **Separation of concerns**: Current event at root (`/`), archived events under `/events/[id]/`

The approach leverages Next.js App Router's built-in routing and layout nesting capabilities, avoiding the need for external routing libraries or complex state management.

## Complexity Tracking

> **No violations** - Constitution check passed. This section intentionally left empty.
