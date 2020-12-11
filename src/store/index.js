import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    answer: null,
    rooms: [],
    detail: ''
  },
  mutations: {
    getAnswer (state, payload) {
      state.answer = payload
    },
    SOCKET_createRoom (state, payload) {
      state.rooms = payload
    },
    SOCKET_fetchRooms (state, payload) {
      state.rooms = payload
    },
    SOCKET_fetchPlayers (state, payload) {
      state.detail = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
