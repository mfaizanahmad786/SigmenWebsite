"use client";

import { motion, type Variants } from "framer-motion";
import { ChevronDownIcon } from "@/components/ui/chevron-down-icon";
import { ScrollZoomImage } from "@/components/ui/scroll-zoom-image";
import { processSteps } from "@/constants/mission";
import { headingBlurFadeInView, smoothEase } from "@/lib/motion";

const timelineContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

const timelineCard: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: smoothEase },
  },
};

const missionImage: Variants = {
  hidden: { opacity: 0, x: 48, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: smoothEase, delay: 0.15 },
  },
};

export function Mission() {
  return (
    <section className="bg-background py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-max px-5 md:px-8 lg:px-[30px]">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="font-mono text-xl font-bold uppercase tracking-wide">
            <span className="text-accent">01.</span>{" "}
            <span className="text-primary">Our process</span>
          </p>

          <motion.h2
            className="mt-4 font-heading text-[clamp(2.25rem,5vw,3.75rem)] font-bold uppercase leading-[1.05] tracking-tight text-primary"
            variants={headingBlurFadeInView}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            How We Deliver Every Project
          </motion.h2>
        </div>

        <div className="mt-12 grid gap-10 md:mt-16 lg:mt-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch lg:gap-12 xl:gap-16">
          <motion.ol
            className="flex flex-col"
            variants={timelineContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {processSteps.map((item, index) => (
              <motion.li
                key={item.step}
                className="grid grid-cols-[2.25rem_1fr] gap-4 pb-4 last:pb-0 md:grid-cols-[2.75rem_1fr] md:gap-5 md:pb-5"
                variants={timelineCard}
              >
                <div className="flex flex-col items-center">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-border bg-card font-mono text-xs font-bold text-accent md:size-11 md:text-sm">
                    {item.step}
                  </span>

                  {index < processSteps.length - 1 ? (
                    <span className="flex flex-1 flex-col items-center pt-2">
                      <span className="w-px flex-1 bg-border" />
                      <ChevronDownIcon className="-mt-0.5 size-3.5 text-muted-foreground/50" />
                    </span>
                  ) : null}
                </div>

                <div className="rounded-[16px] border border-border bg-card px-5 py-5 md:rounded-[18px] md:px-6 md:py-6">
                  <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-primary md:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 max-w-[520px] text-sm leading-6 text-muted-foreground md:mt-3 md:text-[15px] md:leading-7">
                    {item.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ol>

          <motion.div
            className="mx-auto w-full max-w-[420px] lg:mx-0 lg:max-w-none lg:min-h-0 lg:self-stretch"
            variants={missionImage}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <ScrollZoomImage
              src="/images/process-lattice-doors.jpg"
              alt="Latticed lift doors beneath a brass floor indicator"
              className="aspect-2/3 w-full rounded-[20px] md:rounded-[24px] lg:aspect-auto lg:h-full lg:min-h-[640px]"
              sizes="(max-width: 1024px) 420px, (max-width: 1300px) 40vw, 520px"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
