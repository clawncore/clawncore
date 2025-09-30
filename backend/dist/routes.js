import { createServer } from "http";
import { storage } from "./storage";
import { setupAuth, isAuthenticated } from "./localAuth";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";
const otpStorage = new Map();
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}
function isValidOTP(email, otp) {
    const storedOTP = otpStorage.get(email);
    if (!storedOTP)
        return false;
    if (Date.now() > storedOTP.expires) {
        otpStorage.delete(email);
        return false;
    }
    return storedOTP.otp === otp;
}
async function sendOTPEmail(email, otp) {
    try {
        if (process.env.NODE_ENV === 'development' || !process.env.EMAIL_USER) {
            console.log(`[DEVELOPMENT] OTP for ${email}: ${otp}`);
            return true;
        }
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Your OTP for Account Registration',
            text: `Your OTP for account registration is: ${otp}\n\nThis OTP will expire in 5 minutes.`
        };
        await transporter.sendMail(mailOptions);
        console.log(`OTP sent successfully to ${email}`);
        return true;
    }
    catch (error) {
        console.error("Error sending OTP email:", error);
        return false;
    }
}
export async function registerRoutes(app) {
    await setupAuth(app);
    app.post('/api/auth/register', async (req, res) => {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({ message: "Email and password are required" });
            }
            const existingUser = await storage.getUserByEmail(email);
            if (existingUser) {
                return res.status(400).json({ message: "User with this email already exists" });
            }
            const otp = generateOTP();
            otpStorage.set(email, {
                otp,
                expires: Date.now() + 5 * 60 * 1000
            });
            console.log(`Generated OTP for ${email}: ${otp}`);
            const emailSent = await sendOTPEmail(email, otp);
            if (!emailSent) {
                return res.status(500).json({ message: "Failed to send OTP email" });
            }
            return res.status(200).json({
                message: "OTP sent to your email address",
                email
            });
        }
        catch (error) {
            console.error("Error during registration:", error);
            return res.status(500).json({ message: "Failed to create account" });
        }
    });
    app.post('/api/auth/verify-otp', async (req, res) => {
        try {
            const { email, otp, password } = req.body;
            if (!email || !otp || !password) {
                return res.status(400).json({ message: "Email, OTP, and password are required" });
            }
            if (!isValidOTP(email, otp)) {
                return res.status(400).json({ message: "Invalid or expired OTP" });
            }
            otpStorage.delete(email);
            const newUser = await storage.createUser({
                email,
                firstName: email.split('@')[0],
                lastName: 'User',
                theme: 'dark'
            });
            return res.status(201).json({
                message: "Account created successfully",
                user: {
                    id: newUser.id,
                    email: newUser.email,
                    firstName: newUser.firstName,
                    lastName: newUser.lastName
                }
            });
        }
        catch (error) {
            console.error("Error during OTP verification:", error);
            return res.status(500).json({ message: "Failed to verify OTP" });
        }
    });
    app.get('/api/auth/user', isAuthenticated, async (req, res) => {
        try {
            const userId = req.session.userId;
            if (userId) {
                const user = await storage.getUser(userId);
                if (user) {
                    return res.json(user);
                }
            }
            return res.status(401).json({ message: "Unauthorized" });
        }
        catch (error) {
            console.error("Error fetching user:", error);
            return res.status(500).json({ message: "Failed to fetch user" });
        }
    });
    app.patch('/api/auth/user/theme', isAuthenticated, async (req, res) => {
        try {
            const userId = req.session.userId;
            if (!userId) {
                return res.status(401).json({ message: "Unauthorized" });
            }
            const { theme } = req.body;
            if (!theme || !['light', 'dark'].includes(theme)) {
                return res.status(400).json({ message: "Invalid theme value" });
            }
            const user = await storage.updateUserTheme(userId, theme);
            if (user) {
                return res.json(user);
            }
            else {
                return res.status(404).json({ message: "User not found" });
            }
        }
        catch (error) {
            console.error("Error updating user theme:", error);
            return res.status(500).json({ message: "Failed to update theme" });
        }
    });
    app.get('/api/health', (req, res) => {
        return res.json({
            status: 'ok',
            timestamp: new Date().toISOString(),
            version: process.env.npm_package_version || '1.0.0'
        });
    });
    app.post('/api/contact', async (req, res) => {
        try {
            const contactData = insertContactSchema.parse(req.body);
            const contact = await storage.createContact(contactData);
            return res.json({ message: "Contact form submitted successfully", contact });
        }
        catch (error) {
            if (error instanceof z.ZodError) {
                return res.status(400).json({ message: "Invalid form data", errors: error.errors });
            }
            console.error("Error creating contact:", error);
            return res.status(500).json({ message: "Failed to submit contact form" });
        }
    });
    const httpServer = createServer(app);
    return httpServer;
}
//# sourceMappingURL=routes.js.map