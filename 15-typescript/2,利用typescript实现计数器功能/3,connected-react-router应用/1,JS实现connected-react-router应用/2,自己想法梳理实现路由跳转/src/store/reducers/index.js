import {combineReducers} from "redux"
import { connectRouter } from "connected-react-router"
import Counter from "./counter"
import history from "../history"

let reducer = combineReducers({
    router:connectRouter(history),
    Counter,
})
// 此时的reducer是箭头函数
export default reducer;