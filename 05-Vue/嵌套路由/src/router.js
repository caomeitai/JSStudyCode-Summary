import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Find from './views/Find.vue'
import Setting from './views/Setting.vue'
import Login from './views/Login.vue'
import Regin from './views/Regin.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:"/",
      component:Home,
    },
    {
      path:"/find",
      component:Find,
    },
    {
      path:"/setting",
      component:Setting,
      children:[
        {
          path:"/setting/login",
          component:Login,
        },
        {
          path:"/setting/regin",
          component:Regin,
        }
      ]
    },
    
  ]
})
