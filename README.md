# Arshnoor Singh — Game Design Portfolio

A dark, editorial portfolio for game design, level design, systems, and UX work.

## Stack

- [Astro](https://astro.build/) with static output
- GitHub Pages via GitHub Actions
- Optimized images generated at build time
- YouTube embeds loaded on click

## Local development

```bash
npm install
npm run dev
```

The site is served under `/Portfolio/` to match the GitHub Pages project URL:

```text
http://localhost:4321/Portfolio/
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes `dist/` to GitHub Pages.

Live URL:

```text
https://arshnoor-singh.github.io/Portfolio/
```

## Structure

```text
src/
  content/work/<slug>/index.md   project content and images
  components/                    cards, gallery, video, systems
  layouts/                       base layout and metadata
  pages/                         home, work index, project pages, about
  styles/global.css              design tokens and layout
public/                          favicon, robots.txt
```

## Adding a project

1. Create `src/content/work/<slug>/index.md`.
2. Add a cover and gallery images in the same folder.
3. Fill in the frontmatter (title, summary, role, focus, tools, systems, links).
4. Set `order` to control its position.
5. Commit and push.
