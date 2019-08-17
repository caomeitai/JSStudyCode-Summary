import Vue from 'vue'
import App from './App.vue'
// 如若找不到router-view的话就在这里引进router即可
import router from './router'
// 这里已经引入了store,注入路径
import store from './store/index'

Vue.config.productionTip = false
import "bootstrap/dist/css/bootstrap.css"



// 创建vue实例，使得仓库注入
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

