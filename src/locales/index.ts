import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ENJSON } from './en';
import { CNJSON } from './cn';

// 获取浏览器的默认语言
const browserLanguage = navigator.language.split('-')[0]; // 获取浏览器语言，如 'en' 或 'zh'

const resources = {
  en: {
    translation: ENJSON,
  },
  zh: {
    translation: CNJSON,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: browserLanguage || 'en', // 使用浏览器的语言，默认为英文
  fallbackLng: 'en', // 如果当前语言资源不可用，则回退到英文
  interpolation: {
    escapeValue: false, // React 已经处理了 XSS 安全性，不需要额外转义
  },
});

export default i18n;
