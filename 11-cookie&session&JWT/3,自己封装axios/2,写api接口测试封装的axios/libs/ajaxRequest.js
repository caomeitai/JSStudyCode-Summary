// 封装自己的axios
import axios from "axios"

class AjaxRequest{
    constructor(){
        this.baseURL = process.env.NODE_ENV =="production"?"/":"http://localhost:3000/"
        this.timeout = 3000;   
    }
    merge(options){
        // ...展开运算符，会将参数展开与constructor中的数据混合
       return {...options,baseURL:this.baseURL,timeout:this.timeout}
    }

    request(options){
        let instance =  axios.create()
        let config =  this.merge(options)
        return instance(config)
    }
}

export default new AjaxRequest;










