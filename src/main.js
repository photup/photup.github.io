import { createApp } from "vue";
import App from "./App.vue";
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import "./assets/main.css";
createApp(App).mount("#app");
const app = createApp({
  /* 根组件选项 */
})

/* 
learn form https://blog.csdn.net/m0_67265311/article/details/123304361
use 'createApp(App).use'(in Vue3) instead of 'Vue.use'(in Vue2)
*/
createApp(App).use(VueAxios,axios);
app.use(router)
app.config.globalProperties.axios = axios