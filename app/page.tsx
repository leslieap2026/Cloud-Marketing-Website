import Hero from "@/components/Hero";
import { HomeIntro, HomeQuote, HomeBanner } from "@/components/HomeTeasers";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeIntro />
      <HomeQuote />
      <HomeBanner />
    </>
  );
}
