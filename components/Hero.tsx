const metrics = [
  { val: "42ms", label: "Latency" },
  { val: "99.99%", label: "Uptime" },
  { val: "1.2M", label: "Requests/s" },
  { val: "18", label: "Regions" },
];

const bars = [40, 65, 50, 80, 70, 95, 60];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-[72px] bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(12,192,223,0.12),transparent_60%),radial-gradient(900px_500px_at_0%_0%,rgba(34,211,238,0.10),transparent_55%)]">
      <div className="container-x grid items-center gap-14 max-[900px]:grid-cols-1 min-[901px]:grid-cols-[1.1fr_0.9fr]">
        {/* Copy */}
        <div className="max-[900px]:order-2">
          <p className="eyebrow">Trusted by 12,000+ engineering teams</p>
          <h1 className="mb-3 text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold leading-[1.15] tracking-[-0.02em]">
            Cloud infrastructure that scales with your ambition.
          </h1>
          <p className="max-w-[36ch] text-[1.18rem] text-ink-soft">
            Deploy in seconds, scale to millions. Cloud Marketing gives you compute,
            storage, and global networking on a platform engineered for speed,
            security, and predictable pricing.
          </p>
          <div className="my-6 flex flex-wrap gap-3.5">
            <a href="#contact" className="btn btn-primary">
              Start free trial
            </a>
            <a href="#features" className="btn btn-ghost">
              Explore features →
            </a>
          </div>
          <ul className="flex flex-wrap gap-5 text-[0.92rem] text-muted">
            <li>✓ No credit card required</li>
            <li>✓ 99.99% uptime SLA</li>
            <li>✓ Cancel anytime</li>
          </ul>
        </div>

        {/* Visual */}
        <div className="relative min-h-[340px] max-[900px]:order-1" aria-hidden="true">
          <div className="absolute -top-8 right-2.5 h-[220px] w-[220px] rounded-full opacity-50 blur-lg bg-[radial-gradient(circle_at_30%_30%,#0cc0df,transparent_70%)]" />
          <div className="absolute -bottom-5 left-0 h-[180px] w-[180px] rounded-full opacity-50 blur-lg bg-[radial-gradient(circle_at_30%_30%,#22d3ee,transparent_70%)]" />
          <div className="relative z-[2] rounded-card border border-line bg-surface p-[22px] shadow-card">
            <div className="flex items-center gap-2 text-[0.92rem] font-semibold text-ink-soft">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#22c55e] shadow-[0_0_0_4px_rgba(34,197,94,0.18)]" />
              Production cluster — Healthy
            </div>
            <div className="my-[18px] grid grid-cols-2 gap-3">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-[10px] bg-surface-2 px-3.5 py-3">
                  <span className="block text-[1.25rem] font-extrabold">{m.val}</span>
                  <span className="text-[0.8rem] text-muted">{m.label}</span>
                </div>
              ))}
            </div>
            <div className="flex h-20 items-end gap-2 pt-1.5">
              {bars.map((h, i) => (
                <span
                  key={i}
                  className="flex-1 rounded-t-md opacity-85 bg-gradient-to-b from-brand to-brand-2"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
