# AGENTS.md

## Purpose

This repository is a personal portfolio site built with Astro. Keep changes small, accurate, and aligned with the current single-page architecture.

## Repo Facts

- Package manager: `bun`
- Runtime target: Node.js `>=24`
- Site framework: Astro 6
- Styling: UnoCSS plus `src/styles/global.css`
- Deployment target: GitHub Pages
- Base path: `/portfolio-astro`
- Main content source: `src/data/user.ts`
- Main route: `src/pages/index.astro`

## Where To Edit

- Update personal copy, metadata, social links, experience, and structured data in `src/data/user.ts`
- Update page composition in `src/pages/index.astro`
- Update document-level SEO and shared head markup in `src/layouts/BaseLayout.astro`
- Update design tokens, global animation keyframes, and CSS variables in `src/styles/global.css`
- Update UnoCSS theme colors and custom utilities in `uno.config.ts`
- Update public static assets in `public/`

## Architecture Notes

- The app currently has one page route: `src/pages/index.astro`
- Components follow an `atoms` / `molecules` / `organisms` split
- Internal imports use the `@jh/*` alias from `tsconfig.json`
- Resume links are built from `import.meta.env.BASE_URL`, so keep the base path behavior intact
- SEO metadata is derived from exports in `src/data/user.ts`

## Change Guidelines

- Prefer updating existing components instead of introducing new abstraction layers
- Keep content centralized in `src/data/user.ts` when possible
- Preserve the existing visual language: dark palette, aurora gradients, glassmorphism accents, and animated background effects
- Do not remove or change the GitHub Pages base path unless the repo or deployment target changes
- Avoid introducing frameworks or client islands unless there is a clear need
- Treat `dist/` and `.astro/` as generated output; do not rely on manual edits there

## Styling Guidelines

- Prefer existing UnoCSS utility patterns already used in `.astro` components
- Reuse theme tokens from `global.css` and `uno.config.ts` instead of adding ad hoc colors
- Keep global CSS focused on tokens, keyframes, and cross-cutting styles
- Match the current formatting style for multiline class attributes and Astro markup

## Verification

Run the relevant checks after changes:

```sh
bun run format
bun run lint
bun run astro:build
```

Use `bun run astro:preview` when you need to verify the production build locally.

## Formatting And Linting

- Indentation uses tabs via `.editorconfig`
- Formatters: `oxfmt` plus Prettier for `.astro`
- Linting: oxlint, ESLint for Astro accessibility and correctness, and Stylelint
- Type safety is strict; keep TypeScript annotations precise and avoid `any`

## Deployment Notes

- GitHub Actions deploys on pushes to `main`
- Astro config includes `site` and `base` for GitHub Pages
- If the repository name or public URL changes, update:
  `astro.config.mjs`
  `src/data/user.ts`

## Safe Defaults For Agents

- Read the target component and any shared data source before editing
- Make the smallest correct change
- Do not rewrite unrelated copy or restyle the whole page for a local content change
- Do not edit generated files unless the task explicitly requires build artifacts
- If adding a new section, update navigation/section metadata that depends on `pageSections`
