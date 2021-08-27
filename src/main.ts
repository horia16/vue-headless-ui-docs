import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import "./assets/index.css";
import "simple-syntax-highlighter/dist/sshpre.css";
import Iconify from "@iconify/iconify";
import VueHeadlessUi from "vue-headless-ui";
import componentPages from "./views/component-pages";
Iconify.observe(document.body);

createApp(App)
  .use(router)
  .use(VueHeadlessUi)
  .use(componentPages)
  .mount("#app");
