import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  tone?: "light" | "dark";
};

export function Logo({ className, tone = "light" }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "font-sans text-[1.375rem] font-black uppercase leading-none tracking-[-0.02em] md:text-[1.5rem]",
        tone === "dark" ? "text-white" : "text-primary",
        className,
      )}
      aria-label="Sigmen home"
    >
      Sigmen
    </Link>
  );
}
