# PRD Features - KBFA Homepage

> Date: 2026-04-03
> Status: Draft

## FR-ABOUT-01: Association Introduction

### Summary

The site must provide a clear bilingual KBFA introduction with mission, overview, and institutional identity.

### Acceptance Criteria

```gherkin
Scenario: Visitor opens the Korean homepage
  Given the Korean homepage is published
  When the visitor opens the homepage
  Then the visitor sees KBFA identity, mission, and overview content
```

```gherkin
Scenario: Visitor opens the English homepage
  Given the English homepage is published
  When the visitor opens the English route
  Then the visitor sees the English version of approved introduction content
```

```gherkin
Scenario: English section content is not approved
  Given a section has no approved English content
  When the visitor opens that English section
  Then the site does not show unapproved placeholder copy as final content
```

## FR-ACT-01: Activities and Timeline

### Summary

The site must provide a structured activity layer with featured highlights and deeper detail pages.

### Acceptance Criteria

```gherkin
Scenario: Visitor views activity highlights
  Given published featured activities exist
  When the visitor opens the homepage or activities page
  Then featured activity cards are displayed
```

```gherkin
Scenario: Visitor opens an activity detail page
  Given a published activity detail exists
  When the visitor opens the detail route
  Then the site shows its summary, date, and supporting content
```

```gherkin
Scenario: Unpublished activity exists
  Given an activity item has publish false
  When a public visitor browses activity lists
  Then the unpublished item is not shown
```

## FR-SPON-01: Project Sponsorship

### Summary

The site must support project-based sponsorship with project detail, donor input, transfer guidance, and follow-up messaging.

### Acceptance Criteria

```gherkin
Scenario: Sponsor submits a valid project sponsorship form
  Given an active sponsorship project exists
  When the sponsor enters valid donor information and submits the form
  Then the site shows transfer guidance for that project
```

```gherkin
Scenario: Sponsor misses a required field
  Given the sponsor is filling the sponsorship form
  When a required field is empty or invalid
  Then the form submission is blocked and field guidance is shown
```

```gherkin
Scenario: Project exceeds target amount
  Given the achieved amount is greater than the target amount
  When a visitor views the project page
  Then the actual achieved amount is still shown transparently
```

## FR-SPON-02: One-Time Sponsorship

### Summary

The site must support a one-time sponsorship route distinct from project sponsorship.

### Acceptance Criteria

```gherkin
Scenario: Visitor chooses one-time sponsorship
  Given the sponsorship hub is published
  When the visitor selects one-time sponsorship
  Then the site routes the visitor to the one-time sponsorship path
```

```gherkin
Scenario: One-time sponsorship submission succeeds
  Given the visitor provides valid donor information
  When the one-time sponsorship form is submitted
  Then transfer guidance is shown
```

```gherkin
Scenario: One-time sponsorship form is incomplete
  Given the visitor is using the one-time sponsorship form
  When required information is missing
  Then submission is blocked and validation guidance appears
```

## FR-CONTACT-01: Inquiry Form

### Summary

The site must support direct inquiry submission through a contact page.

### Acceptance Criteria

```gherkin
Scenario: Partner submits an inquiry successfully
  Given the contact page is published
  When the visitor submits valid inquiry details
  Then the inquiry is delivered to the configured email destination
```

```gherkin
Scenario: Inquiry form has invalid email
  Given the visitor is filling the inquiry form
  When the email format is invalid
  Then the site blocks submission and shows a validation message
```

```gherkin
Scenario: Public contact details are not finalized
  Given contact details are not approved for publishing
  When the contact page is prepared
  Then the site does not expose fake confirmed values
```
