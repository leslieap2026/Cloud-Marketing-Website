import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

const steps = [
  {
    num: "01",
    title: "Discovery call",
    body: "We hop on a free 30-minute call so I can hear about your goals, your market, and whether I'm the right fit. No pressure, no pitch deck.",
  },
  {
    num: "02",
    title: "Onboarding & proposal",
    body: "I look at where you are today and put together a clear, prioritized plan tied to the outcomes you want to hit.",
  },
  {
    num: "03",
    title: "Execution",
    body: "I get to work on your project and keep you looped in at every step, so there's never any mystery about what's happening.",
  },
  {
    num: "04",
    title: "Hand-off & next steps",
    body: "I walk you through everything I made or found, and leave you with clear next steps so you can keep growing.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section bg-surface-2">
      <div className="container-x">
        <SectionHead
          eyebrow="Process"
          title="How working together works"
          sub="A simple path from our first call to real growth. You'll always know what I'm working on and why."
        />
        <div className="grid grid-cols-4 gap-[22px] max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={(i % 4) * 90}>
              <article className="relative h-full rounded-card border border-line bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <span className="block text-[2.6rem] font-medium leading-none text-brand">
                  {s.num}
                </span>
                <h3 className="mb-2 mt-4 text-[1.2rem] font-medium">{s.title}</h3>
                <p className="text-[0.95rem] leading-relaxed text-ink-soft">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
