import TypedText from "./TypedText";

export default function Hero() {
  return (
    <section className="hero-aurora relative overflow-hidden pb-24 pt-20 text-white">
      {/* fun textured overlays */}
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="orb-float-1 pointer-events-none absolute -left-16 top-10 h-[260px] w-[260px] rounded-full opacity-40 blur-3xl bg-[radial-gradient(circle_at_30%_30%,#ffffff,transparent_70%)]" aria-hidden="true" />
      <div className="orb-float-2 pointer-events-none absolute -right-10 top-40 h-[220px] w-[220px] rounded-full opacity-30 blur-3xl bg-[radial-gradient(circle_at_30%_30%,#bff4ff,transparent_70%)]" aria-hidden="true" />

      <div className="container-x relative z-[2] flex flex-col items-center text-center">
        <p className="anim-up mb-3 text-[0.78rem] font-bold uppercase tracking-[0.16em] text-white/80">
          A full-service growth marketing studio
        </p>
        <h1
          className="anim-up mx-auto mb-5 max-w-[16ch] text-[clamp(2.7rem,6.5vw,4.7rem)] font-extrabold leading-[1.08] tracking-[-0.02em] text-white"
          style={{ animationDelay: "80ms" }}
        >
          <TypedText text="Marketing that helps translate your brand to the right audience." />
        </h1>
        <p
          className="anim-up mx-auto max-w-[54ch] text-[1.18rem] text-white/85"
          style={{ animationDelay: "160ms" }}
        >
          Cloud Marketing LLC is a agency that focuses on helping women founders
          in the Consumer Product Goods Industry — so you get campaigns that
          don&apos;t just look good, they grow your bottom line.
        </p>
        <div
          className="anim-up my-7 flex flex-wrap justify-center gap-3.5"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="#contact"
            className="btn bg-white text-ink shadow-soft hover:bg-white"
          >
            Book a free strategy call
          </a>
          <a
            href="#results"
            className="btn border-white/60 bg-transparent text-white hover:bg-white/10"
          >
            See the results →
          </a>
        </div>
        <ul
          className="anim-up flex flex-wrap justify-center gap-5 text-[0.92rem] text-white/75"
          style={{ animationDelay: "320ms" }}
        >
          <li>✓ Free 30-minute call</li>
          <li>✓ No long-term contracts</li>
          <li>✓ Senior team, no hand-offs</li>
        </ul>

        {/* Showcase image */}
        <div
          className="anim-up relative mx-auto mt-14 w-full max-w-[860px]"
          style={{ animationDelay: "400ms" }}
        >
          <img
            src="/hero-dashboard.svg"
            alt="Marketing analytics dashboard showing 62% revenue growth, 4.2x return on ad spend, and rising campaign performance"
            width={860}
            height={549}
            className="relative z-[2] w-full rounded-card border border-white/20 shadow-card"
          />

          {/* Floating badges */}
          <div className="absolute left-3 top-5 z-[3] hidden items-center gap-2 rounded-full border border-line bg-white/95 px-3.5 py-2 text-[0.82rem] font-semibold text-ink-soft shadow-soft backdrop-blur sm:flex">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#22c55e] shadow-[0_0_0_4px_rgba(34,197,94,0.18)]" />
            Live campaign — Performing
          </div>
          <div className="absolute -bottom-4 right-4 z-[3] hidden rounded-card border border-line bg-white px-4 py-3 shadow-card sm:block">
            <span className="block text-[1.3rem] font-extrabold text-ink">+318%</span>
            <span className="text-[0.78rem] text-muted">Inbound leads</span>
          </div>
        </div>
      </div>
    </section>
  );
}
