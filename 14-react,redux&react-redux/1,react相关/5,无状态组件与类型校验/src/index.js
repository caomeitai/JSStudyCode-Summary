import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

ReactDOM.render(<App></App>,document.getElementById("app"))
// 通过属性来传递数据 字符串
// ReactDOM.render(<App name="tanni"/>,document.getElementById("app"))
// ReactDOM.render(<App name="123"/>,document.getElementById("app"))
// number
// ReactDOM.render(<App name={123}/>,document.getElementById("app"))
// string
// ReactDOM.render(<App name={"wangcai"}/>,document.getElementById("app"))
// Boolean true false在页面中不会显示
// ReactDOM.render(<App name={ true }/>,document.getElementById("app"))


// 字面量就是等号后面的内容：字符串，数值，布尔类型...
// 只要是{}括起来表示属于js文件中的内容，而单独的""仅仅代表着自定义变量













