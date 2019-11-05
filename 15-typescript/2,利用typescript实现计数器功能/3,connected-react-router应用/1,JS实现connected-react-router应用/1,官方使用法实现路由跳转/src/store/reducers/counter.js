import { INCREMENT,DECREMENT } from "../action-types"
export default function (state = { number: 0 }, action) {
    switch (action.type) {
        case INCREMENT:
            return { number: state.number + 1 }
        case DECREMENT:
            return { number: state.number - 1 }
        default:
            return state;
    }
}