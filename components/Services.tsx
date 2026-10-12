import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

const services = [
  {
    title: "Website Creation",
    body: "Most websites get built with no direction. I start with strategy: who you're for, what you want visitors to do, and how every page gets them there. Then I build a site that does exactly that.",
    icon: (
      <>
        <rect x="3.5" y="5" width="17" height="14" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3.5 9h17" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="6.3" cy="7" r=".6" fill="currentColor" />
        <circle cx="8.3" cy="7" r=".6" fill="currentColor" />
      </>
    ),
  },
  {
    title: "Social Media Management",
    body: "I take care of the content, the calendar, and the community, and turn your feed into a place the right people want to follow, trust, and buy from.",
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
    title: "Marketing Consultation",
    body: "Advice and fresh ideas on how to scale your business and reach the customers you actually want. You leave with a clear plan you can act on right away.",
    icon: (
      <path
        d="M12 4a5.5 5.5 0 0 0-3.3 9.9c.5.4.8 1 .8 1.6V17h5v-1.5c0-.6.3-1.2.8-1.6A5.5 5.5 0 0 0 12 4zM10 20h4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Marketing Audits",
    body: "A close look at your website or social media. I'll show you what's working, what's holding you back, and exactly what to fix first.",
    icon: (
      <>
        <circle cx="10.5" cy="10.5" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M14.5 14.5L19 19" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </>
    ),
  },
];

export default function Services({ preview = false }: { preview?: boolean }) {
  return (
    <section id="services" className="section">
      <div className="container-x">
        <SectionHead
          eyebrow="What I do"
          title="One-time projects, built around your goals"
          sub="No long contracts. Pick the project you need, and I'll bring the strategy and the hands-on work to get it done."
        />
        <div className="grid grid-cols-2 gap-6 max-[720px]:grid-cols-1">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 90}>
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
        {preview && (
          <div className="mt-10 text-center">
            <a href="/services" className="btn btn-ghost">
              See how each service works
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
