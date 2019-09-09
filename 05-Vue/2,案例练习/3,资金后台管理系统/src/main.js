import Vue from 'vue'
import App from './App.vue'
// 如若找不到router-view的话就在这里引进router即可
import router from './router'
// 这里已经引入了store,注入路径
import store from './store/index'
// 将封装好的axios引进来使用
import axios from './http'


// 引入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// 使用ElementUI
Vue.use(ElementUI);

// 将封装好的axios挂在vue原型上
Vue.prototype.$axios = axios


Vue.config.productionTip = false

// 创建vue实例，使得仓库注入
new Vue({
  router,
  // 并且将store挂在实例上去了。
  store,
  render: h => h(App)
}).$mount('#app')
