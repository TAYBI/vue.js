const app = Vue.createApp({
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        incCounter(step = 1) {
            this.counter += step;
        },
        DecCounter(step = 1) {
            this.counter -= step;
        },
    }
})

app.mount('#app')