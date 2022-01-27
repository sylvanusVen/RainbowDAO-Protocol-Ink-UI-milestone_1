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
    state.contract = await connectContract(web3, "daoManage", address)
}

const mutations = {
    SET_WEB3(state, web3) {
        state.web3 = web3
    }
}
const actions = {
    async getComponentAddress({rootState}, daoManagerAddr) {
        const AccountId = await Accounts.accountAddress();
        await judgeContract(rootState.app.web3, daoManagerAddr)
        let data = await state.contract.query.getComponentAddrs(AccountId, {value, gasLimit})
        data = formatResult(data);
        return data
    },
    async initByParams({rootState, dispatch}, {address, params}) {
        address="5GVnknx2t3iJaXV2ee7qbEoasJvruAfBtV6fKF7DgwBWpSCv"
        const injector = await Accounts.accountInjector();
        const AccountId = await Accounts.accountAddress();
        let version = "1"
        dispatch("app/getBalance",address,{root:true}).then(res=>{
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

        console.log(params, version, contractHash.dao_base, contractHash.erc20_code_hash, contractHash.dao_user, contractHash.dao_setting, contractHash.dao_vault, contractHash.dao_proposal)
        let data = await state.contract.tx.initByParams({
            value,
            gasLimit
        }, params, version, contractHash.dao_base, contractHash.erc20_code_hash, contractHash.dao_user, contractHash.dao_setting, contractHash.dao_vault, contractHash.dao_proposal).signAndSend(AccountId, {signer: injector.signer}, (result) => {
            console.error(result)
            dealResult(result, "Init DAO Info")
        });
        data = formatResult(data);
        return data
    },
    async baseAddr({rootState}, daoManagerAddr) {
        const AccountId = await Accounts.accountAddress();
        await judgeContract(rootState.app.web3, daoManagerAddr)
        let data = await state.contract.query.baseAddr(AccountId, {value, gasLimit})
        data = formatResult(data);
        console.log(data)
        return data
    },
    async creatTransfer({rootState}, {to, amount, address}) {
        const injector = await Accounts.accountInjector();
        const AccountId = await Accounts.accountAddress();
        await judgeContract(rootState.app.web3, address)
        let data = await state.contract.tx.creatTransfer({
            value,
            gasLimit
        }, to, amount).signAndSend(AccountId, {signer: injector.signer}, (result) => {
            dealResult(result)
        });
        data = formatResult(data);
        return data
    },
    async signTransaction({rootState}, {transaction_id, address}) {
        const injector = await Accounts.accountInjector();
        const AccountId = await Accounts.accountAddress();
        await judgeContract(rootState.app.web3, address)
        let data = await state.contract.tx.signTransaction({
            value,
            gasLimit
        }, transaction_id).signAndSend(AccountId, {signer: injector.signer}, (result) => {
            console.error(result)
            dealResult(result)
        });
        data = formatResult(data);
        return data
    },
    async getTransaction({rootState}, trans_id) {
        const AccountId = await Accounts.accountAddress();
        await judgeContract(rootState.app.web3)
        let data = await state.contract.query.getTransaction(AccountId, {value, gasLimit}, trans_id)
        data = formatResult(data);
        return data
    },
    async addManage({rootState}, {addr, address}) {
        console.log(addr, address)
        const injector = await Accounts.accountInjector();
        const AccountId = await Accounts.accountAddress();
        await judgeContract(rootState.app.web3, address)
        let data = await state.contract.tx.addManage({
            value,
            gasLimit
        }, addr).signAndSend(AccountId, {signer: injector.signer}, (result) => {
            dealResult(result)
        });
        data = formatResult(data);
        return data
    },
    async removeManage({rootState}, {addr, address}) {
        const injector = await Accounts.accountInjector();
        const AccountId = await Accounts.accountAddress();
        await judgeContract(rootState.app.web3, address)

        let data = await state.contract.tx.removeManage({
            value,
            gasLimit
        }, addr).signAndSend(AccountId, {signer: injector.signer}, (result) => {
            console.error(result)
            dealResult(result)
        });
        data = formatResult(data);
        return data
    },
    async getSignList({rootState}, address) {
        const AccountId = await Accounts.accountAddress();
        await judgeContract(rootState.app.web3, address)
        let data = await state.contract.query.getSignList(AccountId, {value, gasLimit})
        data = formatResult(data);
        return data
    },
    async getManageList({rootState}, address) {
        console.log(address)
        const AccountId = await Accounts.accountAddress();
        await judgeContract(rootState.app.web3, address)
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
