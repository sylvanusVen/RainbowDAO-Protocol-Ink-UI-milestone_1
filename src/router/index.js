import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: "home",
        component: () => import('@/home.vue'),
    },
    {
        path: '/rainbow',
        name: "rainbow",
        component: () => import('@/layout.vue'),
        redirect: '/RainbowCity',
    },

]
const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
