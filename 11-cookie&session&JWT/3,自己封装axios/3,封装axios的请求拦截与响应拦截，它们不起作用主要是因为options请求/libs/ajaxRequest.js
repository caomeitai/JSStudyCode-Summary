// 封装自己的axios
import axios from "axios"

class AjaxRequest{
    constructor(){
        this.baseURL = process.env.NODE_ENV =="production"?"/":"http://localhost:3000/"
        // this.timeout = 3000;   
    }
    merge(options){
        // ...展开运算符，会将参数展开与constructor中的数据混合
       return {...options,baseURL:this.baseURL,timeout:this.timeout}
    }
    
    // 封装拦截方法
    setInterceptor(instance){
    // 请求拦截  axios换成自己创建的实例 instance
     instance.interceptors.request.use((config)=> {
        //请求拦截时给其加上个头，JWT好使用
        config.headers.Authorization = "xxx"
        return config;
     });
     // 响应拦截  axios换成自己创建的实例 instance
     instance.interceptors.response.use((res)=> {
        //res是返回结果
        return res.data;
     });
    }
    

    request(options){
        let instance = axios.create()
        this.setInterceptor(instance)
        let config = this.merge(options)
        return instance(config)
    }
}

export default new AjaxRequest;










