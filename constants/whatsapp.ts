import { siteConfig } from "@/constants/site";

export const whatsappMessage =
  "Hi Sigmen, I would like to enquire about a lift for my building.";

/** wa.me wants the number as digits only and the text percent-encoded. */
export function buildWhatsappUrl(message: string = whatsappMessage) {
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}
