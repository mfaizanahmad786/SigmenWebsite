import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowIcon } from "@/components/ui/arrow-icon";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "accent" | "inverse" | "outline";
  className?: string;
};

const variantStyles = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  accent: "bg-accent text-accent-foreground hover:bg-accent/90",
  inverse: "bg-white text-primary hover:bg-white/90",
  outline:
    "border border-border bg-white text-primary hover:bg-muted/60",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-semibold uppercase tracking-wide transition-colors",
        variantStyles[variant],
        className,
      )}
    >
      <ArrowIcon
        className={
          variant === "inverse" || variant === "outline"
            ? "text-accent"
            : undefined
        }
      />
      {children}
    </Link>
  );
}
