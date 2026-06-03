import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppointmentModal } from "./AppointmentModal";
import { AppointmentModalProvider } from "./AppointmentModalContext";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { WhatsAppButton } from "./WhatsAppButton";

export function SiteLayout({ children }) {
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/appointment") {
      setAppointmentOpen(true);
      navigate("/", { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <AppointmentModalProvider
      value={{
        openAppointment: () => setAppointmentOpen(true),
        closeAppointment: () => setAppointmentOpen(false),
      }}
    >
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <AppointmentModal open={appointmentOpen} onClose={() => setAppointmentOpen(false)} />
      </div>
    </AppointmentModalProvider>
  );
}
