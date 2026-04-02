# CLAUDE.md - KBFA Homepage Project Entry

> Project entry for the Korea Bhutan Friendship Association homepage.
> This project follows AI_SDLC_Standard and is currently in Phase 3 BA with Phase 4 design preparation in progress.

---

## Project Basics

| Item | Value |
|------|---|
| Project Name | Korea Bhutan Friendship Association Homepage |
| Project Code | KBFA-WEB-001 |
| Start Date | 2026-04-02 |
| Target Release | TBD |
| Current Phase | Phase 3: BA Documentation / Phase 4 Preparation |

---

## Agent References

Use the following AI_SDLC agent entrypoints as the project advances:

| Phase | Agent | Path |
|------|------|------|
| Phase 0 | Researcher | `AI_SDLC/framework/agents/researcher/current.md` |
| Phase 1 | Interviewer | `AI_SDLC/framework/agents/interviewer/current.md` |
| Phase 2 | Strategist | `AI_SDLC/framework/agents/strategist/current.md` |
| Phase 3 | BA Writer | `AI_SDLC/framework/agents/ba-writer/current.md` |
| Phase 4 | Designer | `AI_SDLC/framework/agents/designer/current.md` |
| Phase 5 | Coder | `AI_SDLC/framework/agents/coder/current.md` |
| Phase 6 | Reviewer | `AI_SDLC/framework/agents/reviewer/current.md` |
| Phase 7 | Analyst | `AI_SDLC/framework/agents/analyst/current.md` |

---

## Project Context

### Stakeholders

- Korea Bhutan Friendship Association: site owner, content validation, approval authority
- Association chair and core staff: mission accuracy, trust, diplomacy, partnership messaging
- Prospective members and partners: need clear understanding of mission, activities, and contact path
- Event collaborators and public institutions: need evidence of past programs, MOU activity, and credibility

### Initial Scope

- Build an official association homepage for Korea Bhutan Friendship Association
- Present the association mission, history, key activities, portfolio, and contact information
- Reuse the provided visual references where appropriate, but prefer accuracy and maintainability over direct reuse

### Known Inputs

- Logo: `resource/로고.png`
- Figma Make sample bundle: `resource/bhutan friendly/`
- Association introduction deck: `resource/한국부탄우호협회 소개 (1).pptx`

### Working Assumptions

- First release is a content-led public website, not a member portal
- Korean is the primary language for launch, with future English expansion likely
- The supplied PPT is the strongest current source of organizational proof points
- The Figma sample is a structural and mood reference, not a production-ready codebase

### Guardrails

- Do not invent association history, statistics, or partner claims without source confirmation
- Keep the site trustworthy, institutional, and culturally respectful
- Preserve traceability from provided resource to any homepage content draft
- Treat dates, events, and MOU claims as content that needs owner confirmation before launch

---

## Non-Functional Priorities

- Reliability: static-first architecture preferred for simple deployment and easy updates
- Maintainability: content sections should map cleanly to source documents and future CMS migration
- Accessibility: semantic headings, contrast-safe brand use, keyboard-safe navigation
- Performance: image optimization and lean dependencies from the start
- Localization readiness: structure content so Korean-first launch can expand to English later

---

## Testing Direction

- Required baseline: responsive QA, content proofreading, basic accessibility checks, production build verification
- Launch gate: homepage sections render correctly on desktop and mobile, key links work, major content approved

---

## Current Phase Deliverables

Phase 0 to Phase 3 foundation is currently captured as follows:

- `00_resource_audit.md`
- `01_research_summary.md`
- `02_site_architecture.md`
- `03_brand_direction.md`
- `04_execution_plan.md`
- `05_benchmarking_summary.md`

Phase 1 interview artifacts are in `phase1_interview/`.
Phase 2 strategy artifacts are in `phase2_strategy/`.
Phase 3 BA artifacts are in `phase3_ba/`.

---

## Change Log

| Date | Phase | Change |
|------|------|------|
| 2026-04-02 | Phase 0 | Project workspace initialized from AI_SDLC template and base research captured |
| 2026-04-02 | Phase 3 | Interview, strategy, and BA foundation documented; local git repository initialized |
