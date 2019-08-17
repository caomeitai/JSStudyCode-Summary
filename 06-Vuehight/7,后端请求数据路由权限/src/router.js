import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

// 将路由分两部分
let defaultRoutes = [
  {
    path:"/",
    redirect:"/home"
  },
  {
    path:"/home",
    name:"home",
    component:Home
  },
  {
    path:"*",
    component:()=>import('./components/menu/404.vue')
  }
]

export let authRoutes = [
  {
    path:"/cart",
    name:"cart",
    component:()=>import('./components/menu/cart.vue'),
    children:[
      {
        path:"cart-list",
        name:"cartlist",
        component:()=>import('./components/menu/cart-list.vue'),
        children:[
          {
            path:"lottery",
            name:"lottery",
            component:()=>import('./components/menu/lottery.vue')
          },
          {
            path:"product",
            name:"product",
            component:()=>import('./components/menu/product.vue')
          },
        ]
      },
    ]
  },
  {
    path:"/profile",
    name:"profile",
    component:()=>import('./components/menu/profile.vue')
  },
  {
    path:"/shop",
    name:"shop",
    component:()=>import('./components/menu/shop.vue')
  },
]

const router = new Router({
  mode: 'history',
  // mode:'hash',//只有在hash模式下才能监控到路径的变化
  base: process.env.BASE_URL,
  routes: defaultRoutes
})

  export default router

