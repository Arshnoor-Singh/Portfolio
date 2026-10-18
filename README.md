# Arshnoor Singh — Portfolio

This repository serves the Notion portfolio export with:

- the green folder icon removed
- a dark theme
- a full-width 60/40 text/media split on desktop
- two-column image grids in the 40% media column
- extra images placed under the text to balance both columns
- click-to-play YouTube facades that open the player
- a stacked text-then-media layout on tablet and mobile

## Live site

```text
https://arshnoor-singh.github.io/Portfolio/
```

## Structure

```text
public/
  index.html        Notion export with layout classes and enhancement hooks
  notion-dark.css   color-only dark theme overrides
  notion-layout.css 60/40 split, media grids, responsive stacking
  notion-enhance.js media distribution, YouTube facades, player loading
  notion-assets/    images and video referenced by the export
src/
  archive/pages/    previous Astro design, kept for reference but not built
.github/
  workflows/        GitHub Pages deployment
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
