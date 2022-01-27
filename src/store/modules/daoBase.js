import connectContract from "../../api/connectContract"
import {dealResult, formatResult} from "../../utils/formatUtils"
import Accounts from "../../api/Account.js";
import contractHash from "../../utils/contractHash.json"
import {eventBus} from "../../utils/eventBus";
const state = {
    web3:{},
    contract:null
}
const value = 0;
const gasLimit = -1;
async function  judgeContract(web3,address){
    if(!state.contract){
        state.contract = await connectContract(web3, "base",address)
    }
}
const mutations = {
    SET_WEB3(state,web3){
        state.web3 = web3
    }
}
const actions = {
    async getBaseInfo({rootState},baseAddress) {
        const AccountId = await Accounts.accountAddress();
        await judgeContract(rootState.app.web3,baseAddress)
        let data = await state.contract.query.getBaseInfo(AccountId, {value, gasLimit})
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
