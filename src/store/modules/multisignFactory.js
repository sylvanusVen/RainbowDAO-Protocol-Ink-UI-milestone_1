import connectContract from "../../api/connectContract"
import {dealResult, formatResult} from "../../utils/formatUtils"
import Accounts from "../../api/Account.js";
import {eventBus} from "../../utils/eventBus"
import contractHash from "../../utils/contractHash.json"
const state = {
    web3:{},
    contract:null
}
const value = 0;
const gasLimit = -1;
async function  judgeContract(web3){
    if(!state.contract){
        state.contract = await connectContract(web3, "multisignFactory")
    }
}
const mutations = {
    SET_WEB3(state,web3){
        state.web3 = web3
    }
}
const actions = {
    async userMultisig({rootState}){
        const AccountId = sessionStorage.getItem('currentAccount')
         await judgeContract(rootState.app.web3)

        let data = await state.contract.query.userMultisig(AccountId, {value, gasLimit}, AccountId)
        data = formatResult(data);
        return data
    },
    async newMultiSign({rootState},{ owners,min_sign_count}){
         await judgeContract(rootState.app.web3)
        if(rootState.app.balance < 1.01){
            eventBus.$emit('message', {
                type:"error",
                message:"Not enough gas"
            })
            return
        }
        let multisig_hash = contractHash["multisig_hash"]
        const injector = await Accounts.accountInjector();
        const AccountId = sessionStorage.getItem('currentAccount')
        owners?'':owners = [AccountId]
        let ownersarr = [...owners]
        min_sign_count>0?'':min_sign_count=1

        let data = await state.contract.tx.newMultisig( {value, gasLimit},multisig_hash, ownersarr,min_sign_count).signAndSend(AccountId, { signer: injector.signer }, (result) => {
            console.error(result)
            dealResult(result)
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
