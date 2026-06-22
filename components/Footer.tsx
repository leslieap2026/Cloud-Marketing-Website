const cols = [
  {
    title: "Services",
    links: [
      ["Brand & Positioning", "#services"],
      ["Content & Social", "#services"],
      ["Paid Advertising", "#services"],
      ["Websites & Funnels", "#services"],
    ],
  },
  {
    title: "Studio",
    links: [
      ["About", "#about"],
      ["Process", "#process"],
      ["Results", "#results"],
    ],
  },
  {
    title: "Connect",
    links: [
      ["hello@cloudmarketing.com", "mailto:hello@cloudmarketing.com"],
      ["Instagram", "#"],
      ["LinkedIn", "#"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-bg px-0 pb-7 pt-16 text-[#d8cfc2]">
      <div className="container-x grid gap-10 border-b border-white/10 pb-10 max-[720px]:grid-cols-1 min-[721px]:grid-cols-[1.4fr_2fr]">
        <div>
          <a href="#top" className="font-heading text-[1.35rem] font-medium text-surface no-underline">
            Cloud <span className="text-brand">Marketing</span>
          </a>
          <p className="mt-3 max-w-[32ch] leading-relaxed text-[#a89c8e]">
            We close the gap between a great product and the audience it deserves.
          </p>
          <a href="#contact" className="btn btn-sm mt-6 bg-surface text-ink hover:bg-surface-2">
            Book a call
          </a>
        </div>
        <nav className="grid grid-cols-3 gap-6 max-[720px]:grid-cols-2" aria-label="Footer">
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="mb-3.5 text-[0.95rem] font-semibold text-surface">{c.title}</h4>
              {c.links.map(([label, href]) => (
                <a key={label} href={href} className="mb-2.5 block break-words text-[#a89c8e] no-underline hover:text-surface">
                  {label}
                </a>
              ))}
            </div>
          ))}
        </nav>
      </div>
      <div className="container-x flex items-center justify-between pt-6 text-[0.88rem] text-[#a89c8e] max-[720px]:flex-col max-[720px]:gap-3 max-[720px]:text-center">
        <p>© {new Date().getFullYear()} Cloud Marketing LLC. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#" className="text-[#a89c8e] no-underline hover:text-surface">Privacy</a>
          <a href="#" className="text-[#a89c8e] no-underline hover:text-surface">Terms</a>
        </div>
      </div>
    </footer>
  );
}
