import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Import aliases for clean paths
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@data': path.resolve(__dirname, './src/data'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@locales': path.resolve(__dirname, './src/locales'),
    },
  },
  build: {
    // Target modern browsers only (improves bundle size)
    target: 'esnext',
    // Split chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'animation': ['framer-motion', 'gsap'],
          'three': ['three', '@react-three/fiber', '@react-three/drei'],
          'i18n': ['i18next', 'react-i18next'],
        },
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
