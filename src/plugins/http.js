import router from '../router'
import store from '../store'
import {
  MESSAGE_TYPES
} from '@/utils'

class Http {
  url (path) {
    return `${process.env.VUE_APP_RAILS_URL}/${process.env.VUE_APP_RAILS_VERSION}/${path}`
  }

  get (link, token) {
    const self = this
    return new Promise((resolve, reject) => {
      const http = new XMLHttpRequest()
      http.open('GET', link, true)
      http.setRequestHeader('content-type', 'application/json')
      http.setRequestHeader('accept', 'application/json')
      http.setRequestHeader('Access-Control-Allow-Origin', '*')
      if (token) http.setRequestHeader('Authorization', token)
      http.onreadystatechange = () => self._handleResponse(http, resolve, reject)
      http.send()
    })
  }

  put (link, data, token) {
    const self = this
    return new Promise((resolve, reject) => {
      const http = new XMLHttpRequest()
      http.open('PUT', link, true)
      http.setRequestHeader('content-type', 'application/json')
      http.setRequestHeader('accept', 'application/json')
      http.setRequestHeader('Access-Control-Allow-Origin', '*')
      if (token) {
        http.setRequestHeader('Authorization', token)
      }
      http.onreadystatechange = () => self._handleResponse(http, resolve, reject)
      http.send(JSON.stringify(data))
    })
  }

  post (link, data, token) {
    console.log(link, data, token)
    const self = this
    return new Promise((resolve, reject) => {
      const http = new XMLHttpRequest()
      http.open('POST', link, true)
      http.setRequestHeader('content-type', 'application/json')
      http.setRequestHeader('accept', 'application/json')
      http.setRequestHeader('Access-Control-Allow-Origin', '*')
      if (token) http.setRequestHeader('Authorization', token)
      http.onreadystatechange = () => self._handleResponse(http, resolve, reject)
      http.send(JSON.stringify(data))
    })
  }

  create (link, data, token) {
    const self = this
    return new Promise((resolve, reject) => {
      const http = new XMLHttpRequest()
      http.open('POST', link, true)
      http.setRequestHeader('content-type', 'application/json')
      http.setRequestHeader('accept', 'application/json')
      http.setRequestHeader('Access-Control-Allow-Origin', '*')
      http.setRequestHeader('Authorization', token)
      http.onreadystatechange = () => self._handleResponse(http, resolve, reject)
      http.send(JSON.stringify(data))
    })
  }

  delete (link, token) {
    const self = this
    return new Promise((resolve, reject) => {
      const http = new XMLHttpRequest()
      http.open('DELETE', link, true)
      http.setRequestHeader('content-type', 'application/json')
      http.setRequestHeader('accept', 'application/json')
      http.setRequestHeader('Authorization', token)
      http.setRequestHeader('Access-Control-Allow-Origin', '*')

      http.onreadystatechange = () => self._handleResponse(http, resolve, reject)
      http.send()
    })
  }

  login (link, data) {
    // const self = this
    return new Promise((resolve, reject) => {
      const http = new XMLHttpRequest()
      http.open('POST', link, true)
      http.setRequestHeader('content-type', 'application/json')
      http.setRequestHeader('accept', 'application/json')
      http.setRequestHeader('Access-Control-Allow-Origin', '*')
      http.onreadystatechange = () => {
        if (http.readyState === 4) {
          if (http.status === 200) {
            if (http.responseText) {
              return resolve(JSON.parse(http.responseText))
            } else {
              return reject(http)
            }
          } else {
            return reject(http)
          }
        }
      }
      http.send(JSON.stringify(data))
    })
  }

  _handleResponse (http, resolve, reject) {
    const self = this
    if (http.readyState === 4) {
      if (self._handleHTTPError(http)) {
        if (http.responseText) {
          return resolve(JSON.parse(http.responseText))
        } else {
          return resolve(true)
        }
      } else {
        return reject(http)
      }
    }
  }

  _handleHTTPError (http) {
    if (http.status >= 200 && http.status <= 300) return true
    else if (http.status === 401) {
      store.commit('SET_LOGIN_DATA', {
        message: 'You have been logged out. Please login to continue.',
        type: MESSAGE_TYPES.error,
        route: router.currentRoute.name
      })
      return router.replace({ name: 'login' })
    } else {
      store.commit('CALL_ALERT', {
        message: 'There was an error processing your request..',
        type: MESSAGE_TYPES.error
      })
      return false
    }
  }
}

export default {
  install (Vue, options) {
    Vue.prototype.$http = new Http()
  }
}
