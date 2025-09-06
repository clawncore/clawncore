import {
  users,
  contacts,
  type User,
  type UpsertUser,
  type InsertContact,
  type Contact,
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

// Interface for storage operations
export interface IStorage {
  // User operations
  // (IMPORTANT) these user operations are mandatory for Replit Auth.
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  updateUserTheme(id: string, theme: string): Promise<User | undefined>;
  
  // Contact operations
  createContact(contact: InsertContact): Promise<Contact>;
}

export class DatabaseStorage implements IStorage {
  // User operations
  // (IMPORTANT) these user operations are mandatory for Replit Auth.

  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  async updateUserTheme(id: string, theme: string): Promise<User | undefined> {
    const [user] = await db
      .update(users)
      .set({ theme, updatedAt: new Date() })
      .where(eq(users.id, id))
      .returning();
    return user;
  }

  // Contact operations
  async createContact(contactData: InsertContact): Promise<Contact> {
    const [contact] = await db
      .insert(contacts)
      .values(contactData)
      .returning();
    return contact;
  }
}

export const storage = new DatabaseStorage();
