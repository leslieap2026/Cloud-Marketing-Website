import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

const services = [
  {
    title: "Social Media Management",
    body: "We handle the content, the calendar, and the community — turning your feed into a place the right people want to follow, trust, and buy from.",
    icon: (
      <path
        d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v6A2.5 2.5 0 0 1 16.5 15H10l-4 4v-4h-.5A.5.5 0 0 1 5 14.5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Email Marketing",
    body: "We craft email flows and campaigns that nurture new subscribers into loyal, repeat customers — an audience you own, not one you rent.",
    icon: (
      <>
        <rect x="4" y="6" width="16" height="12" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M5 8l7 5 7-5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Brand Storytelling",
    body: "We help you say what makes you you — clearly and consistently — so the right audience feels it the moment they find you.",
    icon: (
      <path
        d="M12 4l2.2 4.6 5 .6-3.7 3.4 1 4.9L12 15.8 7.5 18l1-4.9L4.8 9.7l5-.6z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container-x">
        <SectionHead
          eyebrow="What we do"
          title="Social and email, working as one"
          sub="We combine the two channels that matter most for early-stage CPG brands into a single, cohesive strategy — built to grow awareness, an engaged audience, and customers who keep coming back."
        />
        <div className="grid grid-cols-3 gap-6 max-[720px]:grid-cols-1">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 90}>
              <article className="group h-full rounded-card border border-line bg-surface p-9 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <div className="mb-6 grid h-14 w-14 place-items-center rounded-full bg-surface-2 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-surface">
                  <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
                    {s.icon}
                  </svg>
                </div>
                <h3 className="mb-3 text-[1.4rem] font-medium tracking-[-0.01em]">{s.title}</h3>
                <p className="leading-relaxed text-ink-soft">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
