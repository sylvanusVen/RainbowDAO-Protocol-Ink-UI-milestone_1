import connectContract from "../../api/connectContract"
import {formatResult} from "../../utils/formatUtils"
import Accounts from "../../api/Account.js";
const state = {
    web3:{},
    contract:null
}
const value = 0;
const gasLimit = -1;
async function  judgeContract(web3,address){
    if(!state.contract){
        state.contract = await connectContract(web3, "erc20", address)
    }
}
const mutations = {
    SET_WEB3(state,web3){
        state.web3 = web3
    }
}
const actions = {
    async getBalance({rootState},address){
        await judgeContract(rootState.app.web3, address)
        const accountList = await Accounts.accountList();
        let AccountId = accountList.allAccounts[0].address
        console.log("AccountId++++++++++++++++++++++++++++++",AccountId)
        let data = await state.contract.query.balanceOf(AccountId, {value, gasLimit}, AccountId)
        console.log(data)
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
