import sgMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';
import { generateEmailToSelf, generateEmailToCustomer } from '../../helpers/emails'
import Ajv from 'ajv';
import { contactFormSchema } from '../../../schemas/ContactFormSchema';
import addFormats from "ajv-formats";
import { titleize } from '../../../data/helpers';

const ajv = new Ajv({ allErrors: true });

addFormats(ajv);

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
    try {
        const data = await request.json();
        if (
            (data.company && data.company.trim() !== "") ||
            (data.email && data.email.toLowerCase().includes("estimator"))
        ) {
            return NextResponse.json({ success: true });
        }


        
        console.log("Raw formData:", data); // <---- ADD THIS

        //validate data
        const validate = ajv.compile(contactFormSchema)
        const valid = validate(data)
        console.log(validate.errors); // check what’s failing
        

        if (!valid) {
            const parsedErrors = {};

            for (const err of validate.errors) {
                const field = err.instancePath.replace("/", "");

                if (err.keyword === "minLength" && err.params.limit <= 1) {
                    parsedErrors[field] = `${titleize(field)} is required`;
                } else if (err.keyword === "format" && field === "email") {
                    parsedErrors[field] = "Email must be a valid email address";
                } else {
                    parsedErrors[field] = `${titleize(field)} is required`;
                }

            }

            return NextResponse.json(
                { error: 'Invalid input', details: parsedErrors },
                { status: 400 }
            );
          }

        const messageToSelf = {
            to: 'contact@jpmandsons.com', 
            from: 'JPM and Sons <contact@jpmandsons.com>',
            subject: 'New Form Submission on jpmandsons.com',
            text: `New lead from ${data.name}`,
            html: generateEmailToSelf(data),
        };

        const messageToCustomer = {
            to: data.email,
            from: 'JPM and Sons <contact@jpmandsons.com>',
            subject: 'Thank you for contacting us.',
            text: `Hi, ${data.name}! Your form has been received, expect a call or email back from us soon.`,
            html: generateEmailToCustomer(data),
        };

        await sgMail.send([messageToSelf, messageToCustomer]);

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('Error', err.response?.body || err.message || err);
        return NextResponse.json({ error: 'Email failed to send' }, { status: 500 });
    }
}
