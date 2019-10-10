import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview';
import 'iview/dist/styles/iview.css';// 使用 CSS

Vue.use(iView);//能use就代表插件
Vue.config.productionTip = false

// 每次切换路由时都会执行
router.beforeEach(async (to,from,next)=>{
  let isLogin = await store.dispatch('validate')
  // console.log(isLogin)
  // console.log(to)//{name: "home", meta: {…}, path: "/", hash: "", query: {…}, …}
  // to.matched.some(function(match){
  //   // matched是个数组
  //   return match.meta.needLogin
  // })

  //得到那些页面需要登录后访问 
  let needLogin =  to.matched.some((match)=>match.meta.needLogin)
  if(needLogin){
    //需要登录
    if(isLogin){
      // 是否登录
      next()
    }else{
      next("/login")
    }
  }else{
    // 不需要登录的页面  
    // 但是已经登录，且再次访问登录页面时，跳到首页面
    if(isLogin && to.path==="/login"){
      next("/")
    }else{
       next()
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
