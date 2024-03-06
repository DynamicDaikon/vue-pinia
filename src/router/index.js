import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomePage.vue'),
    },
    {
      path: '/About',
      name: 'about',
      component: () => import('@/views/AboutPage.vue'),
    },
  ],
});
export default router;
