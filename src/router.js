import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function hasToken () {
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
        if (!hasToken()) return next({ name: 'login' })
        next()
      },
      component: () => import(/* webpackChunkName: "home" */ './pages/Home.vue'),
      children: [
        {
          path: '',
          redirect: { name: 'overview' }
        },
        {
          path: 'overview',
          name: 'overview',
          component: () => import(/* webpackChunkName: "overview" */ './views/Overview.vue')
        },
        {
          path: 'people',
          name: 'people',
          component: () => import(/* webpackChunkName: "members" */ './views/People.vue')
        },
        {
          path: 'groups',
          name: 'groups',
          component: () => import(/* webpackChunkName: "groups" */ './views/Temp.vue')
        },
        {
          path: 'events',
          name: 'events',
          component: () => import(/* webpackChunkName: "events" */ './views/Temp.vue')
        },
        {
          path: 'services',
          name: 'services',
          component: () => import(/* webpackChunkName: "services" */ './views/Temp.vue')
        },
      ]
    }
  ]
})
