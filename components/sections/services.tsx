"use client";

import { services } from "@/constants/services";
import { ServiceSlide } from "@/components/sections/service-slide";

/**
 * Extra scroll runway after each service settles before the next one
 * begins sliding in. Added to each sticky panel's min-height (not 100vh alone).
 */
const SETTLE_SCROLL_VH = 50;

export function Services() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-max px-5 pt-20 pb-10 md:px-8 md:pt-28 lg:px-[30px]">
        <p className="font-mono text-sm font-medium uppercase tracking-wide">
          <span className="text-accent">02.</span>{" "}
          <span className="text-primary">Service</span>
        </p>
        <h2 className="mt-4 max-w-4xl font-heading text-[clamp(2rem,4.5vw,3.25rem)] font-bold uppercase leading-[1.08] tracking-tight text-primary">
          Expert Elevator Installation and Maintenance
        </h2>
      </div>

      <div className="relative">
        {services.map((service, index) => {
          const isLast = index === services.length - 1;

          return (
            <div
              key={service.id}
              className="sticky top-20 bg-background"
              style={{
                zIndex: index + 1,
                minHeight: isLast
                  ? "calc(100vh - 5rem)"
                  : `calc(100vh + ${SETTLE_SCROLL_VH}vh)`,
              }}
            >
              <div className="flex h-[calc(100vh-5rem)] items-start justify-center pt-[10vh] md:pt-[12vh]">
                <ServiceSlide service={service} index={index} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
