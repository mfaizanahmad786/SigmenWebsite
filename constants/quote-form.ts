export const quoteServiceOptions = [
  { value: "", label: "Select a service" },
  { value: "installation", label: "Installation" },
  { value: "maintenance", label: "Maintenance" },
  { value: "modernization", label: "Modernization" },
  { value: "repair", label: "Repair" },
  { value: "inspection", label: "Inspection" },
  { value: "consultation", label: "Consultation" },
] as const;

export type QuoteServiceValue = Exclude<
  (typeof quoteServiceOptions)[number]["value"],
  ""
>;
