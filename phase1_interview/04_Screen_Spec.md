# Screen Specification - KBFA Homepage

> Date: 2026-04-03

---

## Screen: Homepage

> Related features: `FR-ABOUT-01`, `FR-ACT-01`
> Persona: `P-01`, `P-02`, `P-03`
> Path: `/` or `/en`

### Screen Purpose

Introduce KBFA clearly, establish trust, preview activities, and direct users to inquiry or sponsorship actions. `[project owner]`

### Main Components

| Component | Behavior | Note |
|-----------|----------|------|
| hero | show official identity and core message | bilingual |
| introduction block | summarize association | trust-first |
| history snapshot | show continuity | supports credibility |
| featured activities | show proof of real programs | content-driven |
| partner highlight | preview network | content-driven |
| sponsorship CTA | route to sponsorship area | action layer |
| latest news | preview recent updates | operational freshness |

---

## Screen: Sponsorship Project Detail

> Related feature: `FR-SPON-01`
> Persona: `P-03`
> Path: `/sponsorship/projects/[slug]`

### Screen Purpose

Help a sponsor understand why the project matters, how funds will be used, and how to proceed confidently. `[project owner]`

### Data Fields

| Field | Type | Required | Validation | Error Message | Source |
|------|------|----------|------------|---------------|--------|
| donor type | select | Y | one option required | "Please choose a sponsor type." | `[project owner][추론]` |
| name | text | Y | non-empty | "Please enter your name." | `[project owner][추론]` |
| affiliation | text | N | none | none | `[project owner]` |
| email | email | Y | valid format | "Please enter a valid email address." | `[project owner][추론]` |
| phone | text | Y | valid contact text | "Please enter a contact number." | `[project owner][추론]` |
| receipt requested | radio/select | Y | choice required | "Please choose your receipt option." | `[project owner][추론]` |
| amount | number | Y | positive number | "Please enter a valid sponsorship amount." | `[project owner][추론]` |

### Actions

| Button | Action | Condition | Result | Source |
|--------|--------|-----------|--------|--------|
| Sponsor | submit form | all required fields valid | show transfer guidance | `[project owner]` |
| Complete | finish flow | transfer guidance displayed | return to project page | `[project owner]` |

### State Variants

| State | Display | Note |
|-------|---------|------|
| loading | show loading placeholder | content fetch |
| empty | show unavailable message | unpublished or missing project |
| active | show content and sponsor CTA | default |
| closed | show closed status treatment | owner policy needed |

---

## Screen: Contact Page

> Related feature: `FR-CONTACT-01`
> Persona: `P-02`
> Path: `/contact`

### Screen Purpose

Provide official contact details and a direct inquiry route. `[project owner]`

### Main Components

| Component | Behavior | Note |
|-----------|----------|------|
| contact details | show email, phone, address, directions | only approved values |
| inquiry form | capture inquiry details | email delivery target needed |

## Open Questions

| OQ-ID | Question | Owner | Due | Status |
|-------|----------|-------|-----|--------|
| OQ-SCR-01 | Should the sponsorship form live inline on the project detail page or inside a modal or next-step panel? | KBFA owner | TBD | Open |
