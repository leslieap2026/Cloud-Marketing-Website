"use client";

import { useState } from "react";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#solutions", label: "Solutions" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Customers" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header
      id="top"
      className="sticky top-0 z-50 border-b border-line bg-white/85 backdrop-blur-md"
    >
      <div className="container-x flex h-[68px] items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-heading text-[1.2rem] font-extrabold text-ink no-underline">
          <span className="text-brand">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6.5 19a4.5 4.5 0 0 1-.5-8.97A6 6 0 0 1 17.7 9.2a3.9 3.9 0 0 1-.2 9.8H6.5Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span>
            Cloud <span className="text-brand">Marketing</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 min-[721px]:flex" aria-label="Primary">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="font-medium text-ink-soft no-underline hover:text-ink">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary btn-sm">
            Get Started
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="flex flex-col gap-[5px] p-2 min-[721px]:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="h-0.5 w-6 rounded bg-ink" />
          <span className="h-0.5 w-6 rounded bg-ink" />
          <span className="h-0.5 w-6 rounded bg-ink" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="flex flex-col gap-0 border-b border-line bg-surface px-6 pb-5 pt-3 shadow-card min-[721px]:hidden"
          aria-label="Mobile"
        >
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={close} className="py-3 font-medium text-ink-soft no-underline">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={close} className="btn btn-primary mt-2">
            Get Started
          </a>
        </nav>
      )}
    </header>
  );
}
