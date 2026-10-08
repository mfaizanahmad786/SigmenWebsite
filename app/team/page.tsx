import type { Metadata } from "next";
import { MotionConfig } from "framer-motion";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { MarqueeDivider } from "@/components/sections/marquee-divider";
import { RequestQuote } from "@/components/sections/request-quote";
import { TeamGrid } from "@/components/sections/team-grid";
import { TeamHero } from "@/components/sections/team-hero";
import { Testimonials } from "@/components/sections/testimonials";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the leadership team at Sigmen: the people responsible for our lift installation, maintenance and modernization work.",
};

export default function TeamPage() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative">
        <div className="absolute inset-x-0 top-0 z-20">
          <Navbar tone="dark" />
        </div>
        <TeamHero />
      </div>
      <main>
        <TeamGrid />
        <MarqueeDivider />
        <Testimonials index="03" />
        <RequestQuote index="04" />
      </main>
      <Footer />
    </MotionConfig>
  );
}
