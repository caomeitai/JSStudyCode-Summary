import axios from "@/utils/axiosRequest"
import store from "@/store"

// 获取分类数据的方法
export const ajaxCategory = () => {
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

// 获取电影列表数据的方法
export const ajaxMovieList = (size,offset) => {
    return axios.request({
        url: `/lessonList/${store.state.home.currentMovie}?size=${size}&offset=${offset}`
    })
}