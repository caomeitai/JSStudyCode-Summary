import * as types from "@/store/action-types"
// import token from "../store"
// import user from "../store"
import store from "../store"

export default {
  cancelToken: (to, from, next) => {
    // console.log(store)
    // console.log(store.commit(types.CLEAR_TOKEN))
    store.commit(types.CLEAR_TOKEN)
    next()
  },
  permission: async (to, from, next) => {
    // console.log("permission")
    // console.log(to)

    // 得到标识是否需要登录  true 或者false
    // 可能存在子组件，当有一个存在needLogin:true，所有的都不可以访问
    let needLogin = to.matched.some(item => item.meta.needLogin)
    // console.log(needLogin)
    // console.log(store)
    // console.log(store.state.user.hasPermission)//初始值始终是false

    // 没有权限hasPermission:false
    if (!store.state.user.hasPermission) {
      // 当前是否登录
      let flag = await store.dispatch("user/" + types.VALIDATE)
      // console.log(flag)
      if (needLogin) {
        // 需要登录
        if (!flag) {
          // 但没有登录
          next("/login")
        }else{
          // 已登录
          next()
        }
      }else{
        // 不需要登录
        next()
      }
    }else{
      // 存在权限hasPermission:true  表示登录过了
      if(to.path==="/login"){
        // 但还是要去访问login
        next("/")
      }else{
        // 已登录过了，直接放行
        next()
      }
    }


    next()
  }
}
