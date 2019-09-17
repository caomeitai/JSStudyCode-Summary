import Vue from "vue"
// 导入vuex，代表着导入对象{ install }
import Vuex from "./vuex"

// use使用时会自动调用install方法
Vue.use(Vuex)

// Store是对象中的方法，即是vuex中的方法
export default new Vuex.Store({
  state:{
    age:100
  },
  getters(){

  },
  mutations:{

  },
 
  actions:{

  }
})