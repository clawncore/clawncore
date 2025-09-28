import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth, isAuthenticated } from "./localAuth";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";

// In-memory storage for OTPs (in production, use Redis or database)
const otpStorage = new Map<string, { otp: string; expires: number }>();

// Generate a random 6-digit OTP
function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Check if OTP is valid
function isValidOTP(email: string, otp: string): boolean {
  const storedOTP = otpStorage.get(email);
  if (!storedOTP) return false;

  // Check if OTP is expired (5 minutes)
  if (Date.now() > storedOTP.expires) {
    otpStorage.delete(email);
    return false;
  }

  return storedOTP.otp === otp;
}

// Send OTP via email
async function sendOTPEmail(email: string, otp: string): Promise<boolean> {
  try {
    // In development, just log the OTP to console and return true
    if (process.env.NODE_ENV === 'development' || !process.env.EMAIL_USER) {
      console.log(`[DEVELOPMENT] OTP for ${email}: ${otp}`);
      return true;
    }

    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Define email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your OTP for Account Registration',
      text: `Your OTP for account registration is: ${otp}\n\nThis OTP will expire in 5 minutes.`
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log(`OTP sent successfully to ${email}`);
    return true;
  } catch (error) {
    console.error("Error sending OTP email:", error);
    return false;
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Auth middleware
  await setupAuth(app);

  // Registration route - generates and sends OTP
  app.post('/api/auth/register', async (req, res) => {
    try {
      const { email, password } = req.body;

      // Basic validation
      if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
      }

      // Check if user already exists
      const existingUser = await storage.getUserByEmail(email);
      if (existingUser) {
        return res.status(400).json({ message: "User with this email already exists" });
      }

      // Generate OTP
      const otp = generateOTP();

      // Store OTP with 5-minute expiration
      otpStorage.set(email, {
        otp,
        expires: Date.now() + 5 * 60 * 1000 // 5 minutes
      });

      console.log(`Generated OTP for ${email}: ${otp}`);

      // Send OTP via email
      const emailSent = await sendOTPEmail(email, otp);

      if (!emailSent) {
        return res.status(500).json({ message: "Failed to send OTP email" });
      }

      res.status(200).json({
        message: "OTP sent to your email address",
        email
      });
    } catch (error) {
      console.error("Error during registration:", error);
      res.status(500).json({ message: "Failed to create account" });
    }
  });

  // OTP verification route
  app.post('/api/auth/verify-otp', async (req, res) => {
    try {
      const { email, otp, password } = req.body;

      // Basic validation
      if (!email || !otp || !password) {
        return res.status(400).json({ message: "Email, OTP, and password are required" });
      }

      // Verify OTP
      if (!isValidOTP(email, otp)) {
        return res.status(400).json({ message: "Invalid or expired OTP" });
      }

      // Remove used OTP
      otpStorage.delete(email);

      // Create new user
      const newUser = await storage.createUser({
        email,
        firstName: email.split('@')[0],
        lastName: 'User',
        theme: 'dark'
      });

      res.status(201).json({
        message: "Account created successfully",
        user: {
          id: newUser.id,
          email: newUser.email,
          firstName: newUser.firstName,
          lastName: newUser.lastName
        }
      });
    } catch (error) {
      console.error("Error during OTP verification:", error);
      res.status(500).json({ message: "Failed to verify OTP" });
    }
  });

  // Auth routes
  app.get('/api/auth/user', isAuthenticated, async (req: any, res) => {
    try {
      // For local development, get user from session
      const userId = (req.session as any).userId;
      if (userId) {
        const user = await storage.getUser(userId);
        if (user) {
          return res.json(user);
        }
      }
      return res.status(401).json({ message: "Unauthorized" });
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });

  // Update user theme
  app.patch('/api/auth/user/theme', isAuthenticated, async (req: any, res) => {
    try {
      const userId = (req.session as any).userId;
      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const { theme } = req.body;

      if (!theme || !['light', 'dark'].includes(theme)) {
        return res.status(400).json({ message: "Invalid theme value" });
      }

      const user = await storage.updateUserTheme(userId, theme);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      console.error("Error updating user theme:", error);
      res.status(500).json({ message: "Failed to update theme" });
    }
  });

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ 
      status: 'ok', 
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version || '1.0.0'
    });
  });

  // Contact form submission
  app.post('/api/contact', async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      res.json({ message: "Contact form submitted successfully", contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid form data", errors: error.errors });
      }
      console.error("Error creating contact:", error);
      res.status(500).json({ message: "Failed to submit contact form" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}