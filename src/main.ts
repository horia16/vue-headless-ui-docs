import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import "./assets/index.css";
import "simple-syntax-highlighter/dist/sshpre.css";

createApp(App)
  .use(router)
  .mount("#app");
