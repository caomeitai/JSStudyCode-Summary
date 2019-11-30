import { ajaxCategory, ajaxSlides } from "../../api/home"
import * as types from "../action-types"
export default {
    // vuex仓库的模块化处理，为解决不同模块命名冲突问题
    namespaced: true,
    state: {
        categories: [],//分类
        currentMovie: -1, // 当前电影
        slides: [],//轮播图
    },
    mutations: {
        // 修改分类状态
        [types.SET_CATEGORY](state, payload) {
            state.categories = payload
        },
        // 设置当前电影
        [types.SET_CURRENT_MOVIE](state, payload) {
            state.currentMovie = payload
        },

        // 设置轮播图
        [types.SET_SLIDES](state, payload) {
            state.slides = payload
        }
    },
    actions: {
        // 设置分类
        async [types.SET_CATEGORY]({ commit }) {
            // 调用axios接口请求数据
            let cates = await ajaxCategory()
            // actions本质就是提交一个mutations
            commit(types.SET_CATEGORY, cates)
        },

        // 获取轮播图
        async [types.SET_SLIDES]({ commit }) {
            let slides = await ajaxSlides()
            commit(types.SET_SLIDES, slides)
        }

    }
}