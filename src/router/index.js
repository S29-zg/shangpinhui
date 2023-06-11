//vue-router的配置
import VueRouter from 'vue-router'
import UseLogin from "@/page/Login/UseLogin.vue";
import UseRegister from "@/page/Register/UseRegister.vue";
import UseHome from "@/page/Home/UseHome.vue";
import UseSearch from "@/page/Search/UseSearch.vue";

let prePush=VueRouter.prototype.push
VueRouter.prototype.push=function (location,resolve,reject){
    console.log(this)
    if(resolve&&reject){
        prePush.call(this,location)
    }else {
        prePush.call(this,location,()=>{},()=>{})
    }

}

export default new VueRouter({
    routes: [
        {
            path: '/Login',
            component: UseLogin,
            meta: { show: false }
        },
        {
            path:'/Register',
            component:UseRegister,
            meta: { show: false }

        },
        {
            path:'/Home',
            component:UseHome,
            meta: { show: true }

        },
        {
            name:'search',
            path:'/Search/:key?',
            component:UseSearch,
            meta: { show: true }

        }
    ]
})
