import connectContract from "../../api/connectContract"
import {dealResult, formatResult} from "../../utils/formatUtils"
import Accounts from "../../api/Account.js";
import {eventBus} from "../../utils/eventBus"
import contractHash from "../../utils/contractHash.json"

const state = {
    curdao: {},
    memberLength: 0,
    curDaoControlAddress: {},
    curDaoAddress: "",
    childDaoList:[]
}
const value = 0;
const gasLimit = -1;

async function judgeContract(web3, address) {
    state.contract = await connectContract(web3, "daoManage", address)
}

const mutations = {
    SET_CURDAO(state, curdao) {
        state.curdao = curdao
    },
    SET_CURDAOMEMBERS(state, memberLength) {
        state.memberLength = memberLength
    },
    SET_curDaoControlAddress(state, curDaoControlAddress) {
        state.curDaoControlAddress = curDaoControlAddress
    },
    SET_CURDAOADDR(state, curDaoAddress) {
        state.curDaoAddress = curDaoAddress
    },
    SET_CHILDDAOLIST(state, childDaoList) {
        state.childDaoList = childDaoList
    },
}
const actions = {
    async getChildsDaos({rootState}, daoManagerAddr) {
        const AccountId = await Accounts.accountAddress();

        await judgeContract(rootState.app.web3, daoManagerAddr)

        let data = await state.contract.query.getChildsDaos(AccountId, {value, gasLimit})
        data = formatResult(data);
        return data
    },
    async getDaoCategory({rootState}, daoManagerAddr) {
        const AccountId = await Accounts.accountAddress();
        await judgeContract(rootState.app.web3, daoManagerAddr)
        let data = await state.contract.query.getDaoCategory(AccountId, {value, gasLimit})
        data = formatResult(data);
        return data
    },
    async getComponentAddress({rootState}, daoManagerAddr) {
        const AccountId = await Accounts.accountAddress();
        await judgeContract(rootState.app.web3, daoManagerAddr)
        let data = await state.contract.query.getComponentAddrs(AccountId, {value, gasLimit})
        data = formatResult(data);
        return data
    },

    async initByParams({rootState, dispatch}, {address, params}) {

        const injector = await Accounts.accountInjector();
        const AccountId = await Accounts.accountAddress();
        let version = new Date().getTime()
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
        let data = await state.contract.tx.initByParams({
            value,
            gasLimit
        }, params.base.logo, params.base.name, params.base.desc, params.erc20.totalSupply, params.erc20.tokenName, params.erc20.symbol, params.erc20.decimals, params.erc20.owner, parseInt(2), contractHash.dao_base, contractHash.erc20_code_hash, contractHash.dao_user, contractHash.dao_setting, contractHash.dao_vault, contractHash.dao_proposal).signAndSend(AccountId, {signer: injector.signer}, (result) => {
            dealResult(result, "Init DAO Info")
        });
        data = formatResult(data);
        return data
    },
    async baseAddr({rootState}, daoManagerAddr) {
        const AccountId = await Accounts.accountAddress();
        console.log(AccountId)

        await judgeContract(rootState.app.web3, daoManagerAddr)
        let data = await state.contract.query.baseAddr(AccountId, {value, gasLimit})
        data = formatResult(data);
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
        const AccountId = await Accounts.accountAddress();
        await judgeContract(rootState.app.web3, address)
        let data = await state.contract.query.getManageList(AccountId, {value, gasLimit})
        data = formatResult(data);
        return data
    },

    async createChildDao({rootState}, {childAddr, address}) {
        const injector = await Accounts.accountInjector();
        const AccountId = await Accounts.accountAddress();
        await judgeContract(rootState.app.web3, address)

        let data = await state.contract.tx.createChildDao({
            value,
            gasLimit
        }, address, childAddr).signAndSend(AccountId, {signer: injector.signer}, (result) => {
            dealResult(result,"childDao has init")
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
