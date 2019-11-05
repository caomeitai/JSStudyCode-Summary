import { createStore,applyMiddleware } from "redux"
import {routerMiddleware} from "connected-react-router"
import history from "../store/history"
import reducer from "../store/reducers"

let store = createStore(reducer,applyMiddleware(routerMiddleware(history)))
// let store = applyMiddleware((routerMiddleware(history)),counter)(createStore)(reducer)

export default store 

