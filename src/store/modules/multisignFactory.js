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
        state.contract = await connectContract(web3, "multisignFactory")
    }
}
const mutations = {
    SET_WEB3(state,web3){
        state.web3 = web3
    }
}
const actions = {

    async newMultisig({rootState},{multisig_hash, owners,min_sign_count,version}){
        await judgeContract(rootState.app.web3)

        multisig_hash = "0xaa5e6e3e8f58161a87d49f996d6ba4746c3504e5634f116ac01c48352d861192"
        const injector = await Accounts.accountInjector();
        const AccountId = await Accounts.accountAddress();
        owners = AccountId
        min_sign_count>0?'':min_sign_count=1
        version= 0
        let data = await state.contract.tx.newMultisig(AccountId, {value, gasLimit},multisig_hash, owners,min_sign_count,version).signAndSend(AccountId, { signer: injector.signer }, (result) => {
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
