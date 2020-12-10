import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    answer: null
  },
  mutations: {
    getAnswer (state, payload) {
      state.answer = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
