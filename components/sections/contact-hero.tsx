"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { aboutHeroHeading, aboutHeroSubheading } from "@/lib/motion";

export function ContactHero() {
  return (
    <section className="relative flex min-h-[52vh] flex-1 flex-col justify-center overflow-hidden md:min-h-[58vh]">
      <Image
        src="/images/contactHero.jpeg"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-primary/75 mix-blend-multiply"
        aria-hidden
      />
      <div className="absolute inset-0 bg-primary/45" aria-hidden />

      <div className="relative z-10 mx-auto flex w-full max-w-max flex-col items-center px-5 pb-20 pt-28 text-center md:px-8 md:pb-28 md:pt-32 lg:px-[30px]">
        <motion.h1
          className="font-heading text-[clamp(2.75rem,8vw,5.5rem)] font-bold uppercase leading-[0.95] tracking-tight text-white"
          variants={aboutHeroHeading}
          initial="hidden"
          animate="visible"
        >
          Contact Page
        </motion.h1>

        <motion.p
          className="mt-5 max-w-[520px] text-base leading-7 text-white/80 md:mt-6 md:text-lg md:leading-8"
          variants={aboutHeroSubheading}
          initial="hidden"
          animate="visible"
        >
          Reach out for installations, repairs, or maintenance — our certified
          team is ready to deliver safe, reliable elevator solutions.
        </motion.p>
      </div>
    </section>
  );
}
