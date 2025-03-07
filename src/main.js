import { createApp } from 'vue';
import { Quasar } from 'quasar';
import App from './App.vue';
import { router } from './Routes/routes.js';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { createPinia } from 'pinia';
import quasarLang from 'quasar/lang/es';

// 🔹 Importa los estilos de Quasar
import 'quasar/src/css/index.sass';

// 🔹 Si usas iconos de Material Icons, agrégalo
import iconSet from 'quasar/icon-set/material-icons';

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(Quasar, {
    iconSet,// Usa el set de iconos
    plugins:{},
    lang: quasarLang, 
  });  

app.use(router);
app.use(pinia);
app.mount('#app');

