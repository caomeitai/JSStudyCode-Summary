import * as types from "../action-types"
import { ajaxLogin } from "../../api/user"
import { Toast} from "cube-ui"
export default {
    // vuex仓库的模块化处理，为解决不同模块命名冲突问题
    namespaced: true,
    state: {
        userInfo: {}//存放一堆用户信息     
    },
    mutations: {
        // 设置用户
        [types.SET_USER](state, payload) {
            state.userInfo = payload
        }
    },
    actions: {
        // 用户登录  
        async [types.LOGIN]({ commit }, user) {
            try {
                let userinfo = await ajaxLogin(user)
                // 将token持久化，需要在封装的axios的头部加上token
                localStorage.setItem("token", userinfo.token)
                commit(types.SET_USER, userinfo)
            } catch (err) {
                Toast.$create({
                    txt:"无法登录",
                    time:2000,
                }).show()//调用弹框显示
            }
        }
    },

}