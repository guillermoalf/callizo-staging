# Callizo

Web app for the Callizo pitch. Next.js (App Router) + Prisma + Tailwind v4,
matching the proven stack from the sandbox repo.

## Stack

- **Next.js 15.4** (App Router, Turbopack dev)
- **React 19**
- **Prisma 6** — SQLite for local dev (swap to Postgres for prod)
- **Tailwind v4** + shadcn-style design tokens
- **TypeScript 5.9**, ESLint 9
- lucide-react · sonner · framer-motion · class-variance-authority

## Getting started

```bash
yarn install          # installs deps + runs `prisma generate`
yarn db:push          # create the local SQLite dev.db from the schema
yarn dev              # http://localhost:3000
```

## Layout

```
src/
  app/                 ← routes (App Router)
    layout.tsx
    page.tsx
    globals.css        ← Tailwind v4 + design tokens
  lib/
    prisma.ts          ← PrismaClient singleton
    utils.ts           ← cn() class helper
  components/ui/        ← shadcn-style primitives (add as needed)
prisma/
  schema.prisma         ← data models
```

## Database

Local dev uses SQLite (`prisma/dev.db`, gitignored) — no external service
needed. To move to Postgres: set `provider = "postgresql"` in
`prisma/schema.prisma`, point `DATABASE_URL` at your instance, then
`yarn db:push`.

## Conventions

Keep files small and focused (≤ ~400 LOC). Extract components when JSX
subtrees get large or markup repeats. Domain/portable logic should not be
buried in UI files — give it its own module so it stays reusable.
