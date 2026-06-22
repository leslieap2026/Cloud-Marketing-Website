# Cloud Marketing LLC — Marketing Website

A modern, responsive marketing website for Cloud Marketing LLC, built with
**Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**.

## Tech stack

- [Next.js 15](https://nextjs.org/) — App Router, React Server Components
- React 19 + TypeScript
- Tailwind CSS 3 for styling (design tokens in `tailwind.config.ts`)
- `next/font` for self-hosted Poppins (headings), with a Helvetica Neue body stack

## Sections

The page follows a marketing-agency narrative:

1. **Hero** — value proposition + primary call to action, with a campaign-performance visual
2. **Services** — four outcome-framed offerings
3. **Results** — social proof: results stats + client testimonials
4. **About** — founder story and principles
5. **Process** — a four-step "how it works"
6. **Primary CTA / Contact** — book-a-call form
7. **Footer** — contact, socials, and navigation

Other niceties: responsive layout, sticky header with mobile nav, scroll-reveal
animations (with `prefers-reduced-motion` support), and accessible markup.

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
│   ├── Logos.tsx        # client logo strip
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
