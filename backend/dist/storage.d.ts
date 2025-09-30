import { User, Contact, InsertContact, UpsertUser } from "@shared/schema";
export interface IStorage {
    getUser(id: string): Promise<User | undefined>;
    upsertUser(user: UpsertUser): Promise<User>;
    updateUserTheme(id: string, theme: string): Promise<User | undefined>;
    getUserByEmail(email: string): Promise<User | undefined>;
    createUser(userData: Partial<User>): Promise<User>;
    createContact(contact: InsertContact): Promise<Contact>;
}
export declare class DatabaseStorage implements IStorage {
    getUser(id: string): Promise<User | undefined>;
    upsertUser(userData: UpsertUser): Promise<User>;
    updateUserTheme(id: string, theme: string): Promise<User | undefined>;
    getUserByEmail(email: string): Promise<User | undefined>;
    createUser(userData: Partial<User>): Promise<User>;
    createContact(contactData: InsertContact): Promise<Contact>;
}
export declare const storage: DatabaseStorage;
//# sourceMappingURL=storage.d.ts.map