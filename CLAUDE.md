# Callizo

A web app being built to **pitch to a potential client** (Callizo Aromas — a
family-run sensory-ingredients company in the Americas). Two surfaces:

- **Marketing homepage** (`/`) — a long-scroll, design-led landing page.
  Warm editorial look: paper/ink/gold, Instrument Serif + Manrope + JetBrains
  Mono. Built section by section under `src/components/sections/`.
- **Admin dashboard** (`/admin`, "Callizo.OS") — a Spanish-language back-office
  demo (Dashboard, CRM, Pipeline, Productos & I+D, Órdenes, Asistente IA).
  Distinct light-SaaS look: Inter + gray/blue/purple/amber. Lives under
  `src/app/admin/` and `src/components/admin/`.

The two are **deliberately different design systems** — don't bleed one into the
other (see Tokens below).

## Stack

Single Next.js app — **not** a monorepo (no `apps/`, `services/`, `libs/`).

- Next.js 15.4 (App Router, Turbopack dev) · React 19 · TypeScript 5.9
- Tailwind **v4** + design tokens in `src/app/globals.css`
- Prisma 6 on **SQLite** (`prisma/dev.db`, `DATABASE_URL` in `.env`)
- recharts (admin charts) · lucide-react (icons) · sonner · framer-motion
- cva · clsx · tailwind-merge (`cn()` in `src/lib/utils.ts`)

Commands: `yarn dev` · `yarn db:push` · `yarn lint` · `yarn build`.
(`yarn build` runs `prisma generate` first.) Dev often lands on **:3001** when
:3000 is taken — check the dev log for the actual URL.

## Layout

```
src/
  app/
    layout.tsx          ← marketing fonts (Instrument Serif/Manrope/JetBrains) + Toaster
    page.tsx            ← marketing homepage, composes <sections/>
    globals.css         ← Tailwind v4 + ALL design tokens (marketing + admin)
    actions.ts          ← "use server" — submitSampleRequest (the only DB write)
    admin/
      layout.tsx        ← admin shell: Inter + sidebar + topbar; nested routes
      page.tsx          ← Dashboard; crm/ pipeline/ products/ orders/ ai/ are sub-routes
  components/
    ui/                 ← marketing primitives (Button, Shell/Section, Placeholder, …)
    sections/           ← one file per homepage section
    admin/              ← admin shell + primitives (Kpi, Card, Pill, charts, icon map)
    icons.tsx           ← marketing SVG marks (Arrow, glyphs)
  content/              ← typed static content modules (see below)
    admin/              ← admin mock data
  lib/                  ← prisma.ts (client singleton) + utils.ts (cn)
prisma/schema.prisma    ← SampleRequest model (SQLite)
reference/              ← designer mockups (bundled HTML) — see "Working from references"
```

## Conventions

### Tailwind v4 — the `var()` footgun
CSS-var arbitrary values **must** wrap the var in `var()`. Write
`bg-[oklch(0.92_0.045_var(--hue))]` and `w-[var(--x)]` — **never** `w-[--x]` or
`bg-[--hue]`. The v3 bare-`--x` form silently no-ops in v4. This has bitten this
exact stack before; treat it as a hard rule.

### Utility-first, with a thin escape hatch
Build with Tailwind utilities. Tokens are registered in `@theme` in
`globals.css` so they resolve as utilities (`bg-paper`, `text-ink`, `text-gold`;
admin: `bg-admin-bg`, `text-admin-gray-500`, …). Only put CSS in `globals.css`
when a thing genuinely can't be a utility — and keep it scoped/labelled. Current
precedents: striped placeholder backgrounds (`.ph`), the footprint-map pin
geometry + keyframes, and the admin scrollbar. Don't grow ad-hoc class soup.

### Two token namespaces — keep them apart
Marketing tokens are plain (`--color-paper/ink/gold/rule`, `font-serif/sans/mono`).
Admin tokens are **namespaced `admin-*`** (`--color-admin-blue`,
`--color-admin-gray-500`, `--font-inter`, …) precisely so the dashboard can't
recolour the marketing site. New admin styling uses `admin-*` utilities; new
marketing styling uses the warm tokens. Don't reach across.

### Content is typed data, not the database
Section/dashboard content lives as **typed TS modules** in `src/content/` (and
`src/content/admin/`) — divisions, locations, clients, orders, etc. The DB
(`prisma`) persists **only** real submissions (the contact form →
`SampleRequest`). This is a pitch build; don't wire mock content to the DB
unless asked. Admin copy is **Spanish on purpose** (the client's market).

### Keep logic out of UI files (the portable-logic rule, adapted)
We have no workspace packages, but the spirit holds: anything reusable and
framework-agnostic (formatters, data shaping, parsing) goes in its own module
(`src/content/admin/format.ts`, a `src/lib/*` helper), **not** inlined in a
component. `src/lib/` is for web glue — the Prisma singleton, the `cn` helper,
server-action adapters, React/Next hooks. If a helper would make sense called
from a script/export tool, give it a clean module so it stays reusable.

### File size & componentization
Keep files small and focused (**≤ ~400 LOC**). When JSX gets big or markup
repeats, extract a component — homepage sections to `components/sections/`,
admin pieces to `components/admin/`, shared marketing primitives to
`components/ui/`. Prefer small typed primitives (cva for variants) over
one-off inline styling.

### Charts (admin) & icons
- Charts use **recharts**; set `isAnimationActive={false}` so they render
  deterministically (the enter-animation otherwise shows empty in SSR/headless
  screenshots). Tooltip `formatter` params are recharts' `ValueType` — don't
  annotate them `: number`, coerce inside (`Number(value)`).
- Icons use **lucide-react**. The admin maps the reference's Tabler names →
  lucide via `src/components/admin/icon.tsx`; data modules store icon **keys**,
  components resolve them. Add new mappings there.

## Working from references

The designer delivers mockups as **self-unpacking bundled HTML** in
`reference/` (a base64+gzip `__bundler/manifest` + a JSON `__bundler/template`;
the real markup is React/JSX inside, sometimes in external `text/babel` assets).
To read one: decode the template/assets with a short `node` script (`JSON.parse`
the template, `zlib.gunzipSync` manifest entries), write scratch `_*` files to
inspect, **then delete the scratch files** when done. These bundles are large
(1–6 MB) — never `Read` them whole; extract structure first.

When porting a mockup: agree the data model + structure before building, then
build incrementally and **verify visually** — `yarn dev`, screenshot with
headless Chrome, crop with `magick` to inspect, iterate. (Charts/maps especially
need a screenshot loop.)

## Git

**Never** `git commit`, `push`, `gh pr create`, amend, force-push, or rebase
without an explicit go-ahead from the user — surface the staged diff + proposed
message and wait. (Mirrors the user's global rule.)

## Sub-docs

None yet — it's a single app. If `/admin` or the homepage grows enough to need
their own layout/file-size rules, add a scoped `CLAUDE.md` in that route segment
rather than bloating this one.
