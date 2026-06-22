import Reveal from "./Reveal";

const principles = [
  "Senior talent on every project — never outsourced or handed off.",
  "Strategy tied to revenue, not vanity metrics.",
  "Transparent reporting you can actually understand.",
  "A partner who treats your business like an owner would.",
];

export default function Solutions() {
  return (
    <section id="about" className="section">
      <div className="container-x grid items-center gap-14 max-[900px]:grid-cols-1 min-[901px]:grid-cols-2">
        <Reveal>
          <p className="eyebrow">About</p>
          <h2 className="mb-2 text-[clamp(1.7rem,3.5vw,2.6rem)] font-bold tracking-[-0.02em]">
            I started Cloud Marketing to do marketing differently.
          </h2>
          <p className="section-sub">
            After a decade leading marketing for agencies and fast-growing
            brands, I kept seeing the same thing: businesses paying for activity
            instead of outcomes. So I built the partner I always wished we&apos;d
            had — senior, accountable, and obsessed with results. We stay small on
            purpose, so the people you meet are the people doing the work.
          </p>
          <ul className="my-7 grid gap-3.5">
            {principles.map((p) => (
              <li key={p} className="relative pl-9 text-ink-soft">
                <span className="absolute left-0 top-0 grid h-[22px] w-[22px] place-items-center rounded-full bg-brand text-[0.75rem] font-bold text-white">
                  ✓
                </span>
                {p}
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-primary">
            Let&apos;s talk
          </a>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-card p-9 text-white bg-[linear-gradient(160deg,#2a525e,#1d3a42)]">
            <img
              src="/avatar-founder.svg"
              alt="Jordan Lee, Founder and Lead Strategist"
              width={64}
              height={64}
              className="h-16 w-16 rounded-full"
            />
            <p className="mt-5 text-[1.15rem] font-semibold leading-snug">
              &ldquo;I only take on brands I genuinely believe I can grow — and
              then I treat it like my own.&rdquo;
            </p>
            <p className="mt-5 font-semibold">Jordan Lee</p>
            <p className="text-[0.9rem] text-[#aab4d4]">Founder &amp; Lead Strategist</p>
            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
              <div>
                <span className="block text-[1.5rem] font-extrabold">10+</span>
                <span className="text-[0.85rem] text-[#aab4d4]">Years in marketing</span>
              </div>
              <div>
                <span className="block text-[1.5rem] font-extrabold">Boutique</span>
                <span className="text-[0.85rem] text-[#aab4d4]">By design, on purpose</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
