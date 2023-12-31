import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { mdiAccount } from '@mdi/js'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App)
.use(vuetify)
.use(router)
.use(store)
.mount('#app')
