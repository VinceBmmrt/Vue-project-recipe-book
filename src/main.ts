import './assets/main.css';

import App from '@/App.vue';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import router from './router';
import localStoragePlugin from './plugins/pinia/localStoragePlugin';

const app = createApp(App);
const pinia = createPinia();

function ourPlugin() {
  return {
    secret: 'dummy',
  };
}

pinia.use(ourPlugin);
pinia.use(localStoragePlugin);
app.use(pinia);
app.use(router);

app.mount('#app');
