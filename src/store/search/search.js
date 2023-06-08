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

const getters = {
    //加入网络缓慢，没有将数据传递给state会导致问题，此时可以赋值空数组
    attrsList(state){
        return state.shopList.attrsList||[]
    },
    goodsList(state){
        return state.shopList.goodsList||[]
    },
    trademarkList(state){
        return state.shopList.trademarkList||[]
    },
    pageNo(state){
        return state.shopList.pageNo||0
    },
    pageSize(state){
        return state.shopList.pageSize||0
    },
    total(state){
        return state.shopList.total||0
    },
    totalPages(state){
        return state.shopList.totalPages||0
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}
