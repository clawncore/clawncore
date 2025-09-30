import { z } from "zod";
export interface User {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
    profileImageUrl?: string;
    theme: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface ContactData {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    company?: string;
    serviceInterest?: string;
    message: string;
    createdAt: Date;
}
export type UpsertUser = Omit<User, 'id' | 'createdAt' | 'updatedAt'> & {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
};
export type InsertContact = Omit<ContactData, 'id' | 'createdAt'>;
export declare const insertContactSchema: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodString;
    company: z.ZodOptional<z.ZodString>;
    serviceInterest: z.ZodOptional<z.ZodString>;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    firstName: string;
    lastName: string;
    message: string;
    company?: string | undefined;
    serviceInterest?: string | undefined;
}, {
    email: string;
    firstName: string;
    lastName: string;
    message: string;
    company?: string | undefined;
    serviceInterest?: string | undefined;
}>;
export type InsertContactSchema = z.infer<typeof insertContactSchema>;
export type Contact = ContactData;
//# sourceMappingURL=schema.d.ts.map