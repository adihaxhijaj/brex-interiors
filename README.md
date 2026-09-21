# Brex Interiors

Marketing site for **Brex Interiors** — a family-run studio specialising in
bespoke kitchens and fitted interiors. Built with the Next.js App Router,
TypeScript, Tailwind CSS, and shadcn/ui.

This project is a re-platform of an earlier static HTML/CSS/JS site. The
original files are preserved under [`_legacy/`](./_legacy) for reference.

## Tech stack

| Concern        | Choice                                   |
| -------------- | ---------------------------------------- |
| Framework      | Next.js 14 (App Router, React 18)        |
| Language       | TypeScript (strict mode)                 |
| Styling        | Tailwind CSS v3 + design tokens          |
| UI primitives  | shadcn/ui (Radix) + lucide-react icons   |
| Forms          | react-hook-form + zod                    |
| Tooling        | ESLint, Prettier (+ Tailwind plugin)     |

## Prerequisites

- **Node.js 18.18+** (developed on Node 24)
- **npm** (lockfile committed)

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server on http://localhost:3000
```

- `/` &nbsp;— homepage (hero, overview, projects carousel, stats, reviews, CTA, footer)
- `/contact` — contact page with a validated enquiry form

## Scripts

| Script                 | Description                               |
| ---------------------- | ----------------------------------------- |
| `npm run dev`          | Start the development server              |
| `npm run build`        | Production build                          |
| `npm run start`        | Serve the production build                |
| `npm run lint`         | Run ESLint (`next lint`)                   |
| `npm run typecheck`    | Type-check with `tsc --noEmit`            |
| `npm run format`       | Format the codebase with Prettier         |
| `npm run format:check` | Check formatting without writing          |

## Project structure

```
app/
  (home)/page.tsx      # "/" route (route group)
  contact/page.tsx     # "/contact" route
  contact/actions.ts   # server action stub (validation only)
  layout.tsx           # root layout, fonts, base SEO metadata
  globals.css          # Tailwind layers + design-token CSS variables
  icon.png             # favicon
components/
  sections/            # page sections (Nav, Hero, Overview, Projects, Stats, GetToKnow, Footer, ContactForm)
  ui/                  # shadcn/ui primitives (button, input, textarea, label, form)
lib/
  projects.ts          # typed carousel data
  reviews.ts           # typed review data
  contact-schema.ts    # zod schema shared by the form and the server action
  utils.ts             # cn() helper
public/images/         # site imagery (logo, hero, section, carousel)
_legacy/               # original static site (reference only)
```

## Design tokens

Brand colours and typography were extracted from the legacy CSS into the
Tailwind theme ([`tailwind.config.ts`](./tailwind.config.ts)) under the `brand`
namespace, plus shadcn/ui semantic tokens (CSS variables in
[`app/globals.css`](./app/globals.css)). Use the tokens rather than raw hex
values — e.g. `text-brand-ink`, `bg-brand-cream`, `border-brand-line-soft`,
`tracking-eyebrow`. The site font is **Jost** (weights 300/400/500), loaded via
`next/font`.

## Contact form

The contact form validates on the client with `react-hook-form` + `zod`, and
posts to a **server action stub** (`app/contact/actions.ts`) that re-validates
with the same schema. No email/SMTP provider is wired up yet — the stub returns
a success result and marks where a real integration would go.

## Deployment

Deploy to [Vercel](https://vercel.com) (recommended for Next.js):

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Import the project in Vercel — the framework preset is detected automatically.
3. Vercel runs `npm install` and `npm run build`; no environment variables are
   required for the current feature set.

For a self-hosted deployment:

```bash
npm run build
npm run start    # serves on port 3000
```
