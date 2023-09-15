import { createWebHistory, createRouter } from "vue-router";
import HomeView from '../views/HomeView.vue'
import NotifyView from '../views/NotifyView.vue'
import BranchView from '../views/BranchView.vue'
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
    },
    {
        path: '/branch',
        name: 'branch',
        component: BranchView
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router