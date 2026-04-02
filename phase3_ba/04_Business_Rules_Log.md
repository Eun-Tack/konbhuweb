# Business Rules Log - KBFA Homepage

> Date: 2026-04-03
> Status: Draft

## Content and Publishing

| Rule ID | IF | THEN | Source | Priority | Status | Related FR |
|---------|----|------|--------|----------|--------|------------|
| BR-CONTENT-01 | if a content item has `publish: false` | then it must not be visible on public pages | `[project owner][추론]` | Must | Draft | FR-ACT-01 |
| BR-CONTENT-02 | if a popup is disabled or outside its date range | then it must not display | `[project owner][추론]` | Must | Draft | FR-NEWS-01 |
| BR-CONTENT-03 | if Korean and English content are managed separately | then each language must be editable independently | `[project owner]` | Must | Draft | FR-ABOUT-01 |

## Sponsorship

| Rule ID | IF | THEN | Source | Priority | Status | Related FR |
|---------|----|------|--------|----------|--------|------------|
| BR-SPON-01 | if project sponsorship is chosen | then the user must enter the project sponsorship flow | `[project owner]` | Must | Draft | FR-SPON-01 |
| BR-SPON-02 | if one-time sponsorship is chosen | then the user must enter the one-time sponsorship flow | `[project owner]` | Must | Draft | FR-SPON-02 |
| BR-SPON-03 | if sponsorship form submission succeeds | then transfer guidance must be shown | `[project owner]` | Must | Draft | FR-SPON-01 |
| BR-SPON-04 | if confirmation is completed | then a thank-you email with transfer guidance recap must be sent | `[project owner]` | Must | Draft | FR-SPON-01 |
| BR-SPON-05 | if achieved amount exceeds target | then actual achieved amount must remain visible | `[project owner]` | Must | Draft | FR-SPON-01 |
| BR-SPON-06 | if transfer details do not match the submission | then the sponsorship remains pending until verified | `[project owner][추론]` | Must | Draft | FR-SPON-01 |

## Contact

| Rule ID | IF | THEN | Source | Priority | Status | Related FR |
|---------|----|------|--------|----------|--------|------------|
| BR-CONTACT-01 | if a visitor submits valid inquiry inputs | then the inquiry must be sent to the association inbox | `[project owner]` | Must | Draft | FR-CONTACT-01 |
| BR-CONTACT-02 | if required inquiry fields are invalid | then the form must block submission and show guidance | `[project owner][추론]` | Must | Draft | FR-CONTACT-01 |
