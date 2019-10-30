// 将多个reducer合并成一个
import counter1 from "./counter1"
import counter2 from "./counter2"
//原生的redux
// import {combineReducers} from "redux"

// 自己封装的
import {combineReducers} from "../../redux"

// 状态非常多，交给不同的reducer管理不同的状态
// combineReducers是把多个reducer合并成一个reducer
// reducer是函数，内部通过switch case可返回新的状态


//  直接将多个reducer结合成一个
let reducer = combineReducers({
  counter1,
  counter2
})

export default reducer;












