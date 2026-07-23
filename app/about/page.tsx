import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { AboutHero } from "@/components/sections/about-hero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Sigmen — certified elevator and lift professionals delivering reliable, affordable, and safe solutions for homes, offices, and commercial spaces.",
};

export default function AboutPage() {
  return (
    <>
      <div className="flex min-h-dvh flex-col bg-primary">
        <Navbar tone="dark" />
        <AboutHero />
      </div>
      <main>{/* Page content continues below the fold */}</main>
      <Footer />
    </>
  );
}

