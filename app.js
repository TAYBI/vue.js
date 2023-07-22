const app = Vue.createApp({
    data() {
        return {
            message: 'Vue js, ma bright coding b darija',
            title: ' page Title',
            imgSrc: 'https://cdn.vectorstock.com/i/preview-1x/78/59/happy-grin-emoji-instant-messaging-icon-imag-vector-17067859.jpg',
            htmlCode: '<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, harum.</p>'
        }
    },
    methods: {
        welcomeMessage() {
            return `salam bdina net3almo ${this.message}`
        }
    }
})

app.mount('#app')