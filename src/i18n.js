import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: require('./locales/en/translation.json'),
      },
      ru: {
        translation: require('./locales/ru/translation.json'),
      },
      kg: {
        translation: require(('./locales/kg/translation.json'))
      },
      zh: {
        translation: require(('./locales/zh/translation.json'))
      }
    },
  });

export default i18n;
