import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: false, // Disable minification to debug generated files
    sourcemap: true, // Generate source maps for debugging
  
}})


