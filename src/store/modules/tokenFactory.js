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
        state.contract = await connectContract(web3, "tokenFactory")
    }
}
const mutations = {
    SET_WEB3(state,web3){
        state.web3 = web3
    }
}
const actions = {
    async newErc20({rootState}, {erc20_code_hash,version,initial_supply,name,symbol,decimals,owner}){
        const injector = await Accounts.accountInjector();
        const AccountId = await Accounts.accountAddress();
        erc20_code_hash=`0xdd50c39cae66acd09c5da24fd4bb8fe7abbe957dfa89869681e37234d6d8695e`
        owner = AccountId
        await judgeContract(rootState.app.web3)
        let data = await state.contract.tx.newErc20( {value, gasLimit},erc20_code_hash,version,initial_supply,name,symbol,decimals,owner).signAndSend(AccountId, { signer: injector.signer }, (result) => {
            console.error(result)
            if (result.status.isInBlock ||result.status.isFinalized) {
                return true
            }
        });
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
