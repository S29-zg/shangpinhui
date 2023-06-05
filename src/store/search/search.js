import {shopListbyCateLevel1} from '@/api'

const state = {
    shopList: []
}
const mutations = {
    //只有mutations可以操作state
    getShopListLevel1(state, shopListbyCateLevel1) { //第一个参数是store中的state，第二个参数是来自actions提交的res
        console.log('mutations', shopListbyCateLevel1)
        state.shopList = shopListbyCateLevel1.data
        console.log('shopList', state.shopList)

    }
}
const actions = {
    async searchShopByLevel1(store,value) {
        console.log("store:",store,"value:",value)
        let res = await shopListbyCateLevel1(value)
        if(res.code===200){

            store.commit('getShopListLevel1', res)
        }
    }
}
const getters = {}

export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}
