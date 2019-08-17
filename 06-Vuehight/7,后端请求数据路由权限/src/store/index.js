import Vue from 'vue'
import Vuex from 'vuex'
// 从外端请求数据存放到vuex中
import axios from 'axios'
// 导入需要校验的路由
import { authRoutes } from '../router'

//将数据从发送过来的那种形式转化成具有children的树的形式
// 函数表达式以箭头函数的形式  数据指的是menulist
let formatMenuList = (menuList)=>{
  let arr = [];
// 将从后端返回的菜单的数据格式转化成我们需要的格式
  function r(pid){
    // 使用filter这个数组方法过滤出符合要求的数据

    // 通过这个filter方法返回一个数组，那么就将数组返回过来，返回到的是函数r调用的地方
    return menuList.filter(menu=>{
      // 前面的是实际数据中的pid后面是传递过来的pid
      if(menu.pid === pid){//第一次得到第一级的menu
        arr.push(menu.auth)
         // r函数是为了找到满足条件的数据,这里是得到子啦
        let children = r(menu.id)//这算是第二步将pid为1的传过去那么判断的是pid为-1的id和pid为1是否一致，这次调用会判断它是否为第一级的子
        // console.log(children) 
        //  判断如果存在children那么将刚刚遍历出来的children赋给menu.children
        menu.children = children.length ? children : null;
        // 如果满足上面if条件，以数组形式返回true
        return true
      }
    })
  }
  // return 的是  调用的formatMenuList的返回值,最后返回不仅仅是处理过后的数据，还有权限数组
  return {m:r(-1),a:arr}//pid=-1的值传递过来  这里的return是将数组返回到调用的formatMenuList的地方
}

// 遍历的是authList
let getNeedsRoutes = (auth)=>{
   function r(authRoutes){
   return authRoutes.filter(route=>{
      // 根据权限来找出权限路由
      if(auth.includes(route.name)){
        // 如果存在着孩子
        if(route.children){
          route.children = r(route.children)
        }
        return true
      }
      
    })
   }
   return r(authRoutes)//实参
}


Vue.use(Vuex)



export default new Vuex.Store({
    state: {
      // 将数据渲染到页面中，那么就需要将数据存放到仓库里面

      menuList:[],//存放菜单数据，里面存放着获取到的所有路由
      authList:[],//里面存放着获取到的权限路由
      hasRules:false //表示没有获取过权限，获取之后，变为true
    },
    mutations: {
      set_menuList(state,m){
        state.menuList = m;
      },
      set_authList(state,a){
        state.authList = a;//获取权限啦
        state.hasRules = true;
      }
    },
    actions: {
    async getAuthRoute({commit,state}){
        // 得到所有权限路由
        let r =await getNeedsRoutes(state.authList)
       return r;
      },
      // 获取后端菜单相关数据menulist authlist
        // 首参为上下文，里面存在commit，请求数据写好后需要在最大的钩子里调用，main.js中
     async getMenuList({commit}){
        //   axios去请求数据是异步的   Promise式解决异步方案之一
        //   axios.get("http://localhost:3000/role").then(res=>{
        //       console.log(res.data)
        //   })
        //使用await,必须加上async await去解决异步问题，请求数据得到的是一个对象,为得到res.data使用了解构赋值，拿到对象里的data
        let {data} = await axios.get("http://localhost:3000/role")
        // console.log(data)  //data就相当于res.data
        // console.log(data.menuList)
        // let menuList=  formatMenuList(data.menuList)  //实际参数
        let {m,a}=  formatMenuList(data.menuList)//最终返回值有两部分，children数据，和路由权限
        console.log(m)
        console.log(a)
        // 通过异步得到数据扔到state中
        commit('set_menuList',m)
        commit('set_authList',a)
      }
    }
})
