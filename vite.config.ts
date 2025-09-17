import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host:'0.0.0.0',
    watch:{
      interval: 100,
      usePolling:true, //Force polling to ensure that file changes under Docker can be detected
    },
  },
})
