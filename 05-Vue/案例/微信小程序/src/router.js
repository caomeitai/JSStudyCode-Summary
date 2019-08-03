import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Index from './views/Index.vue'


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
     path:"/",
     redirect:'/index',
    },
    {
      path:"/index",
      name:"index",
      component:Index,
      children:[
        {
          path:"",
          redirect:'/wchart'
        },
        {
          path:"/wchart",
          name:"wchart",
          component:()=>import("./views/Wchart.vue")
        },
        {
          path:"/mine",
          name:"mine",
          component:()=>import("./views/Mine.vue")
        },
        {
          path:"/find",
          name:"find",
          component:()=>import("./views/Find.vue")
        },
        {
          path:"/adressbook",
          name:"adressbook",
          component:()=>import("./views/AdressBook.vue")
        },

      ]
    },
    {
      path:"/register",
      name:"register",
      component:()=>import ("./views/Register.vue") 
    },
    {
      path:"/login",
      name:"login",
      component:()=>import ("./views/Login.vue") 
    }
    
  ]
    
})



