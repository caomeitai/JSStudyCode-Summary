import Vue from 'vue'
import App from './App.vue'
// 如若找不到router-view的话就在这里引进router即可
import router from './router'
// 这里已经引入了store,注入路径
import store from './store/index'

Vue.config.productionTip = false
import "bootstrap/dist/css/bootstrap.css"

// 这算是一个全局的钩子函数，一步一调用
router.beforeEach((to,from,next)=>{
  console.log("beforeEach")
  next()
})

router.beforeResolve((to,from,next)=>{//当前路由解析后会跳转的钩子
  console.log("beforeResolve")
  next()
})
router.afterEach(()=>{
  console.log("afterEach")//它们里面并没有next
})

// 创建vue实例，使得仓库注入
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// 路由的生命周期：
// 在main.js中  beforeEach  beforeResolve
// 离开一个组件：beforeRouteLeave
// 进入到新页面：beforeEach 
// router配置文件中的钩子：beforeEnter
// router组件中的钩子：beforeRouteUpdate
// 进入一个组件：beforeRouteEnter
// 渲染之后调用的钩子：beforeResolve
// 进入页面完毕：afterEach

// 注意几点：当属性变化时，并没有重新加载组件，会触发：beforeRouteUpdate方法；组件渲染完成后 会调用beforeRouteEnter回调方法