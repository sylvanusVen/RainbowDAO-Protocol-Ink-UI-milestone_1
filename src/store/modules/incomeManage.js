import connectContract from "../../api/connectContract"
import {dealResult, formatResult} from "../../utils/formatUtils"
import Accounts from "../../api/Account.js";
import {eventBus} from "../../utils/eventBus"
const state = {
    web3: {},
    contract: null
}
const value = 0;
const gasLimit = -1;

async function judgeContract(web3) {
    if (!state.contract) {
        state.contract = await connectContract(web3, "incomeManage")
    }
}

const mutations = {
    SET_WEB3(state, web3) {
        state.web3 = web3
    }
}
const actions = {
    async saveCategory({rootState},{
        name,
        incomeInfo
    }){
        console.log(  name,
            incomeInfo)
        const injector = await Accounts.accountInjector();
        const AccountId = sessionStorage.getItem('currentAccount')
         await judgeContract(rootState.app.web3)
        if(rootState.app.balance < 1.01){
            eventBus.$emit('message', {
                type:"error",
                message:"Not enough gas"
            })
            return
        }
        console.log(name,incomeInfo)
        let isSend = false
        let data = await state.contract.tx.saveCategory( {value, gasLimit},name,incomeInfo).signAndSend(AccountId, { signer: injector.signer }, (result) => {
            console.error(result)
            dealResult(result)
        });
        data = formatResult(data);
        return data
    },
    async transferOwner({rootState},account){
        const injector = await Accounts.accountInjector();
        const AccountId = sessionStorage.getItem('currentAccount')
         await judgeContract(rootState.app.web3)
        let data = await state.contract.tx.transferOwner( {value, gasLimit},account).signAndSend(AccountId, { signer: injector.signer }, (result) => {
            console.error(result)
            dealResult(result)
        });
        data = formatResult(data);
        return data
    },
    async listCategory({rootState}) {
         await judgeContract(rootState.app.web3)
        const AccountId = sessionStorage.getItem('currentAccount')
        let data = await state.contract.query.listCategory(AccountId, {value, gasLimit})
        data = formatResult(data);
        return data
    },
    async getCategory({rootState},name) {
         await judgeContract(rootState.app.web3)

        const AccountId = sessionStorage.getItem('currentAccount')
        let data = await state.contract.query.getCategory(AccountId, {value, gasLimit},name)
        data = formatResult(data);
        return data
    },

    async getUserPrivilege({rootState}) {
         await judgeContract(rootState.app.web3)
        const AccountId = sessionStorage.getItem('currentAccount')
        let data = await state.contract.query.getUserPrivilege(AccountId, {value, gasLimit}, AccountId)
        data = formatResult(data);
        return data
    },
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
