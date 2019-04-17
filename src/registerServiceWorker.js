/* eslint-disable no-console */

import { register } from 'register-service-worker'
import store from './store'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
      store.commit('SERVICE_WORKER', 'READY')
    },
    cached () {
      console.log('Content has been cached for offline use.')
      store.commit('SERVICE_WORKER', 'CACHED')
    },
    updated (registration) {
      console.log('New content is available; please refresh.')

      if (registration) {
        registration.unregister().then(function () {
          store.commit('SERVICE_WORKER', 'UPDATED')
        })
      } else {
        store.commit('SERVICE_WORKER', 'UPDATED')
      }
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
      store.commit('SERVICE_WORKER', 'OFFLINE')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
      store.commit('SERVICE_WORKER', 'ERROR')
    }
  })
}
