import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Uses polling instead of native watchers
      interval: 300, // Adjust polling interval (in ms)
    },
  },
})
