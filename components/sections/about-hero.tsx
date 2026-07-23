"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  aboutHeroHeading,
  aboutHeroImage,
  aboutHeroImages,
  aboutHeroSubheading,
} from "@/lib/motion";

export function AboutHero() {
  return (
    <section className="flex min-h-0 flex-1 flex-col">
      <div className="mx-auto flex w-full max-w-max flex-1 flex-col px-5 md:px-8 lg:px-[30px]">
        <div className="flex flex-1 flex-col items-center justify-center py-8 text-center md:py-10">
          <motion.h1
            className="font-heading text-[clamp(2.75rem,8vw,5.5rem)] font-bold uppercase leading-[0.95] tracking-tight text-white"
            variants={aboutHeroHeading}
            initial="hidden"
            animate="visible"
          >
            About Company
          </motion.h1>

          <motion.p
            className="mt-5 max-w-[520px] text-base leading-7 text-white/80 md:mt-6 md:text-lg md:leading-8"
            variants={aboutHeroSubheading}
            initial="hidden"
            animate="visible"
          >
            Reliable elevator and lift solutions delivered by certified
            professionals — built on safety, trust, and lasting craftsmanship.
          </motion.p>
        </div>

        <motion.div
          className="flex shrink-0 flex-col gap-4 pb-5 sm:flex-row sm:items-end sm:gap-5 md:gap-6 md:pb-6 lg:pb-8"
          variants={aboutHeroImages}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="w-full overflow-hidden rounded-[20px] sm:w-[30%] md:rounded-[24px]"
            variants={aboutHeroImage}
          >
            <Image
              src="/images/AboutImageLeft.png"
              alt="Technician installing an electrical outlet on site"
              width={2000}
              height={1600}
              className="h-auto w-full"
              sizes="(max-width: 640px) 100vw, (max-width: 1300px) 30vw, 390px"
              priority
            />
          </motion.div>

          <motion.div
            className="w-full overflow-hidden rounded-[20px] sm:w-[70%] md:rounded-[24px]"
            variants={aboutHeroImage}
          >
            <Image
              src="/images/AboutImageRight.png"
              alt="Sigmen service professional ready for inspection"
              width={3120}
              height={1600}
              className="h-auto w-full"
              sizes="(max-width: 640px) 100vw, (max-width: 1300px) 70vw, 910px"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
