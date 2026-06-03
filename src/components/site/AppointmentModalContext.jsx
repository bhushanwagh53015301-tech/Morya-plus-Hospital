import { createContext, useContext } from "react";

const AppointmentModalContext = createContext(null);

export function AppointmentModalProvider({ value, children }) {
  return (
    <AppointmentModalContext.Provider value={value}>{children}</AppointmentModalContext.Provider>
  );
}

export function useAppointmentModal() {
  const context = useContext(AppointmentModalContext);

  if (!context) {
    throw new Error("useAppointmentModal must be used within AppointmentModalProvider.");
  }

  return context;
}
