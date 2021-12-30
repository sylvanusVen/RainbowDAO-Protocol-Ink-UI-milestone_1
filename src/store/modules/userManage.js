import connectContract from "../../api/connectContract"
import {formatResult} from "../../utils/formatUtils"
import Accounts from "../../api/Account.js";
import {eventBus} from "../../utils/eventBus";
const state = {
    web3: {},
    contract: null
}
const value = 0;
const gasLimit = -1;

async function judgeContract(web3) {
    if (!state.contract) {
        state.contract = await connectContract(web3, "userManage")
    }
}

const mutations = {
    SET_WEB3(state, web3) {
        state.web3 = web3
    }
}
const actions = {

    async getUserReferer({rootState},AccountId) {
        await judgeContract(rootState.app.web3)
        if(!AccountId){
            AccountId = await Accounts.accountAddress();
        }
        const  Account = await Accounts.accountAddress();
        let data = await state.contract.query.getUserReferer(Account, {value, gasLimit},AccountId)
        data = formatResult(data);
        console.log(data)
        return data
    },
    async listUser({rootState}) {
        await judgeContract(rootState.app.web3)
        const AccountId = await Accounts.accountAddress();
        let data = await state.contract.query.listUser(AccountId, {value, gasLimit})
        // The actual result from RPC as `ContractExecResult`
        data = formatResult(data);

        return data
    },

    async join({rootState}, {invitation_code,name,user_profile }) {
        const injector = await Accounts.accountInjector();
        console.log(invitation_code,name,user_profile)
        await judgeContract(rootState.app.web3)
        const AccountId = await Accounts.accountAddress();
        let isSend= false
        let data = await state.contract.tx.join({value, gasLimit},invitation_code,name,user_profile).signAndSend(AccountId, { signer: injector.signer }, (result) => {
            if (result.status.isInBlock ||result.status.isFinalized) {
                if(!isSend){
                    isSend = true
                    eventBus.$emit('message', {
                        type:"success",
                        message:"castVote success"
                    })
                }

                return true
            }
        });
        data = formatResult(data);
        return data
    },
    async existsUser({rootState},user) {
        await judgeContract(rootState.app.web3)
        const AccountId = await Accounts.accountAddress();
        user?'':user = AccountId
        let data = await state.contract.query.existsUser(AccountId, {value, gasLimit},user)
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
