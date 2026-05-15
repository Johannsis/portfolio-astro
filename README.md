# Johannes Hoersch - Portfolio

Personal portfolio site for **Johannes Hoersch**, Senior Front-End Developer based in Santo Domingo, DR.

Live site: **[johannsis.github.io/portfolio-astro](https://johannsis.github.io/portfolio-astro)**

## Tech Stack

| Layer                     | Technology                                                       |
| ------------------------- | ---------------------------------------------------------------- |
| Framework                 | [Astro 6](https://astro.build) (static output, GitHub Pages)     |
| Language                  | [TypeScript 6.0.3](https://www.typescriptlang.org) (strict mode) |
| Styling                   | [UnoCSS](https://unocss.dev) + custom CSS variables & keyframes  |
| Linting                   | [oxlint 1.64.0](https://oxc.rs/docs/guide/usage/linter.html)     |
| Formatting                | [oxfmt 0.49.0](https://oxc.rs/docs/guide/usage/formatter.html)   |
| Runtime / Package Manager | [Bun 1.3.10](https://bun.sh)                                     |
| Deployment                | GitHub Actions + GitHub Pages                                    |

## Requirements

- Node.js `>=24.0.0`
- Bun `^1.3.10`

## Getting Started

```bash
bun install
bun run astro:dev
```

Open `http://localhost:4321/portfolio-astro/`.

## Scripts

| Command                 | Description                                     |
| ----------------------- | ----------------------------------------------- |
| `bun run astro:dev`     | Start development server                        |
| `bun run astro:build`   | Run `astro check` and create a production build |
| `bun run astro:preview` | Serve the production build locally              |
| `bun run astro:sync`    | Sync Astro generated types                      |
| `bun run type-check`    | Run TypeScript checks (`tsc --noEmit`)          |
| `bun run lint`          | Run oxlint, ESLint for Astro, and Stylelint     |
| `bun run lint:fix`      | Run all linters with auto-fixes                 |
| `bun run format`        | Format repository with oxfmt and Prettier       |
| `bun run format:check`  | Check formatting without writing                |
| `bun run prune`         | Remove `.astro`, `dist`, and `node_modules`     |
| `bun run release`       | Run semantic-release                            |

## Project Structure

```text
src/
  components/
    atoms/        # Low-level primitives
    molecules/    # Composed UI blocks
    organisms/    # Section-level UI
  data/           # Portfolio content and section metadata
  icons/          # Icon wrapper + SVG icons
  layouts/        # BaseLayout — document shell and SEO tags
  pages/          # Astro page routes (index.astro)
  styles/         # Global CSS variables, keyframes, and cross-cutting styles
```

## Deployment

On pushes to `main`, GitHub Actions runs lint, type-check, build, then deploys to GitHub Pages.

Workflow: `.github/workflows/deploy.yml`

## License

MIT. See `LICENSE`.
