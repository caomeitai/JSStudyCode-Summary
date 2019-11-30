import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home"
// 处理异步组件懒加载
import loading from "../utils/loading"
import hooks from "./hook"

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    name:"home",
    component:Home,
    meta:{index:0}
  },
  {
    path:"/movie",
    name:"movie",
    component:loading(()=>import('../views/Movie')),
    meta:{index:1}
  },
  {
    path:"/profile",
    name:"profile",
    component:loading(()=>import('../views/Profile')),
    meta:{index:2}
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// hook是个对象，想要拿到对象的值，遍历得到数组
Object.values(hooks).forEach(hook=>{
  // 在切换路由时，会执行router.beforeEach，此时调用里面封装的函数
  router.beforeEach(hook)//hook指的是cancelToken，与permission两个函数
})

export default router
