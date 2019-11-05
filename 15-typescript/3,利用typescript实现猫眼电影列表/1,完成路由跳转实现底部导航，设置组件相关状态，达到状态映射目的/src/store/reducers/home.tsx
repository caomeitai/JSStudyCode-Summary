// action类型使用redux中的类型AnyAction
import { AnyAction } from "redux"
import * as types from "../action-types"

// 状态数据类型：
export interface TypeHome{
   currentCategory:string
}

// 初始状态：
let initState:TypeHome ={
    currentCategory:"all"
}
 
export default function(state:TypeHome=initState,action:AnyAction):TypeHome{
    switch(action.type){
        case types.SET_CURRENT_CATEGORY:
            // 这里action中的payload是actionCreactor产生action时传递过来的
            return {...state,currentCategory:action.payload}
        default:
          return state
    }
} 