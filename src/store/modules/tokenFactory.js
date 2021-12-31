import connectContract from "../../api/connectContract"
import {formatResult} from "../../utils/formatUtils"
import Accounts from "../../api/Account.js";
import contractHash from "../../utils/contractHash.json"
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
    async listToken({rootState}){
        const AccountId = await Accounts.accountAddress();
        await judgeContract(rootState.app.web3)
        let data = await state.contract.query.listToken(AccountId, {value, gasLimit})
        data = formatResult(data);
        return data
    },
    async newErc20({rootState}, {initial_supply,name,symbol,decimals}){
        console.log(initial_supply,name,symbol,decimals,owner)
        const injector = await Accounts.accountInjector();
        const AccountId = await Accounts.accountAddress();
        let erc20_code_hash= contractHash["erc20_code_hash"]
        let owner = AccountId
        await judgeContract(rootState.app.web3)
        let data = await state.contract.tx.newErc20( {value, gasLimit},erc20_code_hash,initial_supply,name,symbol,decimals,owner).signAndSend(AccountId, { signer: injector.signer }, (result) => {
            console.error(result)
            if (result.status.isInBlock ||result.status.isFinalized) {
                data = formatResult(data);
                console.log(data)
                return true
            }
        });
        data = formatResult(data);
        return data
    },
    async getContractAddr({rootState},name){
        const AccountId = await Accounts.accountAddress();
        await judgeContract(rootState.app.web3)
        let data = await state.contract.query.getContractAddr(AccountId, {value, gasLimit},name)
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
