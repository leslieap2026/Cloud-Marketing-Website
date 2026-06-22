import Reveal from "./Reveal";

export default function Solutions() {
  return (
    <section id="about" className="section">
      <div className="container-x">
        <Reveal className="mx-auto max-w-[760px] text-center">
          <p className="eyebrow">Our why</p>
          <h2 className="mb-8 text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.12] tracking-[-0.02em]">
            Built for women who build.
          </h2>
          <div className="space-y-5 text-[1.12rem] leading-relaxed text-ink-soft">
            <p>
              Women are caregivers, mothers, community leaders, and visionaries.
              They carry entire households, show up for everyone around them, and
              still find a way to build something of their own. Starting a business
              as a woman is already an act of courage. It deserves to be seen.
            </p>
            <p>
              Small businesses fail every day — not because the product isn&apos;t
              good enough, but because the world never found out about it. A great
              product sitting in silence is still a great product. It just needs a
              voice. That is exactly what we provide.
            </p>
            <p>
              We work exclusively with women-owned CPG brands because we understand
              the unique weight of building in this space. We&apos;re not a
              generalist agency trying to serve everyone — we&apos;re built for you,
              specifically.
            </p>
          </div>
        </Reveal>

        <Reveal delay={140} className="mx-auto mt-14 max-w-[860px]">
          <figure className="rounded-card bg-[linear-gradient(160deg,#2a525e,#1d3a42)] px-8 py-14 text-center text-white md:px-16">
            <blockquote className="text-[clamp(1.5rem,3.2vw,2.3rem)] font-bold leading-[1.25] tracking-[-0.01em]">
              &ldquo;The same way clouds are everywhere,
              <br className="hidden sm:block" /> your brand can be too.&rdquo;
            </blockquote>
            <figcaption className="mt-7">
              <a href="#contact" className="btn bg-white text-ink hover:bg-surface-2">
                Let&apos;s give it a voice
              </a>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
