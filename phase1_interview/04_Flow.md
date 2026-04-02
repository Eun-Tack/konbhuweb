# User Flows - KBFA Homepage

> Date: 2026-04-03

---

## Flow: Project Sponsorship

> Related feature: `FR-SPON-01`
> Persona: `P-03`

```mermaid
flowchart TD
    A[Open Sponsorship Page] --> B[Browse Project Cards]
    B --> C[Open Project Detail]
    C --> D[Review Purpose, Usage, Amount]
    D --> E[Click Sponsor]
    E --> F[Enter Donor Information]
    F --> G{Valid Input?}
    G -->|No| H[Show Validation Errors]
    H --> F
    G -->|Yes| I[Show Transfer Guidance]
    I --> J[Send Confirmation Email]
    J --> K[Return to Project Sponsorship Page]
```

| Step | Screen | User Action | System Response | Next | Source |
|------|--------|-------------|-----------------|------|--------|
| 1 | Sponsorship list | browse project cards | render projects | 2 | `[project owner]` |
| 2 | Project detail | open a project | show project information | 3 | `[project owner]` |
| 3 | Sponsor form | enter donor information | validate fields | 4 or retry | `[project owner]` |
| 4 | Confirmation | review transfer guidance | show account details and send recap email | end | `[project owner]` |

---

## Flow: One-Time Sponsorship

> Related feature: `FR-SPON-02`
> Persona: `P-03`

```mermaid
flowchart TD
    A[Open One-Time Sponsorship Page] --> B[Read Support Guidance]
    B --> C[Enter Sponsor Information]
    C --> D{Valid Input?}
    D -->|No| E[Show Validation Errors]
    E --> C
    D -->|Yes| F[Show Transfer Guidance]
    F --> G[Send Thank-You Email]
    G --> H[Return to One-Time Sponsorship Page]
```

---

## Flow: Inquiry Submission

> Related feature: `FR-CONTACT-01`
> Persona: `P-02`

```mermaid
flowchart TD
    A[Open Contact Page] --> B[Review Contact Details]
    B --> C[Fill Inquiry Form]
    C --> D{Valid Input?}
    D -->|No| E[Show Validation Errors]
    E --> C
    D -->|Yes| F[Send Inquiry Email]
    F --> G[Show Submission Complete Message]
```

## Open Questions

| OQ-ID | Question | Owner | Due | Status |
|-------|----------|-------|-----|--------|
| OQ-FLOW-01 | Should inquiry submission also trigger an auto-reply email to the submitter in V1? | KBFA owner | TBD | Open |
