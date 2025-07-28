export const contactFormSchema = {
    type: "object",
    properties: {
        name: { type: "string" },
        number: { type: "string" },
        email: { type: "string" },
        address: { type: "string" },
        service: { type: "string" },
        referral: { type: "string" },
        message: { type: "string" },
        company: { type: "string" }
    },
    required: ["name", "number", "email", "address", "service"],
    additionalProperties: false
};
