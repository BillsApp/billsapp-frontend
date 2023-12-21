import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { mdiAlertCircle, mdiCheckboxMarkedCircle, mdiLogout } from '@mdi/js'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases: {
      ...aliases,
      alertCircle: mdiAlertCircle,
      checkboxCircle: mdiCheckboxMarkedCircle,
      logout: mdiLogout,
    },
    sets: {
      mdi,
    },
  },
})

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(vuetify)

app.mount('#app')
