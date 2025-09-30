import { z } from "zod";

// User interface for MongoDB
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

// Contact interface for MongoDB
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

// Types for insert operations
export type UpsertUser = Omit<User, 'id' | 'createdAt' | 'updatedAt'> & {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type InsertContact = Omit<ContactData, 'id' | 'createdAt'>;

// Create a schema with optional fields for the contact form
export const insertContactSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  company: z.string().optional(),
  serviceInterest: z.string().optional(),
  message: z.string(),
});

export type InsertContactSchema = z.infer<typeof insertContactSchema>;
export type Contact = ContactData;