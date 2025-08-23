import { createMemoryHistory, createRouter } from 'vue-router'

import Main_Page from './main_page.vue'
import Cailas_Page from './cailas_page.vue'

const routes = [
    { path: '/', component: Main_Page },
    { path: '/cailas_page', component: Cailas_Page },
]
  
const router = createRouter
({
    history: createMemoryHistory(),
    routes,
})

export default router
