/**
 * src/i18n.js
 *
 * i18next configuration for PulsarParadox.
 * Languages: English (default), Hindi, Marathi
 * Strategy: Resources bundled directly (no HTTP backend needed for small apps).
 */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import hi from './locales/hi.json';
import mr from './locales/mr.json';

i18n
  .use(LanguageDetector)       // Detect browser language
  .use(initReactI18next)       // Pass i18n instance to react-i18next
  .init({
    resources: {
      en: { translation: en },
      hi: { translation: hi },
      mr: { translation: mr },
    },
    fallbackLng: 'en',          // Always fall back to English
    defaultNS: 'translation',

    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'pulsarparadox-lang',
    },

    interpolation: {
      escapeValue: false,       // React already handles XSS
    },

    // In development, show missing keys as [key]
    missingKeyHandler: (lng, ns, key) => {
      if (import.meta.env.DEV) {
        console.warn(`Missing translation: [${lng}] ${ns}:${key}`);
      }
    },
  });

export default i18n;
