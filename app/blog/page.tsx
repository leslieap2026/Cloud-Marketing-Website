import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Blog",
  description: "Marketing tips and ideas for women-owned CPG brands.",
};

export default function BlogPage() {
  return (
    <>
      <section className="section">
        <div className="container-x">
          <Reveal className="mx-auto max-w-[640px] text-center">
            <p className="eyebrow">Blog</p>
            <h1 className="mb-4 text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.12] tracking-[-0.02em]">
              Notes from the cloud
            </h1>
            <p className="section-sub">
              I&apos;m putting together my first posts on websites, social media,
              and growing a small brand. Check back soon, or book a call and ask
              me anything in the meantime.
            </p>
          </Reveal>
        </div>
      </section>
      <CTA />
    </>
  );
}
