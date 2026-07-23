import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ContactCards } from "@/components/sections/contact-cards";
import { ContactHero } from "@/components/sections/contact-hero";
import { RequestQuote } from "@/components/sections/request-quote";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sigmen for elevator installation, repair, and maintenance quotes. Reach us by phone, email, or our online request form.",
};

export default function ContactPage() {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-x-0 top-0 z-20">
          <Navbar tone="dark" />
        </div>
        <ContactHero />
      </div>
      <main>
        <ContactCards />
        <RequestQuote />
      </main>
      <Footer />
    </>
  );
}

