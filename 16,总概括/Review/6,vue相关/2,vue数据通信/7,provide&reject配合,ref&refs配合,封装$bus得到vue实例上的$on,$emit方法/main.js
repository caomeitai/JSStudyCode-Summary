import Vue from "vue"
import App from "./App"

// $bus就是挂载在Vue原型上的方法，或者说创建一个vue实例
// 在创建的实例上面就存在$on和$emit方法
// Vue.prototype.$bus = function(){
//     return new Vue()
// }

// 简化代码
// Vue.prototype.$bus = () => new Vue()


//2，$bus就是可理解为创建一个vue实例，在实例上面也存在着$on或者说$emit方法
// 在这里就是给每个vue实例都挂上了$bus方法
Vue.prototype.$bus = new Vue()

Vue.prototype.$dispatch = function (eventName, value) {
    let parent = this.$parent;
    while (parent) {
        parent.$emit(eventName, value)
        parent = parent.$parent
    }
}



new Vue({
    el: "#app",
    render: h => h(App)
})