import { createApp } from 'vue';
// import the root component App from a single-file component.
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import PortalVue from 'portal-vue';
import store from './store';
import { vfmPlugin } from 'vue-final-modal';
import PrimeVue from 'primevue/config';
import '@fortawesome/fontawesome-free/css/all.css';
import { VueQueryPlugin } from 'vue-query';
//import 'vue-final-modal/style.css';

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.use(PortalVue);
app.use(store);
app.use(PrimeVue);
app.use(vfmPlugin());
app.use(VueQueryPlugin);
app.mount('#app');
