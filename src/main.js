import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import UseTypeNav from "@/page/Home/TypeNav/UseTypeNav.vue";

Vue.config.productionTip = false
Vue.use(VueRouter)

//全局注册组件
Vue.component('UseTypeNav',UseTypeNav)
new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
