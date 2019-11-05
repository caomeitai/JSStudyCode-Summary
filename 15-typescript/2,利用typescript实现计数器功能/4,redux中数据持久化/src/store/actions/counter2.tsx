import {INCREMENT2,DECREMENT2} from "../action-types"

// action的类型
export interface Increment{
    type:typeof INCREMENT2
}
export interface Decrement{
    type:typeof DECREMENT2
}
export  type Action = Increment|Decrement

// actionCreactor产生action
export function increment(){
    return {type:INCREMENT2}
}
export function decrement(){
    return {type:DECREMENT2}
}