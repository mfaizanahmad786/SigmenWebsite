import { FaWhatsapp } from "react-icons/fa";
import { buildWhatsappUrl } from "@/constants/whatsapp";

const whatsappUrl = buildWhatsappUrl();

export function WhatsappButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Sigmen on WhatsApp"
      className="whatsapp-bubble group fixed bottom-5 right-5 z-50 flex items-center gap-3 md:bottom-7 md:right-7"
    >
      <span className="pointer-events-none hidden translate-x-2 rounded-xl bg-accent px-3.5 py-2 text-xs font-semibold uppercase tracking-wide text-white opacity-0 shadow-lg transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 md:block">
        Chat on WhatsApp
      </span>

      <span className="flex size-14 items-center justify-center rounded-full bg-primary text-white shadow-lg ring-1 ring-black/5 transition-transform duration-300 ease-out group-hover:scale-105 group-focus-visible:scale-105">
        <FaWhatsapp className="size-7" aria-hidden />
      </span>
    </a>
  );
}
