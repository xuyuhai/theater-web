import { createWebHistory, createRouter } from "vue-router";
import HomeView from '../views/HomeView.vue'
import NotifyView from '../views/NotifyView.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/notify',
        name: 'notify',
        component: NotifyView
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router