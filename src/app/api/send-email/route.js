import sgMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';
import {generateEmailToSelf, generateEmailToCustomer} from '../../helpers/emails'

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
    try {
        const data = await request.json();

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
            subject: 'Thank you for contacting JPM and Sons!',
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
