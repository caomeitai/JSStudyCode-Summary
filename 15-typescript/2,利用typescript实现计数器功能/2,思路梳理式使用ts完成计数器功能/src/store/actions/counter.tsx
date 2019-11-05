// 引入不同的action
import {INCREMENT,DECREMENT} from "../action-types"

// 不同action的类型定义
export interface Increment{
    type:typeof INCREMENT,
} 
export interface Decrement{
    type:typeof DECREMENT,
} 

// 将不同action类型联合
export type Action = Increment| Decrement;

// 生成不同的actions  actioncreator
export function increment(){
    return {type:INCREMENT}
}
export function decrement(){
    return {type:DECREMENT}
}
