const app = Vue.createApp({
    data() {
        return {
            name: '',
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
        logName() {
            console.log(this.name);
        },
    }
})

app.mount('#app')