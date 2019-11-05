import { createStore,applyMiddleware } from "redux"
import { routerMiddleware } from "connected-react-router"
import thunk from "redux-thunk"
import promise from "redux-promise"
import logger from "redux-logger"
import reducer from "../store/reducers"
import history from "../store/history"

let store = applyMiddleware(routerMiddleware(history),thunk,promise,logger)(createStore)(reducer)
// let store = createStore(applyMiddleware(routerMiddleware(history)),reducer)

export default store








