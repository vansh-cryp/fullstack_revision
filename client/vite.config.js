import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // using proxy to avoid CORS issue
  // server:{
  //   proxy:{
  //     "/api":{
  //       //url of backend server
  //       target:"http://localhost:4000",
  //       changeOrigin:true,
  //     }
  //   }
  // }

  //we will be doing it by back end itself as it will be useful in production also
})
