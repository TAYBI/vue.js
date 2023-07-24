const app = Vue.createApp({
    data() {
        return {
            name: '',
            counter: 0,
            initValue: 0,
            message: '',
            result: false,
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
    },
    computed: {
        calcule() {
            return this.counter * this.initValue
        },
        classObject() {
            return { 'bg-success': this.result, 'bg-warning': !this.result }
        }
    },
    watch: {
        counter: function () {
            if (this.counter >= 10) {
                this.result = true;
                this.message = 'Winner';
            }
            else {
                this.result = false;
                this.message = 'you Lost';
            }
        }
    }
})

app.mount('#app')