import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "font-heading text-[22px] font-bold tracking-tight text-primary lowercase",
        className,
      )}
      aria-label="Sigmen home"
    >
      sigmen
    </Link>
  );
}
