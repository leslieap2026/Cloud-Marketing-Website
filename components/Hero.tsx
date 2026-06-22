import TypedText from "./TypedText";

export default function Hero() {
  return (
    <section className="hero-aurora relative overflow-hidden pb-24 pt-24 text-ink">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="orb-float-1 pointer-events-none absolute -left-20 top-16 h-[300px] w-[300px] rounded-full opacity-50 blur-3xl bg-[radial-gradient(circle_at_30%_30%,#ffffff,transparent_70%)]" aria-hidden="true" />
      <div className="orb-float-2 pointer-events-none absolute -right-16 top-48 h-[260px] w-[260px] rounded-full opacity-40 blur-3xl bg-[radial-gradient(circle_at_30%_30%,#ffffff,transparent_70%)]" aria-hidden="true" />

      <div className="container-x relative z-[2] flex flex-col items-center text-center">
        <p className="anim-up mb-4 text-[0.78rem] font-bold uppercase tracking-[0.2em] text-[#155fb0]">
          Marketing for women-owned CPG brands
        </p>
        <h1
          className="anim-up mx-auto mb-6 max-w-[18ch] text-[clamp(2.8rem,6.5vw,5rem)] font-extrabold leading-[1.06] tracking-[-0.02em] text-ink"
          style={{ animationDelay: "80ms" }}
        >
          <TypedText text="Your product deserves to be seen." speed={55} />
        </h1>
        <p
          className="anim-up mx-auto max-w-[52ch] text-[1.2rem] leading-relaxed text-ink-soft"
          style={{ animationDelay: "160ms" }}
        >
          Cloud Marketing is a studio built exclusively for women-owned brands in
          consumer products. We blend social media and email into one cohesive
          strategy — so the right people finally discover what you&apos;ve made.
        </p>
        <div
          className="anim-up my-8 flex flex-wrap justify-center gap-3.5"
          style={{ animationDelay: "240ms" }}
        >
          <a href="#contact" className="btn btn-primary">
            Book a free strategy call
          </a>
          <a href="#about" className="btn border-ink/25 bg-white/40 text-ink hover:bg-white/70">
            Our story
          </a>
        </div>
        <ul
          className="anim-up flex flex-wrap justify-center gap-x-7 gap-y-2 text-[0.92rem] text-ink-soft"
          style={{ animationDelay: "320ms" }}
        >
          <li>Women-owned, exclusively</li>
          <li aria-hidden="true">·</li>
          <li>Social + email, in sync</li>
          <li aria-hidden="true">·</li>
          <li>Strategy built for you</li>
        </ul>

        {/* Showcase graphic */}
        <div
          className="anim-up relative mx-auto mt-16 w-full max-w-[820px]"
          style={{ animationDelay: "400ms" }}
        >
          <img
            src="/hero-cloud.svg"
            alt="Soft illustration of white clouds drifting across a blue sky"
            width={820}
            height={515}
            className="relative z-[2] w-full rounded-card border border-white/20 shadow-card"
          />
          <div className="absolute -bottom-5 left-1/2 z-[3] -translate-x-1/2 whitespace-nowrap rounded-full border border-line bg-white px-5 py-2.5 text-[0.85rem] font-medium text-ink-soft shadow-soft">
            The same way clouds are everywhere, your brand can be too.
          </div>
        </div>
      </div>
    </section>
  );
}
