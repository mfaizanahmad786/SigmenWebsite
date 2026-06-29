"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/constants/site";
import {
  headingBlurFade,
  mainImageSlideFromRight,
  secondaryImagePop,
  slideFromLeft,
} from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-8 md:pb-24 md:pt-12 lg:pb-32 lg:pt-16">
      <div className="relative z-10 mx-auto grid max-w-max items-center gap-12 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-[30px]">
        <div className="flex flex-col items-start">
          <motion.h1
            className="font-heading text-[clamp(3.25rem,9vw,7rem)] font-bold uppercase leading-[0.95] tracking-tight text-primary"
            variants={headingBlurFade}
            initial="hidden"
            animate="visible"
          >
            <span className="block">Powering</span>
            <span className="flex flex-wrap items-center gap-3 md:gap-4">
              <span>Your</span>
              <motion.span
                className="relative inline-flex h-[72px] w-[148px] shrink-0 overflow-hidden rounded-xl md:h-[88px] md:w-[180px] lg:h-[104px] lg:w-[212px]"
                variants={secondaryImagePop}
                initial="hidden"
                animate="visible"
              >
                <Image
                  src="/images/hero-secondary.png"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 148px, 212px"
                  priority
                />
              </motion.span>
            </span>
            <span className="block">Lifts</span>
          </motion.h1>

          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            animate="visible"
            className="w-full"
          >
            <p className="mt-8 max-w-[520px] text-base leading-7 text-muted-foreground md:mt-10 md:text-lg md:leading-8">
              {siteConfig.description}
            </p>

            <div className="mt-8 md:mt-10">
              <ButtonLink href="/contact" variant="accent">
                Get started now
              </ButtonLink>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-[420px] lg:mx-0 lg:max-w-none lg:justify-self-end"
          variants={mainImageSlideFromRight}
          initial="hidden"
          animate="visible"
        >
          <div className="relative aspect-4/5 w-full overflow-hidden rounded-[20px] md:rounded-[24px] lg:aspect-[0.82] lg:max-h-[620px]">
            <Image
              src="/images/hero-main.jpg"
              alt="Certified elevator technician"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 420px, 520px"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
