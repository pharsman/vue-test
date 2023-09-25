import "./styles/main.scss";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { router } from "./router";
import { registerModules } from "./register-modules";

// modules
import shop from "./pages/shop";
import about from "./pages/about";

registerModules({
  shop: shop,
  about: about,
});

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
