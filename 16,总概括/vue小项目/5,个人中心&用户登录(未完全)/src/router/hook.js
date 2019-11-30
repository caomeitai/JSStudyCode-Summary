import * as types from "@/store/action-types"
import token from "../store"

export default{
    cancelToken:(to,from,next)=>{
        //此时会清空所有的请求方法 
        token.commit(types.CLEAR_TOKEN)
        next()
    },
    permission:(to,from,next)=>{
    //   console.log("permission")
      next()
    }
}
