/**
 * vite.config.js
 * Vite configuration for PulsarParadox
 * 
 * Fixed: Added missing `path` import + ES module __dirname workaround
 */

import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ES module workaround for __dirname (not defined in ESM by default)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  resolve: {
    alias: {
      // Import aliases for clean paths
      '@':           path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages':      path.resolve(__dirname, './src/pages'),
      '@data':       path.resolve(__dirname, './src/data'),
      '@hooks':      path.resolve(__dirname, './src/hooks'),
      '@utils':      path.resolve(__dirname, './src/utils'),
      '@styles':     path.resolve(__dirname, './src/styles'),
      '@assets':     path.resolve(__dirname, './src/assets'),
      '@locales':    path.resolve(__dirname, './src/locales'),
    },
  },
  
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router':       ['react-router-dom'],
          'animation':    ['framer-motion', 'gsap'],
          'three':        ['three', '@react-three/fiber', '@react-three/drei'],
          'i18n':         ['i18next', 'react-i18next'],
        },
      },
    },
  },
  
  server: {
    port: 5173,
    open: true,
  },
});