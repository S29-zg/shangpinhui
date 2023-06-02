import axios from "axios";
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

const request = axios.create({
    baseURL: '/api',//设置统一的前缀路径
    timeout: 5000 //设置超时时间
})
//设置请求拦截器
request.interceptors.request.use(
    config => {
        nprogress.start()
        //config:配置对象，里面存有headers请求头
        return config
    })
//设置相应拦截器
request.interceptors.response.use(
    //请求成功后，调用的回调函数，可以处理返回的数据
    (resp) => {
        nprogress.done()
        return resp.data
    },
    //请求失败的处理
    error => {
        return Promise.reject(error)
    }
)

export default request;

