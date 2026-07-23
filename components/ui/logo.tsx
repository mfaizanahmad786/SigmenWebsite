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
        "font-heading text-[22px] font-bold tracking-tight lowercase",
        tone === "dark" ? "text-white" : "text-primary",
        className,
      )}
      aria-label="Sigmen home"
    >
      sigmen
    </Link>
  );
}
