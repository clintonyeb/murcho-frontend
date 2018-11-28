import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import layout from './modules/layout'
import people from './modules/people'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    user,
    layout,
    people
  }
})
