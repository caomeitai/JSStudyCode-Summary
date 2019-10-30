// 合并多个管理员为一个管理员
import { combineReducers } from "redux"
import counter from "./counter"
 
const reducer = combineReducers({
    counter
})


export default reducer;