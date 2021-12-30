import Vue from 'vue'
import App from './App.vue'
import "./style/index.scss"
import router from "./router";
import store from "./store"
import Vuex from 'vuex'
import "animate.css"
import {eventBus} from "./utils/eventBus"
import rainbowNav from "@/components/rainbowNav";
import rainbowNavNew from "@/components/rainbowNavNew";
import multiSignNav from "@/components/multiSignNav";
import pageFooter from "./components/pageFooter";

Vue.prototype.$eventBus = eventBus
Vue.config.debug = false
Vue.config.devtools = false;
Vue.config.productionTip = false;
Vue.config.silent = true

Vue.use(Vuex)
Vue.config.productionTip = false
Vue.component('rainbow-nav', rainbowNav)
Vue.component('rainbow-nav-new', rainbowNavNew)
Vue.component('multi-sign-nav', multiSignNav)
Vue.component('pageFooter', pageFooter)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
