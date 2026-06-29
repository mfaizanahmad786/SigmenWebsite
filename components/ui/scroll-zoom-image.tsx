"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type ScrollZoomImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  initialScale?: number;
};

export function ScrollZoomImage({
  src,
  alt,
  className,
  sizes = "100vw",
  initialScale = 1.3,
}: ScrollZoomImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [initialScale, 1]);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
    >
      <motion.div className="absolute inset-0 origin-center" style={{ scale }}>
        <Image src={src} alt={alt} fill className="object-cover" sizes={sizes} />
      </motion.div>
    </div>
  );
}
