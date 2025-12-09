# Feature Specification: Archive AIW #1 and Setup AIW #2

**Feature Branch**: `001-archive-aiw1-setup-aiw2`
**Created**: 2025-12-08
**Status**: Draft
**Input**: User description: "AIW #2 is happening. This is our second event, so we need to do the following :

I want a few changes to happen.

  I want to archiv the current website in a tab ( so if I go click a button, I can see the old website ), and create a new
  dates.

  It should be similar format, but in this case we don't know who's coming etc.

  so all the links should shift to /events/1/<link> <- current website goes here. / <- is current event.

  The new date is May 9.

  Keep the Details and Topics, but for the new event put a sign saying that this is sourced from AIW #1, and that new topics
  will likely be appearing in AIW #1.

  Who's coming will be empty, but point to the old AIW #1 stuff for past attendees."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - View Current AIW #2 Event Information (Priority: P1)

Visitors to the website need to see information about the upcoming AIW #2 event scheduled for May 9, including details, topics, and registration information. The website root (/) should display the current event.

**Why this priority**: This is the primary purpose of the website - to inform visitors about the current upcoming event. Without this, the website fails its core mission.

**Independent Test**: Visit the website root URL and verify that AIW #2 information is displayed with the correct date (May 9), details section, topics section, and a note indicating topics are sourced from AIW #1 pending new submissions.

**Acceptance Scenarios**:

1. **Given** a visitor navigates to the root URL (/), **When** the page loads, **Then** they see "Agentic Internet Workshop #2" (or similar) with the date May 9
2. **Given** a visitor views the root page, **When** they look at the Topics section, **Then** they see a notice stating "Topics shown below are sourced from AIW #1. New topic submissions for AIW #2 will be appearing as the event approaches"
3. **Given** a visitor views the root page, **When** they check the Details section, **Then** they see event logistics information similar to AIW #1 format but updated for AIW #2
4. **Given** a visitor views the root page, **When** they look for attendee information, **Then** the "Who's Coming" section is either empty or shows a placeholder with a link to view AIW #1 past attendees

---

### User Story 2 - Access Archived AIW #1 Website (Priority: P2)

Visitors who want to reference the previous AIW #1 event (October 24, 2025) should be able to access the complete archived version of that website, preserving all original content including attendees, topics, schedule, and sponsors.

**Why this priority**: Archiving past events maintains continuity, provides historical reference, and demonstrates the workshop's growth. Visitors may want to see who attended previously or review AIW #1 topics.

**Independent Test**: Navigate to /events/1/ and verify that the complete AIW #1 website content is displayed exactly as it appeared originally, including all sections (Who's Coming, Topics, Details, Sponsors, etc.).

**Acceptance Scenarios**:

1. **Given** a visitor navigates to /events/1/, **When** the page loads, **Then** they see the original AIW #1 content with the date October 24, 2025
2. **Given** a visitor views /events/1/, **When** they explore the page, **Then** all original sections are preserved (Who's Coming, Topics, Schedule, Sponsors, Details)
3. **Given** a visitor is viewing /events/1/, **When** they click internal links, **Then** those links navigate to paths under /events/1/ (e.g., /events/1/topics, /events/1/schedule)
4. **Given** the AIW #1 content is archived, **When** images or assets are referenced, **Then** they continue to load correctly from their archived locations

---

### User Story 3 - Navigate Between Current and Archived Events (Priority: P3)

Visitors should be able to easily discover and switch between viewing the current event (AIW #2) and the archived event (AIW #1) through clear navigation elements.

**Why this priority**: Enables users to compare events, reference past information, and understand the workshop's evolution. This enhances the educational mission by showing continuity.

**Independent Test**: From the root page, locate and activate the navigation element to view archived events, verify it takes you to /events/1/, then verify there's a way to return to the current event.

**Acceptance Scenarios**:

1. **Given** a visitor is on the root page (/), **When** they look for event navigation, **Then** they see a clear way to access "Past Events" or "AIW #1 Archive" (e.g., tab, button, link)
2. **Given** a visitor clicks the archive navigation element, **When** the navigation completes, **Then** they are taken to /events/1/
3. **Given** a visitor is viewing /events/1/, **When** they look for navigation, **Then** they see a clear way to return to the current event (/)
4. **Given** navigation exists between events, **When** visitors use it, **Then** the interface clearly indicates which event they are currently viewing

---

### Edge Cases

- What happens when a visitor directly accesses a URL like /topics or /schedule without the /events/1/ prefix? (Should these redirect to current event equivalents at / or show current event content?)
- What happens if /events/1/ links are accidentally broken during the migration? (Need verification that all internal links are updated correctly)
- What happens when AIW #3 happens in the future? (This pattern should be extensible: current at /, AIW #2 at /events/2/, AIW #1 at /events/1/)
- How do external links to the old AIW #1 website (if any exist) get handled? (May need redirects or canonical URLs)
- What happens if someone tries to access /events/2/ before AIW #2 is archived? (Should show 404 or redirect to current event)

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The website root (/) MUST display AIW #2 event information as the current, active event
- **FR-002**: AIW #2 event date MUST be displayed as May 9, 2026
- **FR-003**: AIW #2 MUST include a Details section with event logistics in the same format as AIW #1
- **FR-004**: AIW #2 MUST include a Topics section with a visible notice stating "Topics shown below are sourced from AIW #1. New topic submissions for AIW #2 will be appearing as the event approaches" (or similar wording)
- **FR-005**: AIW #2 Topics section MUST display the topics from AIW #1 as placeholder content
- **FR-006**: AIW #2 "Who's Coming" section MUST either be empty or show a placeholder message with a link to /events/1/ to view AIW #1 past attendees
- **FR-007**: The complete AIW #1 website content MUST be archived and accessible at /events/1/
- **FR-008**: All internal links within the archived AIW #1 content MUST be updated to use the /events/1/ path prefix
- **FR-009**: External links within archived content MUST remain unchanged and continue to work
- **FR-010**: The website MUST provide a navigation mechanism allowing users to switch between current event (/) and archived event (/events/1/)
- **FR-011**: Images, stylesheets, and other assets referenced by archived content MUST continue to load correctly from appropriate paths
- **FR-012**: The website MUST clearly indicate to visitors which event they are currently viewing (AIW #1 vs AIW #2)

### Assumptions

- **A-001**: AIW #2 year is 2026 (next occurrence of May 9 after AIW #1 on October 24, 2025)
- **A-002**: The event format and structure remain consistent between AIW #1 and AIW #2 (same sections, similar layout)
- **A-003**: No registration system changes are needed - existing registration mechanism (if any) can be reused for AIW #2
- **A-004**: Sponsor and schedule information for AIW #2 will be added later through separate updates
- **A-005**: The archive navigation will be implemented as a tab or button (user mentioned "tab"), not a full navigation menu restructure
- **A-006**: Only one level of archiving is needed initially (/events/1/), but structure should accommodate future events (/events/2/, /events/3/, etc.)

### Key Entities

- **Event**: Represents a workshop instance (AIW #1, AIW #2), with attributes including event number, date, topics, attendees, details, and status (current vs archived)
- **Topic**: Discussion topics for the workshop, submitted by community members, can be reused or referenced across events
- **Attendee**: People who are registered or confirmed for a specific event
- **Archive Navigation**: UI element (tab/button) that allows switching between current and past events

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Visitors can find AIW #2 event information (date: May 9) within 5 seconds of landing on the root page
- **SC-002**: 100% of internal links in the archived AIW #1 content correctly navigate to /events/1/ paths
- **SC-003**: Visitors can access the complete AIW #1 archived website from the root page within 2 clicks
- **SC-004**: The website structure supports adding AIW #3 and future events without requiring architectural changes
- **SC-005**: 95% of existing AIW #1 visitors can understand which event they are viewing (current vs archived) within 3 seconds
- **SC-006**: All images and assets load successfully on both the current (/) and archived (/events/1/) pages
- **SC-007**: The Topics section on AIW #2 clearly indicates content is preliminary and sourced from AIW #1, preventing visitor confusion
