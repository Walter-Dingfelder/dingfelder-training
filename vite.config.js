import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Ensures React Router works on Netlify with client-side routing
  base: '/',
})
