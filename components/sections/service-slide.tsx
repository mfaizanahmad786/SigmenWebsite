import Image from "next/image";
import type { Service } from "@/constants/services";
import { cn } from "@/lib/utils";

type ServiceSlideProps = {
  service: Service;
  index: number;
};

function ServiceText({
  service,
  className,
}: {
  service: Service;
  className?: string;
}) {
  return (
    <div className={cn("max-w-[280px] md:max-w-[320px]", className)}>
      <h3 className="font-heading text-xl font-bold uppercase leading-tight tracking-tight text-accent md:text-2xl lg:text-[1.75rem]">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
        {service.description}
      </p>
    </div>
  );
}

function ServiceNumber({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "select-none font-heading text-[clamp(5rem,14vw,10rem)] font-bold leading-none text-primary/10",
        className,
      )}
      aria-hidden="true"
    >
      {id}
    </span>
  );
}

function ServiceImage({ service }: { service: Service }) {
  return (
    <div className="relative h-[220px] w-[150px] overflow-hidden rounded-[18px] md:h-[260px] md:w-[190px] md:rounded-[20px] lg:h-[280px] lg:w-[210px]">
      <Image
        src={service.image}
        alt={service.title}
        fill
        className="object-cover"
        sizes="210px"
      />
    </div>
  );
}

export function ServiceSlide({ service, index }: ServiceSlideProps) {
  const isEven = index % 2 === 0;

  return (
    <div className="mx-auto grid w-full max-w-max grid-cols-1 items-center gap-10 px-5 md:grid-cols-[1fr_auto_1fr] md:gap-8 md:px-8 lg:gap-12 lg:px-[30px]">
      <div className="hidden min-h-[280px] md:flex md:items-center md:justify-start">
        {isEven ? (
          <ServiceText service={service} />
        ) : (
          <ServiceNumber id={service.id} />
        )}
      </div>

      <div className="flex justify-center">
        <ServiceImage service={service} />
      </div>

      <div className="hidden min-h-[280px] md:flex md:items-center md:justify-end">
        {isEven ? (
          <ServiceNumber id={service.id} className="text-right" />
        ) : (
          <ServiceText service={service} className="ml-auto text-right" />
        )}
      </div>

      <div className="flex items-start justify-between gap-4 md:hidden">
        {isEven ? (
          <>
            <ServiceText service={service} className="flex-1" />
            <ServiceNumber id={service.id} />
          </>
        ) : (
          <>
            <ServiceNumber id={service.id} />
            <ServiceText service={service} className="flex-1 text-right" />
          </>
        )}
      </div>
    </div>
  );
}
