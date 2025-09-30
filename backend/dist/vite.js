import express from "express";
import fs from "fs";
import path from "path";
export function log(message, source = "express") {
    const formattedTime = new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    });
    console.log(`${formattedTime} [${source}] ${message}`);
}
export async function setupVite(app, server) {
    log("Vite setup skipped in backend");
}
export function serveStatic(app) {
    const distPath = path.resolve(import.meta.dirname, "../frontend/dist");
    if (!fs.existsSync(distPath)) {
        throw new Error(`Could not find the build directory: ${distPath}, make sure to build the frontend first`);
    }
    app.use(express.static(distPath));
    app.use("*", (_req, res) => {
        res.sendFile(path.resolve(distPath, "index.html"));
    });
}
//# sourceMappingURL=vite.js.map