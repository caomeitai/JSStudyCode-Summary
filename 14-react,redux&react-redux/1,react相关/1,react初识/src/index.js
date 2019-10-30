// react是核心文件，可以在webpack中使用，也可以在reactNative中使用
import React from "react"
// react-dom专门针对webapp
import ReactDOM from "react-dom"
// 引入根组件
import App from "./App"

// 利用render函数将内容渲染
// ReactDOM.render("hello",document.getElementById("app"))
ReactDOM.render(<App></App>,document.getElementById("app"))