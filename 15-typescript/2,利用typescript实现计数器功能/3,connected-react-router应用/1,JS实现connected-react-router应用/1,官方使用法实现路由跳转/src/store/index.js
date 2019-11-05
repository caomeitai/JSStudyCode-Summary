import {createStore,applyMiddleware} from "redux"
import reducer from "./reducers"
import history from "../store/history"
import {routerMiddleware} from "connected-react-router"

export default function rootstore(preloadedState){
    // 利用三个小括号来写：第一个是中间件；第二个是createStore；第三个是reducer，若是存在参数，会存在于reducer参数后面
    let store = applyMiddleware(routerMiddleware(history))(createStore)(reducer(history),preloadedState)
    return store
}