# Arshnoor Singh — Portfolio

This repository serves the Notion portfolio export plus the full public Notion
subpages, restyled into the portfolio's dark theme.

## Home page

- Notion portfolio layout with the green folder icon removed
- Dark theme
- 45/55 text/media split on desktop, stacking on tablet and mobile
- Two-column image grids in the media column
- Images under the text stacked in a single column
- Click-to-play YouTube facades
- Contact Below gameplay clip as a local MP4 player
- Fixed breadcrumb bar (`Portfolio Home` / project path)
- More vertical space between project sections

## Imported Notion subpages

- `contact-below.html` — Contact Below design document
- `contact-below-vessels.html` — Vessels
- `contact-below-ui-art.html` — UI Art and Animations
- `contact-below-audio.html` — Audio Systems
- `contact-below-narrative.html` — Narrative Design
- `contact-below-sounds-list.html` — Sounds List
- `lost-in-escape.html` — Lost in Escape design document

`Contact Below` and `Lost in Escape` project headings on the home page link to
their documents. Their Notion-page links also point to these local pages. The
other four projects are only summaries on the home page because they do not have
separate Notion subpages.

## Structure

```text
public/
  index.html                         portfolio home
  contact-below.html                 Contact Below document
  contact-below-vessels.html         Contact Below subpages
  contact-below-ui-art.html
  contact-below-audio.html
  contact-below-narrative.html
  contact-below-sounds-list.html
  lost-in-escape.html                Lost in Escape document
  notion-dark.css                    dark theme
  notion-layout.css                  45/55 layout, media grids, breadcrumb
  notion-docs.css                    long-form document layout
  notion-enhance.js                  media distribution, local video, YouTube
  notion-assets/                     home-page media
  notion-docs/                       imported document images
src/
  archive/pages/                     previous Astro design, not built
.github/
  workflows/                         GitHub Pages deployment
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
