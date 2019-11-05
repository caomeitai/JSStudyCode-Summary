// action类型使用redux中的类型AnyAction
import { AnyAction } from "redux"

// 状态数据类型：
export interface TypeProfile{
}

// 初始状态：
let initState:TypeProfile ={
}
 
export default function(state:TypeProfile=initState,action:AnyAction):TypeProfile{
    switch(action.type){
        default:
          return state
    }
} 