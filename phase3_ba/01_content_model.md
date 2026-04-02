# Content Model

> Author: Codex
> Date: 2026-04-02

## Purpose

Define the content types needed for a Markdown-managed KBFA website.

## Content Types

### 1. Site Settings

Fields:

- association name ko
- association name en
- hero headline ko
- hero headline en
- contact email
- contact phone
- address ko
- address en
- directions embed or map link
- bank account display
- sponsorship contact email

### 2. Activity

Fields:

- slug
- language
- title
- summary
- event date
- display year
- location
- cover image
- gallery images
- partners
- featured boolean
- publish boolean
- body

### 3. News Post

Fields:

- slug
- language
- title
- summary
- publish date
- cover image
- popup candidate boolean
- publish boolean
- body

### 4. Partner

Fields:

- slug
- language
- name
- logo image
- partner type
- summary
- link
- publish boolean

### 5. Sponsorship Project

Fields:

- slug
- language
- title
- fundraising start date
- fundraising end date
- status
- target amount
- achieved amount
- progress label
- cover image
- gallery images
- summary
- purpose
- fund usage
- receipt available boolean
- featured boolean
- publish boolean
- bank account reference

### 6. Popup

Fields:

- slug
- language
- title
- body
- image
- link label
- link url
- popup type
- start date
- end date
- enabled boolean

### 7. Sponsorship Submission

Fields:

- submission id
- sponsorship type
- project slug optional
- donor type
- donor name
- affiliation
- email
- phone
- amount
- receipt requested boolean
- submitted at
- transfer verification status
- verified amount
- verified name

### 8. Inquiry Submission

Fields:

- submission id
- name
- affiliation
- email
- phone
- subject
- message
- submitted at
- response status

## Recommended File Strategy

For owner-managed content:

- Markdown for long-form public content
- JSON or YAML for site settings and small structured data
- uploaded assets in predictable folders by content type

## Future Upgrade Path

This content model can later map to:

- headless CMS collections
- admin dashboard models
- database tables

without major front-end redesign
