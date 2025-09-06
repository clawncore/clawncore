import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth, isAuthenticated } from "./replitAuth";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Auth middleware
  await setupAuth(app);

  // Auth routes
  app.get('/api/auth/user', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });

  // Update user theme
  app.patch('/api/auth/user/theme', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { theme } = req.body;
      
      if (!theme || !['light', 'dark'].includes(theme)) {
        return res.status(400).json({ message: "Invalid theme value" });
      }

      const user = await storage.updateUserTheme(userId, theme);
      res.json(user);
    } catch (error) {
      console.error("Error updating user theme:", error);
      res.status(500).json({ message: "Failed to update theme" });
    }
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
