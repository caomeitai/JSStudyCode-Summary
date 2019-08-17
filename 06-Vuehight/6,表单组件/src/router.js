import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  // mode:'hash',//只有在hash模式下才能监控到路径的变化
  base: process.env.BASE_URL,
  // 在导航的下面加上下划线
  linkActiveClass:'active',
  routes: [
   

  ]
})

  export default router

