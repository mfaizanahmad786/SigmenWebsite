"use client";

import { motion } from "framer-motion";
import { stats } from "@/constants/stats";
import { slideFromBottomInView, slideFromBottomStagger } from "@/lib/motion";

function WorldMapWatermark() {
  return (
    <svg
      viewBox="0 0 1200 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none absolute left-1/2 top-1/2 h-full w-[min(100%,900px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.65]"
      aria-hidden="true"
    >
      <ellipse cx="600" cy="200" rx="520" ry="160" stroke="#1c1e3f" strokeWidth="0.75" opacity="0.4" />
      <path
        d="M120 200 C200 120 400 100 600 130 C800 100 1000 120 1080 200 C1000 280 800 300 600 270 C400 300 200 280 120 200Z"
        stroke="#1c1e3f"
        strokeWidth="0.75"
        opacity="0.35"
      />
      <circle cx="280" cy="170" r="3" fill="#1c1e3f" opacity="0.3" />
      <circle cx="420" cy="150" r="3" fill="#1c1e3f" opacity="0.3" />
      <circle cx="560" cy="165" r="3" fill="#1c1e3f" opacity="0.3" />
      <circle cx="700" cy="155" r="3" fill="#1c1e3f" opacity="0.3" />
      <circle cx="840" cy="175" r="3" fill="#1c1e3f" opacity="0.3" />
      <circle cx="960" cy="190" r="3" fill="#1c1e3f" opacity="0.3" />
      <line x1="280" y1="170" x2="420" y2="150" stroke="#1c1e3f" strokeWidth="0.5" opacity="0.25" />
      <line x1="420" y1="150" x2="560" y2="165" stroke="#1c1e3f" strokeWidth="0.5" opacity="0.25" />
      <line x1="560" y1="165" x2="700" y2="155" stroke="#1c1e3f" strokeWidth="0.5" opacity="0.25" />
      <line x1="700" y1="155" x2="840" y2="175" stroke="#1c1e3f" strokeWidth="0.5" opacity="0.25" />
      <line x1="840" y1="175" x2="960" y2="190" stroke="#1c1e3f" strokeWidth="0.5" opacity="0.25" />
      <line x1="420" y1="150" x2="700" y2="155" stroke="#1c1e3f" strokeWidth="0.5" opacity="0.2" />
      <line x1="560" y1="165" x2="840" y2="175" stroke="#1c1e3f" strokeWidth="0.5" opacity="0.2" />
    </svg>
  );
}

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-muted py-16 md:py-20 lg:py-24">
      <WorldMapWatermark />

      <motion.div
        className="relative z-10 mx-auto grid max-w-max grid-cols-2 gap-10 px-5 md:grid-cols-4 md:gap-8 md:px-8 lg:px-[30px]"
        variants={slideFromBottomStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={slideFromBottomInView}
            className="flex flex-col items-center text-center"
          >
            <p className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-none tracking-tight">
              <span className="text-primary">{stat.value}</span>
              <span className="text-accent">{stat.suffix}</span>
            </p>
            <p className="mt-3 max-w-[180px] text-xs font-semibold uppercase tracking-wide text-muted-foreground md:text-sm">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
