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
        state.contract = await connectContract(web3, "roleManage")
    }
}

const mutations = {
    SET_WEB3(state, web3) {
        state.web3 = web3
    }
}
const actions = {
    async listPrivileges({}) {
        const AccountId = await Accounts.accountAddress();
        let data = await state.contract.query.listPrivileges(AccountId, {value, gasLimit})
        data = formatResult(data);
        return data
    },
    async queryPrivilegeByIndex({}) {
        const AccountId = await Accounts.accountAddress();
        let data = await state.contract.query.queryPrivilegeByIndex(AccountId, {value, gasLimit}, AccountId)
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
