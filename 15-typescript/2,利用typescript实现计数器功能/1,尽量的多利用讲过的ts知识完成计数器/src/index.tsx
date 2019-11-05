import * as React from "react"
import * as ReactDOM from "react-dom"
import Counter from "./components/Counter"
import {Provider} from "react-redux"
import store from "./store"

// 需要给Counter组件传递参数，props会接收
ReactDOM.render(
  // 给所有组件提供store
  <Provider store = {store}>
    <Counter number={0}/>  
 </Provider>
,document.getElementById("root"))