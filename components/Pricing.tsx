import SectionHead from "./SectionHead";

const plans = [
  {
    name: "Starter",
    amount: "$0",
    period: "/mo",
    sub: "For side projects and experiments",
    features: ["2 vCPUs & 4 GB RAM", "50 GB storage", "Community support", "1 region"],
    cta: "Get started",
    featured: false,
  },
  {
    name: "Growth",
    amount: "$49",
    period: "/mo",
    sub: "For growing teams in production",
    features: [
      "Up to 32 vCPUs & 64 GB RAM",
      "1 TB storage",
      "Priority email + chat support",
      "Autoscaling across 6 regions",
      "Advanced monitoring",
    ],
    cta: "Start free trial",
    featured: true,
  },
  {
    name: "Enterprise",
    amount: "Custom",
    period: "",
    sub: "For organizations at scale",
    features: [
      "Unlimited compute & storage",
      "Dedicated 24/7 support",
      "Private networking & SSO",
      "Custom compliance & SLAs",
    ],
    cta: "Contact sales",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container-x">
        <SectionHead
          eyebrow="Pricing"
          title="Simple, transparent pricing"
          sub="Start free. Upgrade when you're ready. No hidden fees, ever."
        />
        <div className="grid grid-cols-3 items-start gap-6 max-[900px]:grid-cols-1">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`relative rounded-card border bg-surface p-8 ${
                p.featured
                  ? "border-brand shadow-[0_24px_50px_-22px_rgba(12,192,223,0.45)] min-[901px]:-translate-y-2"
                  : "border-line shadow-soft"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[linear-gradient(135deg,#0cc0df,#264a54)] px-3.5 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.08em] text-white">
                  Most popular
                </span>
              )}
              <h3 className="mb-1 text-xl font-semibold">{p.name}</h3>
              <p className="mb-1">
                <span className="text-[2.6rem] font-extrabold">{p.amount}</span>
                {p.period && <span className="font-medium text-muted">{p.period}</span>}
              </p>
              <p className="mb-5 text-[0.92rem] text-muted">{p.sub}</p>
              <ul className="mb-6 grid gap-2.5">
                {p.features.map((f) => (
                  <li key={f} className="relative pl-6 text-ink-soft">
                    <span className="absolute left-0 font-bold text-[#22c55e]">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`btn btn-block ${p.featured ? "btn-primary" : "btn-ghost"}`}
              >
                {p.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
