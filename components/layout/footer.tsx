import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { HiBolt } from "react-icons/hi2";
import { siteConfig } from "@/constants/site";
import footerLogo from "../../images/footerLogo.jpeg";

const socialIcons = {
  facebook: FaFacebookF,
  linkedin: FaLinkedinIn,
  x: FaXTwitter,
  instagram: FaInstagram,
} as const;

function FooterLogo() {
  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label="Sigmen home">
      <span className="flex size-9 items-center justify-center rounded-full bg-accent">
        <HiBolt className="size-4 text-white" aria-hidden />
      </span>
      <span className="font-heading text-xl font-bold lowercase tracking-tight text-white">
        sigmen
      </span>
    </Link>
  );
}

function FooterBrandImage() {
  return (
    <div className="footer-logo-wrap relative w-full">
      <Image
        src={footerLogo}
        alt=""
        aria-hidden
        priority={false}
        className="footer-logo-image h-auto w-full object-contain object-bottom"
        sizes="100vw"
      />
      <div className="footer-logo-shadow" aria-hidden />
      <div className="footer-logo-fade" aria-hidden />
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="relative z-10 mx-auto max-w-max px-5 pb-8 pt-16 md:px-8 md:pt-20 lg:px-[30px]">
        <div className="grid gap-12 md:grid-cols-3 md:gap-10 lg:gap-16">
          <div className="max-w-sm">
            <FooterLogo />
            <p className="mt-6 text-sm leading-7 text-white/65 md:text-base">
              {siteConfig.footerDescription}
            </p>
            <ul className="mt-8 flex items-center gap-3">
              {siteConfig.social.map((item) => {
                const Icon = socialIcons[item.icon];
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="flex size-10 items-center justify-center rounded-full bg-white/10 text-sm text-white/80 transition-colors hover:bg-white/15 hover:text-white"
                    >
                      <Icon aria-hidden />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="md:pt-1">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-white">
              Quick links
            </h3>
            <ul className="mt-5 space-y-3">
              {siteConfig.footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-white md:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:pt-1">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-white">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/65 md:text-base">
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>{siteConfig.contact.address}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* <div className="relative z-0 -mt-8 w-full overflow-hidden md:-mt-12">
        <div className="mx-auto w-full max-w-max px-5 md:px-8 lg:px-[30px]">
          <FooterBrandImage />
        </div>
      </div> */}
    </footer>
  );
}
