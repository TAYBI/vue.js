import counterActions from './actions.js'
import counterMutations from './mutations.js'
import counterGetters from './getters.js'

export default {
    namespaced: true,
    state: {

        counter: 0,
    },
    actions: counterActions,
    mutations: counterMutations,
    getters: counterGetters,
}