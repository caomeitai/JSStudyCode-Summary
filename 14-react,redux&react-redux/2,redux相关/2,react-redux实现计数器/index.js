import React from "react" 
import ReactDOM from "react-dom"
import App from "./App"
import {Provider} from "react-redux"
import store from "./store/index"

// 代表给每个UI组件都提供了store仓库
ReactDOM.render(<Provider store={store}>
    <App></App>
</Provider>,document.getElementById("app"));