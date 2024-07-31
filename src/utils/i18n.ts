import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import I18NextHttpBackend from 'i18next-http-backend';

i18n
  .use(I18NextHttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    returnNull: false,
    fallbackLng: 'ro',
    lng: 'ro',
    debug: true,
    ns: [
      'common',
      'home',
      'camps',
      'contact',
      'sign-in',
      'sign-up',
      'team',
      'camp-preview',
    ],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `/locales/{{lng}}/{{ns}}.json`,
    },
    detection: {
      order: ['localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
    },
  });

export default i18n;
