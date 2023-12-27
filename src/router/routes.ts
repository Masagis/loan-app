import { RouteConfig } from 'vue-router'
import Main from '@/components/layout/Main.vue'

const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/home',
    meta: {
      requiresAuth: true
    },
    component: Main,
    children: [
      {
        name: 'Home',
        path: '/home',
        component: () =>
          import(/* webpackChunkName: "Home" */ '@/pages/Home.vue')
      },
      {
        name: 'Menu 1',
        path: '/loan',
        component: () =>
          import(/* webpackChunkName: "loan" */ '@/pages/PinjamanView.vue')
      }
    ]
  },
  {
    path: '*',
    redirect: '/404'
  },
  {
    // the 404 route, when none of the above matches
    path: '/404',
    name: '404',
    component: () =>
      import(/* webpackChunkName: "/404" */ '@/pages/error/404.vue')
  },
  {
    // the 404 route, when none of the above matches
    path: '/403',
    name: '403',
    component: () =>
      import(/* webpackChunkName: "/403" */ '@/pages/error/403.vue')
  }
]

export default routes
