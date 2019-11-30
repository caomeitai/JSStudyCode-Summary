import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home"
// 处理异步组件懒加载
import loading from "../utils/loading"

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    name:"home",
    component:Home
  },
  {
    path:"/movie",
    name:"movie",
    // 加载Movie组件时，会出现loading效果  它是高阶组件
    component:loading(()=>import('../views/Movie'))
  },
  {
    path:"/profile",
    name:"profile",
    component:loading(()=>import('../views/Profile'))
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
