import { useState } from "react";
import { buildWhatsAppUrl } from "@/lib/contact";
import { departments, site } from "@/data/site";

const initialState = {
  name: "",
  phone: "",
  email: "",
  department: "",
  message: "",
};

export function ContactForm({
  buttonLabel = "Send on WhatsApp",
  successTitle = "WhatsApp opened!",
  successText = "Your message is ready to send to our hospital team.",
}) {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!/^[\d +()-]{7,}$/.test(formData.phone)) {
      setStatus("error");
      setError("Please enter a valid phone number.");
      return;
    }

    if (!formData.name.trim() || !formData.department || !formData.message.trim()) {
      setStatus("error");
      setError("Please fill in the required fields.");
      return;
    }

    const url = buildWhatsAppUrl(site.whatsapp, formData);
    const popup = window.open(url, "_blank", "noopener,noreferrer");

    if (!popup) {
      window.location.href = url;
    }

    setStatus("ok");
    setError("");
    setFormData(initialState);
  };

  if (status === "ok") {
    return (
      <div className="py-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full gradient-brand text-2xl text-white">
          ✓
        </div>
        <h3 className="mt-4 text-xl font-bold">{successTitle}</h3>
        <p className="mt-2 text-muted-foreground">{successText}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 font-semibold text-brand"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          label="Phone Number"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <Input
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <div>
        <label className="text-sm font-medium text-foreground/80">Department</label>
        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
          required
          className="mt-1 w-full rounded-lg border border-input bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand"
        >
          <option value="">Select a department</option>
          {departments.map((department) => (
            <option key={department.slug} value={department.name}>
              {department.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="text-sm font-medium text-foreground/80">Message</label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Briefly describe your concern..."
          className="mt-1 w-full rounded-lg border border-input bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand"
        />
      </div>
      {error ? <p className="text-sm text-emergency">{error}</p> : null}
      <button
        type="submit"
        className="rounded-full gradient-brand py-3 font-semibold text-white shadow-soft transition hover:opacity-95"
      >
        {buttonLabel}
      </button>
    </form>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground/80">{label}</label>
      <input
        {...props}
        className="mt-1 w-full rounded-lg border border-input bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand"
      />
    </div>
  );
}
