# Content Operations Requirements

> Author: Codex
> Date: 2026-04-02

## Preferred V1 Operation Model

The first release should not require a heavy CMS.
Instead, the site should use structured Markdown templates so the owner can manage content directly.

## Content Types

### 1. News and announcements

- Markdown file per post
- Supports Korean and English
- Supports cover image path
- Supports publish date and visible status

### 2. Activity highlights and timeline entries

- Markdown file per activity
- Supports year, event title, short summary, body, partner tags, and image path
- Can be featured or archived

### 3. Popup notice

- Dedicated Markdown or JSON-backed content
- Supports title, body, start date, end date, image path, link target, and enabled flag

## Operational Requirements

- Non-developer editing should be possible with simple templates
- Image replacement should be path-based and predictable
- Content lists should be generated automatically from stored files
- Content can be hidden without deleting history
- Korean and English versions should be manageable side by side

## Why This Fits V1

- Faster launch than adopting a full CMS now
- Easier owner control
- Lower maintenance burden
- Smooth upgrade path to a future CMS if content volume grows
