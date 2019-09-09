import Vue from 'vue'
import Router from 'vue-router'

import Index from "./views/Index.vue";
import Home from "./views/Home.vue"
import InfoShow from "./views/InfoShow.vue"
import FoundList from "./views/FoundList.vue"
import Register from "./views/Register.vue"
import Login from "./views/Login.vue"
import NoFound from "./views/NoFound.vue"




Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/index"
    },
    {
      path: "/index",
      name: "index",
      component: Index,
      children:[
        {
          path:"",
          component:Home,
        },
        {
          path:"/home",
          name:'home',
          component:Home,
        },
        {
          path:"/infoshow",
          name:'infoshow',
          component:InfoShow,
        },
        {
          path:"/foundlist",
          name:'foundlist',
          component:FoundList,
        }
      ]
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    //NoFound的路径应该是在访问完上面的路径之后还是没找到相应的内容就会出现该界面
    {
      //  用*来表示匹配所有路径
      path: "*",
      name: "nofound",
      component: NoFound,
    }
  ]
})


// 因为不能够任意访问首页面，要加上路由守卫
  router.beforeEach((to, from, next) => {
  // 通过判断当地仓库中是否存在钥匙来判断是否登录啦
  const isLogin = localStorage.eleToken ? true : false;
  // 判断路径在哪？如果是处于登录或者是注册状态的话，继续执行操作
  if (to.path == "/login" || to.path == "/register") {
    next()
  } else {//否则的话再次判断islogin,登录就继续，否则就跳转到登录界面
    isLogin ? next() : next("/login")
  }
})
// 这里将其导出去
export default router


