import { Navbar } from "@/components/layout/navbar";
import { About } from "@/components/sections/about";
import { Hero } from "@/components/sections/hero";
import { MarqueeDivider } from "@/components/sections/marquee-divider";
import { Services } from "@/components/sections/services";
import { Stats } from "@/components/sections/stats";
import { WhyChooseUs } from "@/components/sections/why-choose-us";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <WhyChooseUs />
        <MarqueeDivider />
      </main>
    </>
  );
}
