import type { Express, RequestHandler } from "express";
import session from "express-session";
import { storage } from "./storage";

// Simple in-memory session store for development
const sessions = new Map<string, any>();

export function getSession() {
    return session({
        secret: "clawncore-local-secret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: false,
            maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week
        },
    });
}

export async function setupAuth(app: Express) {
    app.set("trust proxy", 1);
    app.use(getSession());

    // Simple login endpoint for local development
    app.post("/api/login", async (req, res) => {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        try {
            // Check if user exists
            const user = await storage.getUserByEmail(email);

            if (!user) {
                return res.status(401).json({ message: "Invalid email or password" });
            }

            // In a real implementation, you would verify the password
            // For now, we'll just assume the password is correct for testing

            // Create a simple session
            (req.session as any).userId = user.id;
            (req.session as any).user = user;

            res.json({
                message: "Login successful",
                user: {
                    id: user.id,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName
                }
            });
        } catch (error) {
            console.error("Login error:", error);
            res.status(500).json({ message: "Login failed" });
        }
    });

    // Logout endpoint
    app.get("/api/logout", (req, res) => {
        req.session?.destroy(() => { });
        res.json({ message: "Logged out successfully" });
    });
}

export const isAuthenticated: RequestHandler = async (req, res, next) => {
    if (!(req.session as any)?.userId) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    next();
};