import Link from "next/link";
import Reveal from "./Reveal";


export function HomeIntro() {
  return (
    <section className="section">
      <div className="container-x grid items-center gap-12 max-[900px]:grid-cols-1 min-[901px]:grid-cols-[1fr_1.3fr]">
        <Reveal>
          {/* Swap this placeholder for a photo: put it in public/ and use <img src="/your-photo.jpg" ... /> */}
          <div
            className="mx-auto grid aspect-[4/5] w-full max-w-[360px] place-items-center rounded-card bg-[linear-gradient(160deg,#eef3fc,#d7eef4)] text-brand"
            aria-hidden="true"
          >
            <svg width="96" height="96" viewBox="0 0 24 24" fill="none">
              <path
                d="M6.5 19a4.5 4.5 0 0 1-.5-8.97A6 6 0 0 1 17.7 9.2a3.9 3.9 0 0 1-.2 9.8H6.5Z"
                fill="currentColor"
                opacity=".35"
              />
            </svg>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow">Hi there</p>
          <h2 className="mb-5 text-[clamp(1.7rem,3.5vw,2.6rem)] font-medium leading-[1.15] tracking-[-0.02em]">
            I&apos;m your marketing partner.
          </h2>
          <div className="space-y-4 text-[1.08rem] leading-relaxed text-ink-soft">
            <p>
              I understand what small brands need, because I&apos;ve built my own
              path from scratch. Hiring a big agency is often expensive and
              doesn&apos;t guarantee they&apos;ll get your vision. With me, you
              work with one person who cares about your brand as much as you do.
            </p>
          </div>
          <Link href="/about" className="btn btn-ghost mt-7">
            Read my story
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function HomeQuote() {
  return (
    <section className="section">
      <Reveal className="container-x mx-auto max-w-[760px] text-center">
        <blockquote className="text-[clamp(1.3rem,2.6vw,1.8rem)] font-medium leading-[1.35] tracking-[-0.01em] text-ink">
          &ldquo;Within six months our inbound leads tripled and we finally had a
          brand that felt like us. It&apos;s the best investment we&apos;ve made.&rdquo;
        </blockquote>
        <p className="mt-6 text-[0.95rem] text-muted">
          <strong className="text-ink">Brittani Washington</strong>, Brit Services Consulting LLC.
        </p>
        <Link href="/about#results" className="mt-6 inline-block text-[0.95rem] font-medium text-brand">
          More kind words →
        </Link>
      </Reveal>
    </section>
  );
}

export function HomeBanner() {
  return (
    <section className="pb-[104px] max-[720px]:pb-20">
      <Reveal className="container-x">
        <div className="rounded-card bg-[linear-gradient(160deg,#2a525e,#1d3a42)] px-8 py-14 text-center text-white md:px-16">
          <h2 className="text-[clamp(1.6rem,3.4vw,2.4rem)] font-medium leading-[1.2] tracking-[-0.01em] text-white">
            Let&apos;s give your brand a voice.
          </h2>
          <p className="mx-auto mt-4 max-w-[46ch] text-[1.05rem] text-[#aab4d4]">
            Book a free 30-minute call. No pressure, no jargon, just a real
            conversation about your goals.
          </p>
          <Link href="/contact" className="btn mt-7 bg-white text-ink hover:bg-surface-2">
            Book a free call
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
