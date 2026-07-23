import {
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa6";
import { siteConfig } from "@/constants/site";

const socialIcons = {
  tiktok: FaTiktok,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
} as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-max flex-col items-start px-5 py-16 md:px-8 md:py-20 lg:px-[30px] lg:py-24">
        <ul className="flex items-center gap-3">
          {siteConfig.social.map((item) => {
            const Icon = socialIcons[item.icon];
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex size-11 items-center justify-center rounded-full bg-white text-primary transition-opacity hover:opacity-85 md:size-12"
                >
                  <Icon className="size-4 md:size-[18px]" aria-hidden />
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="mt-8 font-heading text-[clamp(1.75rem,6vw,3.75rem)] font-bold leading-[1.05] tracking-tight text-white transition-opacity hover:opacity-90 md:mt-10"
        >
          {siteConfig.contact.email}
        </a>

        <a
          href={`tel:${siteConfig.contact.phone}`}
          className="mt-4 text-base font-semibold tracking-wide text-white/75 transition-colors hover:text-white md:mt-5 md:text-lg"
        >
          {siteConfig.contact.phone}
        </a>
      </div>
    </footer>
  );
}
