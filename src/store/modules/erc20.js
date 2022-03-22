import connectContract from "../../api/connectContract"
import {dealResult, formatResult} from "../../utils/formatUtils"
import Accounts from "../../api/Account.js";
import {eventBus} from "../../utils/eventBus"
const state = {
    coinInfo: {}
}
const value = 0;
const gasLimit = -1;
async function  judgeContract(web3,coinAddress){
    if(!coinAddress){
        throw new Error("No Addr")
    }
    if(!state.contract){
        state.contract = await connectContract(web3, "erc20",coinAddress)
    }
}
const mutations = {
    SET_COIN(state,coin){
        state.coinInfo = coin
    }
}
const actions = {
    async transfer({rootState}, {fromAddr,toAddr,amount}){
        const injector = await Accounts.accountInjector();
        const txHash = await rootState.app.web3.tx.balances
            .transfer(toAddr, amount)
            .signAndSend(fromAddr, { signer: injector.signer });
    },
    async queryInfo({rootState}, coinAddress) {
        await judgeContract(rootState.app.web3,coinAddress)
        const AccountId = await Accounts.accountAddress();
        let data = await state.contract.query.queryInfo(AccountId, {value, gasLimit})
        data = formatResult(data);

        return data
    },
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
    async approve({rootState},{address,coinAddress}){
        const injector = await Accounts.accountInjector();
        const AccountId = await Accounts.accountAddress();
        await judgeContract(rootState.app.web3,coinAddress)

        let data = await state.contract.tx.approve( {value, gasLimit},address,"100000000000000000000000000000000").signAndSend(AccountId, { signer: injector.signer }, (result) => {
            dealResult(result,"Approve")
        });

        data = formatResult(data);
        return data
    },
    async delegate({rootState},{address,coinAddress}){

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

        data = formatResult(data);
        return data
    },

    async getBalance({rootState},address){
        await judgeContract(rootState.app.web3, address)
        const accountList = await Accounts.accountList();
        const AccountId = sessionStorage.getItem('currentAccount')
        let data = await state.contract.query.balanceOf(AccountId, {value, gasLimit}, AccountId)
        data = formatResult(data);
        return data
    },
    async getBalanceOf({rootState}, {address,toAddr}){
        await judgeContract(rootState.app.web3, address)
        const accountList = await Accounts.accountList();
        const AccountId = sessionStorage.getItem('currentAccount')
        let data = await state.contract.query.balanceOf(AccountId, {value, gasLimit}, toAddr)
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
