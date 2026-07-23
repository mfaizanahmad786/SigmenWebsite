"use client";

import { motion, type Variants } from "framer-motion";
import { ScrollZoomImage } from "@/components/ui/scroll-zoom-image";
import { missionTimeline } from "@/constants/mission";
import { smoothEase } from "@/lib/motion";

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
      <div className="mx-auto grid max-w-max gap-10 px-5 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch lg:gap-12 lg:px-[30px] xl:gap-16">
        <motion.ul
          className="flex flex-col gap-4 md:gap-5"
          variants={timelineContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {missionTimeline.map((item) => (
            <motion.li
              key={item.year}
              className="rounded-[16px] border border-border bg-card px-5 py-5 md:rounded-[18px] md:px-6 md:py-6"
              variants={timelineCard}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-primary md:text-base">
                  {item.title}
                </h3>
                <span className="shrink-0 text-sm font-medium text-muted-foreground md:text-base">
                  {item.year}
                </span>
              </div>
              <p className="mt-2.5 max-w-[520px] text-sm leading-6 text-muted-foreground md:mt-3 md:text-[15px] md:leading-7">
                {item.description}
              </p>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className="mx-auto w-full max-w-[420px] lg:mx-0 lg:max-w-none lg:min-h-0 lg:self-stretch"
          variants={missionImage}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <ScrollZoomImage
            src="/images/MissionImage.png"
            alt="Technician working on an overhead industrial structure"
            className="aspect-1057/2048 w-full rounded-[20px] md:rounded-[24px] lg:aspect-auto lg:h-full lg:min-h-[640px]"
            sizes="(max-width: 1024px) 420px, 45vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
