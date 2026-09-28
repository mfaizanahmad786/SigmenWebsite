"use client";

import Link from "next/link";
import { services } from "@/constants/services";
import { ServiceSlide } from "@/components/sections/service-slide";
import { ArrowIcon } from "@/components/ui/arrow-icon";

/** The home page previews the first few services; /services lists them all. */
const HOME_SERVICE_COUNT = 4;

export function Services() {
  const featured = services.slice(0, HOME_SERVICE_COUNT);

  return (
    <section id="services" className="bg-background">
      <div className="mx-auto max-w-max px-5 pt-20 pb-10 text-center md:px-8 md:pt-28 lg:px-[30px]">
        <p className="font-mono text-xl font-bold uppercase tracking-wide">
          <span className="text-accent">02.</span>{" "}
          <span className="text-primary">Service</span>
        </p>
        <h2 className="mx-auto mt-4 max-w-4xl font-heading text-[clamp(2rem,4.5vw,3.25rem)] font-bold uppercase leading-[1.08] tracking-tight text-primary">
          Expert Elevator Installation and Maintenance
        </h2>
      </div>

      <div className="relative flex flex-col gap-16 pb-20 md:block md:gap-0 md:pb-0">
        {featured.map((service, index) => (
          <div
            key={service.id}
            className="flex items-start justify-center bg-background md:sticky md:top-20 md:h-[calc(100vh-5rem)]"
            style={{ zIndex: index + 1 }}
          >
            <ServiceSlide service={service} index={index} />
          </div>
        ))}
      </div>

      <div
        className="relative mx-auto flex max-w-max flex-col items-center gap-4 px-5 pb-20 text-center md:px-8 md:pb-28 lg:px-[30px]"
        style={{ zIndex: featured.length + 1 }}
      >
        <p className="text-sm leading-6 text-muted-foreground md:text-base">
          We also handle inspections and consultation for lifts at the planning
          stage.
        </p>
        <Link
          href="/services"
          className="inline-flex items-center gap-2.5 rounded-xl border border-border px-5 py-3 text-sm font-semibold uppercase tracking-wide text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white"
        >
          <ArrowIcon className="text-accent" />
          See all services
        </Link>
      </div>
    </section>
  );
}
