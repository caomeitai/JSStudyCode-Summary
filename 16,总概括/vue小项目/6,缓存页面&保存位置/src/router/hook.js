import * as types from "@/store/action-types"
import token from "../store"

export default{
    cancelToken:(to,from,next)=>{
        token.commit(types.CLEAR_TOKEN)
        next()
    },
    permission:(to,from,next)=>{
    //   console.log("permission")
      next()
    }
}
