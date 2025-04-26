import { createI18n } from 'vue-i18n';
import messages from './index.js'; // Çeviri mesajları (en ve de dilleri)

const i18n = createI18n({
  locale: 'de', // Varsayılan dil
  fallbackLocale: 'en', // Yedek dil
  messages, // index.js'den gelen çeviri mesajları
});

export default i18n;