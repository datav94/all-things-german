# All Things German

A clean, beachy React app for storing learning content about German grammar. The app is designed to be modular and data-driven, so you can add new concepts with static JSON files and publish automatically.

## Features

- React + Vite + TypeScript
- Tailwind CSS visuals with a soft beach palette
- Data-driven concept pages using static JSON
- Client-side routing for home + concept pages
- GitHub Actions CI/CD pipeline
- Ready for GitHub Pages, Netlify, and Vercel

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run locally:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Add a new concept

- Add a new JSON file under `src/data/`
- Export the concept metadata in `src/data/concepts.ts`
- Visit the new concept page at `/your-slug`

## GitHub Pages

If your repository is served under a path like `https://your-user.github.io/repo-name/`, update the `VITE_BASE_URL` value in `package.json` or use the script:

```bash
npm run build:github
```

Then deploy with:

```bash
npm run deploy:github
```

> The included GitHub Actions workflow also deploys `main` branch changes to GitHub Pages automatically.

## Netlify / Vercel

- Netlify: connect your repo and use `npm run build`, publish `dist`
- Vercel: connect your repo and use `npm run build`

## CI/CD

The workflow in `.github/workflows/ci.yml` builds every push and deploys main to GitHub Pages.
