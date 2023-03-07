import { createApp } from 'vue'
import App from './App.vue'
import store from '../store'
import router from './router'


import './assets/main.css'
import myPlugin from "../plugins/myPlugin";

console.log(api_key)

  createApp(App)
    .use(store)
    .use(router)
      .use(myPlugin)
    .mount('#app')