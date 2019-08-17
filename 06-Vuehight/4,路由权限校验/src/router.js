import Vue from 'vue'
import Router from 'vue-router'
// 大的根组件尽量不要懒加载
import Home from './views/Home'
import Name from './views/Name'
import Version from './views/Version'
Vue.use(Router)

const router = new Router({
  // mode: 'history',
  mode:'hash',//只有在hash模式下才能监控到路径的变化
  base: process.env.BASE_URL,
  // 在导航的下面加上下划线
  linkActiveClass:'active',
  routes: [
    {
      path:"/",
      redirect:{path:"/home"}
    },
    {
      path:"/home",
      name:"home",
      // component:Home,
      // 一个路由对应多个组件
      components:{
        default:Home,  //默认组件
        // 在APP组件中对应name是name和version这两个，将组件分别扔到对应的坑里面
        name:Name,
        version:Version,
      }
      
    },
    {
      path:"/login",
      name:"login",
      component:()=>import("./views/Login.vue")
    },
    {
      path:"/profile",
      name:"profile",
      component:()=>import("./views/Profile.vue"),
      meta:{needLogin:true}  //路由元信息，加上meta表明它需要验证一下
    },
    {
      path:"/user",
      name:"user",
      component:()=>import("./views/User.vue"),
      //因为是在页面打开的同时就进行验证有没有权限访问，那么要求在最大的路由下配置元信息
      meta:{needLogin:true},
      children:[
        {
          path:"",
          component:()=>import("./views/UserAdd.vue")
        },
        {
          path:"useradd",//在子路由中路径配置不能加 /
          name:"useradd",
          component:()=>import("./views/UserAdd.vue")
        },
        {
          path:"userlist",
          name:"userlist",
          component:()=>import("./views/UserList.vue")
        },
        {
          path:"detial/:id",
          // path:"detial",
          name:"detial",
          component:()=>import("./views/UserDetial.vue"),
          beforeEnter(to,from,next){
            next()
          }
        }
      ]
    },
    {
      path:"*",
      component:()=>import("./views/404.vue")
    }

  ]
})

  export default router

