import type { Metadata } from "next";
import Process from "@/components/Process";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Process",
  description: "How working together works, from our first call to hand-off.",
};

export default function ProcessPage() {
  return (
    <>
      <Process />
      <CTA />
    </>
  );
}
