import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { type Server } from "http";
import { nanoid } from "nanoid";

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export async function setupVite(app: Express, server: Server) {
  // For now, we'll skip Vite setup in the backend since we're separating frontend and backend
  log("Vite setup skipped in backend");
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(import.meta.dirname, "../frontend/dist");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the frontend first`,
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
