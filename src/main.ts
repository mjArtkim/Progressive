import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faUser,
  faHouse,
  faXmark,
  faLink,
  faArrowDownShortWide,
} from '@fortawesome/free-solid-svg-icons'

import { faSpotify, faApple, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
library.add(
  faUser,
  faSpotify,
  faApple,
  faYoutube,
  faHouse,
  faXmark,
  faInstagram,
  faLink,
  faArrowDownShortWide,
)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
AOS.init({})
