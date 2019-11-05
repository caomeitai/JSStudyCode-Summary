import {combineReducers} from "redux"
import counter from "../reducers/counter"
import counter1 from "../reducers/counter1"
import counter2 from "../reducers/counter2"
import {connectRouter } from "connected-react-router"
import history from "../history"

let reducer =  combineReducers({ 
    router:connectRouter(history),
    counter,
    counter1,
    counter2
})

export default reducer;


