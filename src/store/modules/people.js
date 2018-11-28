const state = {
  container: [],
  currentTag: '',
  selectedMember: {},
  savedSubject: '',
  savedBody: ''
}

const mutations = {
  ADD_TO_CONTAINER (state, items) {
    state.container = state.container.concat(items)
    sessionStorage.setItem('people_container', JSON.stringify(state.container))
  },
  CLEAR_CONTAINER (state) {
    state.container = []
    sessionStorage.setItem('people_container', JSON.stringify(state.container))
  },
  SET_CURRENT_TAG (state, id) {
    state.currentTag = id
  },
  SET_CURRENT_MEMBER (state, member) {
    state.selectedMember = member
  },
  SAVE_MESSAGE (state, payload) {
    state.savedSubject = payload.subject
    state.savedBody = payload.body
  },
  SET_CONTAINER (state, items) {
    state.container = items
    sessionStorage.setItem('people_container', JSON.stringify(state.container))
  }
}

const actions = {}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
