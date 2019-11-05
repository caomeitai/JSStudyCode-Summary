import React from "react"
import ReactDOM from "react-dom"
import Counter from "./components/Counter"
import Home from "./components/Home"
import { Provider } from "react-redux"
import { Route, Link, } from "react-router-dom"
import  {ConnectedRouter} from "connected-react-router"
import history from "./store/history"
import store from "./store"


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Link to="/">首页</Link>
            <Link to="/counter">计数器</Link>
            <Route path="/" exact component={Home}></Route>
            <Route path="/counter" exact component={Counter}></Route>
        </ConnectedRouter>
    </Provider>
    , document.getElementById("app"))