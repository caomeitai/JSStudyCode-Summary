// 引入定义好的action类型types
import * as types from "../action-types"
export default function reducer(state={counter:9},action){
  switch(action.type){
    // 不需要传递参数时
    //  case types.ADD:
    //      return {counter:state.counter+1};
    //   case types.SUB:
    //       return {counter:state.counter-1};
    //    default:
    //        return state;     
    
    // 传递了参数
    case types.ADD:
         return {counter:state.counter+action.payload};
      case types.SUB:
          return {counter:state.counter-action.payload};
       default:
           return state;      
  }
}