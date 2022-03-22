import connectContract from "../../api/connectContract"
import {dealResult, formatResult} from "../../utils/formatUtils"
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
        if(rootState.app.balance < 1.01){
            eventBus.$emit('message', {
                type:"error",
                message:"Not enough gas"
            })
            return
        }

        let data = await state.contract.tx.addRoute({
            value,
            gasLimit
        }, name, address).signAndSend(AccountId, {signer: injector.signer}, (result) => {
            dealResult(result)
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
