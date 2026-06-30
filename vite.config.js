import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/kbg-portfolio-weverse/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
