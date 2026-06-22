import SectionHead from "./SectionHead";

const features = [
  { icon: "⚡", title: "Instant Compute", body: "Spin up virtual machines and containers in under 30 seconds. Autoscale automatically as traffic spikes." },
  { icon: "🛡️", title: "Built-in Security", body: "End-to-end encryption, automated patching, and SOC 2 + ISO 27001 compliance baked into every layer." },
  { icon: "🌍", title: "Global Network", body: "18 regions and 200+ edge locations deliver content and APIs close to every user, worldwide." },
  { icon: "📦", title: "Managed Storage", body: "Durable object storage with 11 nines of durability. Pay only for what you use, no surprises." },
  { icon: "📊", title: "Real-time Insights", body: "Dashboards, logs, and alerts out of the box. Understand performance and cost at a glance." },
  { icon: "🔌", title: "Open APIs", body: "A clean REST and gRPC API, plus Terraform and CLI support. Automate everything in your workflow." },
];

export default function Features() {
  return (
    <section id="features" className="section">
      <div className="container-x">
        <SectionHead
          eyebrow="Platform"
          title="Everything you need to ship and scale"
          sub="One platform, fully integrated. Spend less time on plumbing and more time building products your customers love."
        />
        <div className="grid grid-cols-3 gap-[22px] max-[900px]:grid-cols-2 max-[720px]:grid-cols-1">
          {features.map((f) => (
            <article
              key={f.title}
              className="group rounded-card border border-line bg-surface p-7 transition-all duration-200 hover:-translate-y-1 hover:border-transparent hover:shadow-card"
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-surface-2 text-2xl">
                {f.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{f.title}</h3>
              <p className="text-ink-soft">{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
