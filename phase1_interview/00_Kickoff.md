# Kickoff - KBFA Homepage

> Interview date: 2026-04-02
> Interview type: Founder-led requirement discovery
> Participants: Project owner, Codex facilitator
> Status: Confirmed

---

## Problem Definition

**Problem to solve**

The Korea Bhutan Friendship Association needs an official website that introduces the association clearly, proves activity credibility, supports partnership inquiries, and opens a structured sponsorship path. `[project owner]`

**Current AS-IS**

- There is no official public website serving as a single source of trust and information. `[project owner]`
- Association activities and portfolio exist in PPT form, but are not structured as a maintainable web presence. `[한국부탄우호협회 소개 (1).pptx]`
- Sponsorship, announcements, and inquiries do not yet have a dedicated digital workflow. `[project owner]`

**Target TO-BE**

- Launch a bilingual official website with Korean primary and English parallel pages. `[project owner]`
- Present association overview, history, major activities, partners, news, contact, and sponsorship. `[project owner]`
- Operate activity, notice, and popup content through owner-manageable Markdown templates. `[project owner]`

---

## Scope

### In Scope

| No. | Item | Priority | Source |
|-----|------|----------|--------|
| 1 | Official homepage with About, Activities, Partners, News, Contact | Must | `[project owner]` |
| 2 | History included under About | Must | `[project owner]` |
| 3 | Bilingual structure: Korean main, English parallel | Must | `[project owner]` |
| 4 | Project sponsorship pages | Must | `[project owner]` |
| 5 | One-time sponsorship page | Must | `[project owner]` |
| 6 | Inquiry form with email delivery | Must | `[project owner]` |
| 7 | Popup support for events, campaigns, and important notices | Should | `[project owner]` |
| 8 | Markdown-based owner content operation | Must | `[project owner]` |

### Out of Scope for Initial Implementation

| No. | Item | Reason | Source |
|-----|------|--------|--------|
| 1 | Full CMS adoption in V1 | Owner prefers lightweight template-driven management first | `[project owner]` |
| 2 | Finalized bank-linked transfer automation | Requires later detailed design and likely operational complexity | `[project owner][추론]` |
| 3 | Detailed one-time sponsorship UX optimization | Explicitly deferred for later refinement | `[project owner]` |

### Next Phase Considerations

| No. | Item | Timing |
|-----|------|--------|
| 1 | Automatic sponsorship transfer reconciliation | Later design/implementation phase |
| 2 | Donation receipt operational admin flow | Later design/implementation phase |
| 3 | Richer content admin tooling or CMS migration | Post-V1 if content volume grows |

---

## Constraints

| Category | Detail | Source |
|----------|--------|--------|
| Technology direction | Lightweight, maintainable web stack preferred | `[project owner][추론]` |
| Operations | Owner will manage content directly through templates | `[project owner]` |
| Content source | PPT and provided images are initial factual asset base | `[한국부탄우호협회 소개 (1).pptx][project owner]` |
| Language | Korean and English both needed from V1 | `[project owner]` |
| Compliance | Donation receipt issuance will be supported operationally | `[project owner]` |

---

## Success Criteria

- [ ] Visitors understand who KBFA is and what it has done within the first visit. `[project owner]`
- [ ] Partners can quickly find inquiry/contact routes. `[project owner]`
- [ ] Supporters can choose between project sponsorship and one-time sponsorship without confusion. `[project owner]`
- [ ] Owner can update notices, activities, popups, and sponsorship projects without heavy CMS tooling. `[project owner]`

---

## Stakeholders

| Name | Role | Authority | Main Concern |
|------|------|-----------|--------------|
| KBFA owner | Decision maker | High | Accurate association representation and practical launch |
| Association leadership | Content approver | High | Trust, diplomacy, public messaging |
| Site visitors | External audience | Medium | Clarity, credibility, contact path |
| Potential sponsors and partners | External action users | Medium | Activity proof, sponsorship trust, collaboration route |

---

## Initial Glossary

| Term | Definition | Notes |
|------|------------|-------|
| KBFA | Korea Bhutan Friendship Association | Official English abbreviation |
| Project sponsorship | Sponsorship tied to a specific campaign or initiative | Has target, progress, and project detail page |
| One-time sponsorship | General support not tied to a specific project | Simpler sponsorship path |
| Popup | Site-wide notice block for events, campaigns, or important alerts | Content-managed |

---

## Open Questions

| OQ-ID | Question | Owner | Due | Status |
|-------|----------|-------|-----|--------|
| OQ-00-01 | What final contact email, phone number, and address will be published? | KBFA owner | TBD | Open |
| OQ-00-02 | Which project images from the PPT are approved for public web use? | KBFA owner | TBD | Open |
| OQ-00-03 | Which mail service will be used for inquiry and sponsorship email delivery? | KBFA owner | TBD | Open |
