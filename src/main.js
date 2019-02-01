import Vue from 'vue'
import VeeValidate from 'vee-validate'
import 'animate.css/animate.css'
import App from './App.vue'
import router from './router'
import store from '@/store'
import './registerServiceWorker'
import http from '@/plugins/http'
import globalMixin from '@/mixins/global'
import './assets/main.css'
import autofocus from 'vue-autofocus-directive'
import Meta from 'vue-meta'
import {
  parse
} from 'date-fns'

Vue.config.productionTip = false
Vue.use(http)
Vue.mixin(globalMixin)
Vue.use(VeeValidate, {
  events: 'change'
})
Vue.directive('autofocus', autofocus)

// Custom Vee-Validate Rules
const required = VeeValidate.Validator.rules.required.validate

const ifDependentPresent = (value, args) => {
  if (!args.length) return true
  const allPresent = true

  args.forEach(arg => allPresent && arg)

  if (allPresent) return required(value)
  return true
}

const dateFormat = 'dd/MM/yyyy'
const today = new Date()
const invalidDate = 'Invalid Date'

const isValidDate = {
  getMessage (field, args) {
    return 'Please provide a valid date.'
  },
  validate (value, args) {
    if (!value) return true
    return parse(value, dateFormat, today).toString() !== invalidDate
  }
}

VeeValidate.Validator.extend('isDependent', ifDependentPresent)
VeeValidate.Validator.extend('validateDate', isValidDate)

Vue.use(Meta)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
