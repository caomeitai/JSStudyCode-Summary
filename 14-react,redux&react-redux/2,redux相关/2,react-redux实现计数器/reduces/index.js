// 合并多个管理员为一个管理员
import { combineReducers } from "redux"
// 引入要合并的管理员，一个项目就有一个管理员
import counter from "./counter"
 
const reducer = combineReducers({
    counter
})


export default reducer;