import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { store, key } from "./store";

const app = createApp(App).use(store, key).use(router);

app.mount("#app");
