export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-20 bg-[radial-gradient(1100px_600px_at_50%_-12%,rgba(30,111,255,0.22),transparent_60%),radial-gradient(800px_500px_at_85%_10%,rgba(12,192,223,0.16),transparent_55%),linear-gradient(180deg,#e9f1ff,#ffffff)]">
      <div className="container-x flex flex-col items-center text-center">
        <p className="anim-up eyebrow">A full-service growth marketing studio</p>
        <h1
          className="anim-up mx-auto mb-4 max-w-[16ch] text-[clamp(2.3rem,5.5vw,3.8rem)] font-extrabold leading-[1.1] tracking-[-0.02em]"
          style={{ animationDelay: "80ms" }}
        >
          Marketing that helps growing brands turn attention into revenue.
        </h1>
        <p
          className="anim-up mx-auto max-w-[54ch] text-[1.18rem] text-ink-soft"
          style={{ animationDelay: "160ms" }}
        >
          Cloud Marketing LLC is a agency that focuses on helping women founders in the Consumer Product Goods Industry — so you get campaigns that don&apos;t just look
          good, they grow your bottom line.
        </p>
        <div
          className="anim-up my-7 flex flex-wrap justify-center gap-3.5"
          style={{ animationDelay: "240ms" }}
        >
          <a href="#contact" className="btn btn-primary">
            Book a free strategy call
          </a>
          <a href="#results" className="btn btn-ghost">
            See the results →
          </a>
        </div>
        <ul
          className="anim-up flex flex-wrap justify-center gap-5 text-[0.92rem] text-muted"
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
          <div className="orb-float-1 absolute -top-10 -right-6 h-[200px] w-[200px] rounded-full opacity-50 blur-2xl bg-[radial-gradient(circle_at_30%_30%,#1e6fff,transparent_70%)]" aria-hidden="true" />
          <div className="orb-float-2 absolute -bottom-10 -left-6 h-[180px] w-[180px] rounded-full opacity-50 blur-2xl bg-[radial-gradient(circle_at_30%_30%,#0cc0df,transparent_70%)]" aria-hidden="true" />

          <img
            src="/hero-dashboard.svg"
            alt="Marketing analytics dashboard showing 62% revenue growth, 4.2x return on ad spend, and rising campaign performance"
            width={860}
            height={549}
            className="relative z-[2] w-full rounded-card border border-line shadow-card"
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
