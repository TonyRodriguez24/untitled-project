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
    return `
      <p>Hi ${data.name},</p>
      <p>Thanks for reaching out to JPM and Sons!</p>
      <p>We’ve received your request for ${data.service} at:</p>
      <p><em>${data.address}</em></p>
      <p>If everything looks correct, you're all set. If anything needs to be changed, feel free to resubmit the form or call us directly.</p>
      <p>We pride ourselves on fast, reliable communication, so keep an eye on your phone or inbox.</p>
      <br />
      <p>— The JPM and Sons Team</p>
    `;
}
  