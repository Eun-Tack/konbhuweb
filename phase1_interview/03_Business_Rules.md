# Business Rules - KBFA Homepage

> Date: 2026-04-03
> This document centralizes requirement-level rules extracted from the interviews.

---

## Publishing and Content Rules

| Rule ID | IF | THEN | Source | Priority |
|---------|----|------|--------|----------|
| BR-CONTENT-01 | if a content item has `publish: false` | then it must not be visible on public pages | `[project owner][추론]` | Must |
| BR-CONTENT-02 | if a popup is outside its active date range or disabled | then it must not display to visitors | `[project owner][추론]` | Must |
| BR-CONTENT-03 | if Korean and English versions are managed separately | then each language must be editable independently | `[project owner]` | Must |

## Sponsorship Rules

| Rule ID | IF | THEN | Source | Priority |
|---------|----|------|--------|----------|
| BR-SPON-01 | if the user chooses project sponsorship | then the site must route the user through a project-specific sponsorship journey | `[project owner]` | Must |
| BR-SPON-02 | if the user chooses one-time sponsorship | then the site must route the user through the one-time sponsorship path | `[project owner]` | Must |
| BR-SPON-03 | if a sponsorship form is submitted | then donor name, donor type, email, contact, amount, and receipt request must be captured | `[project owner]` | Must |
| BR-SPON-04 | if the sponsorship intent is submitted successfully | then the site must show bank account and transfer instructions | `[project owner]` | Must |
| BR-SPON-05 | if sponsorship confirmation is completed | then the sponsor must receive a thank-you email with transfer guidance recap | `[project owner]` | Must |
| BR-SPON-06 | if project achieved amount exceeds 100 percent of target | then the site must continue to show actual progress transparently | `[project owner]` | Must |
| BR-SPON-07 | if transferred payer name or amount does not match the submission | then the sponsorship must remain pending until verified | `[project owner][추론]` | Must |

## Inquiry Rules

| Rule ID | IF | THEN | Source | Priority |
|---------|----|------|--------|----------|
| BR-CONTACT-01 | if a visitor submits the contact form with valid inputs | then the inquiry must be sent to the association email inbox | `[project owner]` | Must |
| BR-CONTACT-02 | if required inquiry fields are missing or invalid | then the site must block submission and show field-level guidance | `[project owner][추론]` | Must |

## Visibility and Status Rules

| Rule ID | IF | THEN | Source | Priority |
|---------|----|------|--------|----------|
| BR-STATUS-01 | if a sponsorship project is active | then it may accept new sponsorship submissions | `[project owner][추론]` | Must |
| BR-STATUS-02 | if a sponsorship project is upcoming | then it must display as upcoming instead of active | `[project owner]` | Must |
| BR-STATUS-03 | if a sponsorship project is closed | then the site must follow the closed-state policy defined by the owner | `[project owner][추론]` | Should |

## Open Questions

| OQ-ID | Question | Owner | Due | Status |
|-------|----------|-------|-----|--------|
| OQ-BR-01 | Should closed sponsorship projects still show the sponsor action button in a disabled state or hide it completely? | KBFA owner | TBD | Open |
