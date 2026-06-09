import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 grid place-items-center rounded-full text-white shadow-elegant animate-pulse-ring"
      style={{ background: "var(--whatsapp)" }}
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
