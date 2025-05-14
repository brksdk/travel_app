import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './i18n';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Leaflet varsayılan ikonlarını yapılandır
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount('#app');

