import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faSpotify, faApple, faYoutube } from '@fortawesome/free-brands-svg-icons'
library.add(faUser, faCoffee, faSpotify, faApple, faYoutube)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
AOS.init({})
app.component('font-awesome-icon', FontAwesomeIcon)
