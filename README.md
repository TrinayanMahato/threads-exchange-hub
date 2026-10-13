# SwapStyle

A community clothing-exchange platform — list the clothes you no longer wear, browse what
others have offered, and arrange a swap locally instead of buying new.

Built with React 19, TypeScript, Vite, Tailwind CSS, and shadcn/ui.

> **Project status:** the interface is complete and fully navigable. It runs on fixture
> data behind a single data layer, so wiring it to a live API is a contained change —
> see [Architecture](#architecture).

---

## Table of Contents

- [Why](#why)
- [Architecture](#architecture)
- [Features](#features)
- [Screens](#screens)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)

---

## Why

Clothing is among the most wasteful consumer categories — garments are worn a handful of
times and discarded while still perfectly wearable. SwapStyle treats a wardrobe as
something circulating through a community rather than something you accumulate: every swap
keeps a garment in use and takes one new purchase off the table.

---

## Architecture

A single-page React application. There is no server in this repository: the UI is built
against fixture data behind one data layer, so the API can be attached later without
touching the screens.

```
┌───────────────────────────────────────────────────────────────┐
│  main.tsx                                                     │
│    └── App.tsx          providers + router                    │
│          ├── QueryClientProvider   (TanStack Query)           │
│          ├── ThemeProvider         (next-themes, dark mode)   │
│          ├── Toaster               (Sonner)                   │
│          └── BrowserRouter                                    │
└──────────────────────────┬────────────────────────────────────┘
                           ▼
        ┌──────────────────┼──────────────────┐
        ▼                  ▼                  ▼
   /  Index.tsx    /dashboard         /admin
   landing          UserDashboard      AdminDashboard
        │                  │                  │
        ▼                  ▼                  ▼
   Header  Hero       My Listings        Users
   Features           Add Listing        Listings moderation
   Categories         Swap History       Swaps
   Footer                                Feedback
        └──────────────────┴──────────────────┘
                           ▼
                  components/ui/   shadcn/ui over Radix primitives
```

### Layer separation

| Layer | Contents | Rule |
| :--- | :--- | :--- |
| **Pages** | `Index`, `UserDashboard`, `AdminDashboard`, `NotFound` | Own routing and page state |
| **Features** | `Header`, `Hero`, `Features`, `Categories`, `Footer` | Domain-aware, composed by pages |
| **Primitives** | `components/ui/*` | Zero domain knowledge — reusable anywhere |

The `ui/` directory is deliberately dumb. Nothing in it knows what a swap or a listing is,
which is what lets the same primitives serve both the user and admin dashboards.

### Two dashboards, one shape

Both dashboards are tables over the same entities seen from different angles — a user sees
*their* listings and swaps, an administrator sees *everyone's* plus a moderation queue and
a feedback inbox. Sharing the primitive layer means a change to table or dialog behaviour
lands in both at once.

### Where the API attaches

`QueryClientProvider` is already mounted at the root, so every screen can call
`useQuery`/`useMutation` the moment an endpoint exists. Fixture data is read in the page
components, which is the single seam to replace:

```
  today        page component ──► fixture array
  next         page component ──► useQuery ──► fetch('/api/…')
```

Because the fixtures match the shape the components render, swapping the source does not
change the components themselves.

### Form and validation stack

React Hook Form drives the listing form, with Zod schemas through `@hookform/resolvers`.
Defining the shape in Zod means the same schema can validate on the client now and be
reused by the API later, rather than writing the rules twice.

## Features

- **Item listings** — post a garment with photos, title, description, category, size, and
  condition (Like New / Excellent / Good / Fair)
- **Category browsing** — Women's, Men's, Kids' and more
- **User dashboard** — manage your listings and review your full swap history, showing
  what you gave and what you received in each exchange
- **Admin dashboard** — user management, listings moderation (with a review queue), swap
  statistics, and a user-feedback inbox with reply support
- **Pickup locations** — each listing carries a meetup location so swaps stay local
- **Dark mode** via `next-themes`
- **Responsive** — built mobile-first

The landing page presents the platform's six pillars: eco-friendly swapping, verified
users with safe pickup locations, quality review with post-swap ratings, a local
community, easy meetups, and style-and-size based smart matching.

---

## Screens

| Route | Screen | Purpose |
|---|---|---|
| `/` | Landing | Hero, impact stats, feature overview, categories |
| `/dashboard` | User dashboard | My Listings, Add New Listing, Swap History |
| `/admin` | Admin dashboard | Users, Listings Management, Swaps, User Feedback |
| `*` | Not Found | 404 fallback |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite 7 |
| Styling | Tailwind CSS + `tailwindcss-animate` |
| Components | shadcn/ui (Radix UI primitives) |
| Routing | React Router 7 |
| Forms | React Hook Form + Zod validation |
| Data fetching | TanStack Query |
| Charts | Recharts |
| Icons | Lucide |
| Notifications | Sonner |

---

## Getting Started

**Prerequisites:** Node.js 18+ and npm.

```bash
git clone https://github.com/TrinayanMahato/threads-exchange-hub.git
cd threads-exchange-hub
npm install
npm run dev
```

Vite serves the app at `http://localhost:5173`.

### Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Production build to `dist/` |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

---

## Project Structure

```
src/
├── App.tsx                  # Router and providers
├── pages/
│   ├── Index.tsx            # Landing page
│   ├── UserDashboard.tsx    # Listings + swap history
│   ├── AdminDashboard.tsx   # Moderation and platform stats
│   └── NotFound.tsx
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx             # Headline, impact stats
│   ├── Features.tsx         # The six platform pillars
│   ├── Categories.tsx
│   ├── Footer.tsx
│   └── ui/                  # shadcn/ui component library
├── assets/
│   └── hero-clothing-swap.jpg
└── App.css
```

---
