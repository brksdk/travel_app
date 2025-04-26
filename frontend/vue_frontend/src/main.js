import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './i18n'; // i18n.js dosyasını import edin

const app = createApp(App);
app.use(router);
app.use(i18n); // i18n örneğini kullan
app.mount('#app');
