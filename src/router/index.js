import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        layout: 'full',
        resource: 'all',
      },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        layout: 'full',
        resource: 'all',
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/auth/Login.vue'),
      meta: {
        layout: 'blank',
        resource: 'notAuth',
      },
    },
    {
      path: '/profile/main',
      name: 'Profile Main',
      component: () => import('../views/profile/Main.vue'),
      meta: {
        layout: 'profile',
        resource: 'auth',
      },
    },
  ]
})

router.beforeEach((to, _, next) => {
  const userStore = useUserStore()
  const isLoggedIn = userStore.isLoggedIn

  if (to.meta.resource === 'notAuth') {
    if (isLoggedIn) {
      next({ name: 'Profile Main' })
    } else {
      next()
    }
  }
  if (to.meta.resource === 'auth') {
    if (isLoggedIn) {
      next()
    } else {
      next({ name: 'Login' })
    }
  }
  return next()
})

export default router
