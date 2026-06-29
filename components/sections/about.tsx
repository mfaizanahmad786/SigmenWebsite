"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button-link";
import { ScrollZoomImage } from "@/components/ui/scroll-zoom-image";
import { fadeInInView, headingBlurFadeInView } from "@/lib/motion";

export function About() {
  return (
    <section className="bg-muted py-20 md:py-28 lg:py-32">
      <div className="mx-auto grid max-w-max gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-12 lg:px-[30px]">
        <div className="flex flex-col gap-8 lg:gap-10">
          <div>
            <p className="font-mono text-xl font-bold uppercase tracking-wide">
              <span className="text-accent">01.</span>{" "}
              <span className="text-primary">About us</span>
            </p>

            <motion.h2
              className="mt-4 font-heading text-[clamp(2.25rem,5vw,3.75rem)] font-bold uppercase leading-[1.05] tracking-tight text-primary"
              variants={headingBlurFadeInView}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              Elevating Spaces With Excellence
            </motion.h2>
          </div>

          <ScrollZoomImage
            src="/images/services1.png"
            alt="Elevator technician at work"
            className="h-[320px] w-full rounded-[20px] md:h-[380px] lg:h-[420px]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col gap-8 lg:pt-10">
          <motion.p
            className="max-w-[520px] text-base leading-7 text-muted-foreground md:text-lg md:leading-8"
            variants={fadeInInView}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            At Sigmen, we are dedicated to providing reliable and high-quality
            elevator and lift services to homes, businesses, and industries. With
            years of experience in the field, our team of certified technicians
            ensures every job is completed safely and efficiently.
          </motion.p>

          <div>
            <ButtonLink href="/contact" variant="primary">
              Get in touch
            </ButtonLink>
          </div>

          <ScrollZoomImage
            src="/images/services2.png"
            alt="Sigmen service professional"
            className="h-[220px] w-full rounded-[20px] md:h-[260px] lg:mt-auto lg:h-[280px]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
