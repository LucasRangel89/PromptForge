import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  // GitHub Pages publica o projeto em /PromptForge/; os demais ambientes usam a raiz.
  base: process.env.GITHUB_PAGES === 'true' ? '/PromptForge/' : '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // O acervo muda independentemente do código e pode permanecer em cache separado.
          if (id.includes('referenceData.ts')) return 'reference-data';
        },
      },
    },
  },
  server: {
    host: '0.0.0.0',
    allowedHosts: true,
    hmr: process.env.DISABLE_HMR !== 'true',
  },
});
