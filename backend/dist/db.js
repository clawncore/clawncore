import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const MONGODB_URI = process.env.DATABASE_URL || "mongodb://localhost:27017/clawncore";
console.log('Attempting to connect to MongoDB at:', MONGODB_URI);
if (!MONGODB_URI) {
    throw new Error("DATABASE_URL must be set. Did you forget to provision a database?");
}
export async function connectToDatabase() {
    try {
        if (mongoose.connection.readyState === 1) {
            console.log('Closing existing MongoDB connection...');
            await mongoose.connection.close();
        }
        console.log('Connecting to MongoDB with URI:', MONGODB_URI);
        const conn = await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB successfully');
        return conn.connection;
    }
    catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}
export { mongoose };
//# sourceMappingURL=db.js.map