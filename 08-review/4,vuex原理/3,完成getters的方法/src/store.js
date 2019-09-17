import Vue from "vue"
import Vuex from "./vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    age:100
  },
  getters:{//它相当于vue中的computed计算属性
    myAge(state){
      return state.age+10
    }
  },
  // mutations:{

  // },
 
  // actions:{

  // }
})