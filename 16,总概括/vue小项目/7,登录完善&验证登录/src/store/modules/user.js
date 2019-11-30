import * as types from "../action-types"
import { ajaxLogin,ajaxValidate } from "../../api/user"
import { Toast} from "cube-ui"
export default {
    // vuex仓库的模块化处理，为解决不同模块命名冲突问题
    namespaced: true,
    state: {
        userInfo: {},//存放一堆用户信息 
        hasPermission:false //是否有权限访问   
    },
    mutations: {
        // 设置用户
        [types.SET_USER](state, payload) {
            state.userInfo = payload,
            // 当登录成功时，改变权限
            state.hasPermission = true
        }
    },
    actions: {
        // 用户登录  
        async [types.LOGIN]({ commit }, user) {
            try {
                // userinfo中存放请求回来的用户信息
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
        },
        // 验证用户登录  
        async [types.VALIDATE]({ commit }) {
            try {
                // 判断是否验证通过，返回的是用户登录与否                let user = await ajaxValidate()
                // 如果验证没有登录，就返回当前没有登录；
                // 如果验证登录过了，user就是用户信息
                console.log(user)
                commit(types.SET_USER, user)
                return true
            } catch (err) {
                return false
            }
        }
    },

}