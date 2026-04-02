# Feature Specification - KBFA Homepage

> Date: 2026-04-03
> Status: Draft

---

## FR-ABOUT-01: Association Introduction

> Priority: Must
> Related user stories: `US-ABOUT-01`
> Source: `[project owner]`

### Summary

The site must present KBFA clearly as an official association with a concise mission, bilingual identity, and trust-oriented structure. `[project owner]`

### Business Value

Without a strong introduction layer, the site cannot serve its core goals of association introduction, credibility building, and partnership outreach. `[project owner]`

### AS-IS vs TO-BE

| Type | Detail | Source |
|------|--------|--------|
| AS-IS | No official homepage exists as the public trust surface | `[project owner]` |
| TO-BE | A homepage and About section explain who KBFA is, what it stands for, and how it relates Korea and Bhutan | `[project owner]` |

### Inputs

| Field | Type | Required | Validation | Error Message | Source |
|------|------|----------|------------|---------------|--------|
| language | string | Y | must be supported locale | "This language is not available." | `[추론]` |

### Outputs

| Item | Type | Condition | Source |
|------|------|-----------|--------|
| association name | content | page load | `[project owner]` |
| mission statement | content | page load | `[project owner]` |
| overview body | content | page load | `[project owner]` |

### Happy Path

1. User lands on homepage or About page
2. User sees official KBFA naming and summary
3. User understands the organization mission quickly

### Failure Scenarios

| Condition | System Behavior | User Message | Source |
|-----------|-----------------|--------------|--------|
| requested language content missing | fallback handling required | "Content is temporarily unavailable in this language." | `[추론]` |

### Edge Cases

| Case | Expected Behavior | Checked | Source |
|------|-------------------|---------|--------|
| English page exists but some section copy is delayed | show only approved content and avoid mixed placeholder clutter | [ ] | `[추론]` |
| User enters through a deep English link | maintain English page context consistently | [ ] | `[추론]` |

### Business Rules

| Rule ID | IF | THEN | Source | Priority |
|---------|----|------|--------|----------|
| BR-ABOUT-01 | if the visitor opens a supported language route | then the site shows the corresponding language introduction content | `[project owner][추론]` | Must |
| BR-ABOUT-02 | if English content is not approved for a section | then that section must not publish unverified copy | `[project owner][추론]` | Must |

### Permissions

| Role | Access | Allowed Action | Source |
|------|--------|----------------|--------|
| public visitor | allow | read | `[추론]` |
| owner editor | allow | update content files | `[project owner]` |

---

## FR-ACT-01: Activities and Timeline

> Priority: Must
> Related user stories: `US-ACT-01`
> Source: `[project owner][한국부탄우호협회 소개 (1).pptx]`

### Summary

The site must show major activities and timeline highlights so visitors can verify KBFA's history and achievements. `[project owner][한국부탄우호협회 소개 (1).pptx]`

### Business Value

Activity proof is central to public trust, partner evaluation, and narrative differentiation. `[project owner]`

### AS-IS vs TO-BE

| Type | Detail | Source |
|------|--------|--------|
| AS-IS | Activity history is mostly trapped inside presentation materials | `[한국부탄우호협회 소개 (1).pptx]` |
| TO-BE | Visitors can browse featured activities and archive items on the website | `[project owner]` |

### Inputs

| Field | Type | Required | Validation | Error Message | Source |
|------|------|----------|------------|---------------|--------|
| activity content file | structured content | Y | publish flag and required metadata present | "This activity is not ready to publish." | `[project owner][추론]` |

### Outputs

| Item | Type | Condition | Source |
|------|------|-----------|--------|
| featured activity cards | content list | homepage or activities page load | `[project owner]` |
| activity detail content | content page | detail page open | `[project owner]` |

### Happy Path

1. User opens Activities page
2. User sees featured and archived items
3. User opens detail page and reviews purpose, date, and summary

### Failure Scenarios

| Condition | System Behavior | User Message | Source |
|-----------|-----------------|--------------|--------|
| activity file is unpublished | hide item from public list | none | `[project owner][추론]` |

### Edge Cases

| Case | Expected Behavior | Checked | Source |
|------|-------------------|---------|--------|
| an item has image but limited detail text | allow listing while keeping detail page concise | [ ] | `[추론]` |
| multiple activities share the same year | preserve clear sorting and slug uniqueness | [ ] | `[추론]` |

### Business Rules

| Rule ID | IF | THEN | Source | Priority |
|---------|----|------|--------|----------|
| BR-ACT-01 | if an activity has `publish: false` | then it must not appear on public pages | `[project owner][추론]` | Must |
| BR-ACT-02 | if an activity is marked as featured | then it can appear in homepage highlights | `[project owner]` | Must |

---

## FR-SPON-01: Project Sponsorship

> Priority: Must
> Related user stories: `US-SPON-01`, `US-SPON-03`
> Source: `[project owner]`

### Summary

The site must support project-based sponsorship listings and detail pages with purpose, fund usage, amount information, and a sponsorship action. `[project owner]`

### Business Value

Project sponsorship enables transparent campaign storytelling and a more compelling support journey than a generic donation page. `[project owner]`

### AS-IS vs TO-BE

| Type | Detail | Source |
|------|--------|--------|
| AS-IS | No project-based sponsorship experience exists | `[project owner]` |
| TO-BE | Sponsors can review campaign cards, open project detail pages, and submit sponsorship intent | `[project owner]` |

### Inputs

| Field | Type | Required | Validation | Error Message | Source |
|------|------|----------|------------|---------------|--------|
| donor type | string | Y | must be individual or organization | "Please choose a sponsor type." | `[project owner][추론]` |
| donor name | string | Y | cannot be empty | "Please enter your name." | `[project owner][추론]` |
| affiliation | string | N | free text | none | `[project owner]` |
| email | string | Y | valid email format | "Please enter a valid email address." | `[project owner][추론]` |
| phone | string | Y | valid contact format | "Please enter a contact number." | `[project owner][추론]` |
| amount | number | Y | must be greater than zero | "Please enter a valid sponsorship amount." | `[project owner][추론]` |
| receipt requested | boolean | Y | yes or no must be selected | "Please choose whether you need a donation receipt." | `[project owner][추론]` |

### Outputs

| Item | Type | Condition | Source |
|------|------|-----------|--------|
| sponsorship project list | content list | sponsorship page load | `[project owner]` |
| sponsorship project detail | content page | project detail open | `[project owner]` |
| transfer guidance | confirmation screen and email | after sponsor form submit | `[project owner]` |

### Happy Path

1. Supporter opens sponsorship projects
2. Supporter selects a project
3. Supporter reads project purpose and funding usage
4. Supporter submits donor form
5. System shows account number and transfer instructions
6. Supporter completes and returns to the project page

### Failure Scenarios

| Condition | System Behavior | User Message | Source |
|-----------|-----------------|--------------|--------|
| invalid or missing required form field | block submit | field-level validation message | `[project owner][추론]` |
| project is closed | prevent new sponsorship intent if policy requires | "This project is no longer accepting sponsorship." | `[추론]` |

### Edge Cases

| Case | Expected Behavior | Checked | Source |
|------|-------------------|---------|--------|
| achieved amount exceeds target | continue showing actual achieved amount and over-100 percent progress | [ ] | `[project owner]` |
| payer name differs from submitted name | keep submission pending for manual verification | [ ] | `[project owner][추론]` |

### Business Rules

| Rule ID | IF | THEN | Source | Priority |
|---------|----|------|--------|----------|
| BR-SPON-01 | if a project is marked active | then it can accept sponsorship submissions | `[project owner][추론]` | Must |
| BR-SPON-02 | if achieved amount exceeds target amount | then the site still shows current achieved amount transparently | `[project owner]` | Must |
| BR-SPON-03 | if donor submits sponsorship intent | then the system must show transfer guidance and send a recap email | `[project owner]` | Must |

---

## FR-SPON-02: One-Time Sponsorship

> Priority: Must
> Related user stories: `US-SPON-02`
> Source: `[project owner]`

### Summary

The site must support a one-time sponsorship path separate from project campaigns. `[project owner]`

### Business Value

This provides a lower-friction support option for people who want to help KBFA generally. `[project owner]`

### Business Rules

| Rule ID | IF | THEN | Source | Priority |
|---------|----|------|--------|----------|
| BR-SPON-04 | if the user selects one-time sponsorship | then the system presents the one-time sponsorship path instead of a project detail flow | `[project owner]` | Must |

---

## FR-CONTACT-01: Inquiry Form

> Priority: Must
> Related user stories: `US-CONTACT-01`
> Source: `[project owner]`

### Summary

The site must provide a contact page with inquiry form, contact details, and directions information. `[project owner]`

### Business Value

Partnership and contact flow is one of the top site priorities. `[project owner]`

### Business Rules

| Rule ID | IF | THEN | Source | Priority |
|---------|----|------|--------|----------|
| BR-CONTACT-01 | if a user submits the inquiry form with valid inputs | then the inquiry must be delivered to the association email destination | `[project owner]` | Must |
| BR-CONTACT-02 | if public contact details are not finalized | then the page must not publish placeholder values as if they were confirmed | `[project owner][추론]` | Must |
