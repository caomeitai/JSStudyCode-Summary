// 这里就是利用自己封装的axios，请求api接口拿到数据的方法
import axios from "../utils/axiosRequest"

// 获取分类数据的方法
export const ajaxCategory = () => {
    // 这就是我们自己封装的request方法，里面传递参数options
    return axios.request({
        url: "/category"
    })
}

// 获取轮播图数据的方法
export const ajaxSlides = () => {
    return axios.request({
        url: "/slides"
    })
}