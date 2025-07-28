export default function buildConfirmationEmail({ data, readableService }) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>JPM and Sons - Submission Received</title>
    </head>
    <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4;">
      <table width="100%" cellpadding="0" cellspacing="0" bgcolor="#f4f4f4">
        <tr>
          <td align="center">
            <table width="600" cellpadding="20" cellspacing="0" bgcolor="#ffffff" style="margin: 20px auto;">
              <tr>
                <td align="center">
                  <h1 style="margin: 0;">JPM and Sons</h1>
                  <p style="margin: 0;">We look forward to working with you.</p>
                </td>
              </tr>
              <tr>
                <td style="font-size: 16px; line-height: 1.5;">
                  <p>Hi ${data.name},</p>
                  <p>
                    We’ve received your request for <strong>${readableService}</strong> at: <strong>${data.address}</strong>.
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

                  <hr style="margin: 30px 0;" />

                  <table width="100%" cellpadding="10" style="text-align: center;">
                    <tr>
                      <td>FREE ESTIMATES</td>
                      <td>EASY SCHEDULING</td>
                      <td>QUICK TURNAROUND</td>
                      <td>NO HASSLE</td>
                    </tr>
                  </table>

                  <hr style="margin: 30px 0;" />

                  <h3>Questions or Concerns?</h3>
                  <p>You can reach us anytime:</p>
                  <p><strong>Phone:</strong> <a href="tel:+15164033030">+1-516-403-3030</a></p>
                  <p><strong>Email:</strong> <a href="mailto:contact@jpmandsons.com">contact@jpmandsons.com</a></p>

                  <p>
                    <a href="https://www.facebook.com/JPMSonsCorp/" target="_blank">Facebook</a> |
                    <a href="https://www.instagram.com/jpmandsonscorp/" target="_blank">Instagram</a> |
                    <a href="https://www.tiktok.com/@jpmandsons" target="_blank">TikTok</a>
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
