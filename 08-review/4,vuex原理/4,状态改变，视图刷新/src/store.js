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
    // getAge(state){
    //   return state.age-10
    // }
  },
  // mutations:{

  // },
 
  // actions:{

  // }
})