"use client";

import { services } from "@/constants/services";
import { ServiceSlide } from "@/components/sections/service-slide";

export function Services() {
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
        {services.map((service, index) => (
          <div
            key={service.id}
            className="flex items-start justify-center bg-background md:sticky md:top-20 md:h-[calc(100vh-5rem)]"
            style={{ zIndex: index + 1 }}
          >
            <ServiceSlide service={service} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}
