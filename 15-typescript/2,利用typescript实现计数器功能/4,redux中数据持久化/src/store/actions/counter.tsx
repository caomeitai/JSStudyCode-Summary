import {INCREMENT,DECREMENT} from "../action-types"

// action的类型
export interface Increment{
    type:typeof INCREMENT
}
export interface Decrement{
    type:typeof DECREMENT
}
export  type Action = Increment|Decrement

// actionCreactor产生action
export function increment(){
    return {type:INCREMENT}
}
export function decrement(){
    return {type:DECREMENT}
}