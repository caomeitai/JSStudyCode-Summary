// 合并多个管理员为一个管理员
import { combineReducers } from "redux"
import counter from "./counter"
import films from "./films"
 
const reducer = combineReducers({
    counter,
    films
})


export default reducer;