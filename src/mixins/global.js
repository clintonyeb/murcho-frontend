import store from '@/store'
import Hashids from 'hashids'
import OnClickOutside from '@/components/OnClickOutside'
import Avatar from 'vue-avatar'

let hash = null
const pluralize = require('pluralize')

export default {
  data () {
    return {
      doneExecutingDelayedFuncs: false,
      delayedFuncs: []
    }
  },
  components: {
    OnClickOutside,
    Avatar
  },
  methods: {
    getInputErrorMessage (name) {
      return this.errors.first(name)
    },
    getInputColor (name) {
      return this.getInputState(name) ? 'border-red-light' : 'border-grey-light'
    },
    getInputState (name) {
      return this.errors.has(name)
    },
    pluralize: pluralize,
    setPageTitle (title) {
      document.title = `${title} | Murcho`
    },
    getPersonName (firstName, lastName) {
      return firstName + ' ' + lastName
    },
    async moveToTrash (model, id, cb) {
      try {
        const path = `${model}/${id}/move_to_trash`
        await this.$http.delete(path, this.authToken)
        cb(null, true)
      } catch (error) {
        console.log(error)
        cb(error)
      }
    },
    async moveFromTrash (model, id, cb) {
      try {
        const path = `${model}/${id}/move_from_trash`
        await this.$http.put(path, this.authToken)
        cb(null, true)
      } catch (error) {
        console.log(error)
        cb(error)
      }
    },
    readyCallbacks (fs) {
      this.delayedFuncs = fs
      this.callDelayedFuncs(this.appReady)
    },
    validateForm (callback) {
      this.$validator.validate().then(result => {
        if (!result) {
          const fieldName = this.$validator.errors.items.length
            ? this.$validator.errors.items[0].field
            : null

          if (fieldName) {
            const field = document.getElementsByName(fieldName)[0]
            field.focus()
          }
        }

        return callback(result)
      })
    },
    validateFields (fields, callback) {
      fields.forEach(field => {
        this.$validator.validate(field).then(result => {
          if (!result) {
            const fieldEl = document.getElementsByName(field)[0]
            fieldEl.focus()
          }
          return callback(result)
        })
      })
    },
    validateScope (scope, callback) {
      const selector = `${scope}.*`
      this.$validator.validate(selector).then(result => {
        if (!result) {
          const fieldName = this.$validator.errors.items[0].field
          const fieldEl = document.getElementsByName(fieldName)[0]
          fieldEl.focus()
        }
        return callback(result)
      })
    },
    callDelayedFuncs (ready) {
      if (!this.delayedFuncs.length) return false
      if (!this.doneExecutingDelayedFuncs && ready === true) {
        this.doneExecutingDelayedFuncs = true
        this.delayedFuncs.forEach(f => f())
      }
    },
    initializeApp (cb) {
      if (this.appReady) return

      const authToken = sessionStorage.getItem('auth_token')
      const email = sessionStorage.getItem('email')

      if (authToken && email) {
        this.$store.commit('SET_CRED', {
          authToken,
          email
        })

        const userId = this.$store.state.user.userId
        if (!userId) { // if user id exists there is no need to fetch it again
          this.getUserInfo(email, authToken, (err) => {
            if (err) return cb(err)
            this.$store.commit('SET_APP_READY', true)
            return cb(null)
          })
        } else {
          this.$store.commit('SET_APP_READY', true)
          return cb(null)
        }
      }
    },
    async getUserInfo (email, authToken, cb) {
      try {
        const path = 'get_user_info'

        const response = await this.$http.post(path, {
          email: email
        }, authToken)

        this.$store.commit('SET_USER', response)

        cb(null)
      } catch (error) {
        console.log(error)
        cb(error)
      }
    },
    encodeId (id) {
      if (!id) return ''
      if (!hash) {
        hash = new Hashids(this.salt)
      }
      return hash.encode(id)
    },
    decodeHash (h) {
      if (!h) return ''
      if (!hash) {
        hash = new Hashids(this.salt)
      }
      return hash.decode(h)[0]
    }
  },
  computed: {
    appReady () {
      return store.state.layout.appReady
    },
    authToken () {
      return store.state.user.authToken
    },
    salt () {
      return store.state.user.salt
    }
  },
  watch: {
    appReady (val) {
      this.callDelayedFuncs(val)
    }
  },
  filters: {
    arrayString (array) {
      return array.join(', ')
    },
    fromKebabToString (string) {
      if (!string) return ''
      return string.split('_').map(str => `${str.charAt(0).toUpperCase()}${str.substring(1)}`).join(' ')
    },
    capitalize (string) {
      if (!string) return ''
      return `${string.charAt(0).toUpperCase()}${string.substring(1)}`
    },
    capitalizeAll (string) {
      if (!string) return ''
      return string.split(' ').map(str => `${str.charAt(0).toUpperCase()}${str.substring(1)}`).join(' ')
    },
    formatDate (dateString) {
      const monthNames = [
        'Jan', 'Feb', 'Mar',
        'Apr', 'May', 'Jun', 'Jul',
        'Aug', 'Sep', 'Oct',
        'Nov', 'Dec'
      ]

      const date = new Date(dateString)
      const day = date.getDate()
      const monthIndex = date.getMonth()
      const year = date.getFullYear()

      return day + ' ' + monthNames[monthIndex] + ' ' + year
    }
  }
}
