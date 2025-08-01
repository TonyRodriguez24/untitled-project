import buildConfirmationEmail from "./email_html";
import { titleize } from "../../data/helpers";

function formatServiceName(serviceKey) {
  const map = {
    home_improvement: "Home Improvement",
    paver_sealing: "Paver Sealing",
    exterior_renovations: "Exterior Renovations",
    pressure_washing: "Pressure Washing"
  };
  return map[serviceKey] || serviceKey.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

export function generateEmailToSelf(data) {
  const formatService = formatServiceName;

  return `
    <h2>New Form Submission</h2>
    <p>Name: ${data.name}</p>
    <p>Email: <a href="mailto:${data.email}">${data.email}</a></p>
    <p>Phone: <a href="tel:${data.number}">${data.number}</a></p>
    <p>Address: ${data.address}</p>
    <p>Service: ${formatService(data.service)}</p>
    ${data.message ? `<p>Message: ${data.message}</p>` : ""}
    ${data.referral ? `<p>Referral: ${titleize(data.referral)}</p>` : ""}
  `;
}
