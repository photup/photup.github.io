import Index from "../App.vue";
import Gallery from "../Gallery.vue";
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery,
    }
  ]
});

export default router
