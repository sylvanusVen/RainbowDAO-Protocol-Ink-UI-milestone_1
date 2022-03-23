import connectContract from "../../api/connectContract"
import {dealResult, formatResult} from "../../utils/formatUtils"
import Accounts from "../../api/Account.js";
import {eventBus} from "../../utils/eventBus"

const state = {
    web3: {},
    contract: null
}
const value = 0;
const gasLimit = -1;

async function judgeContract(web3, address) {
    state.contract = await connectContract(web3, "daoProposal", address)
}

const mutations = {
    SET_WEB3(state, web3) {
        state.web3 = web3
    }
}
const actions = {
    async listUser({rootState}, daoUserAddress) {
        const AccountId = sessionStorage.getItem('currentAccount')
        await judgeContract(rootState.app.web3, daoUserAddress)
        let data = await state.contract.query.listUser(AccountId, {value, gasLimit})
        data = formatResult(data);
        return data
    },
    async propose({rootState, dispatch}, {address,title,desc,category,transaction,publicityDelay}) {
        const injector = await Accounts.accountInjector();
        const AccountId = sessionStorage.getItem('currentAccount')
        await judgeContract(rootState.app.web3, address)
        if (rootState.app.balance < 1.01) {
            eventBus.$emit('message', {
                type: "error",
                message: "Not enough gas"
            })
            return
        }
        let startBlock = 0

        const lastHeader = await rootState.app.web3.rpc.chain.getHeader();
        startBlock = lastHeader.number
        startBlock= parseInt(startBlock) + 10
        const endBlock = parseInt(startBlock) + 10000

        let data = await state.contract.tx.propose({
            value,
            gasLimit
        },title,desc,category,startBlock,endBlock,transaction,publicityDelay).signAndSend(AccountId, {signer: injector.signer}, (result) => {
            dealResult(result, "Create Proposal")
        });
        data = formatResult(data);
        return data
    },
    async listProposals({rootState},address) {
        await judgeContract(rootState.app.web3,address)
        const AccountId = sessionStorage.getItem('currentAccount')
        let data = await state.contract.query.listProposals(AccountId, {value, gasLimit})
        data = formatResult(data);
        return data
    },
    async state({rootState},{proposalId,address}) {
        await judgeContract(rootState.app.web3,address)
        const AccountId = sessionStorage.getItem('currentAccount')
        let data = await state.contract.query.state(AccountId, {value, gasLimit}, proposalId)
        data = formatResult(data);
        return data
    },
    async castVote({rootState},{proposal_id,support,proposalAddress}) {
        console.log(proposal_id,support,proposalAddress)
        const injector = await Accounts.accountInjector();
        await judgeContract(rootState.app.web3,proposalAddress)
        if(rootState.app.balance < 1.01){
            eventBus.$emit('message', {
                type:"error",
                message:"Not enough gas"
            })
            return
        }
        const AccountId = sessionStorage.getItem('currentAccount')

        let data = await state.contract.tx.castVote({value, gasLimit},proposal_id,true).signAndSend(AccountId, { signer: injector.signer }, (result) => {
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
