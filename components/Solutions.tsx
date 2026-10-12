import Reveal from "./Reveal";

export default function Solutions() {
  return (
    <section id="about" className="section">
      <div className="container-x">
        <Reveal className="mx-auto max-w-[760px] text-center">
          <p className="eyebrow">My story</p>
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
              Small businesses fail every day, not because the product isn&apos;t
              good enough, but because the world never found out about it. A great
              product sitting in silence is still a great product. It just needs a
              voice. That&apos;s why I started Cloud Marketing.
            </p>
            <p>
              My own start in marketing came from making opportunities where
              there weren&apos;t any. In college I couldn&apos;t land an
              internship, so I stopped waiting for one. I reached out to people
              who needed help, did the work, and found out how much I love
              creating. That&apos;s still how I work today: hands-on, scrappy, and
              all in on your brand.
            </p>
            <p>
              Hiring a big agency is often expensive, and it doesn&apos;t
              guarantee they&apos;ll get your vision. I&apos;m not an agency, and
              I don&apos;t hand you off to a junior team. I&apos;m your marketing
              partner. I work only with women-owned CPG brands because I
              understand the weight of building in this space, and I&apos;d rather
              go deep with a few founders than try to serve everyone. When you work
              with me, you get me.
            </p>
          </div>
        </Reveal>

        <Reveal delay={140} className="mx-auto mt-14 max-w-[860px]">
          <figure className="rounded-card bg-[linear-gradient(160deg,#2a525e,#1d3a42)] px-8 py-14 text-center text-white md:px-16">
            <blockquote className="text-[clamp(1.5rem,3.2vw,2.3rem)] font-medium leading-[1.25] tracking-[-0.01em]">
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
