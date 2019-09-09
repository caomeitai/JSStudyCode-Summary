import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 这里已经引入了store,注入路径
import store from './store/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.config.productionTip = false

// 创建vue实例，使得仓库注入
new Vue({
  router,
  // 并且将store挂在实例上去了。
  store,
  render: h => h(App)
}).$mount('#app')
