// 使用之前，要配置请求拦截和响应拦截，需要在main.js中引入http.js
// 因为需要安装axios，才会有加载页面，所以要在这里引入axios
// 需要封装好axios
import axios from 'axios'
// 按需加载，使用到它，才将它引进来
import {Message,Loading} from 'element-ui'


let loading  //定义loading变量
// 开始加载
function  startLoading() {  //使用了Element startLoading方法
    loading = Loading.service({
        lock:true,
        text:'加载中...',
        background:'rgb(0,0,0,0.7)'
    })  
}
// 结束加载
function endLoading(){  //使用了Element endLoading方法
    loading.close()
}
// 什么时候加载，什么时候取消加载，就与请求拦截还有响应拦截有关了

// 请求拦截，就是在请求数据时，而还没有拿到数据时会出现加载页面  
// 设置统一header,一下是对拦截器加上了headers属性
// config请求信息，请求配置
axios.interceptors.request.use(config=>{ //在发送请求前做了什么，比如接收token
    // 加载
    startLoading()
    if(localStorage.eleToken){  //判断是否存在着token，如果存在的话，则给每个http header都加上token
        config.headers.Authorization = localStorage.eleToken
    }
    console.log(config)
    return config   
},error=>{
    return Promise.reject(error)
})
 //响应拦截  endloading  401 token过期处理
//  response响应信息
 axios.interceptors.response.use(response=>{
     endLoading()
     return response
 },error=>{
     endLoading()
     Message.error(error.response.data)
     const {status} = error.response
     if(status == 401){
         Message.error("token失效了，请重新登录")
        //  那就需要清除老的token
        localStorage.removeItem("eleToken")
     }
     return Promise.reject(error)
 }) 
//  导出去axios
export default axios