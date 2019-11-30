import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home"
// 处理异步组件懒加载
import loading from "../utils/loading"
import hooks from "./hook"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: { index: 0 }
  },
  {
    path: "/movie",
    name: "movie",
    component: loading(() => import('../views/Movie')),
    meta: { index: 1 }
  },
  {
    path: "/profile",
    name: "profile",
    component: loading(() => import('../views/Profile')),
    meta: { index: 2 },

  },
  {
    path: "/login",
    name: "login",
    component: () => import('../views/Login')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 执行取消请求函数
Object.values(hooks).forEach(hook => {
  router.beforeEach(hook)
})

export default router
