import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  base: 'http://localhost:5173/',
  publicDir: 'public', // add this line
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})