import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//import scss_variable from "./css/variables.scss";

createApp(App).use(store).use(router).mount("#app");
