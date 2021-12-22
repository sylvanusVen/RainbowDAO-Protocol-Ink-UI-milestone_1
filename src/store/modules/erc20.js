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
        state.contract = await connectContract(web3, "erc20")
    }
}
const mutations = {
    SET_WEB3(state,web3){
        state.web3 = web3
    }
}
const actions = {
    async getCurrentVotes({rootState}) {
        await judgeContract(rootState.app.web3)
        const AccountId = await Accounts.accountAddress();
        let data = await state.contract.query.getCurrentVotes(AccountId, {value, gasLimit}, AccountId)
        data = formatResult(data);
        return data
    },
    async delegate({rootState},address){
        const injector = await Accounts.accountInjector();
        const AccountId = await Accounts.accountAddress();
        await judgeContract(rootState.app.web3)
        let data = await state.contract.tx.delegate( {value, gasLimit},address).signAndSend(AccountId, { signer: injector.signer }, (result) => {
            console.error(result)
            if (result.status.isInBlock ||result.status.isFinalized) {
                return true
            }
        });
        data = formatResult(data);
        return data
    },
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
