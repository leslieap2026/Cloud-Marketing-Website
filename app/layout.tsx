import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cloud Marketing LLC — Seamless & Easy Marketing",
  description:
    "Cloud Marketing LLC — scalable, secure cloud infrastructure for modern teams. Compute, storage, and global networking that grows with you.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans text-ink bg-surface antialiased leading-relaxed">
        {children}
      </body>
    </html>
  );
}
