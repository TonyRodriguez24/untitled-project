// emails.js

export default function buildConfirmationEmail({ data , readableService }) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>JPM and Sons - Submission Received</title>
    </head>
    <body style="font-family: Arial, sans-serif; margin: 0; padding: 0;">
      <table width="100%" cellpadding="0" cellspacing="0" bgcolor="#f4f4f4">
        <tr>
          <td align="center">
            <table width="600" cellpadding="20" cellspacing="0" bgcolor="#ffffff" style="margin-top: 20px;">
              <tr>
                <td align="center">
                  <h1>JPM and Sons</h1>
                  <p>We look forward to working with you.</p>
                </td>
              </tr>
              <tr>
                <td>
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
                  <p>A team member will review your request.</p>
                  <p>Someone from our team will be in touch within a day to go over everything.</p>
                  <p>We’ll work with you to find a time that fits your schedule.</p>

                  <hr />

                  <table width="100%" cellpadding="10">
                    <tr>
                      <td align="center">FREE ESTIMATES</td>
                      <td align="center">EASY SCHEDULING</td>
                      <td align="center">QUICK TURNAROUND</td>
                      <td align="center">NO HASSLE</td>
                    </tr>
                  </table>

                  <hr />

                  <h3>Questions or Concerns?</h3>
                  <p>You can reach us anytime:</p>
                  <p><strong>Phone:</strong> +1-516-403-3030</p>
                  <p><strong>Email:</strong> contact@jpmandsons.com</p>

                  <p>
                    <a href="https://www.facebook.com/JPMSonsCorp/" target="_blank">Facebook</a> |
                    <a href="https://www.instagram.com/jpmandsonscorp/" target="_blank">Instagram</a> |
                    <a href="https://www.tiktok.com/@jpmandsons" target="_blank">TikTok</a>
                  </p>

                  <hr />

                  <p>JPM and Sons © 2025. All Rights Reserved.</p>
                  <p>150 Spring Lane, Levittown, New York, 11756</p>
                  <p><a href="https://www.jpmandsons.com">Visit Us</a></p>
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

