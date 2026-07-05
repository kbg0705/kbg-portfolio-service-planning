import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/kbg-portfolio-service-planning/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
