"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { HiOutlineCheck } from "react-icons/hi2";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import {
  headingBlurFadeInView,
  slideFromBottomInView,
  slideFromBottomStagger,
} from "@/lib/motion";

const capabilities = [
  "Faults flagged and diagnosed before they become a breakdown",
  "Automatic entrapment alerts the moment someone is stuck",
  "Trip counts and door cycles tracked to predict wear",
  "Every lift in your portfolio on one web dashboard",
] as const;

/** Illustrative telemetry. The floor walks this loop rather than jumping. */
const FLOOR_SEQUENCE = [3, 4, 5, 6, 7, 8, 7, 6, 5, 4] as const;

function StatusRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-t border-white/10 py-3">
      <span className="text-[11px] font-semibold uppercase tracking-wide text-white/50">
        {label}
      </span>
      <span className="font-mono text-sm font-bold text-white">{value}</span>
    </div>
  );
}

function MonitorPanel() {
  const reduceMotion = useReducedMotion();
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(
      () => setTick((current) => current + 1),
      2400,
    );
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const index = tick % FLOOR_SEQUENCE.length;
  const floor = FLOOR_SEQUENCE[index];
  const previous =
    FLOOR_SEQUENCE[(index - 1 + FLOOR_SEQUENCE.length) % FLOOR_SEQUENCE.length];
  const goingUp = floor >= previous;

  return (
    <div className="rounded-[20px] border border-white/12 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-sm md:rounded-[24px] md:p-7">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-white/70">
          <span className="relative flex size-2">
            <span
              className={
                reduceMotion
                  ? "hidden"
                  : "absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75"
              }
            />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          Live
        </span>
        <span className="font-mono text-[11px] font-bold uppercase tracking-wide text-white/40">
          Tower A / Lift 01
        </span>
      </div>

      <div className="mt-6 flex items-end gap-4">
        <div className="flex size-20 items-center justify-center rounded-2xl bg-accent md:size-24">
          <motion.span
            key={`${tick}-${floor}`}
            initial={
              reduceMotion ? false : { opacity: 0, y: goingUp ? 14 : -14 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-heading text-4xl font-bold leading-none text-white md:text-5xl"
          >
            {floor}
          </motion.span>
        </div>
        <div className="pb-1">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-white/50">
            Current floor
          </p>
          <p className="mt-1 font-mono text-sm font-bold text-white">
            {goingUp ? "Ascending" : "Descending"}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <StatusRow label="Doors" value="Healthy" />
        <StatusRow label="Motor temp" value="38°C" />
        <StatusRow
          label="Trips today"
          value={(1284 + tick).toLocaleString("en-US")}
        />
        <StatusRow label="Last service" value="12 days ago" />
      </div>

      <p className="mt-5 text-[11px] leading-5 text-white/35">
        Illustrative view of the monitoring dashboard.
      </p>
    </div>
  );
}

export function RemoteMonitoring() {
  return (
    <section
      id="remote-monitoring"
      className="scroll-mt-24 bg-primary py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto grid max-w-max gap-12 px-5 md:px-8 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-16 lg:px-[30px] xl:gap-20">
        <motion.div
          variants={slideFromBottomStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            className="font-mono text-xl font-bold uppercase tracking-wide"
            variants={slideFromBottomInView}
          >
            <span className="text-accent">01.</span>{" "}
            <span className="text-white">Remote monitoring</span>
          </motion.p>

          <motion.h2
            className="mt-4 font-heading text-[clamp(2.25rem,5vw,3.75rem)] font-bold uppercase leading-[1.05] tracking-tight text-white"
            variants={headingBlurFadeInView}
          >
            The First Remotely Monitored Lifts In Pakistan
          </motion.h2>

          <motion.p
            className="mt-5 max-w-[60ch] text-base leading-7 text-white/70 md:text-lg md:leading-8"
            variants={slideFromBottomInView}
          >
            Every Sigmen lift reports on itself. Sensors on the motor, doors and
            controller stream back to a web dashboard, so a fault is something
            we act on rather than something you phone in. No one else in
            Pakistan offers it.
          </motion.p>

          <motion.ul
            className="mt-8 flex flex-col gap-3 md:mt-10"
            variants={slideFromBottomStagger}
          >
            {capabilities.map((capability) => (
              <motion.li
                key={capability}
                className="flex items-start gap-3 text-sm leading-6 text-white/85 md:text-[15px] md:leading-7"
                variants={slideFromBottomInView}
              >
                <HiOutlineCheck
                  className="mt-0.5 size-4 shrink-0 text-accent md:mt-1"
                  aria-hidden
                />
                {capability}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="mt-9 md:mt-11"
            variants={slideFromBottomInView}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent/90"
            >
              <ArrowIcon />
              Ask about monitoring
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={slideFromBottomInView}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <MonitorPanel />
        </motion.div>
      </div>
    </section>
  );
}
