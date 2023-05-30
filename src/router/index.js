import VueRouter from 'vue-router'
import UseLogin from "@/page/Login/UseLogin.vue";
import UseRegister from "@/page/Register/UseRegister.vue";
import UseHome from "@/page/Home/UseHome.vue";
import UseSearch from "@/page/Search/UseSearch.vue";

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
            path:'/Search',
            component:UseSearch,
            meta: { show: true }

        }
    ]
})