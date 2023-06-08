import {floors} from "@/api";

const state={
    floorList:[]
}

const mutations={
    getFloorsList(state,data){
        state.floorList=data
    }
}
const actions={
    async  getFloors(store){
        let res=await floors
        if(res.code===200){
            store.commit('getFloorsList',res.data)
        }

    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}

