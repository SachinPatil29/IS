import react from '@vitejs/plugin-react';
import fs from 'fs';
import { defineConfig } from 'vite';


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: {
      
      key: fs.readFileSync('./cert-key.pem'),
      cert: fs.readFileSync('./cert.pem'),
      ca:fs.readFileSync('./ca.pem')
    }
  },
  plugins: [react()]
})
