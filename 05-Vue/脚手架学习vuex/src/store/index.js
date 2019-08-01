import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

// 创建仓库

// 要new上Vuex就要使用Vuex，既引进来
// 需要将仓库导出去，才能在main.js中方便引进来
export default new Vuex.Store({
  state:{
    counter:1
  },
  mutations:{
    add(state){
      state.counter++
    },
    sub(state){
      state.counter--
    },
    addN(state,obj){
      console.log(obj)
      state.counter+=obj;

    }
  }

})