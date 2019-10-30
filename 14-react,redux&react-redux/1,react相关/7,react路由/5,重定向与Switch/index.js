import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
// 在入口文件中引入路由模块  as是来起别名的
import { BrowserRouter as Router } from "react-router-dom"



// 在根组件外包上路由Router组件
ReactDOM.render(<Router><App></App></Router>,document.getElementById("app"))