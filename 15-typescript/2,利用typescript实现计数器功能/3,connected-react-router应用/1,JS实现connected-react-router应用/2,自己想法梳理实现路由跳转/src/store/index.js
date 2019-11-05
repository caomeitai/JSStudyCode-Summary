import {createStore,applyMiddleware} from "redux"
import reducer from "./reducers"
import history from "../store/history"
import {routerMiddleware} from "connected-react-router"

// 利用的是creacteStore
// let store = createStore(reducer,applyMiddleware(routerMiddleware(history)))

// 利用的是applyMiddleware
let store = applyMiddleware(routerMiddleware(history))(createStore)(reducer)

export default store