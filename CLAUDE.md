# CLAUDE.md — Callizo.OS Project Instructions

## Project Overview
Callizo.OS is a CRM and business intelligence platform built as a pitch demo for Callizo Aromas — a B2B Latin American flavor, fragrance, and ingredient manufacturer operating in 10 countries since 1993. The goal is to show the client the potential of a fully digitized operation: CRM, analytics, invoicing, quotations, leads, ecommerce, and AI assistant.

This is a React application. All agents must follow these instructions before making any changes.

---

## Tech Stack
- **Frontend:** React + Vite
- **Styling:** Tailwind CSS
- **Charts:** Chart.js via react-chartjs-2
- **Icons:** Tabler Icons (outline only, never filled)
- **Routing:** React Router v6
- **State management:** Zustand
- **Language:** TypeScript
- **Backend (future):** Node.js + Express
- **Database (future):** PostgreSQL
- **AI integration (future):** Anthropic API (claude-sonnet-4-20250514)

---

## Project Structure
src/
components/        # Reusable UI components (Button, Pill, Avatar, Card, KpiCard)
views/             # One file per dashboard view/page
layouts/           # Sidebar, Topbar, AppShell
data/              # Fake data files (JSON) — one per module
hooks/             # Custom React hooks
store/             # Zustand stores — one per module
i18n/              # Language files: es.json (default), en.json
types/             # TypeScript interfaces
utils/             # Formatters, risk score calculator, date helpers

---

## Design System — Non-negotiable rules

### Colors
- Primary blue: `#378add`
- Success green: `#1d9e75`
- Warning amber: `#ba7517`
- Purple (Zootecnia): `#7f77dd`
- Danger red: `#e24b4a`
- Logo accent: `#C8960C`

### Pill classes (status badges)
| Class | Background | Text | Use for |
|-------|-----------|------|---------|
| pill-green | #eaf3de | #3b6d11 | Active, Paid, Delivered |
| pill-amber | #faeeda | #854f0b | Pending, Renewal, Warning |
| pill-red | #fcebeb | #a32d2d | At Risk, Overdue, Lost |
| pill-blue | #e6f1fb | #185fa5 | In Transit, Info, Sent |
| pill-gray | #f1efe8 | #5f5e5a | Neutral, Draft |
| pill-purple | #eeedfe | #3c3489 | Referral source |

### Typography
- Font: system sans-serif (Anthropic Sans in demo)
- Headings: font-weight 500 only — never 600 or 700
- Codes (invoice #, order #, SKU, quote #): always monospace font
- All text: sentence case — never ALL CAPS or Title Case in UI

### Cards & Layout
- Cards: white background, 0.5px border, border-radius-lg (12px)
- Metric cards: secondary background, no border, border-radius-md (8px)
- Borders: always 0.5px — never 1px except featured item accent (2px blue)
- No gradients, no drop shadows, no blur effects
- Sidebar width: 210px fixed

### AI Insight Callout Component
Always use this pattern for AI insights:
- Background: #e6f1fb
- Border: 0.5px solid #b5d4f4
- Text color: #0c447c
- Icon: ti-sparkles (Tabler)
- Border radius: border-radius-md

---

## Divisions & Product Codes
Callizo has 5 divisions. Always use these when generating fake data:
- **Sabores** — product codes: SAB-XXXX
- **Fragancias** — product codes: FRG-XXXX
- **Mascotas** — product codes: PET-XXXX
- **Zootecnia** — product codes: ZOO-XXXX
- **Ingredientes** — product codes: ING-XXXX

---

## Countries of Operation
Always use these when generating fake data. Include country flag emoji.
| Country | Flag | Operation type |
|---------|------|---------------|
| Costa Rica | 🇨🇷 | Sales, R&D, Manufacturing — HQ |
| México | 🇲🇽 | Sales, R&D, Manufacturing |
| Perú | 🇵🇪 | Sales, R&D, Manufacturing |
| Colombia | 🇨🇴 | Sales, Manufacturing (Pets) |
| Paraguay | 🇵🇾 | Sales, R&D, Manufacturing |
| Estados Unidos | 🇺🇸 | Sales, R&D, Manufacturing |
| Ecuador | 🇪🇨 | Sales only |
| Guatemala | 🇬🇹 | Sales only |
| Bolivia | 🇧🇴 | Sales only |
| Venezuela | 🇻🇪 | Sales only |

---

## Fake Data Rules
All fake data must be realistic for a B2B flavor/fragrance company with:
- ~$8.4M USD annual revenue (YTD in 2026)
- 347 active clients
- 10 countries
- Clients include: Nestlé, Bimbo, Alicorp, Arcor, Grupo Nutresa, Grupo Rey, Indulac, LaLa, P&G, Belcorp, Mars Petcare, Gruma, Purina, Unilever
- Revenue breakdown: Sabores 38%, Fragancias 28%, Mascotas 20%, Zootecnia 14%
- All monetary values in USD
- All dates in 2026

---

## Risk Score Engine
Every client has a computed risk score (0–100). This is core business logic — never change the weights without a specific task.

| Factor | Points |
|--------|--------|
| No order in 60+ days | +30 |
| Orders down 40%+ vs historical avg | +20 |
| Unpaid invoices >30 days overdue | +20 |
| Contract renewal in <45 days, no engagement | +30 |
| No sales contact logged in 30+ days | +10 |

Score thresholds:
- 0–30: Active (green)
- 31–65: Up for renewal (amber)
- 66–100: At risk (red)

Risk score must be recalculated in the Zustand store, not hardcoded per client.

---

## Internationalization (i18n)
- Default language: **Spanish (es)**
- Second language: **English (en)**
- Toggle in the navbar — flag icon + language code
- All UI strings must use i18n keys — never hardcode Spanish or English text in components
- Date format: DD MMM YYYY (e.g. "12 may 2026") in Spanish, "May 12, 2026" in English
- Currency: always USD with $ prefix

---

## Modules & Views
Each view lives in `src/views/`. Current modules:

| View file | Sidebar label | Section |
|-----------|--------------|---------|
| Dashboard.tsx | Dashboard | Principal |
| Clients.tsx | Clientes | Principal |
| Inactive.tsx | Inactivos | Principal |
| PurchaseHistory.tsx | Historial de compras | Principal |
| Pipeline.tsx | Pipeline | Ventas |
| Quotations.tsx | Cotizaciones | Ventas |
| Leads.tsx | Leads | Ventas |
| Invoices.tsx | Facturas | Finanzas |
| Products.tsx | Productos | Operaciones |
| Orders.tsx | Pedidos | Operaciones |
| AIAssistant.tsx | Asistente IA | Operaciones |
| Landing.tsx | — | Public (no sidebar) |

---

## Landing Page Rules
- Bilingual: Spanish default, English toggle
- Smooth scroll on navbar link clicks
- CTA button: "Solicitar cotización" (not "Request sample")
- Sections: Hero, Divisions (Sabores/Fragancias/Mascotas/Zootecnia/Ingredientes), Products catalog with quote request, About, Locations, Contact
- Product catalog must show real SKUs and allow visitors to request a quote per product
- No ecommerce checkout yet — quote request only (form → email or CRM lead)

## PR Rules for Agents
- Branch naming: `feature/module-name` or `fix/description`
- PR title format: `[Module] Short description of change`
- PR description must include: what changed, which views are affected, any new fake data added
- Never modify `src/data/` files without explicit instruction
- Never change the Risk Score weights without a task that specifically says so
- Always run `npm run lint` before committing
- One concern per PR — never mix unrelated changes

---

## Current Sprint Priority
1. Landing page (bilingual, smooth scroll, Solicitar cotización CTA, product catalog)
2. AI Chat integration (Anthropic API, context-aware responses using current view data)
3. Ecommerce quote request flow (product → quote form → lead created in CRM)
4. Real backend + database connection