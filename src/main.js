import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import "typeface-work-sans";
import PrimeVue from "primevue/config";

const app = createApp(App);
app.use(PrimeVue);
app.use(router);

app.use(VueAxios, axios);
app.mount("#app");
