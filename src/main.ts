import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueRouterLayout from "vue-router-layout";

createApp(App)
  .use(VueRouterLayout)
  .use(store)
  .use(router)
  .mount("#app");
