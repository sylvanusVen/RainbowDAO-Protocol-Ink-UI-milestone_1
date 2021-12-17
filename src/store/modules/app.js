import {ApiPromise,WsProvider} from "@polkadot/api";
import Accounts from "../../api/Account"
const state = {
    web3:{}
}
const mutations = {
    SET_WEB3(state,web3){
        state.web3 = web3
    }
}
const actions = {
    async getWeb3({commit}){
        const wsProvider = new WsProvider('ws://192.168.101.28:9901');
        const api = await ApiPromise.create({provider: wsProvider});
        const [chain, nodeName, nodeVersion] = await Promise.all([
            api.rpc.system.chain(),
            api.rpc.system.name(),
            api.rpc.system.version()
        ]);
        const accoutlist = await Accounts.accountlist();
        console.log(api,chain, nodeName, nodeVersion)
        commit("SET_WEB3", api)
    },

}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
