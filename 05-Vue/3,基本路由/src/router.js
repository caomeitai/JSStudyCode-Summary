import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Find from './views/Find.vue'
import Setting from './views/Setting.vue'
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
    }
  
  ]
})
