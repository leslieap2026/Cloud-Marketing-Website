import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cloud Marketing LLC — Marketing for women-owned CPG brands",
  description:
    "Cloud Marketing LLC is a marketing studio built exclusively for women-owned CPG brands. We combine social media and email marketing into one cohesive strategy that grows brand awareness, an engaged audience, and loyal customers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fraunces.variable}>
      <body className="font-sans text-ink bg-surface antialiased leading-relaxed">
        {children}
      </body>
    </html>
  );
}

