import connectContract from "../../api/connectContract"
import {formatResult} from "../../utils/formatUtils"
import Accounts from "../../api/Account.js";

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
        const { gasConsumed, result, output }  = await state.contract.query.listUser(AccountId, {value, gasLimit})
        // The actual result from RPC as `ContractExecResult`
        console.log(result.toHuman());

        // gas consumed
        console.log(gasConsumed.toHuman());
        console.log(output)
        // check if the call was successful
        if (result.isOk) {
            // should output 123 as per our initial set (output here is an i32)
            console.log('Success', output.toHuman());
        } else {
            console.error('Error', result.asErr);
        }
        return output
    },

    async join({rootState}, {invitation_code,name,user_profile }) {
        const injector = await Accounts.accountInjector();
        console.log(invitation_code,name,user_profile)
        await judgeContract(rootState.app.web3)
        const AccountId = await Accounts.accountAddress();
        console.log(AccountId)
        let data = await state.contract.tx.join({value, gasLimit},invitation_code,name,user_profile).signAndSend(AccountId, { signer: injector.signer }, (result) => {
            console.error(result)
            if (result.status.isInBlock ||result.status.isFinalized) {
                return true
            }
        });
        data = formatResult(data);
        return data
    },
    async existsUser({rootState},user) {
        await judgeContract(rootState.app.web3)
        const AccountId = await Accounts.accountAddress();
        let data = await state.contract.query.existsUser(AccountId, {value, gasLimit},AccountId)
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
