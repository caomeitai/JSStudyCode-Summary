import * as types from "../action-types"
import {Store} from "../types"
import {Action} from "../actions/counter"

// 管理员reducer需要老状态，除了类型外，可以赋初始值和action得到新的状态
export default function(state:Store={number:0},action:Action){
    switch(action.type){//判断的是action的类型type与定义好的types中类型type是否一致
        case types.INCREMENT:
            // 返回的是新的状态，将老状态展开赋新值
            return {...state,number:state.number+1}
        case types.DECREMENT:
            return {...state,number:state.number-1}    
        default:
            return state    
    }

}