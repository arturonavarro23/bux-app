import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import XHR from 'i18next-xhr-backend';

const backendOptions = {
  // path where resources get loaded from, or a function
  // the returned path will interpolate lng, ns if provided like giving a static path
  loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}/{{ns}}.json`,
};
const i18nextOptions = {
  fallbackLng: {
    default: ['en'],
  },
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
    defaultVariables: {},
  },
  backend: backendOptions,
  lng: navigator.language,
  keySeparator: false, // we do not use keys in form messages.welcome
};

i18n
  .use(XHR)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init(i18nextOptions);

export default i18n;
