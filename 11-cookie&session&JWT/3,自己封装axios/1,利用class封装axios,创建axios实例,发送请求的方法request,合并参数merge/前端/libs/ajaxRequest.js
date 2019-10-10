import axios from "axios"
// 以类的形式将axios进行封装，将对象导出去

class AjaxRequest{
  //在new时会调用constructor  
    constructor(){
		//请求的基础路径
        this.baseURL = process.env.NODE_ENV =="production"?"/":"http://localhost:3000"
        //超时时间
		this.timeout = 3000;   
    }
    // 合并请求携带参数与constructor中的数据
    merge(options){
        // ...展开运算符，会将参数展开与constructor中的数据混合
       return {...options,baseURL:this.baseURL,timeout:this.timeout}
    }

    // 发出请求的方法
    request(options){
        let instance =  axios.create()//创建axios实例
        let config =  this.merge(options)
        return instance(config)//调用axios实例，传递参数，返回promise
    }
}

export default new AjaxRequest;
// request("/user","post","name=tanni")
// 之前请求接口使用axios.get或axios.post










