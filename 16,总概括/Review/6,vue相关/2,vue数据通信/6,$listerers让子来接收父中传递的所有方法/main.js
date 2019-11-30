import Vue from "vue"
import App from "./App"

// 封装$dispatch方法的原因  它是Vue实例原型上的方法
// 父传子，子传孙时，存在又不需要方法或者数据的情况
// $dispatch方法它会自动向上查找对应的方法，找到了就会触发

Vue.prototype.$dispatch = function(eventName,value){
    // console.log(this)//谁调用$dispatch方法，this就指向谁
    let parent = this.$parent;//找到对象组件的父组件
    while(parent){
       parent.$emit(eventName,value)//只要找到对应方法就会触发  
       parent = parent.$parent 
    }
}



new Vue({
    el:"#app",
    // 渲染函数，渲染的是根组件App
    render:h=>h(App)
})