import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Explicitly set the entry point
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'),
    },
    // Use relative paths for GitHub Pages
    outDir: 'dist',
    assetsDir: 'assets'
  },
  // Add base path for GitHub Pages - replace 'dux/insight-bot' with your repository path
  base: '/insight-bot/',
  // Optimization settings
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
  // Add server configuration to use the port from .env
  server: {
    port: parseInt(process.env.VITE_PORT) || 3800,
    open: true
  }
})
