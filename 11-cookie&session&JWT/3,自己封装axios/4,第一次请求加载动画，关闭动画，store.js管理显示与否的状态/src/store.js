import Vue from 'vue'
import Vuex from 'vuex'

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
    }
  },
  actions: {

  }
})
