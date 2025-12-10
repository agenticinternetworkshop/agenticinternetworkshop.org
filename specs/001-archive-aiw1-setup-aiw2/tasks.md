# Tasks: Archive AIW #1 and Setup AIW #2

**Input**: Design documents from `/specs/001-archive-aiw1-setup-aiw2/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: No automated tests requested in specification. Manual browser testing per constitution.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Next.js App Router**: `src/app/` at repository root
- Paths shown below use actual project structure

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic TypeScript structure

- [X] T001 [P] Create lib directory for shared utilities at src/app/lib/
- [X] T002 [P] Create components directory for shared components at src/app/components/
- [X] T003 Create TypeScript interfaces file at src/app/lib/types.ts with Event, Topic, Attendee, Sponsor, ScheduleItem, Location, EventDetails, SocialLinks types
- [X] T004 Create event data file structure at src/app/lib/eventData.ts with events object and helper functions (getCurrentEvent, getEventById, getArchivedEvents)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T005 Extract AIW #1 event data from existing src/app/page.tsx and create events['1'] object in src/app/lib/eventData.ts
- [X] T006 [P] Extract AIW #1 topics data from src/app/topics/page.tsx and add to events['1'].topics array
- [X] T007 [P] Extract AIW #1 attendees data from src/app/whos-coming/page.tsx and add to events['1'].attendees array
- [X] T008 [P] Extract AIW #1 details data from src/app/details/page.tsx and add to events['1'] details object
- [X] T009 Create AIW #2 event entry in src/app/lib/eventData.ts with eventId:'2', date:'May 9, 2026', status:'current', topics sourced from event 1, empty attendees
- [X] T010 Create EventContext with React Context API at src/app/lib/EventContext.tsx providing eventId, basePath, event, isArchived values
- [X] T011 Create EventLink component at src/app/components/EventLink.tsx that wraps Next.js Link with automatic path prefixing based on EventContext

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - View Current AIW #2 Event Information (Priority: P1) 🎯 MVP

**Goal**: Display AIW #2 information at root (/) with correct date, sourced topics notice, and placeholder attendees section

**Independent Test**: Visit http://localhost:3000/ and verify AIW #2 shows with "May 9, 2026" date, topics notice, and empty/placeholder attendees section

### Implementation for User Story 1

- [X] T012 [US1] Update src/app/page.tsx to use getCurrentEvent() from eventData and display AIW #2 information
- [X] T013 [US1] Update src/app/layout.tsx to wrap children in EventContextProvider with eventId from current route
- [X] T014 [US1] Create TopicSourceNotice component at src/app/components/TopicSourceNotice.tsx to display notice when event.isSourcedFrom is set
- [X] T015 [US1] Update src/app/topics/page.tsx to use getCurrentEvent() and include TopicSourceNotice component above topics list
- [X] T016 [US1] Create WhosComingEmptyState component at src/app/components/WhosComingEmptyState.tsx with placeholder message and link to /events/1/whos-coming
- [X] T017 [US1] Update src/app/whos-coming/page.tsx to check if attendees array is empty and render WhosComingEmptyState if so
- [X] T018 [US1] Update src/app/details/page.tsx to use getCurrentEvent() and display AIW #2 event details

**Checkpoint**: At this point, User Story 1 should be fully functional - root page shows AIW #2 with all required content

---

## Phase 4: User Story 2 - Access Archived AIW #1 Website (Priority: P2)

**Goal**: Archive complete AIW #1 content at /events/1/ with all sections preserved and working internal links

**Independent Test**: Navigate to http://localhost:3000/events/1/ and verify AIW #1 content appears with October 24, 2025 date and all sections (topics, details, who's coming) work correctly

### Implementation for User Story 2

- [X] T019 [P] [US2] Create dynamic route directory at src/app/events/[eventId]/
- [X] T020 [US2] Create archived event page at src/app/events/[eventId]/page.tsx with generateStaticParams returning [{eventId:'1'}] and rendering event via getEventById(params.eventId)
- [X] T021 [US2] Create archived event layout at src/app/events/[eventId]/layout.tsx wrapping children in EventContextProvider with eventId from params
- [X] T022 [P] [US2] Create archived topics page at src/app/events/[eventId]/topics/page.tsx rendering topics for archived event
- [X] T023 [P] [US2] Create archived details page at src/app/events/[eventId]/details/page.tsx rendering details for archived event
- [X] T024 [P] [US2] Create archived whos-coming page at src/app/events/[eventId]/whos-coming/page.tsx rendering attendees for archived event
- [X] T025 [US2] Replace all Next.js <Link> components in archived pages with EventLink to ensure automatic path prefixing

**Checkpoint**: At this point, User Story 2 should work independently - /events/1/ shows complete AIW #1 archive

---

## Phase 5: User Story 3 - Navigate Between Current and Archived Events (Priority: P3)

**Goal**: Enable visitors to switch between AIW #2 (current) and AIW #1 (archived) via tab navigation

**Independent Test**: From root page, click archive navigation tab to go to /events/1/, then click current event tab to return to /

### Implementation for User Story 3

- [X] T026 [P] [US3] Create EventNavigation component at src/app/components/EventNavigation.tsx with tab pattern using role="tablist" and role="tab" ARIA attributes
- [X] T027 [P] [US3] Create EventIndicator component at src/app/components/EventIndicator.tsx to visually show which event user is viewing (banner variant for archived)
- [X] T028 [US3] Add EventNavigation component to src/app/layout.tsx so it appears on all current event pages
- [X] T029 [US3] Add EventNavigation component to src/app/events/[eventId]/layout.tsx so it appears on all archived event pages
- [X] T030 [US3] Add EventIndicator component to src/app/events/[eventId]/layout.tsx to show "Viewing archived content from AIW #1" banner
- [X] T031 [US3] Add event navigation styles to src/app/globals.css with minimum 44px touch targets, active tab styling, and responsive mobile layout

**Checkpoint**: All user stories should now be independently functional - navigation works between current and archived events

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories and final validation

- [X] T032 [P] Verify all internal links use EventLink component (scan src/app/ for any remaining Next.js Link imports)
- [X] T033 Run npm run build to generate static export and verify dist/events/1/ directory is created
- [X] T034 [P] Test homepage (/) shows AIW #2 with May 9, 2026 date
- [X] T035 [P] Test /events/1/ shows AIW #1 with October 24, 2025 date
- [X] T036 [P] Test topic source notice appears on AIW #2 topics page
- [X] T037 [P] Test who's coming empty state shows link to /events/1/whos-coming
- [X] T038 [P] Test event navigation tabs appear and highlight correctly
- [X] T039 Test all internal links on /events/1/ navigate to /events/1/* paths (click through topics, details, who's coming)
- [X] T040 [P] Test responsive design on mobile viewport (320px width) - verify navigation tabs stack or scroll
- [X] T041 [P] Test accessibility - keyboard Tab navigation through event tabs works
- [X] T042 Verify build output in dist/ includes all required pages for both events

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-5)**: All depend on Foundational phase completion
  - User stories can proceed in parallel if staffed
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Phase 6)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Independent of US1 (uses same eventData foundation)
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - Independent but enhances US1 and US2

### Within Each User Story

- **US1**: Update existing pages to use eventData → Create notice components → Integrate components
- **US2**: Create archived route structure → Create archived pages → Ensure EventLink usage
- **US3**: Create navigation components → Add to layouts → Style for accessibility

### Parallel Opportunities

- **Setup (Phase 1)**: All 4 tasks marked [P] can run in parallel
- **Foundational (Phase 2)**: T006, T007, T008 (data extraction) can run in parallel
- **US2**: T019-T024 (creating archived pages) can run in parallel after T020 creates structure
- **US3**: T026-T027 (component creation) can run in parallel
- **Polish (Phase 6)**: Most testing tasks (T034-T041) can run in parallel

---

## Parallel Example: User Story 2

```bash
# After T020 creates the dynamic route structure:
Task: T022 [P] [US2] Create archived topics page
Task: T023 [P] [US2] Create archived details page
Task: T024 [P] [US2] Create archived whos-coming page
# These can all run simultaneously since they create different files
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test AIW #2 at / shows correctly
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Complete Polish → Final validation → Production deployment

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1 (T012-T018)
   - Developer B: User Story 2 (T019-T025)
   - Developer C: User Story 3 (T026-T031)
3. Stories complete and integrate independently

---

## Manual Testing Checklist (Per Constitution)

After implementation, verify:

### Desktop Testing:
- [ ] Chrome/Edge: All pages load, navigation works
- [ ] Firefox: All pages load, navigation works
- [ ] Safari: All pages load, navigation works

### Mobile Testing:
- [ ] iOS Safari: Responsive layout, 44px+ touch targets
- [ ] Android Chrome: Responsive layout, navigation usable

### Content Verification:
- [ ] AIW #2 date shows "May 9, 2026" at /
- [ ] AIW #1 date shows "October 24, 2025" at /events/1/
- [ ] Topic source notice appears on AIW #2 topics page
- [ ] Who's coming links to /events/1/whos-coming
- [ ] All /events/1/ internal links navigate correctly
- [ ] Event navigation tabs highlight active event
- [ ] Keyboard Tab navigation works through event tabs

### Build Verification:
- [ ] npm run build completes without errors
- [ ] npm run lint passes (warnings acceptable with justification)
- [ ] dist/ directory contains events/1/ subdirectory
- [ ] All pages generate static HTML files

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Manual testing per constitution (no automated test framework)
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Focus on TypeScript type safety - no `any` types

---

## Task Summary

**Total Tasks**: 42
- **Setup**: 4 tasks
- **Foundational**: 7 tasks (BLOCKING)
- **User Story 1 (P1)**: 7 tasks
- **User Story 2 (P2)**: 7 tasks
- **User Story 3 (P3)**: 6 tasks
- **Polish & Validation**: 11 tasks

**Parallel Opportunities**: 17 tasks marked [P]

**Estimated Timeline**:
- Setup + Foundational: 3-4 hours
- User Story 1 (MVP): 3-4 hours
- User Story 2: 3-4 hours
- User Story 3: 2-3 hours
- Polish & Testing: 3-4 hours
- **Total**: ~14-19 hours

**MVP Scope** (User Story 1 only): ~6-8 hours
