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
async function  judgeContract(web3,address){
    state.contract = await connectContract(web3, "multisign",address)
}
const mutations = {
    SET_WEB3(state,web3){
        state.web3 = web3
    }
}
const actions = {

    async minSignCount({rootState},owners){
        const AccountId = await Accounts.accountAddress();
        await judgeContract(rootState.app.web3)
        let data = await state.contract.query.minSignCount(AccountId, {value, gasLimit},to , owners)
        data = formatResult(data);
        return data
    },
    async creatTransfer({rootState},{to, amount,address}){
        const injector = await Accounts.accountInjector();
        const AccountId = await Accounts.accountAddress();
        await judgeContract(rootState.app.web3,address)
        let isSend= false
        let data = await state.contract.tx.creatTransfer( {value, gasLimit},to , amount).signAndSend(AccountId, { signer: injector.signer }, (result) => {

            if (result.status.isInBlock ||result.status.isFinalized) {
                if(!isSend){
                    isSend=true
                    eventBus.$emit('message', {
                        type:"success",
                        message:"creatTransfer success"
                    })
                }

                return true
            }
        });
        data = formatResult(data);
        return data
    },
    async signTransaction({rootState},{transaction_id,address}){
        const injector = await Accounts.accountInjector();
        const AccountId = await Accounts.accountAddress();
        await judgeContract(rootState.app.web3,address)
        let isSend= false
        let data = await state.contract.tx.signTransaction({value, gasLimit},transaction_id).signAndSend(AccountId, { signer: injector.signer }, (result) => {
            console.error(result)
            if (result.status.isInBlock ||result.status.isFinalized) {
                if(!isSend){
                    isSend=true
                    eventBus.$emit('message', {
                        type:"success",
                        message:"signTransaction success"
                    })
                }

                return true
            }
        });
        data = formatResult(data);
        return data
    },
    async getTransaction({rootState},trans_id){
        const AccountId = await Accounts.accountAddress();
        await judgeContract(rootState.app.web3)
        let data = await state.contract.query.getTransaction(AccountId, {value, gasLimit},trans_id)
        data = formatResult(data);
        return data
    },
    async addManage({rootState}, {addr,address}){
        console.log(addr,address)
        const injector = await Accounts.accountInjector();
        const AccountId = await Accounts.accountAddress();
        await judgeContract(rootState.app.web3,address)
        let isSend= false
        let data = await state.contract.tx.addManage( {value, gasLimit},addr).signAndSend(AccountId, { signer: injector.signer }, (result) => {
            if (result.status.isInBlock ||result.status.isFinalized) {
                if(!isSend){
                    isSend=true
                    eventBus.$emit('message', {
                        type:"success",
                        message:"addManage success"
                    })
                }

                return true
            }
        });
        data = formatResult(data);
        return data
    },
    async removeManage({rootState}, {addr,address}){
        const injector = await Accounts.accountInjector();
        const AccountId = await Accounts.accountAddress();
        await judgeContract(rootState.app.web3, address)
        let isSend = false
        let data = await state.contract.tx.removeManage({value, gasLimit},addr).signAndSend(AccountId, { signer: injector.signer }, (result) => {
            console.error(result)
            if (result.status.isInBlock ||result.status.isFinalized) {
                if(!isSend){
                    isSend = true
                    eventBus.$emit('message', {
                        type:"success",
                        message:"removeManage success"
                    })
                }

                return true
            }
        });
        data = formatResult(data);
        return data
    },
    async getSignList({rootState},address){
        const AccountId = await Accounts.accountAddress();
        await judgeContract(rootState.app.web3,address)
        let data = await state.contract.query.getSignList(AccountId, {value, gasLimit})
        data = formatResult(data);
        return data
    },
    async getManageList({rootState},address){
        console.log(address)
        const AccountId = await Accounts.accountAddress();
        await judgeContract(rootState.app.web3,address)
        let data = await state.contract.query.getManageList(AccountId, {value, gasLimit})
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
