import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch:{
      usePolling:true, //Force polling to ensure that file changes under Docker can be detected
    },
    host:true
  },
})
