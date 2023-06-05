import axios from "axios";

const ajaxMock=axios.create({
    baseURL:'/mock',
    timeout:10000
})

ajaxMock.interceptors.request.use(
    config => {
        //config:配置对象，里面存有headers请求头
        return config
    })
//设置相应拦截器
ajaxMock.interceptors.response.use(
    //请求成功后，调用的回调函数，可以处理返回的数据
    (resp) => {
        return resp.data
    },
    //请求失败的处理
    error => {
        return Promise.reject(error)
    }
)

export default ajaxMock

