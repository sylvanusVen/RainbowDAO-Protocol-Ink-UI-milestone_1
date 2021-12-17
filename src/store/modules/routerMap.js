import connectContract from "../../api/connectContract"
import {formatResult} from "../../utils/formatUtils"
import Accounts from "../../api/Account.js";
const address = "5FHzZGKXMSvJxQ1nTh7GqfAjdHjZRWLF82bEwtKGZe8yZyea"
const state = {
    web3:{},
    contract:null
}
const value = 0;
const gasLimit = -1;
async function  judgeContract(web3){
    if(!state.contract){
        state.contract = await connectContract(web3, "routerMap", address)
    }
}
const mutations = {
    SET_WEB3(state,web3){
        state.web3 = web3
    }
}
const actions = {
    async addRoute({rootState}){
        await judgeContract(rootState.app.web3)

        const AccountId = await Accounts.accountAddress();
        console.log(state.contract)
        let data = await state.contract.query.addRoute(AccountId, {value, gasLimit}, "test","5GHhDtpb36ikhpedynbBXK59nVo2BfkevtDz3sSHzeKAVe6K")
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
