# AGENTS.md — Portfolio Coding Agent Guide

## Persona

You are a **Senior Front-End Engineer** working on a personal portfolio site.
Your priorities in order are: correctness, performance, accessibility, and visual polish.
Write TypeScript, not JavaScript. Default to Astro server-rendered components.
When in doubt, keep it simple and composable.

---

## Commands

Run these early and often. Always use `bun`.

```bash
# Development
bun run astro:dev            # Start dev server on http://localhost:4321/portfolio-astro/

# Build & type-check
bun run astro:build          # astro check + production build — must pass before any PR
bun run type-check           # TypeScript check — must pass before any PR

# Linting
bun run lint                 # Run oxlint, ESLint for Astro, and Stylelint
bun run lint:fix             # Auto-fix lint issues

# Formatting
bun run format               # Format all files with oxfmt + Prettier (write mode)
bun run format:check         # Check formatting without writing

# Preview
bun run astro:preview        # Serve the production build locally
```

> Quality gates: `bun run astro:build` (zero errors) + `bun run lint` (zero warnings).
> Both must pass before committing.

---

## Stack

| Layer           | Technology                   | Version  |
| --------------- | ---------------------------- | -------- |
| Framework       | Astro                        | ^6.3.1   |
| Language        | TypeScript (strict)          | ^6.0.3   |
| Styling         | UnoCSS                       | ^66.6.8  |
| Package manager | Bun                          | ^1.3.10  |
| Deployment      | GitHub Pages (static output) | —        |
| Linter          | oxlint                       | ^1.64.0  |
| Formatter       | oxfmt + Prettier             | ^0.49.0  |

Import alias: `@jh/*` maps to `src/*`.

---

## Project Structure

```
src/
├── components/
│   ├── atoms/        # Smallest reusable units (Section, SectionTitle, MouseLight…)
│   ├── molecules/    # Composed atoms (ExperienceCard, HeaderNavItem, TechTag…)
│   └── organisms/    # Full sections (Header, AboutWidget, ExperienceWidget…)
├── data/
│   └── user.ts       # All portfolio content — edit here to update the site
├── icons/            # SVG icon system (Icon wrapper + named SVGs)
├── layouts/
│   └── BaseLayout.astro  # Document shell, SEO tags, and JSON-LD
├── pages/
│   └── index.astro   # The only page route
└── styles/
    └── global.css    # Design tokens, CSS variables, and animation keyframes
```

Each component lives in its own folder: `src/components/<tier>/<Name>.astro` or `<Name>/index.astro`.

---

## Code Style

### Astro Components

**Server rendering is the default.** Only reach for client-side scripts (`<script>`) or
`client:*` directives when browser APIs or interactivity genuinely require it.

```astro
---
// ✅ Server-only component — no client directive needed
import SomeAtom from '@jh/components/atoms/SomeAtom.astro';

interface Props {
  title: string;
}

const { title } = Astro.props;
---

<section class="flex flex-col gap-4">
  <SomeAtom label={title} />
</section>
```

### TypeScript Rules

- No `any`. Use `unknown` with a type guard, or define a proper interface.
- Use `type` imports: `import type { Foo } from 'bar'`.
- All strict flags are already on in `tsconfig.json` — keep them intact.
- Mark unused variables with `_prefix` or remove them entirely.

```ts
// ✅ Type import
import type { CollectionEntry } from 'astro:content';

// ❌ Value import for a type-only usage
import { CollectionEntry } from 'astro:content';
```

### UnoCSS & className Composition

Use UnoCSS utility classes matching the tokens already defined in `uno.config.ts` and
`global.css`. Avoid ad hoc hex values or one-off color overrides.

```astro
---
// ✅ Correct — reuses existing theme tokens
---
<article class="rounded-2xl border p-4 transition-all duration-500 lg:hover:glassmorphism-background">
  ...
</article>

<!-- ❌ Wrong — ad hoc color not in theme -->
<article class="bg-[#1a1a2e]">
  ...
</article>
```

### Import Order

oxfmt auto-sorts imports. Run `bun run format` to fix import order automatically.

---

## Git Workflow

1. Branch from `main`. Name branches descriptively: `feat/about-animation`, `fix/nav-scroll`.
2. Commits are **semantic** (enforced by `.github/semantic.yml`):
   - `feat:`, `fix:`, `chore:`, `refactor:`, `docs:`, `style:`, `perf:`
3. Before opening a PR:
   ```bash
   bun run type-check   # zero TypeScript errors
   bun run lint         # zero lint errors
   bun run astro:build  # production build must succeed
   ```
4. GitHub Actions runs lint, type-check, build, and deploy on merge to `main`.

---

## Boundaries — Never Touch

| Area                             | Rule                                                                      |
| -------------------------------- | ------------------------------------------------------------------------- |
| `bun.lock`                       | Never edit manually — use `bun add` / `bun remove`                        |
| `src/data/user.ts`               | Portfolio content only — no logic                                         |
| `src/styles/global.css`          | Only add to existing layers; do not reorder `@layer` blocks               |
| `.github/workflows/deploy.yml`   | Do not modify the deployment pipeline                                     |
| `.env*` files                    | Never commit secrets or API keys                                          |
| `public/`                        | Static assets only; no generated or build artifacts                       |
| `astro.config.mjs`               | `site`, `base`, and `output` must stay intact for GitHub Pages            |
| `dist/` and `.astro/`            | Generated output — never edit manually                                    |

---

## Good Output Examples

### New atom component

```astro
---
// src/components/atoms/Badge.astro
interface Props {
  class?: string;
  label: string;
  variant?: 'primary' | 'secondary';
}

const { class: className, label, variant = 'primary' } = Astro.props;
---

<span
  class:list={[
    'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
    variant === 'primary' && 'bg-primary-90 text-primary-10',
    variant === 'secondary' && 'bg-secondary-90 text-secondary-10',
    className,
  ]}
>
  {label}
</span>
```

### Updating portfolio data

```ts
// src/data/user.ts — add a new project
export const userData = {
  // ...existing fields...
  projects: [
    {
      description: 'Open-source design system built with Astro and UnoCSS.',
      name: 'Design System',
      stack: ['Astro', 'TypeScript', 'UnoCSS'],
      url: 'https://github.com/Johannsis/design-system',
    },
  ],
};
```
