import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Solutions from "@/components/Solutions";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Logos />
        <Services />
        <Testimonials />
        <Solutions />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
