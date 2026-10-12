import type { Metadata } from "next";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Book a call",
  description: "Book a free 30-minute call with Cloud Marketing.",
};

export default function ContactPage() {
  return <CTA />;
}
