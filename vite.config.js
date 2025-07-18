import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/CheckNet/', // 👈 Required for GitHub Pages (your repo name)
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Optional: for LAN/dev access
    port: 5173,
    strictPort: true,
  }
})
