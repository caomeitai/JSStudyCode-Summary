import {INCREMENT1,DECREMENT1} from "../action-types"

// action的类型
export interface Increment{
    type:typeof INCREMENT1
}
export interface Decrement{
    type:typeof DECREMENT1
}
export  type Action = Increment|Decrement

// actionCreactor产生action
export function increment(){
    return {type:INCREMENT1}
}
export function decrement(){
    return {type:DECREMENT1}
}