import { connectToDatabase } from './server/db.ts';

console.log('Testing database connection...');

try {
    const connection = await connectToDatabase();
    console.log('Connection successful!');
    console.log('Connection readyState:', connection.readyState);
    console.log('Connection host:', connection.host);
    console.log('Connection port:', connection.port);
    console.log('Connection name:', connection.name);

    // Close the connection
    await connection.close();
    console.log('Connection closed.');
} catch (error) {
    console.error('Connection failed:', error);
}