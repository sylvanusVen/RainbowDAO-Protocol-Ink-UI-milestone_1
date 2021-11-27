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
        path: '/',
        name: "rainbow",
        component: () => import('@/layout.vue'),
        redirect: '/RainbowCity',
        children: [
            {
                path: '/RainbowCity',
                name: "RainbowCity",
                component:()=> import('@/views/rainbowCity/rainbowCityPage')
            },

            {
                path: '/RainbowWarrior',
                name: "RainbowWarrior",
                component:()=> import('@/views/rainbowWarrior/rainbowWarriorPage')
            },
            {
                path: '/Proposal',
                name: "Proposal",
                component:()=> import('@/views/proposal.vue')
            },
            {
                path: '/RainbowDao',
                name: "RainbowDao",
                component:()=> import('@/views/rainbowDao/rainbowDao.vue')
            },
        ]
    },

]
const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
