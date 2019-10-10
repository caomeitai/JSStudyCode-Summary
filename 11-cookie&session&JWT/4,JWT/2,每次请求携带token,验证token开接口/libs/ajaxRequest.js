// 封装自己的axios
import axios from "axios"
import store from "../src/store"
import {getLocal} from "../libs/localStorage"

class AjaxRequest{
    constructor(){
        this.baseURL = process.env.NODE_ENV =="production"?"/":"http://localhost:3000/",
        this.queue = {}//存放每次请求
    }
    // 合并参数
    merge(options){
       return {...options,baseURL:this.baseURL,timeout:this.timeout}
    }
    // 封装拦截方法
    setInterceptor(instance,url){
    // 请求拦截  
     instance.interceptors.request.use((config)=> {
        // 设置头 
        //请求拦截中，每次请求多会加上一个Authorization头，上面也携带着token  
        config.headers.Authorization = getLocal("token")
        // 开启动画
        if(Object.keys(this.queue).length===0){
           store.commit("showLoading") 
        }
        this.queue[url] = url;
        return config;
     });
     // 响应拦截 
     instance.interceptors.response.use((res)=> {
        //  关闭动画
        delete this.queue[url]
        if(Object.keys(this.queue).length===0){
            store.commit("hideLoading") 
         }
        //  返回数据
        return res.data;
     });
    }
    // 发出请求方法
    request(options){
        let instance = axios.create()//1，创建axios实例
        this.setInterceptor(instance,options.url)
        let config = this.merge(options)
        return instance(config)//2，发出请求
    }
}

export default new AjaxRequest;










