import axios from "../../libs/ajaxRequest"//使用自己封装好的axios
// 用户相关的接口

export const getUser =()=>{
    return axios.request({
        url:'/user',
        method:'get'
    })
}