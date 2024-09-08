import { createApp,defineAsyncComponent } from "vue"
import { createPinia } from 'pinia'
import App from "./App.vue"
import ElementPlus from 'element-plus'
import { createRouter, createWebHistory } from "vue-router"
import 'element-plus/dist/index.css'
import Home from './components/Home.vue'
import ProductPage from './components/ProductPage.vue'
import About from 'team-blue/About'

const app = createApp(App)
const pinia = createPinia()
const routes =[
    { path: '/', component: Home },
    { path: '/store', component: ProductPage },
    { path: '/about', component: About },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

app.use(pinia)
app.use(ElementPlus)
app.use(router)

app.mount("#app")
