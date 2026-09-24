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
      <div className="relative z-10 grid w-full items-center gap-12 px-5 md:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-12 lg:px-10 xl:px-14">
        <div className="flex flex-col items-start">
          <motion.h1
            className="font-heading text-[clamp(3.25rem,7.6vw,8.5rem)] font-bold uppercase leading-[0.95] tracking-tight text-primary"
            variants={headingBlurFade}
            initial="hidden"
            animate="visible"
          >
            <span className="block">Powering</span>
            <span className="flex flex-wrap items-center gap-3 md:gap-4">
              <span>Your</span>
              <motion.span
                className="relative inline-flex h-[72px] w-[148px] shrink-0 overflow-hidden rounded-xl md:h-[88px] md:w-[180px] lg:h-[104px] lg:w-[212px] xl:h-[120px] xl:w-[244px]"
                variants={secondaryImagePop}
                initial="hidden"
                animate="visible"
              >
                <Image
                  src="/images/hero-lobby.jpg"
                  alt=""
                  fill
                  className="object-cover object-[center_55%]"
                  sizes="(max-width: 768px) 148px, 244px"
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
            <p className="mt-8 max-w-[580px] text-base leading-7 text-muted-foreground md:mt-10 md:text-lg md:leading-8">
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
          className="relative mx-auto w-full max-w-[420px] lg:mx-0 lg:max-w-[440px] lg:justify-self-end xl:max-w-[500px] 2xl:max-w-[560px]"
          variants={mainImageSlideFromRight}
          initial="hidden"
          animate="visible"
        >
          <div className="relative aspect-4/5 w-full overflow-hidden rounded-[20px] md:rounded-[24px] lg:aspect-[0.8] lg:max-h-[68vh]">
            <Image
              src="/images/hero-capsule.jpg"
              alt="Modern capsule lift travelling up a concrete shaft"
              fill
              className="object-cover object-[center_62%]"
              sizes="(max-width: 1024px) 420px, 560px"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
