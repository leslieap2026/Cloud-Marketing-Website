import Hero from "@/components/Hero";
import { HomeIntro, HomeServices, HomeQuote, HomeBanner } from "@/components/HomeTeasers";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeIntro />
      <HomeServices />
      <HomeQuote />
      <HomeBanner />
    </>
  );
}
