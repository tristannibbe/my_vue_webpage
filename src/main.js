import { createApp } from 'vue'
import router from './router.js'
import App from './app.vue'

import "./style.css"


createApp(App).use(router).mount('#main_page')
//createApp(Cailas_Page).mount('#cailas_page')

