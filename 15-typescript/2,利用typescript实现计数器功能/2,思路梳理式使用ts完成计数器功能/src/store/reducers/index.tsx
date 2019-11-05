// 在ts文件中时刻注意定义的函数参数类型与返回值类型
import { Store } from "../statetypes"//函数参数状态类型
import { Action } from "../actions/counter"//函数参数状态类型

import {INCREMENT,DECREMENT} from "../action-types"//多种action类型
export default function(state:Store= {number:0} ,action:Action){
    switch(action.type){
        case INCREMENT:
            return {...state,number:state.number+1}
        case DECREMENT:
            return {...state,number:state.number-1}    
        default:
            return state    
    }
}