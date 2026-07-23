import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/constants/site";
import { cn } from "@/lib/utils";

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-3", className)}
      aria-hidden="true"
    >
      <path
        d="M2.5 4.5L6 8L9.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type NavbarProps = {
  tone?: "light" | "dark";
};

export function Navbar({ tone = "light" }: NavbarProps) {
  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto flex max-w-nav items-center justify-between px-5 py-5 md:px-8 lg:px-[30px]">
        <Logo tone={tone} />

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 lg:flex"
          aria-label="Main navigation"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide transition-opacity hover:opacity-70",
                tone === "dark" ? "text-white" : "text-primary",
              )}
            >
              {item.label}
              {"hasDropdown" in item && item.hasDropdown ? (
                <ChevronDownIcon />
              ) : null}
            </Link>
          ))}
        </nav>

        <ButtonLink
          href="/contact"
          variant={tone === "dark" ? "inverse" : "primary"}
        >
          Contact us
        </ButtonLink>
      </div>
    </header>
  );
}
