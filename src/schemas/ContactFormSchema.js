export const contactFormSchema = {
    type: "object",
    properties: {
        name: { type: "string", minLength: 2 },
        number: { type: "string", pattern: "^\\d{3}-\\d{3}-\\d{4}$" },
        email: { type: "string", format: "email" },
        service: { type: "string", minLength: 1 },
        address: { type: "string", minLength: 6 },
        company: { type: "string" }  // <-- add this line
    },
    required: ["name", "number", "email", "service", "address"],
    additionalProperties: false
};
