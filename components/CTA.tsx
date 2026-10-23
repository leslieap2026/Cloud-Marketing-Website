"use client";

import TypedText from "./TypedText";
import { useState, FormEvent } from "react";
import Reveal from "./Reveal";

export default function CTA() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !emailOk) {
      setStatus("error");
      setMessage("Please add your name and a valid email so I can reach you.");
      return;
    }

    setStatus("success");
    setMessage(`Thanks, ${name}! I'll email ${email} within one business day to set up our call.`);
    form.reset();
  };

  return (
    <section id="contact" className="section text-white bg-[linear-gradient(160deg,#2a525e,#1d3a42)]">
      <div className="container-x grid items-center gap-12 max-[900px]:grid-cols-1 min-[901px]:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Get in touch</p>
          <h2 className="mb-3 text-[clamp(1.9rem,4vw,3rem)] font-medium tracking-[-0.02em] text-white">
            <TypedText text="Let's give your brand a voice." onView speed={45} startDelay={200} />
          </h2>
          <p className="max-w-[42ch] text-[1.12rem] leading-relaxed text-[#aab4d4]">
            Book a free 30-minute call with me. We&apos;ll talk through your
            goals and I&apos;ll show you exactly how I&apos;d help. No pressure,
            no jargon. I&apos;m based in Charlotte and happy to work with
            brands anywhere.
          </p>
          <p className="mt-5 text-[0.95rem] text-[#aab4d4]">
            Prefer email?{" "}
            <a href="mailto:hello@cloudmarketing.com" className="text-white underline underline-offset-2">
              hello@cloudmarketing.com
            </a>
          </p>
        </Reveal>

        <Reveal delay={120} className="rounded-card border border-white/10 bg-white/5 p-7">
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3.5">
              <label htmlFor="name" className="sr-only">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
                className="w-full rounded-[10px] border border-white/20 bg-white/[0.06] px-4 py-3.5 text-white placeholder:text-[#8b96b8] focus:border-transparent focus:outline focus:outline-2 focus:outline-brand"
              />
            </div>
            <div className="mb-3.5">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email address"
                required
                className="w-full rounded-[10px] border border-white/20 bg-white/[0.06] px-4 py-3.5 text-white placeholder:text-[#8b96b8] focus:border-transparent focus:outline focus:outline-2 focus:outline-brand"
              />
            </div>
            <div className="mb-3.5">
              <label htmlFor="goal" className="sr-only">
                What do you need help with?
              </label>
              <textarea
                id="goal"
                name="goal"
                rows={3}
                placeholder="What do you need help with? (optional)"
                className="w-full resize-none rounded-[10px] border border-white/20 bg-white/[0.06] px-4 py-3.5 text-white placeholder:text-[#8b96b8] focus:border-transparent focus:outline focus:outline-2 focus:outline-brand"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Book my free call
            </button>
            {message && (
              <p
                role="status"
                aria-live="polite"
                className={`mt-3 text-[0.9rem] ${
                  status === "success" ? "text-[#4ade80]" : "text-[#f87171]"
                }`}
              >
                {message}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
