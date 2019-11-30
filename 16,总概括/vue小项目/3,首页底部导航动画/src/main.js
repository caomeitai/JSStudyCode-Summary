import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
// 实现px转成rem
import 'amfe-flexible'
import setRem from "./utils/setRem"
setRem()


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
