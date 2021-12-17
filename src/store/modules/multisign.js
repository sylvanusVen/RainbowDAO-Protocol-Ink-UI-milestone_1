import connectContract from "../../api/connectContract"
import {formatResult} from "../../utils/formatUtils"
import Accounts from "../../api/Account.js";
const address = "5FgPkwKGk1VbGb9YtNKMFFeJ5Nr7WQH1MCnJ2GeNTXBuhpAZ"
const state = {
    web3:{},
    contract:null
}
const value = 0;
const gasLimit = -1;
async function  judgeContract(web3){
    if(!state.contract){
        state.contract = await connectContract(web3, "multisign", address)
    }
}
const mutations = {
    SET_WEB3(state,web3){
        state.web3 = web3
    }
}
const actions = {
    async minSignCount({rootState},owners){
        await judgeContract(rootState.app.web3)
        let data = await state.contract.query.minSignCount(AccountId, {value, gasLimit},to , owners)
        data = formatResult(data);
        return data
    },
    async creatTransfer({rootState},{to, amount}){
        const injector = await Accounts.accountInjector();
        await judgeContract(rootState.app.web3)
        let data = await state.contract.tx.creatTransfer(AccountId, {value, gasLimit},to , amount).signAndSend(AccountId, { signer: injector.signer }, (result) => {
            console.error(result)
            if (result.status.isInBlock ||result.status.isFinalized) {
                return true
            }
        });
        data = formatResult(data);
        return data
    },
    async signTransaction({rootState},transaction_id){
        await judgeContract(rootState.app.web3)
        let data = await state.contract.query.signTransaction(AccountId, {value, gasLimit},transaction_id).signAndSend(AccountId, { signer: injector.signer }, (result) => {
            console.error(result)
            if (result.status.isInBlock ||result.status.isFinalized) {
                return true
            }
        });
        data = formatResult(data);
        return data
    },
    async getTransaction({rootState},trans_id){
        await judgeContract(rootState.app.web3)
        let data = await state.contract.query.getTransaction(AccountId, {value, gasLimit},trans_id)
        data = formatResult(data);
        return data
    },
    async addManage({rootState},addr){
        const injector = await Accounts.accountInjector();
        await judgeContract(rootState.app.web3)
        let data = await state.contract.tx.addManage(AccountId, {value, gasLimit},addr).signAndSend(AccountId, { signer: injector.signer }, (result) => {
            console.error(result)
            if (result.status.isInBlock ||result.status.isFinalized) {
                return true
            }
        });
        data = formatResult(data);
        return data
    },
    async removeManage({rootState},addr){
        const injector = await Accounts.accountInjector();
        await judgeContract(rootState.app.web3)
        let data = await state.contract.tx.removeManage(AccountId, {value, gasLimit},addr).signAndSend(AccountId, { signer: injector.signer }, (result) => {
            console.error(result)
            if (result.status.isInBlock ||result.status.isFinalized) {
                return true
            }
        });
        data = formatResult(data);
        return data
    },
    async getManageList({rootState}){
        await judgeContract(rootState.app.web3)
        let data = await state.contract.query.getManageList(AccountId, {value, gasLimit})
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
