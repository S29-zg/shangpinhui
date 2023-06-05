import {reqCategoryList} from '@/api'
import {banners} from "@/api";

const state = {
    categoryList: [],
    bannerList: []
}
const mutations = {
    //只有mutations可以操作state
    getCategoryList(state, categoryList) { //第一个参数是store中的state，第二个参数是来自actions提交的res
        state.categoryList = categoryList.data
    },
    getBanners(state, banners) {
        console.log("banners", banners)
        state.bannerList = banners.data
    }
}
const actions = {
    async categoryList(store) {
        let res = await reqCategoryList
        if (res.code === 200) {

            store.commit('getCategoryList', res)
        }
    },
    async showBanners(store) {
        let res = await banners
        if (res.code === 200) {
            store.commit('getBanners', res)
        }

    }

}
const getters = {}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
