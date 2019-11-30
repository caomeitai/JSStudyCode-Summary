import axios from "@/utils/axiosRequest"

// 用户登录方法
export const ajaxLogin = (user) => {
    return axios.request({
        url: "/login",
        method:"POST",
        data:user  
    })
}

// 验证是否登录方法
export const ajaxValidate = () => {
    return axios.request({
        url: "/validate",
    })
}






