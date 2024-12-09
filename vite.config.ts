/// <reference types='vitest' />
/// <reference types='vite/client' />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // Ensure '@' resolves to 'src'
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
  server: {
    open: true,
  },
  optimizeDeps: {
    include: ['dayjs']
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/_vars.scss"; @import "@/styles/_mixins.scss"; @import "@/styles/_functions.scss";`,
      },
    },
  }
});
