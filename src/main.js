import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./assets/style/main.scss";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "@fortawesome/fontawesome-free/css/all.css";
import Home from "./pages/Home.vue";
import Products from "./pages/Products.vue";

const app = createApp(App);
library.add(faAt);

const routes = [
  { path: "/", component: Home },
  { path: "/products", component: Products },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
