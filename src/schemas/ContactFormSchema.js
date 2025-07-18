export const contactFormSchema = {
    type: 'object',
    required: ['name', 'number', 'address', 'email', 'service'],
    properties: {
        name: { type: 'string', minLength: 1 },
        number: { type: 'string', minLength: 10 },
        email: { type: 'string', format: 'email', minLength: 1 },
        address: { type: 'string', minLength: 1 },
        service: { type: 'string', minLength: 1 },
        referral: { type: 'string' },
        message: { type: 'string' }
    },
    additionalProperties: false,
};
