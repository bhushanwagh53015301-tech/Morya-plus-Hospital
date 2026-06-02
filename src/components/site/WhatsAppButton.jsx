import { MessageCircle } from "lucide-react";
import { site } from "@/data/site";

export function WhatsAppButton() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat with Moryaplus Hospital on WhatsApp"
      className="float-pulse fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
