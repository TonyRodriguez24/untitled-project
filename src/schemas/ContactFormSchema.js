// schemas/contactFormSchema.js
export const contactFormSchema = {
    type: 'object',
    required: ['name', 'number', 'address', 'email', 'service'],
    properties: {
        name: { type: 'string', minLength: 2 },
        number: { type: 'string', minLength: 10 },
        email: { type: 'string', format: 'email' },
        address: { type: 'string' },
        service: { type: 'string' },
        referral: { type: 'string' }, 
        message: { type: 'string' }, //not required
    },
    additionalProperties: false,
};
  