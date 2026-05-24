# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Contains the Grover Consult website — a world-class consulting firm website with lead gen, blog/insights, and partner showcase.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React + Vite (artifacts/grover-consult)
- **API framework**: Express 5 (artifacts/api-server)
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **UI**: Shadcn/ui, Tailwind CSS, Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Build**: esbuild (CJS bundle for server), Vite (frontend)

## Color Scheme (Grover Consult Brand)

- Primary/Gold: `hsl(44 59% 53%)` — #C9A844 (from logo chevron)
- Background: `hsl(0 0% 10%)` — near-black #1A1A1A
- Charcoal/Secondary: `hsl(0 0% 29%)` — #4B4B4B
- Foreground: white text on dark backgrounds

## Structure

```text
artifacts-monorepo/
├── artifacts/
│   ├── api-server/         # Express API server (leads, insights routes)
│   └── grover-consult/     # React + Vite frontend (served at /)
├── lib/
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
│       └── src/schema/
│           ├── leads.ts    # Leads/contact form table
│           └── insights.ts # Blog/Insights table
├── scripts/
│   └── src/seed-insights.ts  # Seeds 5 blog posts into DB
└── ...
```

## Website Sections

1. **Navbar** — Logo (GROVER CONSULT with gold chevron), mobile hamburger menu, "Get Started" CTA
2. **Hero** — Full-width dark hero with gold headline accent, CTA buttons, animated scroll indicator
3. **Stats Bar** — 200+ Yrs experience, 35+ Yrs delivery legacy, 100% success rate, BFSI focused
4. **Services** — 6 service cards: Digital Transformation, Sales Enablement, System Implementation, AI & Automation, Cloud & Data Engineering, Cybersecurity
5. **Why Grover Consult** — Strategic Advisory, End-to-End Delivery, Market Access
6. **Partner Ecosystem** — 18 partners with local SVG logos linking to solution pages
7. **Clients** — 17 Philippine banks + 7 Indonesian banks with local SVG logos
8. **Team** — 4 team members (Krishan Grover, Subir Lohani, Shaun Paterson, Joey Mamon)
9. **Alliances** — Accenture, Microsoft, SGV E&Y, AWS, IBM, SSI
10. **Insights/Blog** — Fetched from GET /api/insights (5 seeded posts)
11. **Lead Generation** — Contact form POSTing to /api/leads
12. **Footer** — Logo, service links, country links, social, copyright

## SEO Setup

- **index.html** — Rich title, meta description, OG tags, Twitter cards, canonical, JSON-LD Organization schema
- **robots.txt** — Allow all, sitemap reference
- **sitemap.xml** — 26 pages: home, 2 country pages, 4 service pages, 18 partner solution pages
- **react-helmet-async** — Per-page title/description/canonical/JSON-LD schema markup

### Programmatic SEO Pages

- `/solutions/[slug]` — 18 partner solution pages (one per partner) with capabilities, use cases, FAQs, CTA
- `/services/[slug]` — 4 service pages (digital-transformation, core-banking, sales-enablement, system-integration)
- `/philippines` — Philippines country focus page  
- `/indonesia` — Indonesia country focus page
- All pages have unique meta titles, descriptions, breadcrumbs, schema markup, and internal links

### SEO Data

- `src/lib/seo-data.ts` — All solution and service page data (slugs, content, FAQs)
- Partner logos — Local SVGs in `public/logos/partners/`
- Bank logos — Local SVGs in `public/logos/banks/`

## API Endpoints

- `GET /api/healthz` — Health check
- `POST /api/leads` — Submit contact/lead form (name, email, company, phone, service, message)
- `GET /api/insights` — List all blog posts
- `GET /api/insights/:id` — Get single blog post

## Seeding

Run insights seed:
```bash
pnpm --filter @workspace/scripts run seed-insights
```

## Database Schema

- `leads` table — contact form submissions
- `insights` table — blog/insight posts

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`.

Root commands:
- `pnpm run typecheck` — full typecheck
- `pnpm --filter @workspace/db run push` — push DB schema changes
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API client
