import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import UseTypeNav from "@/components/TypeNav/UseTypeNav.vue";
import store from "@/store/store";
//引入mock数据
import '@/api/mockServer'
//引入swiper样式
import 'swiper/css/bundle';
Vue.config.productionTip = false
Vue.use(VueRouter)

//全局注册组件
Vue.component('UseTypeNav',UseTypeNav)
new Vue({
  render: h => h(App),
  router:router,
  store
}).$mount('#app')
