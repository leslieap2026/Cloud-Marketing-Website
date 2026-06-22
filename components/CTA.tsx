"use client";

import { useState, FormEvent } from "react";

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
      setMessage("Please enter your name and a valid work email.");
      return;
    }

    setStatus("success");
    setMessage(`Thanks, ${name}! Check ${email} to activate your free account.`);
    form.reset();
  };

  return (
    <section id="contact" className="section text-white bg-[linear-gradient(160deg,#2a525e,#1d3a42)]">
      <div className="container-x grid items-center gap-12 max-[900px]:grid-cols-1 min-[901px]:grid-cols-2">
        <div>
          <h2 className="mb-2 text-[clamp(1.7rem,3.5vw,2.6rem)] font-bold tracking-[-0.02em] text-white">
            Ready to build on Cloud Marketing?
          </h2>
          <p className="max-w-[40ch] text-[1.1rem] text-[#aab4d4]">
            Start your free trial today. Deploy your first app in minutes — no credit card required.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-card border border-white/10 bg-white/5 p-7"
        >
          <div className="mb-3.5">
            <label htmlFor="name" className="sr-only">
              Full name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full name"
              required
              className="w-full rounded-[10px] border border-white/20 bg-white/[0.06] px-4 py-3.5 text-white placeholder:text-[#8b96b8] focus:border-transparent focus:outline focus:outline-2 focus:outline-brand"
            />
          </div>
          <div className="mb-3.5">
            <label htmlFor="email" className="sr-only">
              Work email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Work email"
              required
              className="w-full rounded-[10px] border border-white/20 bg-white/[0.06] px-4 py-3.5 text-white placeholder:text-[#8b96b8] focus:border-transparent focus:outline focus:outline-2 focus:outline-brand"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Create free account
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
      </div>
    </section>
  );
}
