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
  console.log(isLogin)
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
