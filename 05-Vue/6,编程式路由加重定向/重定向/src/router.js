import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About.vue'
import Home from './views/Home.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:"/",
      redirect:"/home",
    },
    {
      path:"/about",
      component:About,
    },
    {
      path:"/home",
      component:Home,
    }

    
    
  ]
})
