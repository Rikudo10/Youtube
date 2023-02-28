import { createWebHistory, createRouter } from "vue-router";
import home from "@/views/home.vue";
import about from "@/views/about.vue";
import help from "@/views/help.vue";
import info from "@/views/info.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: home,
  },
  {
    path: "/about",
    name: "About",
    component: about,
  },
  {
    path: "/help",
    name: "help",
    component: help,
  },
  {
    path: "/info/:id",
    name: "info",
    component: info,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;