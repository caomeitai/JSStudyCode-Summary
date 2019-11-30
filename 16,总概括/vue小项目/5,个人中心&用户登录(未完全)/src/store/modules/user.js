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
            // console.log("ssssssssssssssssssssssssssss")
            // console.log(payload)
            state.userInfo = payload
        }
    },
    actions: {
        // 用户登录  
        async [types.LOGIN]({ commit }, user) {
            // 出现请求失败，捕获错误
            try {
                // 在用户登录时需要携带部分信息(参数)
                let userinfo = await ajaxLogin(user)
                // console.log(userinfo)
                // console.log(",,,,,,,,,,,,,,,,,,,,,,,,")
                // 将token持久化，需要在封装的axios的头部加上token
                localStorage.setItem("token", userinfo.token)
                commit(types.SET_USER, userinfo)
            } catch (err) {
                // console.log(err)
                Toast.$create({
                    txt:"无法登录",
                    time:2000,
                }).show()//调用弹框显示
            }
        }
    },

}