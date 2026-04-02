# Interview Summary - KBFA Homepage

> Document ID: `SUM-KBFA-WEB-001`
> Interview completion date: 2026-04-03
> Prepared by: Interviewer reference alignment
> Status: Draft

---

## Key Changes and Confirmations

1. **Website priority order confirmed**: association introduction -> activity and achievement promotion -> partnership inquiry -> sponsorship expansion. `[project owner]`
2. **Core structure confirmed**: About with history included, Major Activities, Partners, News, Contact, and Sponsorship. `[project owner]`
3. **Operational preference confirmed**: Markdown-based content management, bilingual operation, popup support, and project/one-time sponsorship split. `[project owner]`

---

## Produced Documents

| Document | Path | BA Target | Status |
|----------|------|-----------|--------|
| Kickoff | `00_Kickoff.md` | Vision and Scope | Complete |
| Users and Scenarios | `01_Users_and_Scenarios.md` | User Personas | Complete |
| Feature Specification | `02_Feature.md` | PRD Features | Complete |
| Business Rules | `03_Business_Rules.md` | Business Rules Log | Complete |
| User Flows | `04_Flow.md` | User Flow | Complete |
| Screen Spec | `04_Screen_Spec.md` | Screen Spec | Complete |
| Gap Analysis | `05_Gap_Analysis.md` | Open Questions and Risks | Complete |

---

## Quantitative Summary

| Item | Count |
|------|-------|
| Stakeholder groups | 4 |
| Personas | 3 |
| Must-level feature groups | 5 |
| Business rules | 12 |
| Main user flows | 3 |
| Open questions | 8 |
| Critical gap items | 2 |

---

## BA Readiness Score

**Total: 83 / 100**

| Item | Max | Score | Note |
|------|-----|-------|------|
| Source tagging present | 10 | 8 | Present, but some items still rely on `[추론]` |
| Failure scenarios present | 15 | 12 | Core features covered, some minor flows simplified |
| BR in IF-THEN form with source | 15 | 15 | Completed |
| Edge cases present | 15 | 12 | Major features covered |
| Permissions defined | 10 | 6 | Only partially defined at this stage |
| Open questions have owner and due | 10 | 7 | Owners defined, due dates still TBD |
| Mermaid flows present | 10 | 10 | Completed |
| Gap analysis completed | 15 | 13 | Completed with action framing |
| **Total** | **100** | **83** | BA handoff possible with noted gaps |

## Decision

- Score is above 80, so BA handoff is possible
- However, the following should be resolved before public release or full implementation lock:
  - final contact details
  - email sending provider
  - final image approval set
  - sponsorship closed-state behavior

---

## Open Questions

| ID | Question | Owner | Due | Status |
|----|----------|-------|-----|--------|
| OQ-00-01 | What final contact email, phone number, and address will be published? | KBFA owner | TBD | Open |
| OQ-00-02 | Which project images from the PPT are approved for public web use? | KBFA owner | TBD | Open |
| OQ-00-03 | Which mail service will be used for inquiry and sponsorship email delivery? | KBFA owner | TBD | Open |
| OQ-01-01 | Should closed sponsorship projects remain publicly visible? | KBFA owner | TBD | Open |
| OQ-01-02 | Should sponsor confirmation emails be localized per language path? | KBFA owner | TBD | Open |
| OQ-BR-01 | How should closed sponsorship project CTA visibility behave? | KBFA owner | TBD | Open |
| OQ-FLOW-01 | Should inquiry submission also trigger an auto-reply email to the submitter in V1? | KBFA owner | TBD | Open |
| OQ-SCR-01 | Should the sponsorship form be inline or multi-step modal or panel? | KBFA owner | TBD | Open |

---

## Next Step

- Proceed to stronger Phase 2 and Phase 3 standardization
- Carry critical gaps forward as tracked decisions, not silent assumptions
