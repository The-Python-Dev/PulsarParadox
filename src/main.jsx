/**
 * src/main.jsx
 *
 * Application entry point.
 * - BrowserRouter wraps the app for React Router
 * - i18n is imported for side effects (initializes the i18next instance)
 * - StrictMode enabled in development
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './i18n';  // Initialize i18next (side effect import)
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
