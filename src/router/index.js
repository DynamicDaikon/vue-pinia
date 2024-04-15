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
      path: '/Todo',
      name: 'todo',
      component: () => import('@/views/TodoPage.vue'),
    },
    {
      path: '/About',
      name: 'about',
      component: () => import('@/views/AboutPage.vue'),
    },
    {
      path: '/Child',
      name: 'child',
      component: () => import('@/views/ChildPage.vue'),
    },
  ],
});
export default router;
