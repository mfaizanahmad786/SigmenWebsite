"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { ChevronDownIcon } from "@/components/ui/chevron-down-icon";
import {
  buildingTypeOptions,
  callTimeOptions,
  doorSizeOptions,
  doorTypeOptions,
  entityOptions,
  liftOriginOptions,
  liftTypeOptions,
  projectStatusOptions,
  quoteServiceOptions,
} from "@/constants/quote-form";
import { siteConfig } from "@/constants/site";
import { fadeInInView, headingBlurFadeInView } from "@/lib/motion";
import { cn } from "@/lib/utils";

type FormValues = {
  fullName: string;
  phone: string;
  city: string;
  entity: string;
  buildingType: string;
  status: string;
  service: string;
  date: string;
  callTime: string;
  message: string;
  floors: string;
  persons: string;
  doorSize: string;
  doorType: string;
  shaftWidth: string;
  shaftDepth: string;
  pitDepth: string;
  machineRoomHeight: string;
  floorHeight: string;
  travelHeight: string;
  origin: string;
  liftType: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

type SelectOption = { readonly value: string; readonly label: string };

const initialValues: FormValues = {
  fullName: "",
  phone: "",
  city: "",
  entity: "",
  buildingType: "",
  status: "",
  service: "",
  date: "",
  callTime: "",
  message: "",
  floors: "",
  persons: "",
  doorSize: "",
  doorType: "",
  shaftWidth: "",
  shaftDepth: "",
  pitDepth: "",
  machineRoomHeight: "",
  floorHeight: "",
  travelHeight: "",
  origin: "",
  liftType: "",
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

  if (!values.city.trim()) {
    errors.city = "City or area is required.";
  }

  if (!values.entity) {
    errors.entity = "Please select one.";
  }

  if (!values.buildingType) {
    errors.buildingType = "Please select a building type.";
  }

  if (!values.status) {
    errors.status = "Please select a project status.";
  }

  if (!values.service) {
    errors.service = "Please select a service.";
  }

  if (values.date && values.date < today) {
    errors.date = "Date cannot be earlier than today.";
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

function RequiredMark() {
  return <span className="text-accent">*</span>;
}

type FieldProps = {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: React.ReactNode;
};

function Field({
  id,
  label,
  required,
  error,
  className,
  children,
}: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className={labelClassName}>
        {label}
        {required ? <RequiredMark /> : null}
      </label>
      {children}
      <FieldError message={error} />
    </div>
  );
}

type SelectFieldProps = {
  id: string;
  label: string;
  options: readonly SelectOption[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  error?: string;
  className?: string;
};

function SelectField({
  id,
  label,
  options,
  value,
  onChange,
  required,
  error,
  className,
}: SelectFieldProps) {
  return (
    <Field
      id={id}
      label={label}
      required={required}
      error={error}
      className={className}
    >
      <div className="relative">
        <select
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          className={cn(
            fieldClassName,
            "cursor-pointer appearance-none pr-8",
            error && "border-accent",
            !value && "text-muted-foreground/55",
          )}
          aria-invalid={Boolean(error)}
        >
          {options.map((option) => (
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
    </Field>
  );
}

type TextFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "tel" | "date" | "number";
  placeholder?: string;
  autoComplete?: string;
  min?: string | number;
  required?: boolean;
  error?: string;
  className?: string;
};

function TextField({
  id,
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  autoComplete,
  min,
  required,
  error,
  className,
}: TextFieldProps) {
  return (
    <Field
      id={id}
      label={label}
      required={required}
      error={error}
      className={className}
    >
      <input
        id={id}
        name={id}
        type={type}
        inputMode={type === "number" ? "numeric" : undefined}
        placeholder={placeholder}
        autoComplete={autoComplete}
        min={min}
        value={value}
        onChange={onChange}
        className={cn(fieldClassName, error && "border-accent")}
        aria-invalid={Boolean(error)}
      />
    </Field>
  );
}

type RequestQuoteProps = {
  /** Eyebrow number, which differs per page since it runs in section order. */
  index?: string;
};

export function RequestQuote({ index = "05" }: RequestQuoteProps) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [showSpecs, setShowSpecs] = useState(false);
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
            <p className="font-mono text-xl font-bold uppercase tracking-wide">
              <span className="text-accent">{index}.</span>{" "}
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
              Tell us the basics and our team will call you back to work out the
              rest. No site measurements needed yet, and nothing here is
              binding.
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
              <HiOutlinePhone
                className="size-5 shrink-0 text-primary"
                aria-hidden
              />
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="hover:text-accent"
              >
                {siteConfig.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <HiOutlineEnvelope
                className="size-5 shrink-0 text-primary"
                aria-hidden
              />
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-accent"
              >
                {siteConfig.contact.email}
              </a>
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
              <TextField
                id="fullName"
                label="Full name"
                placeholder="Name"
                autoComplete="name"
                required
                value={values.fullName}
                onChange={updateField("fullName")}
                error={errors.fullName}
              />

              <TextField
                id="phone"
                label="Phone number"
                type="tel"
                placeholder="03XX XXXXXXX"
                autoComplete="tel"
                required
                value={values.phone}
                onChange={updateField("phone")}
                error={errors.phone}
              />

              <TextField
                id="city"
                label="City / area"
                placeholder="City"
                autoComplete="address-level2"
                required
                value={values.city}
                onChange={updateField("city")}
                error={errors.city}
              />

              <SelectField
                id="service"
                label="Service"
                options={quoteServiceOptions}
                required
                value={values.service}
                onChange={updateField("service")}
                error={errors.service}
              />

              <SelectField
                id="buildingType"
                label="Building type"
                options={buildingTypeOptions}
                required
                value={values.buildingType}
                onChange={updateField("buildingType")}
                error={errors.buildingType}
              />

              <SelectField
                id="status"
                label="Project status"
                options={projectStatusOptions}
                required
                value={values.status}
                onChange={updateField("status")}
                error={errors.status}
              />

              <fieldset className="md:col-span-2">
                <legend className={labelClassName}>
                  You are enquiring as
                  <RequiredMark />
                </legend>
                <div className="flex flex-wrap gap-x-7 gap-y-3">
                  {entityOptions.map((option) => (
                    <label
                      key={option.value}
                      className="flex cursor-pointer items-center gap-2.5 text-sm text-primary"
                    >
                      <input
                        type="radio"
                        name="entity"
                        value={option.value}
                        checked={values.entity === option.value}
                        onChange={updateField("entity")}
                        className="size-4 accent-accent"
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
                <FieldError message={errors.entity} />
              </fieldset>

              <TextField
                id="date"
                label="Preferred date to call"
                type="date"
                min={minDate}
                value={values.date}
                onChange={updateField("date")}
                error={errors.date}
              />

              <SelectField
                id="callTime"
                label="Preferred time"
                options={callTimeOptions}
                value={values.callTime}
                onChange={updateField("callTime")}
              />

              <div className="md:col-span-2">
                <label htmlFor="message" className={labelClassName}>
                  Tell us about your project
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

            <button
              type="button"
              onClick={() => setShowSpecs((current) => !current)}
              aria-expanded={showSpecs}
              aria-controls="technical-specs"
              className="mt-8 flex w-full items-center justify-between gap-4 rounded-xl border border-border bg-muted/50 px-5 py-4 text-left font-heading text-xs font-bold uppercase tracking-wide text-primary transition-colors hover:bg-muted"
            >
              Already have the technical specs?
              <ChevronDownIcon
                className={cn(
                  "transition-transform",
                  showSpecs && "rotate-180",
                )}
              />
            </button>

            {showSpecs ? (
              <div id="technical-specs" className="mt-6">
                <p className="text-sm leading-6 text-muted-foreground">
                  Only fill this in if you already have drawings or
                  measurements. Otherwise our team will collect these on a site
                  visit.
                </p>

                <div className="mt-6 grid gap-6 md:grid-cols-2 md:gap-x-8 md:gap-y-7">
                  <TextField
                    id="floors"
                    label="No. of floors"
                    placeholder="e.g. B + G + 4"
                    value={values.floors}
                    onChange={updateField("floors")}
                  />
                  <TextField
                    id="persons"
                    label="Persons / cargo"
                    placeholder="e.g. 8 persons"
                    value={values.persons}
                    onChange={updateField("persons")}
                  />
                  <SelectField
                    id="doorSize"
                    label="Door opening size"
                    options={doorSizeOptions}
                    value={values.doorSize}
                    onChange={updateField("doorSize")}
                  />
                  <SelectField
                    id="doorType"
                    label="Door type"
                    options={doorTypeOptions}
                    value={values.doorType}
                    onChange={updateField("doorType")}
                  />
                  <TextField
                    id="shaftWidth"
                    label="Shaft width (mm)"
                    type="number"
                    min={0}
                    value={values.shaftWidth}
                    onChange={updateField("shaftWidth")}
                  />
                  <TextField
                    id="shaftDepth"
                    label="Shaft depth (mm)"
                    type="number"
                    min={0}
                    value={values.shaftDepth}
                    onChange={updateField("shaftDepth")}
                  />
                  <TextField
                    id="pitDepth"
                    label="PIT depth (mm)"
                    type="number"
                    min={0}
                    value={values.pitDepth}
                    onChange={updateField("pitDepth")}
                  />
                  <TextField
                    id="machineRoomHeight"
                    label="Machine room height (mm)"
                    type="number"
                    min={0}
                    value={values.machineRoomHeight}
                    onChange={updateField("machineRoomHeight")}
                  />
                  <TextField
                    id="floorHeight"
                    label="Floor-to-floor height (mm)"
                    type="number"
                    min={0}
                    value={values.floorHeight}
                    onChange={updateField("floorHeight")}
                  />
                  <TextField
                    id="travelHeight"
                    label="Total travel height (mm)"
                    type="number"
                    min={0}
                    value={values.travelHeight}
                    onChange={updateField("travelHeight")}
                  />
                  <SelectField
                    id="origin"
                    label="Lift origin"
                    options={liftOriginOptions}
                    value={values.origin}
                    onChange={updateField("origin")}
                  />
                  <SelectField
                    id="liftType"
                    label="Lift type"
                    options={liftTypeOptions}
                    value={values.liftType}
                    onChange={updateField("liftType")}
                  />
                </div>
              </div>
            ) : null}

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex items-center gap-2.5 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent/90"
              >
                <ArrowIcon />
                Send enquiry
              </button>

              {submitted ? (
                <p className="text-sm font-medium text-primary">
                  Thank you, one of our team will call you within one business
                  day.
                </p>
              ) : null}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
