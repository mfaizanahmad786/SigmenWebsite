import type { Metadata } from "next";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { fontVariables } from "@/lib/fonts";
import { siteConfig } from "@/constants/site";
import "lenis/dist/lenis.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontVariables} h-full`}>
      <body className="flex min-h-full flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
