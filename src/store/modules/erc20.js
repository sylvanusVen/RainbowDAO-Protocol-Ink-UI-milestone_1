import connectContract from "../../api/connectContract"
import {formatResult} from "../../utils/formatUtils"
import Accounts from "../../api/Account.js";
import {eventBus} from "../../utils/eventBus"
const state = {
    web3:{},
    contract:null
}
const value = 0;
const gasLimit = -1;
async function  judgeContract(web3,coinAddress){
    if(!state.contract){
        state.contract = await connectContract(web3, "erc20",coinAddress)
    }
}
const mutations = {
    SET_WEB3(state,web3){
        state.web3 = web3
    }
}
const actions = {
    async getPriorVotes({rootState}, {blockNumber,coinAddress}) {
        await judgeContract(rootState.app.web3,coinAddress)
        const AccountId = await Accounts.accountAddress();
        let data = await state.contract.query.getPriorVotes(AccountId, {value, gasLimit}, AccountId,blockNumber)
        data = formatResult(data);
        return data
    },
    async getCurrentVotes({rootState},coinAddress) {
        if(rootState.app.balance < 1.01){
            eventBus.$emit('message', {
                type:"error",
                message:"Not enough gas"
            })
            return
        }
        await judgeContract(rootState.app.web3,coinAddress)
        const AccountId = await Accounts.accountAddress();
        let data = await state.contract.query.getCurrentVotes(AccountId, {value, gasLimit}, AccountId)
        data = formatResult(data);
        return data
    },
    async delegate({rootState},{address,coinAddress}){
        console.log(address,coinAddress)
        const injector = await Accounts.accountInjector();
        const AccountId = await Accounts.accountAddress();
        await judgeContract(rootState.app.web3,coinAddress)
        let isSend = false
        let data = await state.contract.tx.delegate( {value, gasLimit},address).signAndSend(AccountId, { signer: injector.signer }, (result) => {
            console.error(result)
            if (result.status.isInBlock ||result.status.isFinalized) {
                if(!isSend){
                    isSend = true
                    eventBus.$emit('message', {
                        type:"success",
                        message:"delegate success"
                    })
                }

                return true
            }
        });
        console.log(data)
        data = formatResult(data);
        return data
    },
    async getBalance({rootState},address){
        await judgeContract(rootState.app.web3, address)
        const accountList = await Accounts.accountList();
        let AccountId = accountList.allAccounts[0].address
        console.log("AccountId++++++++++++++++++++++++++++++",AccountId)
        let data = await state.contract.query.balanceOf(AccountId, {value, gasLimit}, AccountId)
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
