import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nimbus Cloud — Infrastructure That Scales With You",
  description:
    "Nimbus Cloud — scalable, secure cloud infrastructure for modern teams. Compute, storage, and global networking that grows with you.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans text-ink bg-surface antialiased leading-relaxed">
        {children}
      </body>
    </html>
  );
}
