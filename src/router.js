import { createMemoryHistory, createRouter } from 'vue-router'

import Main_Page from './vue/main_page.vue'
import Cailas_Page from './vue/cailas_page.vue'
import Testing_Page from './vue/testing_page.vue'

const routes = [
    { path: '/', component: Main_Page },
    { path: '/cailas_page', component: Cailas_Page },
//    { path: '/testing_page', component: Testing_Page },
]
  
const router = createRouter
({
    history: createMemoryHistory(),
    routes,
})

export default router
