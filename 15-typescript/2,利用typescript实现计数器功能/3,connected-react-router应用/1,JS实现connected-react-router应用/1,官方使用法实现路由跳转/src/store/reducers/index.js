import {combineReducers} from "redux"
import { connectRouter } from "connected-react-router"
import Counter from "./counter"

// 如何让history其作为形参
let reducer =  (history)=> combineReducers({
    router:connectRouter(history),
    Counter
})

// 此时的reducer是箭头函数
export default reducer;