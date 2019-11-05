import { combineReducers,ReducersMapObject } from "redux"
import { connectRouter } from "connected-react-router"
import history from "../history"
import home from "./home"
import mine from "./mine"
import profile from "./profile"

let reducers:ReducersMapObject = {
   router:connectRouter(history),
   home,
   mine,
   profile
}


type typeRootState = {
   [key in keyof typeof reducers]:ReturnType<typeof reducers[key]>
}

// 合并reducer
let reducer = combineReducers(reducers)

export {typeRootState}

// 导出合并之后的reducer
export default reducer









