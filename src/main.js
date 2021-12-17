import Vue from 'vue'
import App from './App.vue'
import "./style/index.scss"
import router from "./router";
import store from "./store"
import Vuex from 'vuex'
import "animate.css"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import rainbowNav from "@/components/rainbowNav";
import rainbowNavNew from "@/components/rainbowNavNew";
import multiSignNav from "@/components/multiSignNav";
import pageFooter from "./components/pageFooter";
// Import Swiper styles

Vue.config.debug = false
Vue.config.devtools = false;
Vue.config.productionTip = false;
Vue.config.silent = true
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

Vue.use(Vuex)
Vue.use(VueAwesomeSwiper)
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
