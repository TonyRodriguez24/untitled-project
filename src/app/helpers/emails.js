import buildConfirmationEmail from "./email_html";

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
    return `
      <h2>New Form Submission</h2>
      <p>Name: ${data.name}</p>
      <p>Email: ${data.email}</p>
      <p>Phone: ${data.number}</p>
      <p>Address: ${data.address}</p>
      <p>Service: ${data.service}</p>
    `;
}

export function generateEmailToCustomer(data) {
  const readableService = formatServiceName(data.service);
  return buildConfirmationEmail({data, readableService})
}
  