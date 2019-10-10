import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/profile',
      name: 'proflie',
      meta:{
        needLogin:true//个人中心需要登录才能够访问
      },
      component: () => import('./views/Profile.vue')
    }
  ]
})
