import { connectToDatabase } from "./db";
import mongoose from "mongoose";
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
const contactSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    company: { type: String },
    serviceInterest: { type: String },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});
export class DatabaseStorage {
    async getUser(id) {
        try {
            console.log('Attempting to connect to database for getUser');
            await connectToDatabase();
            console.log('Database connection established for getUser');
            if (mongoose.models['User']) {
                mongoose.deleteModel('User');
            }
            const UserModel = mongoose.model('User', userSchema);
            const user = await UserModel.findOne({ id: id });
            console.log('User found:', user ? 'Yes' : 'No');
            return user ? user.toObject() : undefined;
        }
        catch (error) {
            console.error("Error fetching user:", error);
            return undefined;
        }
    }
    async upsertUser(userData) {
        try {
            console.log('Attempting to connect to database for upsertUser');
            await connectToDatabase();
            console.log('Database connection established for upsertUser');
            if (mongoose.models['User']) {
                mongoose.deleteModel('User');
            }
            const UserModel = mongoose.model('User', userSchema);
            let user = await UserModel.findOne({ id: userData.id });
            console.log('Existing user found:', user ? 'Yes' : 'No');
            if (user) {
                user.email = userData.email;
                user.firstName = userData.firstName;
                user.lastName = userData.lastName;
                user.profileImageUrl = userData.profileImageUrl;
                user.theme = userData.theme || user.theme;
                user.updatedAt = new Date();
                await user.save();
                return user.toObject();
            }
            else {
                const newUser = new UserModel({
                    id: userData.id,
                    email: userData.email,
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    profileImageUrl: userData.profileImageUrl,
                    theme: userData.theme || "dark"
                });
                await newUser.save();
                return newUser.toObject();
            }
        }
        catch (error) {
            console.error("Error upserting user:", error);
            return {
                id: userData.id || new mongoose.Types.ObjectId().toString(),
                email: userData.email,
                firstName: userData.firstName,
                lastName: userData.lastName,
                profileImageUrl: userData.profileImageUrl,
                theme: userData.theme || "dark",
                createdAt: new Date(),
                updatedAt: new Date()
            };
        }
    }
    async updateUserTheme(id, theme) {
        try {
            console.log('Attempting to connect to database for updateUserTheme');
            await connectToDatabase();
            console.log('Database connection established for updateUserTheme');
            if (mongoose.models['User']) {
                mongoose.deleteModel('User');
            }
            const UserModel = mongoose.model('User', userSchema);
            const user = await UserModel.findOne({ id: id });
            if (user) {
                user.theme = theme;
                user.updatedAt = new Date();
                await user.save();
                return user.toObject();
            }
            return undefined;
        }
        catch (error) {
            console.error("Error updating user theme:", error);
            return undefined;
        }
    }
    async getUserByEmail(email) {
        try {
            console.log('Attempting to connect to database for getUserByEmail');
            await connectToDatabase();
            console.log('Database connection established for getUserByEmail');
            if (mongoose.models['User']) {
                mongoose.deleteModel('User');
            }
            const UserModel = mongoose.model('User', userSchema);
            const user = await UserModel.findOne({ email: email });
            console.log('User found by email:', user ? 'Yes' : 'No');
            return user ? user.toObject() : undefined;
        }
        catch (error) {
            console.error("Error fetching user by email:", error);
            return undefined;
        }
    }
    async createUser(userData) {
        try {
            console.log('Attempting to connect to database for createUser');
            await connectToDatabase();
            console.log('Database connection established for createUser');
            if (mongoose.models['User']) {
                mongoose.deleteModel('User');
            }
            const UserModel = mongoose.model('User', userSchema);
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
            return newUser.toObject();
        }
        catch (error) {
            console.error("Error creating user:", error);
            return {
                id: new mongoose.Types.ObjectId().toString(),
                email: userData.email || '',
                firstName: userData.firstName || userData.email?.split('@')[0] || '',
                lastName: userData.lastName || 'User',
                profileImageUrl: userData.profileImageUrl,
                theme: userData.theme || "dark",
                createdAt: new Date(),
                updatedAt: new Date()
            };
        }
    }
    async createContact(contactData) {
        try {
            console.log('Attempting to connect to database for createContact');
            await connectToDatabase();
            console.log('Database connection established for createContact');
            if (mongoose.models['Contact']) {
                mongoose.deleteModel('Contact');
            }
            const ContactModel = mongoose.model('Contact', contactSchema);
            const contact = new ContactModel(contactData);
            await contact.save();
            console.log('Contact created successfully');
            const contactObject = contact.toObject();
            return {
                ...contactObject,
                id: contactObject._id.toString(),
                createdAt: contactObject.createdAt || new Date()
            };
        }
        catch (error) {
            console.error("Error creating contact:", error);
            return {
                id: new mongoose.Types.ObjectId().toString(),
                firstName: contactData.firstName,
                lastName: contactData.lastName,
                email: contactData.email,
                company: contactData.company,
                serviceInterest: contactData.serviceInterest,
                message: contactData.message,
                createdAt: new Date()
            };
        }
    }
}
export const storage = new DatabaseStorage();
//# sourceMappingURL=storage.js.map