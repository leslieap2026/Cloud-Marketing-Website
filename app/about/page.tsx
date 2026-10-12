import type { Metadata } from "next";
import Solutions from "@/components/Solutions";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind Cloud Marketing, and why I work with women-owned CPG brands.",
};

export default function AboutPage() {
  return (
    <>
      <Solutions />
      <Testimonials />
      <CTA />
    </>
  );
}
