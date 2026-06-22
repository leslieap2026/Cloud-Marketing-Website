import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

const results = [
  { num: "120+", label: "Brands grown" },
  { num: "4.1x", label: "Average return on ad spend" },
  { num: "$48M", label: "Revenue driven for clients" },
  { num: "12 yrs", label: "In the marketing trenches" },
];

const quotes = [
  {
    quote:
      "Within six months our inbound leads tripled and we finally had a brand that felt like us. It's the best investment we've made.",
    initials: "AK",
    name: "Brittani Washington",
    role: "Brit Services Consulting LLC.",
  },
  {
    quote:
      "They treated our budget like their own. Every dollar of ad spend was accounted for — and our ROAS climbed from 1.8x to 4.3x.",
    initials: "DM",
    name: "Diego Morales",
    role: "CMO, Northpeak",
  },
  {
    quote:
      "It feels like having a senior marketing team on staff, minus the overhead. Responsive, sharp, and genuinely invested in our growth.",
    initials: "RP",
    name: "Rina Patel",
    role: "CEO, Lumen Studio",
  },
];

export default function Testimonials() {
  return (
    <section id="results" className="section bg-surface-2">
      <div className="container-x">
        <SectionHead
          eyebrow="Results"
          title="Results that speak louder than promises"
          sub="We measure our work the same way you do — in revenue, leads, and growth you can take to the bank."
        />

        {/* Results band */}
        <div className="mb-14 grid grid-cols-4 gap-[18px] rounded-card p-10 text-surface max-[720px]:grid-cols-2 bg-[linear-gradient(150deg,#2a241f,#3a3128)]">
          {results.map((r, i) => (
            <Reveal key={r.label} delay={i * 110} className="text-center">
              <span className="gradient-text block text-[2.4rem] font-medium">{r.num}</span>
              <span className="text-[0.9rem] text-[#c9bdb0]">{r.label}</span>
            </Reveal>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-3 gap-[22px] max-[900px]:grid-cols-1">
          {quotes.map((t, i) => (
            <Reveal key={t.name} delay={i * 110} className="h-full">
              <figure className="m-0 h-full rounded-card border border-line bg-surface p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <blockquote className="mb-6 text-[1.08rem] leading-relaxed text-ink">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="flex items-center gap-3 text-[0.9rem] text-muted">
                  <span className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,#b0876a,#8a6850)] font-semibold text-surface">
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
