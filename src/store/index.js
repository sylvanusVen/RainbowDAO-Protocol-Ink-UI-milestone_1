import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from "./modules/app";
import erc20 from "./modules/erc20";
import routerMap from "./modules/routerMap"
import factory from "./modules/factory"
import multisign from "./modules/multisign";
import core from "./modules/core"
import roleManage from "./modules/roleManage";
Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    app,
    erc20,
    factory,
    routerMap,
    multisign,
    core,
    roleManage
  }
})