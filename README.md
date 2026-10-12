# Cloud Marketing LLC — Marketing Website

A modern, responsive marketing website for Cloud Marketing LLC, built with
**Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**.

## Tech stack

- [Next.js 15](https://nextjs.org/) — App Router, React Server Components
- React 19 + TypeScript
- Tailwind CSS 3 for styling (design tokens in `tailwind.config.ts`)
- `next/font` for self-hosted Poppins (headings), with a Helvetica Neue body stack

## Pages

The site reads in a first-person, freelancer voice and is split into pages:

1. **Home** (`/`) — hero, short intro, service tiles, a featured quote and a call banner, each linking to its page
2. **Services** (`/services`) — the four one-time services
3. **About** (`/about`) — founder story, results + testimonials
4. **Process** (`/process`) — a four-step "how it works"
5. **Blog** (`/blog`) — placeholder until the first posts are written
6. **Contact** (`/contact`) — book-a-call form, linked from every "Book a call" button

The header and footer live in `app/layout.tsx`. Every page except Home ends
with the book-a-call form (`#contact`).

## Project structure

```
.
├── app/
│   ├── globals.css      # Tailwind layers, component classes + animations
│   ├── layout.tsx       # Root layout, fonts, metadata
│   └── page.tsx         # Home page — composes the sections
├── components/
│   ├── Header.tsx       # "use client" — mobile nav
│   ├── Hero.tsx
│   ├── Logos.tsx        # client logo strip (not currently on the page)
│   ├── SectionHead.tsx
│   ├── Services.tsx
│   ├── Testimonials.tsx # results stats + testimonials
│   ├── Solutions.tsx    # About / founder story
│   ├── Process.tsx
│   ├── CTA.tsx          # "use client" — book-a-call form
│   ├── Footer.tsx
│   └── Reveal.tsx       # "use client" — scroll-reveal wrapper
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

## Customizing

- **Colors, fonts, spacing** — extend the theme in `tailwind.config.ts` and the
  component classes in `app/globals.css`.
- **Content** (services, testimonials, process steps, etc.) lives as typed
  arrays at the top of each component in `components/`.
- **Branding** — replace the inline SVG logo and `Cloud Marketing` text in
  `Header.tsx` / `Footer.tsx`.
