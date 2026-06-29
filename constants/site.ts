export const siteConfig = {
  name: "Sigmen",
  description:
    "Reliable, affordable, and safe elevator and lift solutions for homes, offices, and commercial spaces — delivered by trained and certified professionals.",
  url: "https://sigmen.com",
  contact: {
    phone: "",
    email: "",
    address: "",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Essentials", href: "/essentials", hasDropdown: true },
    { label: "Blogs", href: "/blog" },
  ],
} as const;
