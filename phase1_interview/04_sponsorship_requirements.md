# Sponsorship Requirements

> Author: Codex
> Date: 2026-04-02

## Overview

The sponsorship area should support two tracks:

- project sponsorship
- one-time sponsorship

## Project Sponsorship List Page

Each project card should show:

- representative image
- project name
- fundraising period
- brief summary
- current progress or achieved amount
- link to project detail page

## Project Sponsorship Status

Each project can have one of the following states:

- upcoming
- active
- closed
- progress percentage display such as `00% complete`

Note:

- progress may exceed `100%`
- overfunding is acceptable and should still be represented transparently

## Project Sponsorship Detail Page

Each project detail page should show:

- project title
- representative image or gallery
- project purpose
- funding usage breakdown
- target amount
- achieved amount
- fundraising period
- sponsorship CTA button

## Sponsorship Application Flow

When a user clicks `Sponsor`:

1. Select donor type
   - individual
   - organization
2. Enter donor information
   - name
   - affiliation
   - email
   - contact information
3. Select receipt requirement
   - donation receipt needed or not needed
4. Enter sponsorship amount
5. Submit and show account transfer guidance
   - bank account information
   - transfer instructions
6. Click completion and return to the relevant sponsorship project page

## One-Time Sponsorship

One-time sponsorship should have a simpler flow:

- enter donor information
- include email for confirmation
- show account transfer guidance
- complete and return to the one-time sponsorship page

Detailed UX can be refined later.

## Popup Use Cases

- event notice
- sponsorship campaign
- important notice

## Inquiry Requirements

- dedicated inquiry form
- email delivery
- separate from sponsorship flow
- inquiry form should also collect email address

## Language Operation

- Korean main site
- English parallel pages
- each language managed separately

## Progress Tracking Requirement

Desired end state:

- sponsorship application name and actual transfer name are matched
- submitted amount and transfer amount are matched
- achieved amount is reflected on the project page
- progress bar and amount update automatically

## Implementation Reality Check

This requirement has two possible levels.

### Level 1. Manual verification with admin update

- user submits sponsorship intent form
- bank transfer is checked manually
- submitted name and amount are verified against transfer details
- confirmed amount is updated in content or admin data
- safest and fastest for initial launch

### Level 2. Automated transfer reconciliation

- requires bank transaction access or a reliable finance integration path
- requires matching logic for payer names, partial mismatches, and exception handling
- requires amount matching and mismatch handling
- requires auditability and privacy handling
- much more complex than a normal marketing website

## Recommendation

For V1:

- build the project-based sponsorship experience now
- build one-time sponsorship experience now
- collect sponsorship intent data now
- show account transfer guidance now
- update achieved amount through a controlled admin workflow first
- send confirmation email with thank-you message and transfer guidance recap

For V2:

- evaluate whether bank-linked reconciliation can be automated safely

## Open Questions

1. Should sponsorship projects remain visible after the period ends?
2. Should closed projects show final achieved amount?
3. Should one-time and recurring sponsorship be separated later?
4. Is donation receipt issuance actually available operationally?
5. Who verifies bank transfers and updates confirmed status?
6. What email sender domain or service will be used for inquiry and sponsorship confirmation emails?
