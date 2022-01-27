import connectContract from "../../api/connectContract"
import {dealResult, formatResult} from "../../utils/formatUtils"
import Accounts from "../../api/Account.js";
import {eventBus} from "../../utils/eventBus"
import contractHash from "../../utils/contractHash.json"

const state = {
    web3: {},
    contract: null
}
const value = 0;
const gasLimit = -1;

async function judgeContract(web3, address) {
    state.contract = await connectContract(web3, "daoUser", address)
}

const mutations = {
    SET_WEB3(state, web3) {
        state.web3 = web3
    }
}
const actions = {
    async listUser({rootState}, daoUserAddress) {
        const AccountId = await Accounts.accountAddress();
        await judgeContract(rootState.app.web3, daoUserAddress)
        let data = await state.contract.query.listUser(AccountId, {value, gasLimit})
        data = formatResult(data);
        return data
    },
    async listGroup({rootState}, daoUserAddress) {
        const AccountId = await Accounts.accountAddress();
        await judgeContract(rootState.app.web3, daoUserAddress)
        let data = await state.contract.query.listGroup(AccountId, {value, gasLimit})
        data = formatResult(data);
        return data
    },
    async addGroup({rootState}, {daoUserAddress,department}) {
        const injector = await Accounts.accountInjector();
        const AccountId = await Accounts.accountAddress();

        await judgeContract(rootState.app.web3, daoUserAddress)
        if (rootState.app.balance < 1.01) {
            eventBus.$emit('message', {
                type: "error",
                message: "Not enough gas"
            })
            return
        }
        let obj = {}
        obj[department.manager] = true
        department.users= obj
        console.log(department)
        let data = await state.contract.tx.addGroup({
            value,
            gasLimit
        },department).signAndSend(AccountId, {signer: injector.signer}, (result) => {
            console.error(result)
            dealResult(result, "Join DAO")
        });
        data = formatResult(data);
        return data
    },
    async join({rootState, dispatch}, address) {
        const injector = await Accounts.accountInjector();
        const AccountId = await Accounts.accountAddress();

        await judgeContract(rootState.app.web3, address)
        if (rootState.app.balance < 1.01) {
            eventBus.$emit('message', {
                type: "error",
                message: "Not enough gas"
            })
            return
        }

        let data = await state.contract.tx.join({
            value,
            gasLimit
        }).signAndSend(AccountId, {signer: injector.signer}, (result) => {
            console.error(result)
            dealResult(result, "Join DAO")
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
