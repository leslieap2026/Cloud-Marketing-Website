import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

const steps = [
  {
    num: "01",
    title: "Discovery call",
    body: "We hop on a free 30-minute call to understand your goals, your market, and whether we're the right fit. No pressure, no pitch deck.",
  },
  {
    num: "02",
    title: "On-Boarding Process & Proposal",
    body: "We audit where you are today and build a clear, prioritized plan mapped directly to the outcomes you want to hit.",
  },
  {
    num: "03",
    title: "Execution",
    body: "We get to work — brand, content, campaigns, funnels — with you looped in at every step and zero mystery about what's happening.",
  },
  {
    num: "04",
    title: "Optimize & grow",
    body: "We measure what's working, double down on it, and keep compounding your results month over month.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section bg-surface-2">
      <div className="container-x">
        <SectionHead
          eyebrow="Process"
          title="How working together works"
          sub="A simple, proven path from first call to real growth — no mystery, no bloat."
        />
        <div className="grid grid-cols-4 gap-[22px] max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={(i % 4) * 90}>
              <article className="relative h-full rounded-card border border-line bg-surface p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-card">
                <span className="block text-[2.4rem] font-extrabold leading-none text-brand">
                  {s.num}
                </span>
                <h3 className="mb-2 mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="text-[0.95rem] text-ink-soft">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
