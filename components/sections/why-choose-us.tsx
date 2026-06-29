"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { perspectiveFoldInView } from "@/lib/motion";
import { cn } from "@/lib/utils";

const foldMotionProps = {
  variants: perspectiveFoldInView,
  initial: "hidden" as const,
  whileInView: "visible" as const,
  viewport: { once: true, amount: 0.3 },
  style: {
    transformPerspective: 1000,
    transformOrigin: "center bottom",
  },
};

function FeatureCard({
  icon,
  iconClassName,
  title,
  description,
  className,
}: {
  icon: React.ReactNode;
  iconClassName?: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-full flex-col justify-between rounded-[20px] bg-card p-6 md:p-8",
        className,
      )}
    >
      <div
        className={cn(
          "mb-6 flex size-12 items-center justify-center rounded-xl",
          iconClassName,
        )}
      >
        {icon}
      </div>
      <div>
        <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-primary md:text-xl">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
          {description}
        </p>
      </div>
    </div>
  );
}

function LightbulbIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-6 text-white" aria-hidden="true">
      <path
        d="M12 2a7 7 0 0 0-4 12.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26A7 7 0 0 0 12 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 21h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-6 text-white" aria-hidden="true">
      <path
        d="M13 2 5 13h6l-1 9 8-11h-6l1-9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WhyChooseUs() {
  return (
    <section className="bg-muted py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-max px-5 text-center md:px-8 lg:px-[30px]">
        <p className="font-mono text-xl font-bold uppercase tracking-wide">
          <span className="text-accent">03.</span>{" "}
          <span className="text-primary">Why choose us?</span>
        </p>
        <h2 className="mx-auto mt-4 max-w-4xl font-heading text-[clamp(2rem,4.5vw,3.25rem)] font-bold uppercase leading-[1.08] tracking-tight text-primary">
          Reliable Elevator Solutions
        </h2>
      </div>

      <div className="mx-auto mt-12 grid max-w-max grid-cols-1 gap-4 px-5 md:mt-16 md:grid-cols-3 md:grid-rows-[auto_auto_auto] md:px-8 lg:px-[30px]">
        {/* Top-left — fold */}
        <motion.div
          {...foldMotionProps}
          className="relative min-h-[280px] overflow-hidden rounded-[20px] md:col-start-1 md:row-start-1 md:min-h-[320px]"
        >
          <Image
            src="/images/services1.png"
            alt="Certified technician at work"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </motion.div>

        {/* Center top — static */}
        <FeatureCard
          className="md:col-start-2 md:row-start-1"
          icon={<LightbulbIcon />}
          iconClassName="bg-accent"
          title="Creative Ideas"
          description="Creative ideas are the foundation of every successful project and we focus."
        />

        {/* Top-right — fold */}
        <motion.div
          {...foldMotionProps}
          className="relative min-h-[320px] overflow-hidden rounded-[20px] md:col-start-3 md:row-span-2 md:row-start-1 md:min-h-[420px]"
        >
          <Image
            src="/images/hero-main.jpg"
            alt="Sigmen elevator technician"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </motion.div>

        {/* Center-left — static */}
        <div className="relative min-h-[220px] overflow-hidden rounded-[20px] p-6 text-primary-foreground md:col-start-1 md:row-start-2 md:min-h-[240px] md:p-8">
          <Image
            src="/images/wire.png"
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            aria-hidden
          />
          <div className="absolute inset-0 bg-primary/88" aria-hidden />
          <div className="relative z-10">
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <span className="font-heading text-3xl font-bold text-accent md:text-4xl">
                75+
              </span>
              <span className="text-sm font-semibold uppercase tracking-wide text-white/80 md:text-base">
                Elevators serviced
              </span>
            </div>
            <h3 className="mt-5 font-heading text-lg font-bold uppercase tracking-tight text-white md:text-xl">
              Dedicated lift support
            </h3>
            <p className="mt-3 max-w-xs text-sm leading-6 text-white/75 md:text-base">
              From new installations to routine inspections and emergency repairs,
              our certified technicians keep every cab running safely and smoothly.
            </p>
          </div>
        </div>

        {/* Center-bottom — static image */}
        <div className="relative min-h-[320px] overflow-hidden rounded-[20px] md:col-start-2 md:row-span-2 md:row-start-2 md:min-h-[420px]">
          <Image
            src="/images/services2.png"
            alt="Elevator maintenance professional"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Bottom-left — fold */}
        <motion.div
          {...foldMotionProps}
          className="flex items-center justify-between gap-4 rounded-[20px] bg-white p-6 md:col-start-1 md:row-start-3 md:p-8"
        >
          <p className="font-heading text-base font-bold uppercase tracking-tight text-primary md:text-lg">
            Let&apos;s get started
          </p>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#eaf1f4] px-5 py-3 text-sm font-semibold uppercase tracking-wide text-primary shadow-sm transition-colors hover:bg-white/90"
          >
            <ArrowIcon className="text-accent" />
            Contact
          </Link>
        </motion.div>

        {/* Bottom-right — fold */}
        <motion.div
          {...foldMotionProps}
          className="md:col-start-3 md:row-start-3"
        >
          <FeatureCard
            className="h-full"
            icon={<BoltIcon />}
            iconClassName="bg-primary"
            title="Design Process"
            description="Our process encourages thinking outside the box while maintaining practical."
          />
        </motion.div>
      </div>
    </section>
  );
}
