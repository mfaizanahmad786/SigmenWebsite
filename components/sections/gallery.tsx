"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { headingBlurFadeInView, smoothEase } from "@/lib/motion";
import { cn } from "@/lib/utils";

const galleryImages = [
  {
    src: "/images/services1.png",
    alt: "Technician working on an electrical control panel",
  },
  {
    src: "/images/hero-main.jpg",
    alt: "Service professional with tablet on site",
  },
  {
    src: "/images/services2.png",
    alt: "Technician installing electrical systems",
  },
  {
    src: "/images/careerImage.jpeg",
    alt: "Technician working on overhead wiring",
  },
  {
    src: "/images/MissionImage.png",
    alt: "Specialist working on an industrial structure",
  },
  {
    src: "/images/AboutImageLeft.png",
    alt: "Technician installing a wall outlet",
  },
] as const;

function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={cn("size-4", className)}
      aria-hidden="true"
    >
      <path
        d="M10 3.5 5.5 8 10 12.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={cn("size-4", className)}
      aria-hidden="true"
    >
      <path
        d="M6 3.5 10.5 8 6 12.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    function measure() {
      const track = trackRef.current;
      const firstCard = track?.querySelector<HTMLElement>("[data-gallery-card]");
      if (!track || !firstCard) return;

      const styles = window.getComputedStyle(track);
      const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;
      setStep(firstCard.offsetWidth + gap);

      const width = track.parentElement?.clientWidth ?? 0;
      if (width < 768) setVisible(1);
      else if (width < 1024) setVisible(2);
      else setVisible(3);
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const maxIndex = Math.max(0, galleryImages.length - visible);

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  function goPrev() {
    setIndex((current) => (current <= 0 ? maxIndex : current - 1));
  }

  function goNext() {
    setIndex((current) => (current >= maxIndex ? 0 : current + 1));
  }

  return (
    <section className="bg-muted py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-max px-5 md:px-8 lg:px-[30px]">
        <div className="max-w-[720px]">
          <p className="font-mono text-xl font-bold uppercase tracking-wide text-accent">
            02. Gallery
          </p>

          <motion.h2
            className="mt-4 font-heading text-[clamp(2.25rem,5vw,3.75rem)] font-bold uppercase leading-[1.05] tracking-tight text-primary"
            variants={headingBlurFadeInView}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            Creative Projects Displayed With Passion
          </motion.h2>
        </div>

        <div className="relative mt-12 md:mt-16 lg:mt-20">
          <div className="overflow-hidden">
            <motion.div
              ref={trackRef}
              className="flex w-full gap-4 md:gap-5 lg:gap-6"
              animate={{ x: step ? -index * step : 0 }}
              transition={{ duration: 0.55, ease: smoothEase }}
            >
              {galleryImages.map((image) => (
                <div
                  key={image.src}
                  data-gallery-card
                  className="relative aspect-3/4 w-full shrink-0 overflow-hidden rounded-[20px] md:w-[calc((100%-1.25rem)/2)] md:rounded-[24px] lg:w-[calc((100%-3rem)/3)]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous images"
            className="absolute left-3 top-1/2 cursor-pointer z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-primary/70 text-white transition-colors hover:bg-primary/85 md:left-4 md:size-11"
          >
            <ChevronLeftIcon />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next images"
            className="absolute right-3 top-1/2 cursor-pointer z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-primary/70 text-white transition-colors hover:bg-primary/85 md:right-4 md:size-11"
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
