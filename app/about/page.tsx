import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { AboutHero } from "@/components/sections/about-hero";
import { Career } from "@/components/sections/career";
import { Faq } from "@/components/sections/faq";
import { Gallery } from "@/components/sections/gallery";
import { MarqueeDivider } from "@/components/sections/marquee-divider";
import { Mission } from "@/components/sections/mission";

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
      <main>
        <Mission />
        <MarqueeDivider />
        <Career />
        <Gallery />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
