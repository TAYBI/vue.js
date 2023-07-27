import { createStore } from 'vuex'


const ctegoryModule = {
  state: {
    categories: []
  },
  getters: {
    getCategoy(id, addCategoy) { },
  },
  mutations: {
    addCategoy(addCategoy) { },
    updateCategoy(id, addCategoy) { },
    deleteCategoy(id, addCategoy) { },
  },
  actions: {
    addCategoy(addCategoy) { },
    updateCategoy(id, addCategoy) { },
    deleteCategoy(id, addCategoy) { },
  },
  modules: {
  }
}

const counterModule = {
  namespaced: true,
  state: {
    counter: 0,
  },
  getters: {
    getCounter(state) {
      return state.counter;
    },
    getCounterNormalize(_, getters) {
      const counter = getters.getCounter;

      if (counter < 0) return 0
      if (counter > 100) return 1000

      return counter
    }
  },
  mutations: {
    increase(state, payload) {
      state.counter += payload.data;
    },
  },
  actions: {
    increment({ commit }, playload) {
      commit('increase', playload)
    }
  },
  modules: {
  }
}

export default createStore({
  state: {
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    counter: counterModule,
    categoy: ctegoryModule
  }
})


