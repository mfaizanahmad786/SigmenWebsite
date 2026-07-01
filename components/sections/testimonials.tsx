"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { clientLogos } from "@/constants/testimonials";
import { fadeInInView, headingBlurFadeInView } from "@/lib/motion";

function ClientLogo({ name, src }: { name: string; src: string }) {
  const isSvg = src.endsWith(".svg");

  return (
    <div className="flex h-32 w-56 shrink-0 items-center justify-center px-6 md:h-40 md:w-72 md:px-8 lg:h-44 lg:w-80">
      {isSvg ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={name}
          className="max-h-20 w-auto max-w-[220px] object-contain md:max-h-24 md:max-w-[260px] lg:max-h-28"
        />
      ) : (
        <Image
          src={src}
          alt={name}
          width={260}
          height={104}
          className="max-h-20 w-auto max-w-[220px] object-contain md:max-h-24 md:max-w-[260px] lg:max-h-28"
        />
      )}
    </div>
  );
}

function LogoTrack() {
  return (
    <div className="flex shrink-0 items-center">
      {clientLogos.map((logo) => (
        <ClientLogo key={logo.name} name={logo.name} src={logo.src} />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="overflow-hidden bg-background py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-max px-5 md:px-8 lg:px-[30px]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-sm font-medium uppercase tracking-wide">
            <span className="text-accent">04.</span>{" "}
            <span className="text-primary">Testimonials</span>
          </p>

          <motion.h2
            className="mt-4 font-heading text-[clamp(2rem,4.5vw,3.25rem)] font-bold uppercase leading-[1.08] tracking-tight text-primary"
            variants={headingBlurFadeInView}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            Trusted by leading organizations
          </motion.h2>

          <motion.p
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8"
            variants={fadeInInView}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            From universities and government institutions to global organizations,
            clients rely on Sigmen for safe, dependable elevator installation and
            maintenance.
          </motion.p>
        </div>
      </div>

      <motion.div
        className="relative mt-14 md:mt-16"
        variants={fadeInInView}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-background to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-background to-transparent md:w-24" />

        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <LogoTrack />
          <LogoTrack />
        </motion.div>
      </motion.div>
    </section>
  );
}
