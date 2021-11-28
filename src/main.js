import { createApp } from 'vue';

import App from './App.vue';
import TheHeader from './TheHeader.vue';
import MainPage from './MainPage.vue';

const app = createApp(App);

app.component('main-page', MainPage);
app.component('the-header', TheHeader);
app.mount('#app');
