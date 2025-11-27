import { createI18n } from 'vue-i18n'

import tr from './locales/tr.json'
import en from './locales/en.json'

export const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'tr',
  fallbackLocale: 'tr',
  globalInjection: true,
  messages: {
    tr,
    en
  }
})
