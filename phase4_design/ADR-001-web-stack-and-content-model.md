# ADR-001: Web Stack and Content Model

> Status: Accepted
> Date: 2026-04-03
> Deciders: KBFA owner, Codex

## Context

KBFA V1 is a bilingual institutional website with content-heavy pages, project sponsorship, one-time sponsorship, inquiry handling, and popup-capable notices.

The project needs:

- a fast launch path
- low operational burden
- owner-manageable content
- future extension room for email integration and richer sponsorship workflows

## Options Considered

### Option A: Vite + React static-style site with local content files

Pros:

- lightweight
- fast to start
- easy content-driven UI
- future API integration possible

Cons:

- no built-in CMS
- email and backend integrations need separate service work

### Option B: Full CMS-first stack

Pros:

- non-developer admin immediately available

Cons:

- heavier launch complexity
- more setup and operating cost
- unnecessary for V1 owner-managed workflow

## Decision

Use `Vite + React + TypeScript` with structured local content files and assets for V1.

## Consequences

Positive:

- implementation can start immediately
- Markdown/JSON-driven operations remain simple
- the site can be deployed as a static-friendly frontend

Tradeoffs:

- inquiry and sponsorship email need later service hookup
- automated bank verification is explicitly deferred

## Implementation Notes

- Frontend app lives in `site/`
- Public content files live in `site/content/`
- Public assets live in `site/public/uploads/`
