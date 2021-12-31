import connectContract from "../../api/connectContract"
import {formatResult} from "../../utils/formatUtils"
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
        const AccountId = await Accounts.accountAddress();
        await judgeContract(rootState.app.web3)
        console.log(AccountId)
        let data = await state.contract.query.userMultisig(AccountId, {value, gasLimit}, AccountId)
        data = formatResult(data);
        return data
    },
    async newMultiSign({rootState},{ owners,min_sign_count}){
        await judgeContract(rootState.app.web3)
        let multisig_hash = contractHash["multisig_hash"]
        const injector = await Accounts.accountInjector();
        const AccountId = await Accounts.accountAddress();
        owners?'':owners = [AccountId]
        let ownersarr = [...owners]
        min_sign_count>0?'':min_sign_count=1
        let isSend = false
        let data = await state.contract.tx.newMultisig( {value, gasLimit},multisig_hash, ownersarr,min_sign_count).signAndSend(AccountId, { signer: injector.signer }, (result) => {
            console.error(result)
            if (result.status.isInBlock ||result.status.isFinalized) {
                if(!isSend){
                    isSend = true
                    eventBus.$emit('message', {
                        type:"success",
                        message:"newMultisig success"
                    })
                }
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
