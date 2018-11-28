import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function validateUser () {
  return sessionStorage.getItem('auth_token') !== null
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './pages/Login.vue')
    },
    {
      path: '/',
      beforeEnter (to, from, next) {
        if (!validateUser()) return next({ name: 'login' })
        next()
      },
      component: () => import(/* webpackChunkName: "home" */ './pages/Home.vue'),
      children: [
        {
          path: '',
          name: 'overview',
          component: () => import(/* webpackChunkName: "overview" */ './views/Overview.vue')
        },
        {
          path: 'members',
          name: 'members',
          component: () => import(/* webpackChunkName: "members" */ './views/Members.vue')
        },
      ]
    }
  ]
})
