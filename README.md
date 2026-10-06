# SwapStyle

A community clothing-exchange platform — list the clothes you no longer wear, browse what
others have offered, and arrange a swap locally instead of buying new.

Built with React 19, TypeScript, Vite, Tailwind CSS, and shadcn/ui.

> **Project status:** the full front end is built and navigable, running on mock data.
> There is no backend wired up yet — see [Roadmap](#roadmap).

---

## Table of Contents

- [Why](#why)
- [Features](#features)
- [Screens](#screens)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Roadmap](#roadmap)

---

## Why

Clothing is among the most wasteful consumer categories — garments are worn a handful of
times and discarded while still perfectly wearable. SwapStyle treats a wardrobe as
something circulating through a community rather than something you accumulate: every swap
keeps a garment in use and takes one new purchase off the table.

---

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

## Roadmap

The UI is complete; what it needs next is a backend behind it.

- [ ] **Backend API** — currently every screen renders mock data; no `fetch`/API layer exists yet
- [ ] **Authentication** — the landing page promises verified users; wire up real accounts
- [ ] **Image uploads** — the "Click to upload photos" control needs real storage
- [ ] **Swap requests** — propose, accept, and decline a swap between two users
- [ ] **Smart matching** — implement the style/size suggestion algorithm the landing page advertises
- [ ] **Messaging** — the secure messaging the Safe & Secure pillar describes
- [ ] **Ratings** — post-swap reviews feeding the quality guarantee
- [ ] Add a `LICENSE` file
