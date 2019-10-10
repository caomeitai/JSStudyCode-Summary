import Vue from 'vue'
import Vuex from 'vuex'
import {doLogin} from '../后端/api/user'//将数据存到vuex中
import {setLocal} from "../libs/localStorage"//存放数据，获取数据方法

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShowLoading:false,
    username:"wangcai"
  },
  mutations: {
    // 显示小圆圈
    showLoading(state){
      state.isShowLoading = true;
    },
    // 隐藏小圆圈
    hideLoading(state){
      state.isShowLoading = false;
    },
    // 修改用户名
    setUsername(state,username){
      state.username = username;
    }
  },
  actions: {
    async toLogin({commit},username){
      let r = await doLogin(username)
      if(r.code===0){
        commit("setUsername",r.username),
        // 登录成功将token存到vuex中
        setLocal("token",r.token)
      }else{
        return Promise.reject(r.data);
      }
    }
  }
})
