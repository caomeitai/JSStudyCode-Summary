import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from "./store"//引入仓库
import Counter1 from "./components/counter1"
import Counter2 from "./components/counter2"

ReactDOM.render(
    // 给每个组件都提供store
    <Provider store={store}>
        <Counter1></Counter1>
        <hr />
        <Counter2></Counter2>
    </Provider>,
    document.getElementById("app"))

