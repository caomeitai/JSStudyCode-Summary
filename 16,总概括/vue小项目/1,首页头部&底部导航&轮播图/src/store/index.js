import Vue from 'vue'
import Vuex from 'vuex'
import home from "./modules/home"

Vue.use(Vuex)

// 将请求回来的数据存储到Vuex中
export default new Vuex.Store({
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    home
  }
})
