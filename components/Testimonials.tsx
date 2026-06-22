import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

const quotes = [
  {
    quote: "We cut our infrastructure costs by 38% and our deploy times went from minutes to seconds. Cloud Marketing just works.",
    initials: "AK",
    name: "Aisha Khan",
    role: "CTO, Aperture",
  },
  {
    quote: "The autoscaling handled our product launch traffic flawlessly. We didn't touch a thing — it just scaled.",
    initials: "DM",
    name: "Diego Morales",
    role: "Lead SRE, Globex",
  },
  {
    quote: "Best developer experience of any cloud we've tried. The API and CLI are a joy, and support is genuinely fast.",
    initials: "RP",
    name: "Rina Patel",
    role: "VP Engineering, Northwind",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container-x">
        <SectionHead eyebrow="Customers" title="Loved by developers and operators" />
        <div className="grid grid-cols-3 gap-[22px] max-[900px]:grid-cols-1">
          {quotes.map((t, i) => (
            <Reveal key={t.name} delay={i * 110} className="h-full">
            <figure className="m-0 h-full rounded-card border border-line bg-surface p-7 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-card">
              <blockquote className="mb-5 text-[1.05rem] text-ink">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="flex items-center gap-3 text-[0.9rem] text-muted">
                <span className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,#0cc0df,#264a54)] font-bold text-white">
                  {t.initials}
                </span>
                <span>
                  <strong className="text-ink">{t.name}</strong>
                  <br />
                  {t.role}
                </span>
              </figcaption>
            </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
