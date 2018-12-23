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
          component: () => import(/* webpackChunkName: "overview" */ './views/Home.vue')
        },
        {
          path: 'people',
          name: 'people',
          component: () => import(/* webpackChunkName: "members" */ './views/People.vue')
        },
        {
          path: 'groups/:group_id?',
          name: 'groups',
          component: () => import(/* webpackChunkName: "groups" */ './views/Groups.vue'),
          props: true
        },
        {
          path: 'events',
          name: 'events',
          component: () => import(/* webpackChunkName: "events" */ './views/Events.vue')
        },
        {
          path: 'services',
          name: 'services',
          component: () => import(/* webpackChunkName: "services" */ './views/Services.vue')
        }
      ]
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import(/* webpackChunkName: "signup" */ './pages/Register.vue')
    }
  ]
})
