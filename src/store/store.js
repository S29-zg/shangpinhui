//vuex的配置项
import Vue from 'vue'
import Vuex from 'vuex'
import home from "@/store/home/home";
import search from "@/store/search/search";
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        home,
        search
    }
})
