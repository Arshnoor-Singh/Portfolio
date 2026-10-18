# Arshnoor Singh — Portfolio

This repository serves the Notion portfolio export at the site root. The layout, content, columns, and spacing are unchanged from the export. The green folder icon has been removed, and a dark theme is applied with `public/notion-dark.css`.

## Live site

```text
https://arshnoor-singh.github.io/Portfolio/
```

## Structure

```text
public/
  index.html        exact Notion export (folder icon removed, dark theme linked)
  notion-dark.css   color-only dark theme overrides
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
