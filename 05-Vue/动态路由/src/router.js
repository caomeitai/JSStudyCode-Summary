import Vue from 'vue'
import Router from 'vue-router'
import List from './views/List.vue'
import Detial from './views/Detial.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/list',
      component:List,
    },
    {
      path:'/detial/:id',
      component:Detial,
    }  
  ]
})
