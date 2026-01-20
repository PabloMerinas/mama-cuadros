import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import fs from "fs";
import path from "path";

// Plugin para copiar public/ a dist/
const copyPublicPlugin = {
  name: "copy-public",
  apply: "build",
  enforce: "post",
  async generateBundle() {
    const publicDir = path.join(process.cwd(), "public");
    const distDir = path.join(process.cwd(), "dist");

    const copyDir = (src, dest) => {
      if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
      fs.readdirSync(src).forEach((file) => {
        const srcPath = path.join(src, file);
        const destPath = path.join(dest, file);
        if (fs.statSync(srcPath).isDirectory()) {
          copyDir(srcPath, destPath);
        } else {
          fs.copyFileSync(srcPath, destPath);
        }
      });
    };

    if (fs.existsSync(publicDir)) {
      copyDir(publicDir, distDir);
    }
  },
};

export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss(), copyPublicPlugin],
});
