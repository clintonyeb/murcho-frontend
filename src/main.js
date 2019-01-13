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

Vue.config.productionTip = false
Vue.use(http)
Vue.mixin(globalMixin)
Vue.use(VeeValidate, {
  events: 'blur'
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

VeeValidate.Validator.extend('isDependent', ifDependentPresent)

Vue.use(Meta)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
