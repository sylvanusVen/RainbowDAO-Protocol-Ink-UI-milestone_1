import connectContract from "../../api/connectContract"
import {formatResult} from "../../utils/formatUtils"
import Accounts from "../../api/Account.js";
const address = "5FbUtTVK1CofRbSz4Wg2Emw1piGvq4wi8NGVP7oo2fit7Tpb"
const state = {
    web3:{},
    contract:null
}
const value = 0;
const gasLimit = -1;
async function  judgeContract(web3){
    if(!state.contract){
        state.contract = await connectContract(web3, "core", address)
    }
}
const mutations = {
    SET_WEB3(state,web3){
        state.web3 = web3
    }
}
const actions = {
    async roleInsertPrivilege({rootState}, {name,privilege }){
        const injector = await Accounts.accountInjector();
        await judgeContract(rootState.app.web3)
        let data = await state.contract.query.roleInsertPrivilege(AccountId, {value, gasLimit},name,privilege ).signAndSend(AccountId, { signer: injector.signer }, (result) => {
            console.error(result)
            if (result.status.isInBlock ||result.status.isFinalized) {
                return true
            }
        });
        data = formatResult(data);
        return data
    },
    async addPrivilege({rootState},name){
        const injector = await Accounts.accountInjector();
        await judgeContract(rootState.app.web3)
        let data = await state.contract.tx.addPrivilege(AccountId, {value, gasLimit},name).signAndSend(AccountId, { signer: injector.signer }, (result) => {
            console.error(result)
            if (result.status.isInBlock ||result.status.isFinalized) {
                return true
            }
        });
        data = formatResult(data);
        return data
    },
    async addRole({rootState}, name){
        const injector = await Accounts.accountInjector();
        await judgeContract(rootState.app.web3)
        const accountlist = await Accounts.accountlist();
        let AccountId = accountlist.allAccounts[0].address
        console.log(AccountId,injector)
        let data = await state.contract.tx.addRole(AccountId, {value, gasLimit},name).signAndSend(AccountId, { signer: injector.signer }, (result) => {
            console.error(result)
            if (result.status.isInBlock ||result.status.isFinalized) {
                return true
            }
        });
        data = formatResult(data);
        return data
    },
    async addRoute({rootState}, {name,value}){
        const injector = await Accounts.accountInjector();
        await judgeContract(rootState.app.web3)
        let data = await state.contract.tx.addRoute(AccountId, {value, gasLimit},name,value).signAndSend(AccountId, { signer: injector.signer }, (result) => {
            console.error(result)
            if (result.status.isInBlock ||result.status.isFinalized) {
                return true
            }
        });
        data = formatResult(data);
        return data
    },
    async changeRoute({rootState}, {name,value}){
        const injector = await Accounts.accountInjector();
        await judgeContract(rootState.app.web3)
        let data = await state.contract.tx.changeRoute(AccountId, {value, gasLimit},name,value).signAndSend(AccountId, { signer: injector.signer }, (result) => {
            console.error(result)
            if (result.status.isInBlock ||result.status.isFinalized) {
                return true
            }
        });
        data = formatResult(data);
        return data
    },
    async getAuthAddr({rootState},addr){
        const accountlist = await Accounts.accountlist();
        let AccountId = accountlist.allAccounts[0].address
        await judgeContract(rootState.app.web3)
        let data = await state.contract.query.getAuthAddr(AccountId, {value, gasLimit})
        data = formatResult(data);
        return data
    },
    async getRoleAddr({rootState},addr){
        await judgeContract(rootState.app.web3)
        const accountlist = await Accounts.accountlist();
        let AccountId = accountlist.allAccounts[0].address
        let data = await state.contract.query.getRoleAddr(AccountId, {value, gasLimit},addr)
        data = formatResult(data);
        return data
    },
    async getRouteAddr({rootState}){
        await judgeContract(rootState.app.web3)
        let data = await state.contract.query.getRouteAddr(AccountId, {value, gasLimit})
        data = formatResult(data);
        return data
    },
    async getManageList({rootState}){
        await judgeContract(rootState.app.web3)
        let data = await state.contract.query.get_manage_list(AccountId, {value, gasLimit})
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
