import { createApp } from 'vue'
import App from './App.vue'
import store from '../store'
import router from './router'


import './assets/main.css'
import myPlugin from "../plugins/myPlugin";
import axios from "axios";


axios.defaults.headers.common['Authorization'] = 'Bearer ' + JSON.parse(localStorage.getItem("token"))

axios.defaults.baseURL=import.meta.env.VITE_BASE_API_URL



console.log(axios.defaults)
  createApp(App)
    .use(store)
    .use(router)
    .use(myPlugin)
    .mount('#app')