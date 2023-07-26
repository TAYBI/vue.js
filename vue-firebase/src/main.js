import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})



const app = createApp(App);
app.use(router)
app.use(vuetify)
app.mount('#app')
