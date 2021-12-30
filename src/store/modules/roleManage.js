import connectContract from "../../api/connectContract"
import {formatResult} from "../../utils/formatUtils"
import Accounts from "../../api/Account.js";

const state = {
    web3: {},
    contract: null
}
const value = 0;
const gasLimit = -1;

async function judgeContract(web3,roleAddress) {
    if (!state.contract) {
        state.contract = await connectContract(web3, "roleManage",roleAddress)
    }
}

const mutations = {
    SET_WEB3(state, web3) {
        state.web3 = web3
    }
}
const actions = {
    async listRolePrivileges({rootState},{name,address}) {
        await judgeContract(rootState.app.web3,address)
        const AccountId = await Accounts.accountAddress();
        let data = await state.contract.query.listRolePrivileges(AccountId, {value, gasLimit},name)
        data = formatResult(data);
        return data
    },
    async listRoles({rootState},address) {
        await judgeContract(rootState.app.web3,address)
        const AccountId = await Accounts.accountAddress();
        let data = await state.contract.query.listRoles(AccountId, {value, gasLimit})
        data = formatResult(data);
        return data
    },

    async getUserPrivilege({rootState},roleAddress) {
        await judgeContract(rootState.app.web3,roleAddress)
        const AccountId = await Accounts.accountAddress();
        let data = await state.contract.query.getUserPrivilege(AccountId, {value, gasLimit}, AccountId)
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
