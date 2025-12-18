import { createRouter, createWebHistory } from 'vue-router';

import LayoutDefault from '@/layouts/LayoutDefault.vue';
import PageIndex from '@/pages/PageIndex.vue';
import PageNewsId from '@/pages/PageNewsId.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LayoutDefault,
      children: [
        {
          name: 'index',
          path: '/',
          component: PageIndex,
        },
        {
          name: 'news-id',
          path: '/news/:id',
          component: PageNewsId,
        },
      ],
    },
  ],
});

export default router;
