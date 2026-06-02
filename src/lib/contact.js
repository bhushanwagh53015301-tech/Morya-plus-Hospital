export function buildWhatsAppUrl(whatsAppLink, payload) {
  const message = [
    "Hello Morya Plus Hospital,",
    "",
    `Name: ${payload.name}`,
    `Phone: ${payload.phone}`,
    payload.email ? `Email: ${payload.email}` : null,
    `Department: ${payload.department}`,
    `Message: ${payload.message}`,
  ]
    .filter(Boolean)
    .join("\n");

  return `${whatsAppLink}?text=${encodeURIComponent(message)}`;
}

export function buildAppointmentWhatsAppUrl(whatsAppLink, payload) {
  const message = [
    "Hello Morya Plus Hospital,",
    "",
    "I would like to book an appointment.",
    `Name: ${payload.name}`,
    `Phone: ${payload.phone}`,
    payload.email ? `Email: ${payload.email}` : null,
    `Department: ${payload.department}`,
    payload.doctor ? `Preferred Doctor: ${payload.doctor}` : null,
    payload.preferredDate ? `Preferred Date: ${payload.preferredDate}` : null,
    payload.preferredTime ? `Preferred Time: ${payload.preferredTime}` : null,
    payload.message ? `Notes: ${payload.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  return `${whatsAppLink}?text=${encodeURIComponent(message)}`;
}
