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
                name: "referral",
                component:()=> import('@/views/referral/referral.vue')
            },
            {
                path: '/createMultiSign',
                name: "createMultiSign",
                component:()=> import('@/views/multisign/createMultiSign.vue')
            },
            {
                path: '/multiSignPanel',
                name: "multiSignPanel",
                component:()=> import('@/views/multisign/multiSignPanel.vue')
            },
            {
                path: '/myMultiSign',
                name: "myMultiSign",
                component:()=> import('@/views/multisign/myMultiSign.vue')
            },
            {
                path: '/management',
                name: "management",
                component:()=> import('@/views/manage/management.vue')
            },
            {
                path: '/RainbowWarrior',
                name: "RainbowWarrior",
                component:()=> import('@/views/rainbowWarrior/rainbowWarriorPage')
            },
            {
                path: '/createProposal',
                name: "createProposal",
                component:()=> import('@/views/proposal/createProposal.vue')
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
            {
                path: '/polkadot',
                name: "polkadot",
                component:()=> import('@/views/polkadot.vue')
            },
            {
                path: '/Hackathon',
                name: "Hackathon",
                component:()=> import('@/views/Hackathon.vue')
            },
            {
                path: '/mintToken',
                name: "mintToken",
                component:()=> import('@/views/tokensFactory/tokenMint.vue')
            },
            {
                path: '/mintSuccess',
                name: "mintSuccess",
                component:()=> import('@/views/tokensFactory/mintSuccess.vue')
            },
            {
                path: '/tokenPanel',
                name: "tokenPanel",
                component:()=> import('@/views/tokensFactory/tokenPanel.vue')
            },
        ]
    },

]
const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
