const state = {
  errorState: false,
  errorMessage: 'There was an error processing your request',
  appReady: false,
  snackBar: false,
  barMessage: 'Test Message here',
  barType: '',
  activeFolder: '',
  openedFolders: [],
  tags: {},
  folders: {},
  login: {
    state: false,
    message: '',
    type: '',
    route: ''
  },
  alert: {
    state: false,
    message: '',
    type: ''
  }
}

const getters = {}

const actions = {}

const mutations = {
  SET_APP_READY (state, payload) {
    state.appReady = payload
  },
  SET_LOGIN_DATA (state, data) {
    /**
     * data: {
        message: '',
        type: '',
        route: '',
      }
     */
    state.login.message = data.message
    state.login.type = data.type
    state.login.route = data.route
    state.login.state = true
  },
  CLEAR_LOGIN_DATA (state) {
    state.login.message = ''
    state.login.type = ''
    state.login.route = ''
    state.login.state = false
  },
  CALL_ALERT (state, data) {
    state.alert.message = data.message
    state.alert.type = data.type
    state.alert.state = true
  },
  CLEAR_ALERT (state) {
    state.alert.message = ''
    state.alert.type = ''
    state.alert.state = false
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
