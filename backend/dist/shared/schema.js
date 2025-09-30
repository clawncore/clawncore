import { z } from "zod";
export const insertContactSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    company: z.string().optional(),
    serviceInterest: z.string().optional(),
    message: z.string(),
});
//# sourceMappingURL=schema.js.map