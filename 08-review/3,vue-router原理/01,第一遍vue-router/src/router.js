import Vue from "vue"
import Router from "./vue-router"
import Home from "./views/Home"
import About from "./views/About"
Vue.use(Router)

// import Vue from "vue"  //直接run code是使用node运行的，它不支持高级语法
// console.log(Vue)

// const Vue = require("vue")
// console.log(Vue) //[Function: Vue]它是vue构造器

export default new Router({
  mode:"hash",
  routes:[
    {
      path:"/home",
      name:"home",
      component:Home
    },
    {
      path:"/about",
      name:"about",
      component:About
    }

  ]

})