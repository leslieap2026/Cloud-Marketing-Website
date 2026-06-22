const items = [
  { label: "Startups", body: "Generous free tier and usage-based pricing so you only pay as you grow." },
  { label: "Enterprises", body: "Dedicated support, private networking, and custom compliance controls." },
  { label: "AI & Data", body: "GPU clusters and managed pipelines to train and serve models at scale." },
  { label: "E-commerce", body: "Elastic capacity that handles Black Friday traffic without breaking a sweat." },
];

const stats = [
  { num: "99.99%", label: "Guaranteed uptime SLA" },
  { num: "12,000+", label: "Active engineering teams" },
  { num: "200+", label: "Global edge locations" },
  { num: "40%", label: "Average cost savings" },
];

export default function Solutions() {
  return (
    <section id="solutions" className="section bg-surface-2">
      <div className="container-x grid items-center gap-14 max-[900px]:grid-cols-1 min-[901px]:grid-cols-2">
        <div>
          <p className="eyebrow">Solutions</p>
          <h2 className="mb-2 text-[clamp(1.7rem,3.5vw,2.6rem)] font-bold tracking-[-0.02em]">
            Built for the way your team works
          </h2>
          <p className="section-sub">
            From early-stage startups to global enterprises, Cloud Marketing adapts to your stack and your scale.
          </p>
          <ul className="my-7 grid gap-3.5">
            {items.map((i) => (
              <li key={i.label} className="relative pl-9 text-ink-soft">
                <span className="absolute left-0 top-0 grid h-[22px] w-[22px] place-items-center rounded-full bg-brand text-[0.75rem] font-bold text-white">
                  ✓
                </span>
                <strong className="text-ink">{i.label}</strong> — {i.body}
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-primary">
            Talk to sales
          </a>
        </div>

        <div className="grid grid-cols-2 gap-[18px] rounded-card p-9 text-white max-[720px]:grid-cols-1 bg-[linear-gradient(160deg,#141b38,#0b1020)]">
          {stats.map((s) => (
            <div key={s.label}>
              <span className="gradient-text block text-[2rem] font-extrabold">{s.num}</span>
              <span className="text-[0.9rem] text-[#aab4d4]">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
