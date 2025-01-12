import "./assets/css/main.css";

import { createApp } from "vue";

import App from "./App.vue";
const app = createApp(App);

// Pinia
import { createPinia } from "pinia";
app.use(createPinia());

// Router
import router from "./router";
app.use(router);

// PrimeVue
import primeVuePlugin from "./plugins/primevue";
app.use(primeVuePlugin);

app.mount("#app");
