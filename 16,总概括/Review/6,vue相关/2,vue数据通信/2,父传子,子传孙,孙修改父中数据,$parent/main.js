import Vue from "vue"
import App from "./App"

new Vue({
    el:"#app",
    // 渲染函数，渲染的是根组件App
    render:h=>h(App)
})