"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { TbDiamondFilled } from "react-icons/tb";
import { cn } from "@/lib/utils";

const marqueeWords = [
  { text: "Lifts", variant: "solid" },
  { text: "Elevators", variant: "outline" },
  { text: "Escalators", variant: "solid" },
] as const;

function MarqueeWord({
  text,
  variant,
}: {
  text: string;
  variant: "solid" | "outline";
}) {
  return (
    <span
      className={cn(
        "whitespace-nowrap font-heading text-[clamp(2.75rem,9vw,5.5rem)] font-bold uppercase leading-none tracking-tight",
        variant === "solid"
          ? "text-primary"
          : "text-transparent [-webkit-text-stroke:1.5px_#1c1e3f] md:[-webkit-text-stroke:2px_#1c1e3f]",
      )}
    >
      {text}
    </span>
  );
}

function MarqueeTrack() {
  return (
    <div className="flex shrink-0 items-center gap-10 px-10 md:gap-14 md:px-14">
      {marqueeWords.map((item) => (
        <Fragment key={item.text}>
          <MarqueeWord text={item.text} variant={item.variant} />
          <TbDiamondFilled
            className="size-8 shrink-0 text-accent md:size-10"
            aria-hidden
          />
        </Fragment>
      ))}
    </div>
  );
}

export function MarqueeDivider() {
  return (
    <section
      className="overflow-hidden border-y border-border/50 bg-background py-10 md:py-14"
      aria-hidden
    >
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <MarqueeTrack />
        <MarqueeTrack />
      </motion.div>
    </section>
  );
}
