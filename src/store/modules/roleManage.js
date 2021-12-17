import connectContract from "../../api/connectContract"
import {formatResult} from "../../utils/formatUtils"
import Accounts from "../../api/Account.js";

const state = {
    web3:{},
    contract:null
}
const value = 0;
const gasLimit = -1;
async function  judgeContract(web3){
    if(!state.contract){
        state.contract = await connectContract(web3, "roleManage")
    }
}
const mutations = {
    SET_WEB3(state,web3){
        state.web3 = web3
    }
}
const actions = {

    async listRoles({rootState}){
        await judgeContract(rootState.app.web3)
        const accountlist = await Accounts.accountlist();
        let AccountId = accountlist.allAccounts[0].address
        let data = await state.contract.query.listRoles(AccountId, {value, gasLimit})
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
