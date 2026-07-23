"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "@/constants/faqs";
import { headingBlurFadeInView, smoothEase } from "@/lib/motion";
import { cn } from "@/lib/utils";

function AccordionIcon({ open }: { open: boolean }) {
  return (
    <span
      className={cn(
        "flex size-9 shrink-0 items-center justify-center rounded-full transition-colors md:size-10",
        open ? "bg-white text-primary" : "bg-primary text-white",
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 16 16" fill="none" className="size-3.5">
        {open ? (
          <path
            d="M3.5 8h9"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        ) : (
          <>
            <path
              d="M3.5 8h9"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
            <path
              d="M8 3.5v9"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </>
        )}
      </svg>
    </span>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  function toggle(index: number) {
    setOpenIndex((current) => (current === index ? -1 : index));
  }

  return (
    <section className="bg-background py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-max px-5 md:px-8 lg:px-[30px]">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="font-mono text-xl font-bold uppercase tracking-wide text-accent">
            03. Faq
          </p>

          <motion.h2
            className="mt-4 font-heading text-[clamp(2.25rem,5vw,3.75rem)] font-bold uppercase leading-[1.05] tracking-tight text-primary"
            variants={headingBlurFadeInView}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            Get Every Single Answer From Here
          </motion.h2>
        </div>

        <ul className="mx-auto mt-12 flex max-w-[860px] flex-col gap-3 md:mt-16 md:gap-4 lg:mt-20">
          {faqs.map((faq, index) => {
            const open = openIndex === index;

            return (
              <li key={faq.question}>
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={open}
                  className={cn(
                    "w-full cursor-pointer rounded-[16px] border px-5 py-5 text-left transition-colors md:rounded-[18px] md:px-6 md:py-6",
                    open
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-primary hover:border-primary/25",
                  )}
                >
                  <span className="flex items-start gap-4 md:gap-5">
                    <AccordionIcon open={open} />
                    <span className="min-w-0 flex-1 pt-1">
                      <span className="block font-heading text-sm font-bold uppercase tracking-wide md:text-base">
                        {faq.question}
                      </span>

                      <AnimatePresence initial={false}>
                        {open ? (
                          <motion.span
                            key="answer"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.55, ease: smoothEase }}
                            className="block overflow-hidden"
                          >
                            <motion.span
                              initial={{ y: 16, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: 12, opacity: 0 }}
                              transition={{
                                duration: 0.5,
                                ease: smoothEase,
                                delay: 0.08,
                              }}
                              className={cn(
                                "mt-3 block text-sm leading-6 md:mt-3.5 md:text-[15px] md:leading-7",
                                "text-primary-foreground/85",
                              )}
                            >
                              {faq.answer}
                            </motion.span>
                          </motion.span>
                        ) : null}
                      </AnimatePresence>
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
