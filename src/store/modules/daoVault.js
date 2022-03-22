import connectContract from "../../api/connectContract"
import {dealResult, formatResult} from "../../utils/formatUtils"
import Accounts from "../../api/Account.js";
import {eventBus} from "../../utils/eventBus"
import contractHash from "../../utils/contractHash.json"

const state = {
    curdao:{},
    memberLength:0,
    transferList:[],
    vaultBalance:0
}
const value = 0;
const gasLimit = -1;

async function judgeContract(web3, address) {
    state.contract = await connectContract(web3, "daoVault", address)
}

const mutations = {
    SET_CURDAO(state,curdao){
        state.curdao = curdao
    },
    SET_CURDAOMEMBERS(state,memberLength){
        state.memberLength = memberLength
    },
    SET_TRANSFERLIST(state,list){
        state.transferList = list
    },
    SET_VAULTBALANCE(state,vaultBalance){
        state.vaultBalance = vaultBalance
    },
}
const actions = {
    async getTransferHistory({rootState},daoVaultAddr) {
        const AccountId = await Accounts.accountAddress();
        await judgeContract(rootState.app.web3, daoVaultAddr)
        console.log(state.contract)
        let data = await state.contract.query.getTransferHistory(AccountId, {value, gasLimit})
        data = formatResult(data);
        return data
    },
    async getBalance({rootState}, {daoVaultAddr,address}){
        const AccountId = await Accounts.accountAddress();
        await judgeContract(rootState.app.web3, daoVaultAddr)
        console.log(state.contract)
        let data = await state.contract.query.getBalanceOf(AccountId, {value, gasLimit},address)
        data = formatResult(data);
        return data
    },
    async deposit({rootState, dispatch}, {address, erc20Addr,amount}) {
        const injector = await Accounts.accountInjector();
        const AccountId = await Accounts.accountAddress();
        dispatch("app/getBalance", address, {root: true}).then(res => {
            console.log(res)
        })
        await judgeContract(rootState.app.web3, address)
        if (rootState.app.balance < 1.01) {
            eventBus.$emit('message', {
                type: "error",
                message: "Not enough gas"
            })
            return
        }

        let data = await state.contract.tx.deposit({
            value,
            gasLimit
        }, erc20Addr,AccountId,amount).signAndSend(AccountId, {signer: injector.signer}, (result) => {
            dealResult(result, "Deposit")
        });
        data = formatResult(data);
        return data
    },
    async withdraw({rootState, dispatch}, {address, erc20Addr,amount}) {
        const injector = await Accounts.accountInjector();
        const AccountId = await Accounts.accountAddress();
        dispatch("app/getBalance", address, {root: true}).then(res => {
            console.log(res)
        })
        await judgeContract(rootState.app.web3, address)
        if (rootState.app.balance < 1.01) {
            eventBus.$emit('message', {
                type: "error",
                message: "Not enough gas"
            })
            return
        }

        let data = await state.contract.tx.withdraw({
            value,
            gasLimit
        }, erc20Addr,AccountId,amount).signAndSend(AccountId, {signer: injector.signer}, (result) => {
            dealResult(result, "Withdraw")
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
