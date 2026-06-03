import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { site } from "@/data/site";

export function WhatsAppButton() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 320);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Chat with Moryaplus Hospital on WhatsApp"
        className="float-pulse inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft"
      >
        <WhatsAppIcon className="h-7 w-7 fill-current" />
      </a>

      {showBackToTop ? (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-soft"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      ) : null}
    </div>
  );
}

function WhatsAppIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.62 2 2.2 6.4 2.2 11.82c0 1.74.46 3.43 1.32 4.91L2 22l5.42-1.42a9.86 9.86 0 0 0 4.6 1.17h.01c5.41 0 9.82-4.4 9.82-9.82a9.74 9.74 0 0 0-2.8-7.02Zm-7.02 15.17h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.22.85.86-3.14-.2-.32a8.15 8.15 0 0 1-1.25-4.33c0-4.5 3.67-8.17 8.19-8.17a8.1 8.1 0 0 1 5.78 2.4 8.12 8.12 0 0 1 2.39 5.78c0 4.5-3.68 8.17-8.17 8.17Zm4.48-6.12c-.25-.13-1.47-.72-1.7-.8-.23-.08-.39-.12-.56.13-.17.25-.64.8-.79.96-.15.17-.29.19-.54.07-.25-.13-1.06-.39-2.02-1.24a7.62 7.62 0 0 1-1.4-1.74c-.15-.25-.02-.38.11-.51.11-.11.25-.29.38-.43.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.45.06-.68.32-.23.25-.87.85-.87 2.08 0 1.22.89 2.41 1.01 2.58.13.17 1.75 2.67 4.24 3.75.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.19.21-.58.21-1.09.15-1.19-.05-.1-.22-.16-.47-.29Z" />
    </svg>
  );
}
