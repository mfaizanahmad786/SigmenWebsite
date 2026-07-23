"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button-link";
import { ScrollZoomImage } from "@/components/ui/scroll-zoom-image";
import {
  fadeInInView,
  headingBlurFadeInView,
  slideFromBottomInView,
  slideFromBottomStagger,
} from "@/lib/motion";

const careerStats = [
  { value: "95", suffix: "%", label: "Client retention rate" },
  { value: "150", suffix: "+", label: "Satisfied clients" },
] as const;

export function Career() {
  return (
    <section className="bg-background py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-max px-5 md:px-8 lg:px-[30px]">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="font-mono text-xl font-bold uppercase tracking-wide">
            <span className="text-accent">01.</span>{" "}
            <span className="text-primary">Career</span>
          </p>

          <motion.h2
            className="mt-4 font-heading text-[clamp(2.25rem,5vw,3.75rem)] font-bold uppercase leading-[1.05] tracking-tight text-primary"
            variants={headingBlurFadeInView}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            Build a Brighter Future With Us
          </motion.h2>
        </div>

        <div className="mt-12 grid items-start gap-10 md:mt-16 lg:mt-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 xl:gap-16">
          <ScrollZoomImage
            src="/images/careerImage.jpeg"
            alt="Technician working on overhead electrical systems"
            className="aspect-4/5 w-full rounded-[20px] md:rounded-[24px] lg:aspect-auto lg:min-h-[640px]"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />

          <div className="flex flex-col gap-8 lg:gap-10 lg:pt-2">
            <motion.div
              variants={fadeInInView}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-primary md:text-xl">
                Our Mission
              </h3>
              <p className="mt-3 max-w-[540px] text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
                Our mission is to deliver safe, reliable, and lasting elevator
                solutions that elevate everyday spaces and make a lasting
                impact. We combine certified expertise, careful craftsmanship,
                and client-centered service to complete every job with
                excellence.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInInView}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-primary md:text-xl">
                Our Vision
              </h3>
              <p className="mt-3 max-w-[540px] text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
                Our vision is to shape a future where safety, technology, and
                trusted service come together to move people with confidence. We
                aim to be the partner known for innovative lift solutions that
                set a higher standard in every space we serve.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-6 md:gap-10"
              variants={slideFromBottomStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              {careerStats.map((stat) => (
                <motion.div key={stat.label} variants={slideFromBottomInView}>
                  <p className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-bold leading-none tracking-tight">
                    <span className="text-primary">{stat.value}</span>
                    <span className="text-accent">{stat.suffix}</span>
                  </p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-primary md:text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <div>
              <ButtonLink href="/contact" variant="outline">
                Get a quote
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
