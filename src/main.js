import './assets/main.css'

import { createApp } from 'vue'
import App from './Home.vue'
import router from '../router'
import { i18n } from './messages.js'

import '@fortawesome/fontawesome-free/css/all.css'

const app = createApp(App)

app.use(i18n)
app.use(router)
app.mount('#app')