import { createStore } from 'vuex'
import counterModule from './counter'

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


