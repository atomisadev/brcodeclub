// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import { Bricolage_Grotesque, Space_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";

const fontInter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const fontHeading = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "BRHS C.O.D.E. Club",
  description: "Bridgewater-Raritan High School Computer Organization and Development Enthusiasts Club",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fontHeading.variable} ${fontBody.variable} ${fontInter.variable}`}
    >
      {" "}
      <body className="antialiased font-body">{children}</body>
    </html>
  );
}
