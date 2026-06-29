export type NavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

export type SiteConfig = typeof import("@/constants/site").siteConfig;
