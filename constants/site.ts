export const siteConfig = {
  name: "Sigmen",
  description:
    "Reliable, affordable, and safe elevator and lift solutions for homes, offices, and commercial spaces, delivered by trained and certified professionals.",
  url: "https://sigmen.com",
  contact: {
    phone: "+92 300 5013367",
    /** Same number without spaces, since a tel: URI should not contain any. */
    phoneHref: "+923005013367",
    email: "mysigmen@gmail.com",
    /** Digits only, in international format, as wa.me requires. */
    whatsapp: "923005013367",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Team", href: "/team" },
  ],
  footerLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Team", href: "/team" },
    { label: "Contact", href: "/contact" },
  ],
  social: [
    { label: "TikTok", href: "https://tiktok.com", icon: "tiktok" },
    { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  ],
} as const;
