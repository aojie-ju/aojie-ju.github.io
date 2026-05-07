# aojie-ju.github.io

Personal website for Aojie Ju. Static export from Next.js 14, deployed on GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

Static output appears in `out/`. The `.github/workflows/deploy.yml` workflow runs this on every push to `main` and publishes `out/` to GitHub Pages.

## Setup notes (one-time)

1. Repo named exactly `aojie-ju.github.io` so GitHub Pages serves it as a User Page at `https://aojie-ju.github.io`.
2. Settings → Pages → Source: **GitHub Actions** (not "Deploy from a branch").
3. First deploy runs automatically after the first push to `main`.

## Stack

- Next.js 14 (App Router) with `output: 'export'`
- Tailwind CSS
- Static assets in `public/` (headshot, papers)
