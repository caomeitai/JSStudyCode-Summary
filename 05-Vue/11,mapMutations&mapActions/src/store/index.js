import Vue from "vue"
import Vuex from "vuex"
// 在vue中使用了第三方vuex
Vue.use(Vuex)
// 创建仓库,要导出去
export default new Vuex.Store({
  state:{
    num:1,
    nums:0,
    list:[1,2,3]
  },
  mutations:{
     add(state,n){
       state.list.push(n);
     },
     addNum(state){
       state.nums++;
     },
    addnum(state){
      // 模拟一个耗时任务
      setTimeout(function(){
        state.num++
      },3000)
    }
  },
  actions:{
    // 如果将异步放在mutations中，使用程序在调试面板中很难调试，可以把异步放到actions中
  // actions与mutations中的不同之处在于：actions提交的也是mutations，不能直接修改状态
  // actions可以包含任意异步操作
  // actions函数接收一个与store实例具有相同方法和属性的context属性,可以通过context.commit提交（相当于this.$store.commit），也可以通过context.state(this.$store.state)获取状态
  addAsyncNum(context){
    // 换句话说就是这个属性可以得到store实例中的方法和属性
    setTimeout(function(){
      // 下面代码就意味着提交了一个mutations
      context.commit("addNum")
    },3000)
  }
  }
})