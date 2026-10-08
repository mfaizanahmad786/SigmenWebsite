import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { FlagIcon } from "@/components/ui/flag-icon";
import { siteConfig } from "@/constants/site";

const socialIcons = {
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
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
          className="mt-8 font-sans text-[clamp(1.75rem,6vw,3.75rem)] font-black leading-[1.05] tracking-tight text-white transition-opacity hover:opacity-90 md:mt-10"
        >
          {siteConfig.contact.email}
        </a>

        <div className="mt-4 flex flex-col gap-2 md:mt-5">
          {siteConfig.contact.phones.map((phone) => (
            <a
              key={phone.href}
              href={`tel:${phone.href}`}
              className="flex items-center gap-2.5 font-sans text-base font-semibold tracking-wide text-white/75 transition-colors hover:text-white md:text-lg"
            >
              <FlagIcon country={phone.country} />
              {phone.display}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
