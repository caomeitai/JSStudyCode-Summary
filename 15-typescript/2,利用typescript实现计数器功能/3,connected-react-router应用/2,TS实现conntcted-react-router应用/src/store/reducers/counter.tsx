import * as types from "../action-types"
import {Store} from "../types" 
import {Action} from "../actions/counter"

export default function(state:Store={number:0},action:Action){
    switch(action.type){
        case types.INCREMENT:
            return {number:state.number+1}
        case types.DECREMENT:
            return {number:state.number-1}
        default:
            return state
    }
}    