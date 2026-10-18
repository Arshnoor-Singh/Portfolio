# Arshnoor Singh — Portfolio

This repository serves the Notion portfolio export with:

- the green folder icon removed
- a dark theme
- a 45/55 text/media split on desktop; the text is capped at a readable measure
  and the media column takes the remaining width
- two-column image grids in the media column
- images under the text stacked in a single column
- an automatic distribution step that balances the text and media heights
- click-to-play YouTube facades that open the player
- a fixed breadcrumb bar (`Portfolio Home` / `Portfolio Home > Project`)
- dedicated project pages: `driving-license.html`, `lost-in-escape.html`,
  `contact-below.html`, `loneliest-artist.html`, `turtle-racer.html`,
  `oyster.html`
- project headings and Notion-page links point to those local pages
- more vertical space between project sections

## Live site

```text
https://arshnoor-singh.github.io/Portfolio/
```

## Structure

```text
public/
  index.html             portfolio home
  contact-below.html     project pages
  driving-license.html
  lost-in-escape.html
  loneliest-artist.html
  turtle-racer.html
  oyster.html
  notion-dark.css        color-only dark theme overrides
  notion-layout.css      split, media grids, breadcrumb, responsive rules
  notion-enhance.js      media distribution, YouTube facades, player loading
  notion-assets/         images and video referenced by the export
src/
  archive/pages/         previous Astro design, kept for reference but not built
.github/
  workflows/             GitHub Pages deployment
```

## Local preview

```bash
npm install
npm run build
npm run preview
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
project and publishes `dist/` to GitHub Pages.
