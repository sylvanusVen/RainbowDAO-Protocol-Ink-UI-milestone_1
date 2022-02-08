import connectContract from "../../api/connectContract"
import {dealResult, formatResult} from "../../utils/formatUtils"
import Accounts from "../../api/Account.js";
import contractHash from "../../utils/contractHash.json"
import {eventBus} from "../../utils/eventBus";
const state = {
    web3:{},
    contract:null
}
const value = 0;
const gasLimit = -1;
async function  judgeContract(web3){
    if(!state.contract){
        state.contract = await connectContract(web3, "daoFactory")
    }
}
const mutations = {
    SET_WEB3(state,web3){
        state.web3 = web3
    }
}
const actions = {
    async joinedDao({rootState}) {
        const AccountId = await Accounts.accountAddress();
        await judgeContract(rootState.app.web3)
        let data = await state.contract.query.joinedDao(AccountId, {value, gasLimit})
        data = formatResult(data);
        return data
    },

    async getDaoByIndex({rootState},index) {
        const AccountId = await Accounts.accountAddress();
        await judgeContract(rootState.app.web3)
        let data = await state.contract.query.getDaoByIndex(AccountId, {value, gasLimit},index)
        data = formatResult(data);
        return data
    },
    async getDaosByOwner({rootState}) {
        const AccountId = await Accounts.accountAddress();
        await judgeContract(rootState.app.web3)
        let data = await state.contract.query.getDaosByOwner(AccountId, {value, gasLimit})
        data = formatResult(data);
        return data
    },
    async initDaoByTemplate({rootState}, {category}){
        const injector = await Accounts.accountInjector();
        const AccountId = await Accounts.accountAddress();

        let dao_manager_code_hash= contractHash["dao_hash"]
        let controller = AccountId
        let controller_type = 1
        category?'':category = "mother"
        await judgeContract(rootState.app.web3)
        if (rootState.app.balance < 1.01) {
            eventBus.$emit('message', {
                type: "error",
                message: "Not enough gas"
            })
            return
        }
        console.log("initDAO")
        console.log(state.contract.tx.initDaoByTemplate)
        // Invalid params: unknown field `storageDepositLimit`, expected one of `origin`, `dest`, `value`, `gasLimit`, `inputData`.
        let data = await state.contract.tx.initDaoByTemplate({value, gasLimit},dao_manager_code_hash,controller,controller_type,category,).signAndSend(AccountId, { signer: injector.signer }, (result) => {
            console.error(result)
            dealResult(result,"Init DAO")
        });
        data = formatResult(data);
        return data
    },
    async getContractAddr({rootState},name){
        const AccountId = await Accounts.accountAddress();
        await judgeContract(rootState.app.web3)
        if(rootState.app.balance < 1.01){
            eventBus.$emit('message', {
                type:"error",
                message:"Not enough gas"
            })
            return
        }
        let data = await state.contract.query.getContractAddr(AccountId, {value, gasLimit},name)
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
