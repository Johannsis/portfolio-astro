# Johannes Hoersch Portfolio

Personal portfolio site built with Astro and deployed to GitHub Pages.

Live site: `https://johannsis.github.io/portfolio-astro`

## Stack

- Astro 6
- Bun for package management and scripts
- TypeScript with strict Astro config
- UnoCSS for utility classes and theme tokens
- Custom CSS for animation and global color variables
- GitHub Actions for GitHub Pages deployment

## Overview

This is a small, single-route portfolio application. The homepage is assembled from Astro components and nearly all portfolio content comes from `src/data/user.ts`.

The current site includes:

- hero/header content
- about section
- experience section
- social links
- resume download link
- SEO metadata and JSON-LD person schema
- animated aurora background and desktop mouse light effect

## Project Structure

```text
.
|-- public/
|   |-- assets/
|   `-- images/
|-- src/
|   |-- components/
|   |   |-- atoms/
|   |   |-- molecules/
|   |   `-- organisms/
|   |-- data/
|   |-- icons/
|   |-- layouts/
|   |-- pages/
|   `-- styles/
|-- astro.config.mjs
|-- eslint.config.js
|-- package.json
|-- tsconfig.json
`-- uno.config.ts
```

## Key Files

- `src/pages/index.astro`: the only page route
- `src/layouts/BaseLayout.astro`: global document shell and SEO tags
- `src/data/user.ts`: portfolio content, metadata, social links, and structured data
- `src/styles/global.css`: global design tokens and animation keyframes
- `uno.config.ts`: UnoCSS theme colors and custom utility rules
- `astro.config.mjs`: site URL, GitHub Pages base path, sitemap, fonts, CSP, and integrations

## Content Updates

Most routine edits happen in one place:

- Update biography, title, location, social links, and experience entries in `src/data/user.ts`
- Replace the resume PDF in `public/assets/Johannes-Hoersch-CV.pdf`
- Replace favicons in `public/images/` and `public/favicon.ico`

If you add a new section to the page, update both:

- `src/pages/index.astro`
- any navigation or section metadata that depends on `pageSections` in `src/data/user.ts`

## Local Development

Requirements:

- Node.js `>=24`
- Bun `^1.3.10`

Install dependencies:

```sh
bun install
```

Start the dev server:

```sh
bun run astro:dev
```

Open `http://localhost:4321/portfolio-astro/`.

Because the Astro config sets `base: '/portfolio-astro'`, local URLs include that base path.

## Scripts

| Command | Purpose |
| --- | --- |
| `bun run astro:dev` | Start the local Astro dev server |
| `bun run astro:build` | Run `astro check` and create a production build |
| `bun run astro:preview` | Preview the production build locally |
| `bun run astro:sync` | Sync Astro types |
| `bun run lint` | Run oxlint, ESLint for Astro, and Stylelint |
| `bun run lint:fix` | Apply autofixes where available |
| `bun run format` | Run `oxfmt` and Prettier |
| `bun run format:check` | Check formatting only |
| `bun run type-check` | Run TypeScript with `--noEmit` |
| `bun run prune` | Remove generated `.astro`, `dist`, and `node_modules` folders |
| `bun run release` | Run semantic-release |

## Quality Checks

Before opening a PR, run:

```sh
bun run format
bun run lint
bun run astro:build
```

There are currently no project test suites. The main verification path is formatting, linting, type checking through `astro check`, and a successful production build.

## Deployment

Deployment is handled by `.github/workflows/deploy.yml`.

- pushes to `main` trigger the workflow
- the site is built with `bun run astro:build`
- the output is deployed to GitHub Pages

Astro is configured for GitHub Pages with:

- `site: 'https://johannsis.github.io/portfolio-astro'`
- `base: '/portfolio-astro'`

If the repository name changes, update both values in `astro.config.mjs` and confirm any hard-coded site URLs in `src/data/user.ts`.

## Conventions

- Use the `@jh/*` path alias for imports from `src`
- Keep component organization aligned with the current `atoms` / `molecules` / `organisms` structure
- Use tabs for indentation
- Prefer editing content in `src/data/user.ts` instead of hardcoding copy in components
- Keep styling consistent with existing UnoCSS utilities and CSS custom properties

## Release Notes

The repository is configured for semantic-release. Release commits are generated automatically from the `main` branch based on commit history.
