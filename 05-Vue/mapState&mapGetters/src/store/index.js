import Vue from "vue"
import Vuex from "vuex"
// 在vue中使用了第三方vuex
Vue.use(Vuex)
// 创建仓库,要导出去
export default new Vuex.Store({
  state:{
    counter:1,
    stus:["tanni","100"],
    list:[
      {name:"wangcai1",score:40},
      {name:"wangcai2",score:50},
      {name:"wangcai3",score:60},
      {name:"wangcai4",score:70},
      {name:"wangcai5",score:80},
      {name:"wangcai6",score:90},
    ],
  },
  getters:{
    failnumber(state){
      let n = 0;
      // 遍历数组，寻找到符合条件的数并返回到新数组
      state.list.forEach(item=>{
          if(item.score<60){
            n++
          }
      })
     return n
    },
   
  }
})