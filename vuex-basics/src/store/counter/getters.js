export default {
    getCounter(state) {
        return state.counter;
    },
    getCounterNormalize(_, getters) {
        const counter = getters.getCounter;

        if (counter < 0) return 0
        if (counter > 100) return 1000

        return counter
    }
}