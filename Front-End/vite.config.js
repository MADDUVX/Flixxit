import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api":{
        target:'https://streamit-backend.vercel.app/',
        rewrite:(path)=>path.replace(/^\/api/, "")
      } 
    },
  },
  plugins: [react()]
})
