import { createWebHistory, createRouter } from "vue-router";
import home from "@/views/home.vue";
import about from "@/views/about.vue";
import help from "@/views/help.vue";
import info from "@/views/info.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: home,
  },
  {
    path: "/account",
    name: "account",
    component: () => import('@/views/AllAccount.vue'),
    children:[
      {
        path: "acccountsetting",
        name:"acccountsetting",
        component: () => import ('@/views/account/updatefile/accountsetting.vue')
      },
      {
        path:"accountprivacy",
        name: "accountprivacy",
        component: ()=> import ('@/views/account/updatefile/accountprivacy.vue')
      }
    ]
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
  {
    path: "/settings",
    name: "settings",
    component: () => import('@/views/account/settings.vue'),
    children:[
      {
        path: "acccountsetting",
        name:"acccountsetting",
        component: () => import ('@/views/account/updatefile/accountsetting.vue')
      },
      {
        path:"accountprivacy",
        name: "accountprivacy",
        component: ()=> import ('@/views/account/updatefile/accountprivacy.vue')
      }
    ]
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;