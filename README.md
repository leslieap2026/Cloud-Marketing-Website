# Nimbus Cloud — Marketing Website

A modern, responsive marketing website for a fictional cloud infrastructure
company. Built with plain HTML, CSS, and vanilla JavaScript — no build step,
no dependencies.

## Features

- **Responsive design** — looks great from mobile to desktop
- **Sticky header** with a collapsible mobile navigation menu
- **Hero section** with an animated dashboard-style visual
- **Feature grid**, **solutions**, **pricing**, and **testimonials** sections
- **Signup form** with client-side validation and friendly feedback
- Accessible markup (semantic landmarks, ARIA labels, keyboard-friendly nav)

## File structure

```
.
├── index.html    # Page markup and content
├── styles.css    # Styles and design tokens
├── script.js     # Mobile nav + form validation
└── README.md
```

## Running locally

No tooling required — just open the file:

```bash
open index.html        # macOS
# or serve it for a more production-like setup:
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Customizing

- **Colors & spacing** live as CSS custom properties at the top of
  `styles.css` (`:root`). Change `--brand`, `--brand-2`, `--accent`, etc.
- **Content** (copy, pricing, testimonials) is plain HTML in `index.html`.
- **Branding** — replace the inline SVG logo and `NimbusCloud` text in the
  header and footer.
