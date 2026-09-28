import { services } from "@/constants/services";

/** Derived from the service list so the form and the services page cannot drift. */
export const quoteServiceOptions = [
  { value: "", label: "Select a service" },
  ...services.map((service) => ({ value: service.slug, label: service.title })),
];

export type QuoteServiceValue = (typeof services)[number]["slug"];

export const entityOptions = [
  { value: "Owner", label: "Owner" },
  { value: "Contractor", label: "Contractor" },
  { value: "3rd Party", label: "3rd party" },
] as const;

export const buildingTypeOptions = [
  { value: "", label: "Select one" },
  { value: "Home", label: "Home" },
  { value: "Office", label: "Office" },
  { value: "Plaza", label: "Plaza" },
  { value: "Mall", label: "Mall" },
  { value: "Hospital", label: "Hospital" },
  { value: "Warehouse", label: "Warehouse" },
  { value: "Factory", label: "Factory" },
  { value: "Other", label: "Other" },
] as const;

export const projectStatusOptions = [
  { value: "", label: "Select one" },
  { value: "New plan", label: "New plan" },
  { value: "In progress", label: "In progress" },
  { value: "Gray structure ready", label: "Gray structure ready" },
  { value: "Occupied", label: "Occupied" },
] as const;

export const callTimeOptions = [
  { value: "", label: "Select one" },
  { value: "Morning", label: "Morning" },
  { value: "Afternoon", label: "Afternoon" },
  { value: "Evening", label: "Evening" },
] as const;

export const doorSizeOptions = [
  { value: "", label: "Select one" },
  { value: "700mm", label: "700mm" },
  { value: "800mm", label: "800mm" },
  { value: "900mm", label: "900mm" },
  { value: "1000mm", label: "1000mm" },
  { value: "1200mm", label: "1200mm" },
  { value: "Not sure", label: "Not sure" },
] as const;

export const doorTypeOptions = [
  { value: "", label: "Select one" },
  { value: "Center opening", label: "Center opening" },
  { value: "Side opening", label: "Side opening" },
] as const;

export const liftOriginOptions = [
  { value: "", label: "Select one" },
  { value: "China", label: "China" },
  { value: "Europe", label: "Europe" },
  { value: "Partially imported", label: "Partially imported" },
] as const;

export const liftTypeOptions = [
  { value: "", label: "Select one" },
  { value: "MR", label: "MR" },
  { value: "MRL", label: "MRL" },
] as const;
