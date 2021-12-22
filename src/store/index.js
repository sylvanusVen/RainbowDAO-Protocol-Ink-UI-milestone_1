import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from "./modules/app";
import erc20 from "./modules/erc20";
import routerMap from "./modules/routerMap"
import tokenFactory from "./modules/tokenFactory"
import multisign from "./modules/multisign";
import core from "./modules/core"
import roleManage from "./modules/roleManage";
import proposal from "./modules/proposal"
import userManage from "./modules/userManage";
import incomeManage from "./modules/incomeManage";
Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    app,
    erc20,
    tokenFactory,
    routerMap,
    multisign,
    core,
    roleManage,
    userManage,
    proposal,
    incomeManage
  }
})
