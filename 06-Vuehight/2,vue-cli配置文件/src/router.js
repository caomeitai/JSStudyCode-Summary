import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  // 在导航的下面加上下划线
  linkActiveClass:'active',
  routes: [
    {
      path:"/",
      redirect:"/home"
    },
    {
      path:"/index",
      name:"index",
      component:()=>import('./views/Index.vue'),
      children:[
        {
          path:"/home",
          name:"home",
          component:()=>import('./views/Home.vue')
        },
        {
          path:"/order",
          name:"order",
          component:()=>import('./views/Order.vue')
        },
        {
          path:"/me",
          name:"me",
          component:()=>import('./views/Me.vue')
        },
        {
          path:"/address",
          name:"address",
          component:()=>import('./views/Address.vue')
        },
        {
          path:"/city",
          name:"city",
          component:()=>import('./views/City.vue')
        }
      ]
    },
    {
      path:"/login",
      name:"login",
      component:()=>import('./views/Login.vue')
    },
    {
      path:"/search",
      name:"search",
      component:()=>import('./views/Search.vue')
    },
    {
      path:"/shop",
      name:"shop",
      component:()=>import('./views/Shops/Shop.vue'),
      children:[
        {
          path:"",
          redirect:"/good"
        },
        {
          path:"/comments",
          name:"comments",
          component:()=>import('./views/Shops/Comments')
        },
        {
          path:"/good",
          name:"good",
          component:()=>import('./views/Shops/Good')
        },
        {
          path:"/seller",
          name:"seller",
          component:()=>import('./views/Shops/Seller')
        },
        
      ]
    }    
  ]
})
// 路由守卫
// router.beforeEach((to, from, next) => {
//   const isLogin = localStorage.ele_login ? true : false;
//   if (to.path == '/login') {
//   next();
//   } else {
//   // 是否在登录状态下
//   isLogin ? next() : next('/login');
//   }
//   });
  export default router

