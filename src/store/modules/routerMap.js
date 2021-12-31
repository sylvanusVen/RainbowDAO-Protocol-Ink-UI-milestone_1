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

async function judgeContract(web3,address) {
    if (!state.contract) {
        state.contract = await connectContract(web3, "routerManage",address)
    }
}

const mutations = {
    SET_WEB3(state, web3) {
        state.web3 = web3
    }
}
const actions = {
    async listRoute({rootState},routerAddress) {
        await judgeContract(rootState.app.web3,routerAddress)
        const AccountId = await Accounts.accountAddress();
        let data = await state.contract.query.listRoute(AccountId, {value, gasLimit})
        data = formatResult(data);
        return data
    },
    async addRoute({rootState}, {name, address}) {
        const injector = await Accounts.accountInjector();
        const AccountId = await Accounts.accountAddress();
        await judgeContract(rootState.app.web3)
        let isSend = false
        let data = await state.contract.tx.addRoute({
            value,
            gasLimit
        }, name, address).signAndSend(AccountId, {signer: injector.signer}, (result) => {
            console.error(result)
            if (result.status.isInBlock || result.status.isFinalized) {
                if (!isSend) {
                    isSend = true
                    eventBus.$emit('message', {
                        type: "success",
                        message: "addRoute success"
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
