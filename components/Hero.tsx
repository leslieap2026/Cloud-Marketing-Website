import TypedText from "./TypedText";

export default function Hero() {
  return (
    <section className="hero-sky relative flex min-h-[calc(100svh-68px)] items-center overflow-hidden py-24 text-white">
      {/* City skyline that fades in, tinted with the same teal-blue as the sky */}
      <img
        src="/hero-skyline.jpg"
        alt=""
        aria-hidden="true"
        className="hero-photo absolute inset-x-0 bottom-0 z-0 h-[62%] w-full object-cover object-bottom"
      />

      {/* Soft drifting cloud */}
      <div className="hero-clouds absolute inset-0 z-0" aria-hidden="true">
        <span className="cloud cloud-4" />
      </div>

      {/* Deepens the top so the headline stays crisp */}
      <div
        className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(14,40,48,0.35),rgba(14,40,48,0)_60%)]"
        aria-hidden="true"
      />

      <div className="container-x relative z-[2] flex flex-col items-center text-center">
        <p className="anim-up mb-5 text-[0.8rem] font-bold uppercase tracking-[0.22em] text-[#f6dcc0]">
          Your marketing partner for women-owned CPG brands
        </p>
        <h1
          className="anim-up font-display mx-auto mb-6 max-w-[16ch] text-[clamp(3.2rem,8vw,6.4rem)] font-bold leading-[1.02] tracking-[-0.02em] text-white [text-shadow:0_4px_30px_rgba(14,40,48,0.35)]"
          style={{ animationDelay: "80ms" }}
        >
          <TypedText text="Your product deserves to be seen." speed={55} />
        </h1>
        <p
          className="anim-up mx-auto max-w-[52ch] text-[1.2rem] leading-relaxed text-white/90"
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
          <a href="/contact" className="btn bg-white text-ink shadow-soft hover:bg-white">
            Book a free call with me
          </a>
          <a href="/about" className="btn border-white/60 bg-transparent text-white hover:bg-white/10">
            My story
          </a>
        </div>
        <ul
          className="anim-up flex flex-wrap justify-center gap-x-7 gap-y-2 text-[0.92rem] text-white/85"
          style={{ animationDelay: "320ms" }}
        >
          <li>Women-owned brands only</li>
          <li aria-hidden="true">·</li>
          <li>Based in Charlotte, working anywhere</li>
          <li aria-hidden="true">·</li>
          <li>One person, start to finish</li>
        </ul>
      </div>
    </section>
  );
}
