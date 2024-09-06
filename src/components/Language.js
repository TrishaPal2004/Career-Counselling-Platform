// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import translationEN from './locales/en/translation.json';
import translationHI from './locales/hi/translation.json';
import translationES from './locales/es/translation.json';
// Import more languages as needed

// The translations
const resources = {
  en: {
    translation: translationEN,
  },
  hi: {
    translation: translationHI,
  },
  es: {
    translation: translationES,
  },
  // Add more languages here
};

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;
