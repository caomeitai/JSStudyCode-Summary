import Vue from 'vue'
import App from './App.vue'
// 如若找不到router-view的话就在这里引进router即可
import router from './router'
// 这里已经引入了store,注入路径
import store from './store/index'
import axios from 'axios'


// 引入MintUI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css';
// 使用MintUI
Vue.use(MintUI);

import {Indicator} from 'mint-ui'

// 引入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// 使用ElementUI
Vue.use(ElementUI);
// 将axios挂在原型上
Vue.prototype.$axios = axios


// 请求拦截
axios.interceptors.request.use(
  config => {
  // 加载动画,在请求拦截时将动画打开
  Indicator.open();
  return config;
  },
  error => {
  return Promise.reject(error);
  }
  );
  
  // 响应拦截，在响应拦截时将动画关闭
  axios.interceptors.response.use(
  response => {
  Indicator.close();
  return response;
  },
  error => {
  // 错误提醒
  Indicator.close();
  return Promise.reject(error);
  }
  );



Vue.config.productionTip = false

// 创建vue实例，使得仓库注入
new Vue({
  router,
  // 并且将store挂在实例上去了。
  store,
  render: h => h(App)
}).$mount('#app')
