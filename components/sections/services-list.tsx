"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlineCheck } from "react-icons/hi2";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { ScrollZoomImage } from "@/components/ui/scroll-zoom-image";
import { services, type Service } from "@/constants/services";
import {
  fadeInInView,
  headingBlurFadeInView,
  slideFromBottomInView,
  slideFromBottomStagger,
} from "@/lib/motion";
import { cn } from "@/lib/utils";

function ServiceRow({ service, index }: { service: Service; index: number }) {
  const imageFirst = index % 2 === 0;

  return (
    <article
      id={service.slug}
      className="relative scroll-mt-28 border-t border-border pt-12 md:pt-16 lg:pt-20"
    >
      <span
        className="pointer-events-none absolute -top-2 right-0 select-none font-heading text-[clamp(4.5rem,12vw,9rem)] font-bold leading-none text-primary/[0.06]"
        aria-hidden
      >
        {service.id}
      </span>

      <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
        <ScrollZoomImage
          src={service.image}
          alt={service.title}
          className={cn(
            "aspect-4/5 w-full rounded-[20px] md:aspect-3/2 md:rounded-[24px] lg:aspect-4/5",
            imageFirst ? "lg:order-1" : "lg:order-2",
          )}
          sizes="(max-width: 1024px) 100vw, 45vw"
        />

        <motion.div
          className={cn(
            "relative z-10",
            imageFirst ? "lg:order-2" : "lg:order-1",
          )}
          variants={slideFromBottomStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            className="font-heading text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold uppercase leading-[1.1] tracking-tight text-primary"
            variants={slideFromBottomInView}
          >
            {service.title}
          </motion.h3>

          <motion.p
            className="mt-4 max-w-[60ch] text-base leading-7 text-muted-foreground md:mt-5 md:text-lg md:leading-8"
            variants={slideFromBottomInView}
          >
            {service.summary}
          </motion.p>

          <motion.ul
            className="mt-7 flex flex-col gap-3 md:mt-8"
            variants={slideFromBottomStagger}
          >
            {service.highlights.map((highlight) => (
              <motion.li
                key={highlight}
                className="flex items-start gap-3 text-sm leading-6 text-primary md:text-[15px] md:leading-7"
                variants={slideFromBottomInView}
              >
                <HiOutlineCheck
                  className="mt-0.5 size-4 shrink-0 text-accent md:mt-1"
                  aria-hidden
                />
                {highlight}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="mt-8 md:mt-10"
            variants={slideFromBottomInView}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-xl border border-border px-5 py-3 text-sm font-semibold uppercase tracking-wide text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white"
            >
              <ArrowIcon className="text-accent" />
              Get a quote
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </article>
  );
}

export function ServicesList() {
  return (
    <section className="bg-background py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-max px-5 md:px-8 lg:px-[30px]">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="font-mono text-xl font-bold uppercase tracking-wide">
            <span className="text-accent">01.</span>{" "}
            <span className="text-primary">What we do</span>
          </p>

          <motion.h2
            className="mt-4 font-heading text-[clamp(2.25rem,5vw,3.75rem)] font-bold uppercase leading-[1.05] tracking-tight text-primary"
            variants={headingBlurFadeInView}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            Four Ways We Keep Lifts Moving
          </motion.h2>
        </div>

        <motion.nav
          className="mt-10 flex flex-wrap justify-center gap-2.5 md:mt-12 md:gap-3"
          aria-label="Jump to a service"
          variants={fadeInInView}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {services.map((service) => (
            <a
              key={service.slug}
              href={`#${service.slug}`}
              className="rounded-xl border border-border px-4 py-2.5 font-heading text-xs font-bold uppercase tracking-wide text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white"
            >
              {service.title}
            </a>
          ))}
        </motion.nav>

        <div className="mt-14 flex flex-col gap-12 md:mt-20 md:gap-16 lg:gap-20">
          {services.map((service, index) => (
            <ServiceRow key={service.slug} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
