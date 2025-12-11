import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    emptyOutDir: true
  },
  define: {
    // Inject the API Key provided by the user directly into the build
    'process.env.API_KEY': JSON.stringify("AIzaSyDgQrx9QocUIaBWfikNSgMbElkEc2avrZo")
  }
});