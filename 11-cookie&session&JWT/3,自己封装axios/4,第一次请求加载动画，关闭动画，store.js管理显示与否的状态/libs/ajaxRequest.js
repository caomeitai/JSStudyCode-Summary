// 封装自己的axios
import axios from "axios"
import store from "../src/store"
// 仅仅当第一次请求时,才会显示loading

class AjaxRequest{
    constructor(){
        this.baseURL = process.env.NODE_ENV =="production"?"/":"http://localhost:3000/",
        this.queue = {}//存放每次请求
    }
    merge(options){
       return {...options,baseURL:this.baseURL,timeout:this.timeout}
    }
    
    // 封装拦截方法
    setInterceptor(instance,url){
    // 请求拦截  
     instance.interceptors.request.use((config)=> {
        config.headers.Authorization = "xxx"
        // 每次请求时，都加上loading效果
        // store.commit("showLoading")
        
        // console.log(this.queue)//{}
        // console.log(Object.keys(this.queue))//[]
        
        // 当queue长度为0，表明它是第一次请求，那么显示动画
        if(Object.keys(this.queue).length===0){
           store.commit("showLoading") 
        }
        
        // 有很多接口路径，给对象挂上url属性
        this.queue[url] = url;//将拿到的url挂到queue上去
        return config;
     });
     // 响应拦截 
     instance.interceptors.response.use((res)=> {
        //  每次响应都关闭loading
        // store.commit("hideLoading")
        
        // 将响应时的url删除，并隐藏动画
        delete this.queue[url]//删除请求拦截挂载的url
        if(Object.keys(this.queue).length===0){
            store.commit("hideLoading") 
         }
        return res.data;
     });
    }
    request(options){
        let instance = axios.create()
        //设置拦截，每次响应或者请求的url是一样的，拿到url
        this.setInterceptor(instance,options.url)
        let config = this.merge(options)
        return instance(config)
    }
}

export default new AjaxRequest;










