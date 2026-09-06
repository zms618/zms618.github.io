# Cheng He / 贺铖 — Academic Homepage

Personal academic homepage built with [Astro](https://astro.build/) and deployed to [GitHub Pages](https://pages.github.com/).

Website: https://zms618.github.io/

## Development

Requires Node.js 22.12 or later.

```bash
npm install
npm run dev
npm run build
npm run preview
```

Profile content, publications, projects, education, and bilingual copy are maintained primarily in `src/data/site.ts`. Shared interface labels are maintained in `src/data/ui.ts`.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`. The workflow builds the Astro site and deploys `dist/` to GitHub Pages.
