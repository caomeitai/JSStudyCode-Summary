import Vue from "vue"
import Vuex from "./vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    age:100
  },
  getters:{
    myAge(state){
      return state.age+10
    },
  },
  mutations:{
    // 首参是state，第二个参数则是传递过来的参数
    add(state,payload){
      state.age += payload
    }
  },
 
  // actions:{

  // }
})