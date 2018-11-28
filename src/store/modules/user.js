const state = {
  userId: '',
  first_name: '',
  last_name: '',
  joined: '',
  thumbnail: '',
  rel_status: '',
  origin: '',
  address: '',
  phone_number: '',
  email: '',
  gender: '',
  user_type: '',
  authToken: '',
  salt: ''
}

const mutations = {
  SET_USER (state, payload) {
    state.userId = payload.id
    state.first_name = payload.first_name
    state.last_name = payload.last_name
    state.joined = payload.joined
    state.thumbnail = payload.thumbnail
    state.rel_status = payload.rel_status
    state.address = payload.address
    state.phone_number = payload.phone_number
    state.email = payload.email
    state.gender = payload.gender
    state.user_type = payload.user_type
    state.salt = payload.salt
  },
  SET_TOKEN (state, token) {
    state.authToken = token
  },
  SET_CRED (state, pay) {
    state.authToken = pay.authToken
    state.email = pay.email
  }
}

const actions = {

}

const getters = {
  // get_user_info()
}

export default {
  state,
  mutations,
  actions,
  getters
}
