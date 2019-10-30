// 返回的新的状态
import * as types from "../action-types"
export default function reducer(state={number:2},action){
    switch (action.type) {
        case types.ADD2:
            return { number: state.number + action.payload }
        case types.SUB2:
            return { number: state.number - action.payload }
        default:
            return state;
    }
}