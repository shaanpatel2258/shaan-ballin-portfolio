import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/shaan-ballin-portfolio",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    {
      name: "create-cname-file",
      closeBundle: () => {
        // Ensure the dist directory exists, then write CNAME file
        if (!fs.existsSync("dist")) {
          fs.mkdirSync("dist");
        }
        fs.writeFileSync("dist/CNAME", "shaanpatel.dev");
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
