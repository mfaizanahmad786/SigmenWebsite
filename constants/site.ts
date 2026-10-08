export const siteConfig = {
  name: "Sigmen",
  description:
    "Reliable, affordable and safe elevator/lift solutions for homes, offices and commercial spaces, delivered by trained and certified professionals.",
  url: "https://sigmen.com",
  contact: {
    /** `href` repeats the number without spaces, since a tel: URI cannot contain any. */
    phones: [
      {
        country: "PK" as const,
        display: "+92 334 5751969",
        href: "+923345751969",
      },
      {
        country: "US" as const,
        display: "+1 (217) 790-7628",
        href: "+12177907628",
      },
    ],
    email: "mysigmen@gmail.com",
    /** Digits only, in international format, as wa.me requires. */
    whatsapp: "923345751969",
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
    {
      label: "Instagram",
      href: "https://www.instagram.com/sigmen.inc/",
      icon: "instagram" as const,
    },
    // Uncomment once the company LinkedIn page exists, and set the real href.
    // { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" as const },
  ],
} as const;
