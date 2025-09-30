import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: '/clawncore/',
  plugins: [
    react(),
    // Removed Replit-specific plugins
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "frontend", "src"),
      "@shared": path.resolve(import.meta.dirname, "backend", "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "frontend"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return 'assets/[name]-[hash][extname]';
          let extType = assetInfo.name.split('.').at(1);
          if (!extType || /png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3002',
        changeOrigin: true,
        secure: false,
      }
    }
  },
});