const state = {
  userId: '',
  full_name: '',
  photo: '',
  phone_number: '',
  email: '',
  access_level: '',
  authToken: '',
  salt: '',
  church_id: ''
}

const mutations = {
  SET_USER (state, payload) {
    state.userId = payload.id
    state.full_name = payload.full_name
    state.photo = payload.photo
    state.email = payload.email
    state.phone_number = payload.phone_number
    state.access_level = payload.access_level
    state.salt = payload.salt
    state.church_id = payload.church_id
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
