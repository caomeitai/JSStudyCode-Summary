import * as types from "../action-types"
function increment(payload){
    return {type:types.ADD,payload}
}
function decrement(payload){
    return {type:types.SUB,payload}
}

export default {increment,decrement}