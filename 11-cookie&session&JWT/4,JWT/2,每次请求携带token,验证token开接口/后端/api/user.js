import axios from "../../libs/ajaxRequest"//使用自己封装好的axios

// 用户信息的接口
export const getUser =()=>{
    return axios.request({
        url:'/user',
        method:'get'
    })
}

// 登录接口  将数据存放到vuex中以便共享数据
// 这样在登录组件调用方法，传递用户名参数
export const doLogin =(username)=>{
    return axios.request({
        url:'/login',
        method:'post',
        data:{
            username
        }
    })
}