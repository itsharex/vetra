import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '../layouts/default.vue'
import SettingsLayout from '../layouts/settings.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Layout',
      redirect: '/start',
      component: DefaultLayout,
      children: [
        {
          path: '/welcome',
          name: 'Welcome',
          component: () => import('@/pages/welcome/index.vue'),
          meta: {
            isTab: true,
            tabsName: '欢迎',
          },
        },
        {
          path: '/start',
          name: 'Start',
          component: () => import('@/pages/start/index.vue'),
          meta: {
            isTab: true,
            tabsName: '开始',
          },
        },
      ],

    },
    {
      path: '/settings',
      name: 'SettingsLayout',
      component: SettingsLayout,
      children: [
        {
          path: '',
          name: 'Settings',
          component: () => import('@/pages/settings/index.vue'),
        },
      ],
    },
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    else {
      return { top: 0, left: 0 }
    }
  },
})

export default router
