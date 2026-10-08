import type { Metadata } from "next";
import { MotionConfig } from "framer-motion";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { MarqueeDivider } from "@/components/sections/marquee-divider";
import { RequestQuote } from "@/components/sections/request-quote";
import { ServicesHero } from "@/components/sections/services-hero";
import { ServicesList } from "@/components/sections/services-list";
import { Stats } from "@/components/sections/stats";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Lift and elevator services from Sigmen: residential installation, 24/7 emergency repairs, commercial systems and modernization of existing lifts.",
};

export default function ServicesPage() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative">
        <div className="absolute inset-x-0 top-0 z-20">
          <Navbar tone="dark" />
        </div>
        <ServicesHero />
      </div>
      <main>
        <ServicesList />
        <MarqueeDivider />
        <Stats />
        <RequestQuote index="02" />
      </main>
      <Footer />
    </MotionConfig>
  );
}
