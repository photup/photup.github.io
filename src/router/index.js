import HomePage from "../App.vue";
import Gallery from "../App.vue";
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery,
    }
  ]
});

export default router
