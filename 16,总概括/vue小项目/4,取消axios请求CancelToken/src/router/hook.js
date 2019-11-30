import * as types from "@/store/action-types"
import token from "../store"

// 路由钩子肯定是在路由文件中引入使用的
// 存放路由钩子，在切换路由时(需要用到路由钩子)，要调用cancel方法
export default{
    // 默认导出导出的是对象，export导出导出的是接口
    cancelToken:(to,from,next)=>{
        // console.log("cancelToken")
        //此时会清空所有的请求方法 
        token.commit(types.CLEAR_TOKEN)
        next()//一定要放行
    },
    permission:(to,from,next)=>{
    //   console.log("permission")
      next()
    }
}
