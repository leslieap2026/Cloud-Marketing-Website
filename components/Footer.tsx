const cols = [
  { title: "Product", links: [["Features", "#features"], ["Pricing", "#pricing"], ["Solutions", "#solutions"]] },
  { title: "Company", links: [["About", "#"], ["Careers", "#"], ["Blog", "#"]] },
  { title: "Resources", links: [["Docs", "#"], ["API Reference", "#"], ["Status", "#"]] },
];

export default function Footer() {
  return (
    <footer className="bg-bg px-0 pb-7 pt-14 text-[#cbd5e1]">
      <div className="container-x grid gap-10 border-b border-white/10 pb-9 max-[720px]:grid-cols-1 min-[721px]:grid-cols-[1.4fr_2fr]">
        <div>
          <a href="#top" className="text-[1.2rem] font-extrabold text-white no-underline">
            Cloud <span className="text-brand">Marketing</span>
          </a>
          <p className="mt-2.5 max-w-[28ch] text-[#94a3b8]">
            Infrastructure that scales with your ambition.
          </p>
        </div>
        <nav className="grid grid-cols-3 gap-6 max-[720px]:grid-cols-2" aria-label="Footer">
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="mb-3.5 text-[0.95rem] font-semibold text-white">{c.title}</h4>
              {c.links.map(([label, href]) => (
                <a key={label} href={href} className="mb-2.5 block text-[#94a3b8] no-underline hover:text-white">
                  {label}
                </a>
              ))}
            </div>
          ))}
        </nav>
      </div>
      <div className="container-x flex items-center justify-between pt-6 text-[0.88rem] text-[#94a3b8] max-[720px]:flex-col max-[720px]:gap-3 max-[720px]:text-center">
        <p>© {new Date().getFullYear()} Cloud Marketing LLC. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#" className="text-[#94a3b8] no-underline hover:text-white">Privacy</a>
          <a href="#" className="text-[#94a3b8] no-underline hover:text-white">Terms</a>
          <a href="#" className="text-[#94a3b8] no-underline hover:text-white">Security</a>
        </div>
      </div>
    </footer>
  );
}
