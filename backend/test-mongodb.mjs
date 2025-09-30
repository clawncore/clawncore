import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const MONGODB_URI = process.env.DATABASE_URL || "mongodb://localhost:27017/clawncore";

console.log('Attempting to connect to MongoDB at:', MONGODB_URI);

try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB successfully!');

    // Test creating a simple document
    const testSchema = new mongoose.Schema({
        name: String,
        timestamp: { type: Date, default: Date.now }
    });

    const TestModel = mongoose.model('Test', testSchema);

    const testDoc = new TestModel({ name: 'Test connection' });
    const savedDoc = await testDoc.save();
    console.log('Successfully saved test document:', savedDoc.name);

    await mongoose.connection.close();
    console.log('Disconnected from MongoDB');
} catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
}