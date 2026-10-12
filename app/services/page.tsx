import type { Metadata } from "next";
import Services from "@/components/Services";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Services",
  description: "Website creation, social media management, marketing consultations, and marketing audits, offered as one-time projects.",
};

export default function ServicesPage() {
  return (
    <>
      <Services />
      <CTA />
    </>
  );
}
