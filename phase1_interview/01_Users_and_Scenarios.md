# Users and Scenarios - KBFA Homepage

> Related kickoff: `00_Kickoff.md`
> Date: 2026-04-03
> Status: Draft

---

## Personas

### P-01: General Visitor

| Item | Detail | Source |
|------|--------|--------|
| Role | Public visitor interested in the association | `[추론]` |
| Goal | Understand who KBFA is and what it does | `[project owner]` |
| Technical comfort | Medium | `[추론]` |
| Usage frequency | Occasional | `[추론]` |
| Main pain point | No single trustworthy website currently exists | `[project owner]` |
| Device | Mobile and desktop | `[추론]` |

### P-02: Potential Partner

| Item | Detail | Source |
|------|--------|--------|
| Role | Institution, tourism organization, cultural group, or collaborator | `[project owner]` |
| Goal | Review KBFA credibility and find a partnership contact route | `[project owner]` |
| Technical comfort | Medium | `[추론]` |
| Usage frequency | Need-based | `[추론]` |
| Main pain point | Activity proof and organizational positioning are scattered across non-web materials | `[project owner][한국부탄우호협회 소개 (1).pptx]` |
| Device | Desktop-first, but mobile possible | `[추론]` |

### P-03: Sponsor or Supporter

| Item | Detail | Source |
|------|--------|--------|
| Role | Individual or organization willing to sponsor KBFA or a project | `[project owner]` |
| Goal | Choose a sponsorship type, understand usage, and complete the process confidently | `[project owner]` |
| Technical comfort | Medium | `[추론]` |
| Usage frequency | Occasional | `[추론]` |
| Main pain point | No current structured online sponsorship flow | `[project owner]` |
| Device | Mobile and desktop | `[추론]` |

---

## User Stories

### Group: Trust and Introduction

| Story ID | As a... | I want to... | So that... | Priority | Source | AC Ref |
|----------|---------|--------------|------------|----------|--------|--------|
| US-ABOUT-01 | General visitor | see a clear introduction to KBFA | I can quickly understand the association | Must | `[project owner]` | AC-FR-ABOUT-01-* |
| US-ABOUT-02 | General visitor | review the association history | I can trust that it has real activity and continuity | Must | `[project owner][한국부탄우호협회 소개 (1).pptx]` | AC-FR-ABOUT-02-* |

### Group: Activity and Proof

| Story ID | As a... | I want to... | So that... | Priority | Source | AC Ref |
|----------|---------|--------------|------------|----------|--------|--------|
| US-ACT-01 | Potential partner | browse major activities and timeline highlights | I can assess KBFA credibility | Must | `[project owner][한국부탄우호협회 소개 (1).pptx]` | AC-FR-ACT-01-* |
| US-NEWS-01 | Returning visitor | read current notices or updates | I can stay informed about campaigns and events | Should | `[project owner]` | AC-FR-NEWS-01-* |

### Group: Sponsorship

| Story ID | As a... | I want to... | So that... | Priority | Source | AC Ref |
|----------|---------|--------------|------------|----------|--------|--------|
| US-SPON-01 | Sponsor | browse project sponsorship campaigns | I can choose a meaningful sponsorship target | Must | `[project owner]` | AC-FR-SPON-01-* |
| US-SPON-02 | Sponsor | make a one-time sponsorship intent | I can support KBFA without selecting a project | Must | `[project owner]` | AC-FR-SPON-02-* |
| US-SPON-03 | Sponsor | enter my donor info and amount | KBFA can verify and follow up correctly | Must | `[project owner]` | AC-FR-SPON-03-* |

### Group: Inquiry

| Story ID | As a... | I want to... | So that... | Priority | Source | AC Ref |
|----------|---------|--------------|------------|----------|--------|--------|
| US-CONTACT-01 | Partner or visitor | send an inquiry through the site | I can reach KBFA directly | Must | `[project owner]` | AC-FR-CONTACT-01-* |

---

## AS-IS / TO-BE Summary

| Persona | AS-IS | TO-BE | Source |
|---------|-------|-------|--------|
| P-01 | No official structured web introduction | Bilingual institutional homepage with clear identity | `[project owner]` |
| P-02 | Must rely on PPT or indirect materials to judge credibility | Can review activities, partners, history, and contact on the site | `[project owner][한국부탄우호협회 소개 (1).pptx]` |
| P-03 | No digital sponsorship journey | Can choose project or one-time sponsorship and receive transfer guidance | `[project owner]` |

---

## Main Scenarios

### Scenario 1: Visitor understands KBFA

Start condition: visitor lands on homepage

1. Visitor reads hero and association summary
2. Visitor reviews history and featured activities
3. Visitor understands mission and credibility

End condition: visitor can identify what KBFA is and what it has done

### Scenario 2: Partner inquiry journey

Start condition: potential partner wants to evaluate cooperation

1. Partner reviews activity, timeline, and partners
2. Partner opens contact page
3. Partner submits inquiry form

End condition: KBFA receives inquiry details through email

### Scenario 3: Project sponsorship journey

Start condition: supporter is interested in a specific campaign

1. Supporter opens sponsorship area
2. Supporter selects a project
3. Supporter reads purpose, usage, and target amount
4. Supporter submits sponsorship intent
5. Supporter receives account guidance and follow-up email

End condition: sponsorship intent is recorded and transfer guidance delivered

---

## Edge Cases and Exceptions

| ID | Scenario | Expected Behavior | Source | Note |
|----|----------|-------------------|--------|------|
| EC-01 | Contact details are not finalized yet | Show reserved placeholders only after approval or keep unpublished until confirmed | `[project owner][추론]` | Needs owner confirmation |
| EC-02 | Sponsorship progress exceeds 100 percent | Continue displaying achieved amount and allow overfunding transparently | `[project owner]` | Intentional business rule |
| EC-03 | Project sponsorship closes before target is reached | Mark status as closed and preserve page visibility if required | `[추론]` | Needs later confirmation |

---

## Open Questions

| OQ-ID | Question | Owner | Due | Status |
|-------|----------|-------|-----|--------|
| OQ-01-01 | Should closed sponsorship projects remain publicly visible? | KBFA owner | TBD | Open |
| OQ-01-02 | Should sponsor confirmation emails be sent in both Korean and English depending on language path? | KBFA owner | TBD | Open |
