import { serviceInfo } from './emailServicesInfo'; // adjust path as needed

export function renderServiceDetails(serviceKey) {
  const service = serviceInfo[serviceKey];
  if (!service) return '';

  return `
    <h3>${service.title}</h3>
    <ul>
      ${service.items.map(item => `<li>${item}</li>`).join('')}
    </ul>
  `;
}


export default function buildConfirmationEmail({ data, readableService }) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>JPM and Sons - Submission Received</title>
    </head>
    <body style="font-family: Helvetica, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4;">
      <table width="100%" cellpadding="0" cellspacing="0" bgcolor="#f4f4f4">
        <tr>
          <td align="center">
            <table width="600" cellpadding="20" cellspacing="0" bgcolor="#ffffff" style="margin: 20px auto;">
              <tr>
                <td align="center">
                  <h2 style="margin: 0; font-size: 22px; font-weight: 600; color: #111;">We look forward to working with you.</h2>

                </td>
              </tr>
              <tr>
                <td style="font-size: 16px; line-height: 1.5;">
                  <p>Hi ${data.name},</p>
                  <p>
                    We’ve received your request for ${readableService} at: ${data.address}.
                    One of our team members will contact you shortly to confirm the details and schedule a visit if needed.
                  </p>

                  <h3>Here’s what you can expect from us:</h3>
                  <ul>
                    <li>Fast turnaround and clear communication</li>
                    <li>High-quality work from experienced professionals</li>
                    <li>A commitment to getting the job done right the first time</li>
                  </ul>

                  <h3>What Happens Next?</h3>
                  <ul>
                    <li>A team member will review your request.</li>
                    <li>Someone from our team will be in touch within a day to go over everything.</li>
                    <li>We’ll work with you to find a time that fits your schedule.</li>
                  </ul>

                  ${renderServiceDetails(data.service)}

                  <hr style="margin: 30px 0;" />

                  <table width="100%" cellpadding="0" cellspacing="0" style="text-align: center; background-color: #000000; border-radius: 8px;">
  <tr>
    <td style="padding: 10px;">
      <div style="background-color: #d1fae5; border-radius: 6px; padding: 12px;">FREE ESTIMATES</div>
    </td>
    <td style="padding: 10px;">
      <div style="background-color: #e0f2fe; border-radius: 6px; padding: 12px;">EASY SCHEDULING</div>
    </td>
    <td style="padding: 10px;">
      <div style="background-color: #fef9c3; border-radius: 6px; padding: 12px;">QUICK TURNAROUND</div>
    </td>
    <td style="padding: 10px;">
      <div style="background-color: #fae8ff; border-radius: 6px; padding: 12px;">NO HASSLE</div>
    </td>
  </tr>
</table>



                  <hr style="margin: 30px 0;" />

                  <h3>Questions or Concerns?</h3>
                  <p>You can reach us anytime:</p>
                  <p><strong>Phone:</strong> <a href="tel:+15164033030">+1-516-403-3030</a></p>
                  <p><strong>Email:</strong> <a href="mailto:contact@jpmandsons.com">contact@jpmandsons.com</a></p>

                  <p style="font-size: 16px; margin: 30px 0 10px; padding: 0; text-align: left;">
  <a href="https://www.facebook.com/JPMSonsCorp/"
     target="_blank"
     style="margin-right: 12px; text-decoration: none; color: #3b5998;">Facebook</a>
  <a href="https://www.instagram.com/jpmandsonscorp/"
     target="_blank"
     style="margin-right: 12px; text-decoration: none; color: #E1306C;">Instagram</a>
  <a href="https://www.tiktok.com/@jpmandsons"
     target="_blank"
     style="text-decoration: none; color: #000000;">TikTok</a>
</p>


                  <p style="font-size: 12px; color: #888;">
                    JPM and Sons © 2025. All Rights Reserved.<br/>
                    150 Spring Lane, Levittown, NY 11756<br/>
                    <a href="https://www.jpmandsons.com">Visit Us</a>
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}
