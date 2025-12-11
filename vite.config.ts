import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    emptyOutDir: true
  },
  // This is critical for fixing the blank page. 
  // It replaces 'process.env.API_KEY' in your code with the actual key string during the build.
  define: {
    'process.env.API_KEY': JSON.stringify("AIzaSyDgQrx9QocUIaBWfikNSgMbElkEc2avrZo")
  }
});