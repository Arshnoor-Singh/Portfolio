# Arshnoor Singh — Portfolio

This repository currently serves a **1:1 copy of the Notion portfolio export** at the site root. The only change is that the green folder icon has been removed.

## Live site

```text
https://arshnoor-singh.github.io/Portfolio/
```

## Structure

```text
public/
  index.html        exact Notion export (folder icon removed)
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
