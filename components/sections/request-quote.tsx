"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineEnvelope, HiOutlineMapPin, HiOutlinePhone } from "react-icons/hi2";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { quoteServiceOptions } from "@/constants/quote-form";
import { siteConfig } from "@/constants/site";
import { fadeInInView, headingBlurFadeInView } from "@/lib/motion";
import { cn } from "@/lib/utils";

type FormValues = {
  fullName: string;
  phone: string;
  date: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  fullName: "",
  phone: "",
  date: "",
  service: "",
  message: "",
};

function getTodayString() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function validateForm(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  const today = getTodayString();

  if (!values.fullName.trim()) {
    errors.fullName = "Full name is required.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^[\d\s+\-()]{7,20}$/.test(values.phone.trim())) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!values.date) {
    errors.date = "Preferred date is required.";
  } else if (values.date < today) {
    errors.date = "Date cannot be earlier than today.";
  }

  if (!values.service) {
    errors.service = "Please select a service.";
  }

  return errors;
}

const fieldClassName =
  "w-full border-0 border-b border-border bg-transparent py-2.5 text-sm text-primary outline-none transition-colors placeholder:text-muted-foreground/55 focus:border-primary";

const labelClassName =
  "mb-2 block font-heading text-xs font-bold uppercase tracking-wide text-primary";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-xs text-accent">{message}</p>;
}

export function RequestQuote() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const minDate = useMemo(() => getTodayString(), []);

  const updateField =
    (field: keyof FormValues) =>
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setValues((current) => ({ ...current, [field]: event.target.value }));
      setErrors((current) => ({ ...current, [field]: undefined }));
      setSubmitted(false);
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateForm(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-background py-20 md:py-28 lg:py-32">
      <div className="mx-auto grid max-w-max gap-12 px-5 md:px-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16 lg:px-[30px]">
        <div className="flex flex-col gap-8 lg:gap-10">
          <div>
            <p className="font-mono text-sm font-medium uppercase tracking-wide">
              <span className="text-accent">05.</span>{" "}
              <span className="text-primary">Contact us</span>
            </p>

            <motion.h2
              className="mt-4 max-w-[14ch] font-heading text-[clamp(2rem,4.5vw,3.25rem)] font-bold uppercase leading-[1.05] tracking-tight text-primary"
              variants={headingBlurFadeInView}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.45 }}
            >
              Request your free quote
            </motion.h2>

            <motion.p
              className="mt-5 max-w-md text-base leading-7 text-muted-foreground md:text-lg md:leading-8"
              variants={fadeInInView}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.45 }}
            >
              Tell us about your project and our team will respond with a tailored
              elevator solution. From new installations to ongoing maintenance,
              Sigmen delivers safe, reliable service.
            </motion.p>
          </div>

          <motion.ul
            className="space-y-4 text-sm font-semibold text-primary md:text-base"
            variants={fadeInInView}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <li className="flex items-center gap-3">
              <HiOutlinePhone className="size-5 shrink-0 text-primary" aria-hidden />
              <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-accent">
                {siteConfig.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <HiOutlineEnvelope className="size-5 shrink-0 text-primary" aria-hidden />
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-accent"
              >
                {siteConfig.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <HiOutlineMapPin
                className="mt-0.5 size-5 shrink-0 text-primary"
                aria-hidden
              />
              <span>{siteConfig.contact.address}</span>
            </li>
          </motion.ul>
        </div>

        <motion.div
          variants={fadeInInView}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-[20px] border border-border bg-white p-6 md:p-8 lg:p-10"
          >
            <div className="grid gap-6 md:grid-cols-2 md:gap-x-8 md:gap-y-7">
              <div>
                <label htmlFor="fullName" className={labelClassName}>
                  Full name<span className="text-primary">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder="Name"
                  value={values.fullName}
                  onChange={updateField("fullName")}
                  className={cn(fieldClassName, errors.fullName && "border-accent")}
                  aria-invalid={Boolean(errors.fullName)}
                />
                <FieldError message={errors.fullName} />
              </div>

              <div>
                <label htmlFor="phone" className={labelClassName}>
                  Phone number<span className="text-primary">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Phone"
                  value={values.phone}
                  onChange={updateField("phone")}
                  className={cn(fieldClassName, errors.phone && "border-accent")}
                  aria-invalid={Boolean(errors.phone)}
                />
                <FieldError message={errors.phone} />
              </div>

              <div>
                <label htmlFor="date" className={labelClassName}>
                  Date<span className="text-primary">*</span>
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  min={minDate}
                  value={values.date}
                  onChange={updateField("date")}
                  className={cn(fieldClassName, errors.date && "border-accent")}
                  aria-invalid={Boolean(errors.date)}
                />
                <FieldError message={errors.date} />
              </div>

              <div>
                <label htmlFor="service" className={labelClassName}>
                  Service<span className="text-primary">*</span>
                </label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    value={values.service}
                    onChange={updateField("service")}
                    className={cn(
                      fieldClassName,
                      "cursor-pointer appearance-none pr-8",
                      errors.service && "border-accent",
                      !values.service && "text-muted-foreground/55",
                    )}
                    aria-invalid={Boolean(errors.service)}
                  >
                    {quoteServiceOptions.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        disabled={option.value === ""}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <span
                    className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-primary"
                    aria-hidden
                  >
                    ▾
                  </span>
                </div>
                <FieldError message={errors.service} />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="message" className={labelClassName}>
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Type here"
                  value={values.message}
                  onChange={updateField("message")}
                  className={cn(fieldClassName, "resize-none")}
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex items-center gap-2.5 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent/90"
              >
                <ArrowIcon />
                Request a quote
              </button>

              {submitted ? (
                <p className="text-sm font-medium text-primary">
                  Thank you — your quote request has been received.
                </p>
              ) : null}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
