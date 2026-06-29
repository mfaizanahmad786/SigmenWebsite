"use client";

import { Fragment } from "react";
import { services } from "@/constants/services";
import { ServiceSlide } from "@/components/sections/service-slide";

/** Transparent scroll gap — service stays settled before the next one slides in */
const SETTLE_SCROLL_VH = 50;

export function Services() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-max px-5 pt-20 pb-10 text-center md:px-8 md:pt-28 lg:px-[30px]">
        <p className="font-mono text-xl font-bold uppercase tracking-wide">
          <span className="text-accent">02.</span>{" "}
          <span className="text-primary">Service</span>
        </p>
        <h2 className="mx-auto mt-4 max-w-4xl font-heading text-[clamp(2rem,4.5vw,3.25rem)] font-bold uppercase leading-[1.08] tracking-tight text-primary">
          Expert Elevator Installation and Maintenance
        </h2>
      </div>

      <div className="relative">
        {services.map((service, index) => (
          <Fragment key={service.id}>
            {index > 0 && (
              <div
                aria-hidden="true"
                className="pointer-events-none"
                style={{ height: `${SETTLE_SCROLL_VH}vh` }}
              />
            )}

            <div
              className="sticky top-20 flex h-[calc(100vh-5rem)] items-start justify-center bg-background"
              style={{ zIndex: index + 1 }}
            >
              <ServiceSlide service={service} index={index} />
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
