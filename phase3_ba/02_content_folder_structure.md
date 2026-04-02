# Content Folder Structure Draft

> Author: Codex
> Date: 2026-04-02

## Recommended Structure

```text
content/
  settings/
    site.ko.json
    site.en.json
  activities/
    ko/
      2024-seoul-tourism-fair.md
    en/
      2024-seoul-tourism-fair.md
  news/
    ko/
    en/
  partners/
    ko/
    en/
  sponsorship/
    projects/
      ko/
      en/
    one-time/
      site.ko.md
      site.en.md
  popups/
    ko/
    en/

public/
  uploads/
    activities/
    news/
    partners/
    sponsorship/
    popups/
```

## Operational Rules

- Korean and English files are managed separately
- Hidden content stays stored with `publish: false`
- Image paths should point into `public/uploads/...`
- Featured lists should be controlled by frontmatter flags
- Popup visibility should be controlled by `enabled`, `start date`, and `end date`

## Why This Structure Works

- easy for owner edits
- easy to script validations later
- easy to migrate to CMS later
- predictable asset paths for deployment
