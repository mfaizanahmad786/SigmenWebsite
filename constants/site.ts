export const siteConfig = {
  name: "Sigmen",
  description:
    "Reliable, affordable, and safe elevator and lift solutions for homes, offices, and commercial spaces — delivered by trained and certified professionals.",
  url: "https://sigmen.com",
  contact: {
    phone: "+92 (21) 555-0147",
    email: "info@sigmen.com",
    address: "123 Business Avenue, Karachi, Pakistan",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Essentials", href: "/essentials", hasDropdown: true },
    { label: "Blogs", href: "/blog" },
  ],
  footerLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/#services" },
    { label: "Contact", href: "/#contact" },
  ],
  social: [
    { label: "TikTok", href: "https://tiktok.com", icon: "tiktok" },
    { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  ],
} as const;
