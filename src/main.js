import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')


//const { createApp } = Vue
const { createVuetify } = Vuetify

const vuetify = createVuetify()

// const app = createApp()
// app.use(vuetify).use(store).use(router).mount('#app')