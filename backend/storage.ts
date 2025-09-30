import { User, Contact, InsertContact, UpsertUser } from "@shared/schema";
import { connectToDatabase } from "./db";
import mongoose from "mongoose";

// Define User model
const userSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  firstName: { type: String },
  lastName: { type: String },
  profileImageUrl: { type: String },
  theme: { type: String, default: "dark" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Define Contact model
const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String },
  serviceInterest: { type: String },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Interface for storage operations
export interface IStorage {
  // User operations
  // (IMPORTANT) these user operations are mandatory for Replit Auth.
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  updateUserTheme(id: string, theme: string): Promise<User | undefined>;

  // Additional user operations for registration
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(userData: Partial<User>): Promise<User>;

  // Contact operations
  createContact(contact: InsertContact): Promise<Contact>;
}

export class DatabaseStorage implements IStorage {
  // User operations
  // (IMPORTANT) these user operations are mandatory for Replit Auth.

  async getUser(id: string): Promise<User | undefined> {
    try {
      console.log('Attempting to connect to database for getUser');
      await connectToDatabase();
      console.log('Database connection established for getUser');
      // Force deletion and recreation of model to avoid cached connections
      if (mongoose.models['User']) {
        mongoose.deleteModel('User');
      }
      const UserModel = mongoose.model('User', userSchema);
      const user = await UserModel.findOne({ id: id });
      console.log('User found:', user ? 'Yes' : 'No');
      return user ? user.toObject() as User : undefined;
    } catch (error) {
      console.error("Error fetching user:", error);
      return undefined;
    }
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    try {
      console.log('Attempting to connect to database for upsertUser');
      await connectToDatabase();
      console.log('Database connection established for upsertUser');
      // Force deletion and recreation of model to avoid cached connections
      if (mongoose.models['User']) {
        mongoose.deleteModel('User');
      }
      const UserModel = mongoose.model('User', userSchema);

      // Check if user exists
      let user = await UserModel.findOne({ id: userData.id });
      console.log('Existing user found:', user ? 'Yes' : 'No');

      if (user) {
        // Update existing user
        user.email = userData.email;
        user.firstName = userData.firstName;
        user.lastName = userData.lastName;
        user.profileImageUrl = userData.profileImageUrl;
        user.theme = userData.theme || user.theme;
        user.updatedAt = new Date();
        await user.save();
        return user.toObject() as User;
      } else {
        // Create new user
        const newUser = new UserModel({
          id: userData.id,
          email: userData.email,
          firstName: userData.firstName,
          lastName: userData.lastName,
          profileImageUrl: userData.profileImageUrl,
          theme: userData.theme || "dark"
        });
        await newUser.save();
        return newUser.toObject() as User;
      }
    } catch (error) {
      console.error("Error upserting user:", error);
      // Fallback to previous implementation
      return {
        id: userData.id || new mongoose.Types.ObjectId().toString(),
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        profileImageUrl: userData.profileImageUrl,
        theme: userData.theme || "dark",
        createdAt: new Date(),
        updatedAt: new Date()
      } as User;
    }
  }

  async updateUserTheme(id: string, theme: string): Promise<User | undefined> {
    try {
      console.log('Attempting to connect to database for updateUserTheme');
      await connectToDatabase();
      console.log('Database connection established for updateUserTheme');
      // Force deletion and recreation of model to avoid cached connections
      if (mongoose.models['User']) {
        mongoose.deleteModel('User');
      }
      const UserModel = mongoose.model('User', userSchema);
      const user = await UserModel.findOne({ id: id });
      if (user) {
        user.theme = theme;
        user.updatedAt = new Date();
        await user.save();
        return user.toObject() as User;
      }
      return undefined;
    } catch (error) {
      console.error("Error updating user theme:", error);
      return undefined;
    }
  }

  // Additional user operations for registration
  async getUserByEmail(email: string): Promise<User | undefined> {
    try {
      console.log('Attempting to connect to database for getUserByEmail');
      await connectToDatabase();
      console.log('Database connection established for getUserByEmail');
      // Force deletion and recreation of model to avoid cached connections
      if (mongoose.models['User']) {
        mongoose.deleteModel('User');
      }
      const UserModel = mongoose.model('User', userSchema);
      const user = await UserModel.findOne({ email: email });
      console.log('User found by email:', user ? 'Yes' : 'No');
      return user ? user.toObject() as User : undefined;
    } catch (error) {
      console.error("Error fetching user by email:", error);
      return undefined;
    }
  }

  async createUser(userData: Partial<User>): Promise<User> {
    try {
      console.log('Attempting to connect to database for createUser');
      await connectToDatabase();
      console.log('Database connection established for createUser');
      // Force deletion and recreation of model to avoid cached connections
      if (mongoose.models['User']) {
        mongoose.deleteModel('User');
      }
      const UserModel = mongoose.model('User', userSchema);

      // Generate a new ID for the user
      const userId = new mongoose.Types.ObjectId().toString();

      const newUser = new UserModel({
        id: userId,
        email: userData.email,
        firstName: userData.firstName || userData.email?.split('@')[0],
        lastName: userData.lastName || 'User',
        profileImageUrl: userData.profileImageUrl,
        theme: userData.theme || "dark"
      });

      await newUser.save();
      console.log('New user created successfully');
      return newUser.toObject() as User;
    } catch (error) {
      console.error("Error creating user:", error);
      // Fallback to previous implementation
      return {
        id: new mongoose.Types.ObjectId().toString(),
        email: userData.email || '',
        firstName: userData.firstName || userData.email?.split('@')[0] || '',
        lastName: userData.lastName || 'User',
        profileImageUrl: userData.profileImageUrl,
        theme: userData.theme || "dark",
        createdAt: new Date(),
        updatedAt: new Date()
      } as User;
    }
  }

  // Contact operations
  async createContact(contactData: InsertContact): Promise<Contact> {
    try {
      console.log('Attempting to connect to database for createContact');
      await connectToDatabase();
      console.log('Database connection established for createContact');
      // Force deletion and recreation of model to avoid cached connections
      if (mongoose.models['Contact']) {
        mongoose.deleteModel('Contact');
      }
      const ContactModel = mongoose.model('Contact', contactSchema);
      const contact = new ContactModel(contactData);
      await contact.save();
      console.log('Contact created successfully');
      const contactObject = contact.toObject();
      // Add the missing id field
      return {
        ...contactObject,
        id: contactObject._id.toString(),
        createdAt: contactObject.createdAt || new Date()
      } as Contact;
    } catch (error) {
      console.error("Error creating contact:", error);
      // Fallback to previous implementation
      return {
        id: new mongoose.Types.ObjectId().toString(),
        firstName: contactData.firstName,
        lastName: contactData.lastName,
        email: contactData.email,
        company: contactData.company,
        serviceInterest: contactData.serviceInterest,
        message: contactData.message,
        createdAt: new Date()
      } as Contact;
    }
  }
}

// Export the storage instance
export const storage = new DatabaseStorage();