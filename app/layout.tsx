import type { Metadata } from "next";
import { Poppins, Fraunces } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cloud Marketing LLC — Your marketing partner for women-owned CPG brands",
    template: "%s — Cloud Marketing",
  },
  description:
    "I'm your marketing partner at Cloud Marketing, a freelancer working only with women-owned CPG brands. Based in Charlotte, I offer website creation, social media management, marketing consultations, and marketing audits as one-time projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${fraunces.variable}`}>
      <body className="font-sans font-light text-ink bg-surface antialiased leading-relaxed">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

