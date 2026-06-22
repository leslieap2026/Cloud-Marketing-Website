import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

const services = [
  {
    icon: "🎯",
    title: "Brand & Positioning",
    body: "Become the obvious choice. We sharpen your message and identity so the right customers instantly understand why you're different — and worth more.",
  },
  {
    icon: "📱",
    title: "Content & Social",
    body: "Stay top of mind everywhere that matters. We create scroll-stopping content and run your channels so your brand shows up consistently and builds an audience.",
  },
  {
    icon: "📈",
    title: "Paid Advertising",
    body: "Grow profitably, not just loudly. We build, test, and optimize paid campaigns that turn ad spend into tracked, predictable revenue.",
  },
  {
    icon: "🧲",
    title: "Websites & Funnels",
    body: "Turn visitors into customers. We design high-converting sites and funnels that do the selling for you, around the clock.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container-x">
        <SectionHead
          eyebrow="Services"
          title="What we do for you"
          sub="Every engagement is built around the outcome you care about — growth — not a checklist of deliverables. Pick one service or let us run the whole engine."
        />
        <div className="grid grid-cols-2 gap-[22px] max-[720px]:grid-cols-1">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 90}>
              <article className="group h-full rounded-card border border-line bg-surface p-8 transition-all duration-200 hover:-translate-y-1 hover:border-transparent hover:shadow-card">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-surface-2 text-2xl transition-transform duration-200 group-hover:scale-110">
                  {s.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{s.title}</h3>
                <p className="text-ink-soft">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
