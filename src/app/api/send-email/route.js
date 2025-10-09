import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { titleize } from '../../../data/helpers';
import { contactFormSchema } from '../../../schemas/ContactFormSchema';
import { generateEmailToCustomer, generateEmailToSelf } from '../../helpers/emails';

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const data = await request.json();

    // Honeypot bot check
    if (
      (data.company && data.company.trim() !== '') ||
      (data.email && (
        data.email.toLowerCase().includes('estimator') ||
        data.email.toLowerCase().includes('estimation')
      )) ||
      !(/\d/.test(data.address)) // address missing number
    ) {
      return NextResponse.json({ success: true }, { status: 200 });
    }


    // Validation
    const validate = ajv.compile(contactFormSchema);
    const valid = validate(data);

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
      from: 'JPM and Sons <no-reply@jpmandsons.com>',
      to: ['contact@jpmandsons.com', 'jpmandsons123@gmail.com', 'tonyrodriguez2497@gmail.com'],
      subject: 'New Form Submission on jpmandsons.com',
      html: generateEmailToSelf(data),
    });

    const customerEmail = await resend.emails.send({
      from: 'JPM and Sons <contact@jpmandsons.com>',
      to: data.email,
      subject: 'Thank you for contacting us.',
      html: generateEmailToCustomer(data),
    });


    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json({ error: 'Email failed to send' }, { status: 500 });
  }
}
