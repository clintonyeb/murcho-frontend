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
          redirect: { name: 'home' }
        },
        {
          path: 'home',
          name: 'home',
          component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
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
          component: () => import(/* webpackChunkName: "services" */ './views/Services.vue'),
          children: [
            {
              path: '',
              name: 'services',
              component: () => import(/* webpackChunkName: "all-services" */ './components/services/Services.vue')
            },
            {
              path: 'email',
              name: 'email-services',
              component: () => import(/* webpackChunkName: "email-services" */ './components/services/Email.vue')
            },
            {
              path: 'sms',
              name: 'sms-services',
              component: () => import(/* webpackChunkName: "sms-services" */ './components/services/SMS.vue')
            },
            {
              path: 'import',
              name: 'import-services',
              component: () => import(/* webpackChunkName: "import-services" */ './components/services/Import.vue')
            },
            {
              path: 'export',
              name: 'export-services',
              component: () => import(/* webpackChunkName: "export-services" */ './components/services/Export.vue')
            },
          ]
        }
      ]
    },
    {
      path: '/signup_single',
      name: 'signup-single',
      component: () => import(/* webpackChunkName: "signup" */ './pages/RegisterSingle.vue')
    },
    {
      path: '/signup_group',
      name: 'signup-group',
      component: () => import(/* webpackChunkName: "signup" */ './pages/RegisterGroup.vue')
    },
    {
      path: '/add_church/:church_id',
      name: 'add-church',
      props: true,
      component: () => import(/* webpackChunkName: "add-church" */ './pages/AddChurch.vue')
    },
    {
      path: '/signup_options',
      name: 'signup-options',
      component: () => import(/* webpackChunkName: "signup-options" */ './pages/RegOpt.vue')
    },
    {
      path: '/validate_email/:email_token',
      name: 'validate-email',
      props: true,
      component: () => import(/* webpackChunkName: "validate-email" */ './pages/ValidateEmail.vue')
    },
    {
      path: '/reset_password/:password_token',
      name: 'reset-password',
      props: true,
      component: () => import(/* webpackChunkName: "reset-password" */ './pages/ResetPassword.vue')
    },
    {
      path: '*',
      name: 'not-found',
      component: () => import(/* webpackChunkName: "not-found" */ './pages/404.vue')
    }
  ]
})
