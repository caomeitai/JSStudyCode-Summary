import { INCREMENT,DECREMENT } from "../action-types"

// 记住定义函数要注意形参类型，返回值类型
export interface Increment{
  type:typeof INCREMENT
}

export interface Decrement{
    type:typeof DECREMENT
  }

export type Action = Increment|Decrement  

// actioncreater  返回大量的actions  
// 注意函数参数类型与返回值类型
export function increment():Increment{
    return {type:INCREMENT}
}
export function decrement():Decrement{
    return {type:DECREMENT}
}


