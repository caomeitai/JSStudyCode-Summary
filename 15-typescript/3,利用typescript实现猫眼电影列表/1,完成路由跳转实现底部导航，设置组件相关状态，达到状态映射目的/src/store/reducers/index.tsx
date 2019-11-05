import { combineReducers,ReducersMapObject } from "redux"
import { connectRouter } from "connected-react-router"
import history from "../history"
import home from "./home"
import mine from "./mine"
import profile from "./profile"

// 将所有reducer存到对象中，那么这个对象类型定义为ReducersMapObject
let reducers:ReducersMapObject = {
   router:connectRouter(history),
   home,
   mine,
   profile
}


// 本身项目存有多个reducer，每个reducer都有一个类型，将这些类型都存到新的对象中
// 而这个对象就是typeRootState，它仅仅是类型
type typeRootState = {
   // 拿到所有reducer类型的key值，然后给他们附上类型，类型值就是对象中value值
   [key in keyof typeof reducers]:ReturnType<typeof reducers[key]>
}

// 合并reducer
let reducer = combineReducers(reducers)

// 导出一个对象，对象中是reducer类型
export {typeRootState}

// 导出合并之后的reducer
export default reducer









