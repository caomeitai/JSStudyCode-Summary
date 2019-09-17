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
    add(state,payload){
      state.age += payload
    },
    asyncSub(state,payload){
      state.age -= payload
    }
  },
  actions:{
  //  actions函数解决的是异步操作，本质是提交个mutations
    asyncSub({commit},payload){//从上下文中解构出来的commit
      // console.log(commit)
      setTimeout(()=>{
        commit("asyncSub",payload)//提交mutations函数
    })
   }
  }
})