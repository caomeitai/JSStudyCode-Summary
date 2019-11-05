// action类型使用redux中的类型AnyAction
import { AnyAction } from "redux"

// 状态数据类型：
export interface TypeMine{
}

// 初始状态：
let initState:TypeMine ={
}
 
export default function(state:TypeMine=initState,action:AnyAction):TypeMine{
    switch(action.type){
        default:
          return state
    }
} 