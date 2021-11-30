import Vue from 'vue'
import App from './App.vue'
import "./style/index.scss"
import router from "./router";
import "animate.css"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import rainbowNav from "@/components/rainbowNav";
import rainbowNavNew from "@/components/rainbowNavNew";
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

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.component('rainbow-nav', rainbowNav)
Vue.component('rainbow-nav-new', rainbowNavNew)
Vue.component('pageFooter', pageFooter)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
