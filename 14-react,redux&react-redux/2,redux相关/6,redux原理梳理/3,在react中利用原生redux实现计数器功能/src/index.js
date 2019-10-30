import React from "react"
import ReactDOM from "react-dom"
import Counter from "./components/Counter"

ReactDOM.render(<Counter></Counter>,document.getElementById("app"))

// 步骤：
// 1，在component文件中：画好UI组件Counter.js，将页面在根组件中渲染出来
// 2，在store文件中：创建store仓库，定义reducers(管理员)，定义一些action类型常量
// 3，在Counter.js组件中dispatch一个action
// 4，要dispatch的action需要action creator生成
// 5，需要在生命周期中，调用订阅方法subscribe来渲染修改后的组件状态
// 6，当组件卸载时：需要调用unsubcribe方法，取消订阅
// 7，为了简化dispatch一个action方法调用时的代码
//    第一种方法：需要利用bindActionCreators将dispatch和action creator结合起来
//    第二种方法：将actioncreator存放到{}中，结合时只结合一次，调用时利用.运算符来调用。 