import Vue from 'vue'
import App from './App.vue'
// 如若找不到router-view的话就在这里引进router即可
import router from './router'
// 这里已经引入了store,注入路径
import store from './store/index'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { async } from 'q';
Vue.use(ElementUI)

Vue.config.productionTip = false


// 根据权限动态地添加路由，换句话说路由分成两部分，一部分有权限后端返回，一部分无权限直接配
router.beforeEach(async(to,from,next)=>{
  // 在请求数据之前来判断一下是否已请求过数据
 if(!store.state.hasRules){//此时未获取去权限，执行函数
  // 在store中的actions中有请求数据的方法
  await store.dispatch("getMenuList") //拿到动态路由
  let r = await store.dispatch("getAuthRoute")
  router.addRoutes(r)
   next()
 }else{
  // hasRules为true，已获取数据
   next()//放行
 } 
  
  
})


// 创建vue实例，使得仓库注入
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

