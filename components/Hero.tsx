import TypedText from "./TypedText";

export default function Hero() {
  return (
    <section className="hero-sky relative flex min-h-[calc(100svh-68px)] items-center overflow-hidden py-24 text-white">
      {/* The whole skyline photo, its own sky included, fades in behind the text */}
      <img
        src="/hero-skyline.jpg"
        alt=""
        aria-hidden="true"
        className="hero-photo absolute inset-0 z-0 h-full w-full object-cover object-bottom"
      />

      {/* Light shade behind the text, plus a warm golden-hour glow */}
      <div
        className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_65%_55%_at_50%_48%,rgba(14,40,48,0.4),rgba(14,40,48,0.05)_75%),radial-gradient(ellipse_60%_50%_at_85%_100%,rgba(255,168,92,0.28),transparent_70%),linear-gradient(180deg,rgba(14,40,48,0.15),rgba(14,40,48,0)_35%)]"
        aria-hidden="true"
      />

      <div className="container-x relative z-[2] flex flex-col items-center text-center">
        <p className="anim-up mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-[0.78rem] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
          <span className="text-[#ffc78f]" aria-hidden="true">✦</span>
          Your marketing partner for women-owned CPG brands
        </p>
        <h1
          className="anim-up font-display mx-auto mb-4 max-w-[16ch] text-[clamp(3.2rem,8vw,6.4rem)] font-bold leading-[1.02] tracking-[-0.02em] text-white [text-shadow:0_4px_30px_rgba(14,40,48,0.35)]"
          style={{ animationDelay: "80ms" }}
        >
          <TypedText text="Your product deserves to be seen." speed={55} />
        </h1>
        {/* Hand-drawn swoosh that draws itself once the headline is typed */}
        <svg
          className="hero-swoosh -mt-3 mb-6 h-5 w-[min(340px,60vw)]"
          viewBox="0 0 340 20"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="swoosh" x1="0" x2="1">
              <stop offset="0" stopColor="#0cc0df" />
              <stop offset="1" stopColor="#ffb27a" />
            </linearGradient>
          </defs>
          <path
            d="M4 14 C 80 4, 180 2, 336 10"
            stroke="url(#swoosh)"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
        <p
          className="anim-up mx-auto max-w-[52ch] text-[1.2rem] leading-relaxed text-white/90 [text-shadow:0_1px_10px_rgba(14,40,48,0.75)]"
          style={{ animationDelay: "160ms" }}
        >
          I&apos;m a freelance marketer who understands what small brands need.
          From websites to social media, I start with strategy so the right
          people finally discover what you&apos;ve made, without the agency
          price tag.
        </p>
        <div
          className="anim-up my-8 flex flex-wrap justify-center gap-3.5"
          style={{ animationDelay: "240ms" }}
        >
          <a href="/contact" className="btn hero-cta text-white">
            Book a free call with me
          </a>
          <a href="/about" className="btn border-white/60 bg-transparent text-white hover:bg-white/10">
            My story
          </a>
        </div>
        <ul
          className="anim-up flex flex-wrap justify-center gap-x-7 gap-y-2 text-[0.92rem] text-white/85 [text-shadow:0_1px_10px_rgba(14,40,48,0.75)]"
          style={{ animationDelay: "320ms" }}
        >
          <li>Women-owned brands only</li>
          <li aria-hidden="true" className="hidden sm:block">·</li>
          <li>Based in Charlotte, working anywhere</li>
          <li aria-hidden="true" className="hidden sm:block">·</li>
          <li>One person, start to finish</li>
        </ul>
      </div>
    </section>
  );
}
