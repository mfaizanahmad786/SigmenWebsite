import { Navbar } from "@/components/layout/navbar";
import { About } from "@/components/sections/about";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Stats } from "@/components/sections/stats";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
      </main>
    </>
  );
}
