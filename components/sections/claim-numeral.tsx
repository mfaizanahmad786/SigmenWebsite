"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { slideFromBottomInView, slideFromBottomStagger } from "@/lib/motion";

export function ClaimNumeral() {
  return (
    <section className="bg-muted py-12 md:py-16">
      <motion.div
        className="mx-auto flex max-w-max flex-col items-start gap-5 px-5 md:flex-row md:items-center md:gap-10 md:px-8 lg:gap-14 lg:px-[30px]"
        variants={slideFromBottomStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.span
          className="select-none font-heading text-[clamp(4.5rem,13vw,9rem)] font-bold leading-[0.8] tracking-tight text-primary/[0.12]"
          variants={slideFromBottomInView}
          aria-hidden
        >
          1<sup className="text-[0.45em]">st</sup>
        </motion.span>

        <motion.div variants={slideFromBottomInView}>
          <p className="font-mono text-sm font-bold uppercase tracking-wide text-accent md:text-base">
            First in Pakistan
          </p>
          <h2 className="mt-2 max-w-[22ch] font-heading text-[clamp(1.5rem,3.2vw,2.25rem)] font-bold uppercase leading-[1.1] tracking-tight text-primary">
            Remote monitoring of lifts
          </h2>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-2.5 text-sm font-semibold uppercase tracking-wide text-primary transition-colors hover:text-accent"
          >
            <ArrowIcon className="text-accent" />
            Ask about monitoring
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
