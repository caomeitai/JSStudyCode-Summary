import axios from "@/utils/axiosRequest"

// 用户登录方法
export const ajaxLogin = (user) => {
    return axios.request({
        // 登录是post请求，且还需要提交数据
        url: "/login",
        method:"POST",
        data:user  
    })
}





