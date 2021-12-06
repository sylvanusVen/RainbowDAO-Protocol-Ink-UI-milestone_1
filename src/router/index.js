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
                path: '/referral',
                name: "index",
                component:()=> import('@/views/referral/referral.vue')
            },
            {
                path: '/management',
                name: "index",
                component:()=> import('@/views/manage/management.vue')
            },
            {
                path: '/RainbowWarrior',
                name: "RainbowWarrior",
                component:()=> import('@/views/rainbowWarrior/rainbowWarriorPage')
            },
            {
                path: '/Proposal',
                name: "Proposal",
                component:()=> import('@/views/proposal/proposal.vue')
            },
            {
                path: '/ProposalDetail',
                name: "ProposalDetail",
                component:()=> import('@/views/proposal/proposalDetail.vue')
            },
            {
                path: '/index',
                name: "index",
                component:()=> import('@/views/rainbowDao/rainbowDao.vue')
            },
            {
                path: '/income',
                name: "income",
                component:()=> import('@/views/income/incomeManage.vue')
            },
        ]
    },

]
const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
