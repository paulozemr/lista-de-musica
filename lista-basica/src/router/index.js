import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import JogadoresView from "../views/JogadoresView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/jogadores", name: "jogadores", component: JogadoresView },
  ],
});

export default router;
