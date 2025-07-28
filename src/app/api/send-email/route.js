import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { generateEmailToSelf, generateEmailToCustomer } from '../../helpers/emails';
import Ajv from 'ajv';
import { contactFormSchema } from '../../../schemas/ContactFormSchema';
import addFormats from 'ajv-formats';
import { titleize } from '../../../data/helpers';

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const data = await request.json();
    console.log('Incoming form data:', data);

    // Honeypot bot check
    if (
      (data.company && data.company.trim() !== '') ||
      (data.email && data.email.toLowerCase().includes('estimator'))
    ) {
      return NextResponse.json({ success: true });
    }

    // Validation
    const validate = ajv.compile(contactFormSchema);
    const valid = validate(data);
    console.log(validate.errors);

    if (!valid) {
      const parsedErrors = {};
      for (const err of validate.errors) {
        const field = err.instancePath.replace('/', '');
        if (err.keyword === 'minLength' && err.params.limit <= 1) {
          parsedErrors[field] = `${titleize(field)} is required`;
        } else if (err.keyword === 'format' && field === 'email') {
          parsedErrors[field] = 'Email must be a valid email address';
        } else {
          parsedErrors[field] = `${titleize(field)} is required`;
        }
      }
      return NextResponse.json({ error: 'Invalid input', details: parsedErrors }, { status: 400 });
    }

    // Send to self
    const selfEmail = await resend.emails.send({
      from: 'JPM and Sons <contact@jpmandsons.com>',
      to: 'contact@jpmandsons.com',
      subject: 'New Form Submission on jpmandsons.com',
      html: generateEmailToSelf(data),
    });
    console.log('Self email result:', selfEmail);

    const customerEmail = await resend.emails.send({
      from: 'JPM and Sons <contact@jpmandsons.com>',
      to: data.email,
      subject: 'Thank you for contacting us.',
      html: generateEmailToCustomer(data),
    });
    console.log('Customer email result:', customerEmail);


    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json({ error: 'Email failed to send' }, { status: 500 });
  }
}
