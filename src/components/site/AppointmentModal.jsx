import { X } from "lucide-react";
import { AppointmentForm } from "./AppointmentForm";

export function AppointmentModal({ open, onClose }) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[oklch(0.15_0.03_250/.68)] p-4">
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 shadow-soft md:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close appointment form"
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted text-foreground transition hover:bg-brand-soft hover:text-brand"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="pr-10">
          <h2 className="font-display text-3xl font-bold text-foreground">Book Appointment</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Share the essential details and we will open WhatsApp with your appointment request.
          </p>
        </div>

        <div className="mt-6">
          <AppointmentForm
            buttonLabel="Send Appointment Request"
            successText="Your appointment request is ready in WhatsApp."
          />
        </div>
      </div>
    </div>
  );
}
