import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../components/dashboard/Dashboard.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/info/:id",
    name: "info",
    component: () => import("../views/Info.vue"),
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import('@/views/account/Settings.vue'),
    children:[
      {
        path: "login",
        name:"Login",
        component: () => import ('@/views/account/updatefile/Login.vue')
      },
      {
        path:"registration",
        name: "Registration",
        component: ()=> import ('@/views/account/updatefile/Registration.vue')
      }
    ]
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;