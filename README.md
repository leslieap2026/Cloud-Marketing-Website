# Cloud Marketing LLC — Marketing Website

A modern, responsive marketing website for Cloud Marketing LLC, built with
**Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**.

## Tech stack

- [Next.js 15](https://nextjs.org/) — App Router, React Server Components
- React 19 + TypeScript
- Tailwind CSS 3 for styling (design tokens in `tailwind.config.ts`)
- `next/font` for self-hosted Inter

## Features

- **Responsive design** — looks great from mobile to desktop
- **Sticky header** with a collapsible mobile navigation menu (client component)
- **Hero** with a dashboard-style visual (live metrics + bar chart)
- **Feature grid**, **solutions**, **pricing**, and **testimonials** sections
- **Signup form** with client-side validation and friendly feedback
- Accessible markup (semantic landmarks, ARIA labels, keyboard-friendly nav)

## Project structure

```
.
├── app/
│   ├── globals.css      # Tailwind layers + component classes
│   ├── layout.tsx       # Root layout, fonts, metadata
│   └── page.tsx         # Home page — composes the sections
├── components/
│   ├── Header.tsx       # "use client" — mobile nav
│   ├── Hero.tsx
│   ├── Logos.tsx
│   ├── SectionHead.tsx
│   ├── Features.tsx
│   ├── Solutions.tsx
│   ├── Pricing.tsx
│   ├── Testimonials.tsx
│   ├── CTA.tsx          # "use client" — signup form
│   └── Footer.tsx
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
- **Content** (copy, pricing, testimonials) lives as typed arrays at the top of
  each component in `components/`.
- **Branding** — replace the inline SVG logo and `Cloud Marketing` text in
  `Header.tsx` / `Footer.tsx`.
