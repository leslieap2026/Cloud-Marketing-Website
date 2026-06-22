import SectionHead from "./SectionHead";

const quotes = [
  {
    quote: "We cut our infrastructure costs by 38% and our deploy times went from minutes to seconds. Nimbus just works.",
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
          {quotes.map((t) => (
            <figure key={t.name} className="m-0 rounded-card border border-line bg-surface p-7 shadow-soft">
              <blockquote className="mb-5 text-[1.05rem] text-ink">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="flex items-center gap-3 text-[0.9rem] text-muted">
                <span className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,#4f6bff,#7c4dff)] font-bold text-white">
                  {t.initials}
                </span>
                <span>
                  <strong className="text-ink">{t.name}</strong>
                  <br />
                  {t.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
