"use client";

import { motion } from "framer-motion";
import {
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlinePhone,
} from "react-icons/hi2";
import { siteConfig } from "@/constants/site";
import { slideFromBottomInView, slideFromBottomStagger } from "@/lib/motion";

const contactCards = [
  {
    label: "Email address",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    icon: HiOutlineEnvelope,
  },
  {
    label: "Phone number",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone}`,
    icon: HiOutlinePhone,
  },
  {
    label: "Office address",
    value: siteConfig.contact.address,
    href: null,
    icon: HiOutlineMapPin,
  },
] as const;

export function ContactCards() {
  return (
    <section className="bg-background py-16 md:py-20 lg:py-24">
      <motion.div
        className="mx-auto grid max-w-max gap-4 px-5 md:grid-cols-3 md:gap-5 md:px-8 lg:gap-6 lg:px-[30px]"
        variants={slideFromBottomStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {contactCards.map((card) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={card.label}
              variants={slideFromBottomInView}
              className="rounded-[16px] border border-border bg-card px-6 py-7 md:rounded-[18px] md:px-7 md:py-8"
            >
              <Icon className="size-7 text-primary md:size-8" aria-hidden />

              {card.href ? (
                <a
                  href={card.href}
                  className="mt-5 block font-heading text-sm font-bold uppercase tracking-wide text-primary transition-colors hover:text-accent md:text-base"
                >
                  {card.value}
                </a>
              ) : (
                <p className="mt-5 font-heading text-sm font-bold uppercase tracking-wide text-primary md:text-base">
                  {card.value}
                </p>
              )}

              <p className="mt-2 text-sm text-muted-foreground">{card.label}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
