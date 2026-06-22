import TypedText from "./TypedText";

export default function Hero() {
  return (
    <section className="hero-aurora relative overflow-hidden pb-24 pt-24 text-white">
      {/* Background video — drop your clip in at public/hero.mp4 (muted, loops) */}
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src="/hero.mp4" type="video/mp4" />
        <source src="/hero.webm" type="video/webm" />
      </video>

      {/* Contrast scrim so the headline stays readable over the video */}
      <div
        className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(8,20,45,0.55),rgba(8,20,45,0.28)_55%,rgba(8,20,45,0.5))]"
        aria-hidden="true"
      />

      <div className="container-x relative z-[2] flex flex-col items-center text-center">
        <p className="anim-up mb-4 text-[0.78rem] font-bold uppercase tracking-[0.2em] text-white/85">
          Marketing for women-owned CPG brands
        </p>
        <h1
          className="anim-up font-display mx-auto mb-6 max-w-[18ch] text-[clamp(2.8rem,6.5vw,5rem)] font-semibold leading-[1.07] tracking-[-0.01em] text-white"
          style={{ animationDelay: "80ms" }}
        >
          <TypedText text="Your product deserves to be seen." speed={55} />
        </h1>
        <p
          className="anim-up mx-auto max-w-[52ch] text-[1.2rem] leading-relaxed text-white/85"
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
          <a href="#contact" className="btn bg-white text-ink shadow-soft hover:bg-white">
            Book a free strategy call
          </a>
          <a href="#about" className="btn border-white/60 bg-transparent text-white hover:bg-white/10">
            Our story
          </a>
        </div>
        <ul
          className="anim-up flex flex-wrap justify-center gap-x-7 gap-y-2 text-[0.92rem] text-white/80"
          style={{ animationDelay: "320ms" }}
        >
          <li>Women-owned, exclusively</li>
          <li aria-hidden="true">·</li>
          <li>Social + email, in sync</li>
          <li aria-hidden="true">·</li>
          <li>Strategy built for you</li>
        </ul>
      </div>
    </section>
  );
}
