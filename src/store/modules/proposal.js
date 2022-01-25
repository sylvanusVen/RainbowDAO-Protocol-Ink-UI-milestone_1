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

async function judgeContract(web3) {
    if (!state.contract) {
        state.contract = await connectContract(web3, "proposal")
    }
}

const mutations = {
    SET_WEB3(state, web3) {
        state.web3 = web3
    }
}
const actions = {
    async listProposals({rootState}) {
         await judgeContract(rootState.app.web3)

        const AccountId = await Accounts.accountAddress();
        let data = await state.contract.query.listProposals(AccountId, {value, gasLimit})
        console.log(data)
        data = formatResult(data);
        return data
    },
    async propose({rootState}, {title,desc,transaction }) {
        const injector = await Accounts.accountInjector();
         await judgeContract(rootState.app.web3)
        if(rootState.app.balance < 1.01){
            eventBus.$emit('message', {
                type:"error",
                message:"Not enough gas"
            })
            return
        }
        const AccountId = await Accounts.accountAddress();

        let data = await state.contract.tx.propose({value, gasLimit},title,desc,transaction ).signAndSend(AccountId, { signer: injector.signer }, (result) => {
            dealResult(result)
        });
        data = formatResult(data);
        return data
    },
    async ProposalCreated({rootState},{proposal_id,creator}) {
        const injector = await Accounts.accountInjector();
         await judgeContract(rootState.app.web3)
        if(rootState.app.balance < 1.01){
            eventBus.$emit('message', {
                type:"error",
                message:"Not enough gas"
            })
            return
        }
        const AccountId = await Accounts.accountAddress();

        let data = await state.contract.tx.ProposalCreated({value, gasLimit},proposal_id,creator).signAndSend(AccountId, { signer: injector.signer }, (result) => {
            console.error(result)
            dealResult(result)
        });
        data = formatResult(data);
        return data
    },

    async castVote({rootState},{proposal_id,support}) {
        const injector = await Accounts.accountInjector();
         await judgeContract(rootState.app.web3)
        if(rootState.app.balance < 1.01){
            eventBus.$emit('message', {
                type:"error",
                message:"Not enough gas"
            })
            return
        }
        const AccountId = await Accounts.accountAddress();

        let data = await state.contract.tx.castVote({value, gasLimit},proposal_id,support).signAndSend(AccountId, { signer: injector.signer }, (result) => {
            dealResult(result)
        });
        data = formatResult(data);
        return data
    },
    async cancel({rootState},proposal_id) {
        const injector = await Accounts.accountInjector();
         await judgeContract(rootState.app.web3)
        if(rootState.app.balance < 1.01){
            eventBus.$emit('message', {
                type:"error",
                message:"Not enough gas"
            })
            return
        }
        const AccountId = await Accounts.accountAddress();

        let data = await state.contract.tx.cancel({value, gasLimit},proposal_id).signAndSend(AccountId, { signer: injector.signer }, (result) => {
            console.error(result)
            dealResult(result)
        });
        data = formatResult(data);
        return data
    },
    async state({rootState},proposal_id) {
        await judgeContract(rootState.app.web3)
        const AccountId = await Accounts.accountAddress();
        let data = await state.contract.query.state(AccountId, {value, gasLimit}, proposal_id)
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
