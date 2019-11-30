<template>
  <div id="home">
    <!-- 头部 -->
    <Homeheader :categories="categories" @change="change"></Homeheader>
    <!-- 轮播图 -->
    <cube-slide :data="slides"/>
  </div>
</template>

<script>
import Homeheader from "../Home/Homeheader";
import * as types from "../../store/action-types.js";
// import { ajaxCategory } from "../../api/home.js";
// import { mapActions, mapState } from "vuex"

import { createNamespacedHelpers } from "vuex";
let { mapActions, mapState, mapMutations } = createNamespacedHelpers("home");

export default {
  // created(){
  //   ajaxCategory().then(data=>{
  //     console.log(data)//单纯的请求数据成功
  //   })
  // this.$store.dispatch("home/setCategory")
  // },

  methods: {
    // home代表的是axios请求接口的方法组件
    // ...mapActions('home',['setCategory','setSlides'])//仅仅是将actions方法映射过来

    //多个actions时，是在一个数组中  
    ...mapActions([types.SET_CATEGORY,types.SET_SLIDES]), //仅仅是将actions方法映射过来
    ...mapMutations([types.SET_CURRENT_MOVIE]),
    change(value) {
      // 点击之后改变movie分类
      // console.log(value[0]); //拿到对应的value值0,1,2
      this[types.SET_CURRENT_MOVIE](value[0]);
    }
  },
  computed: {
    ...mapState(["categories","slides"]),
  },
  mounted() {
    this[types.SET_CATEGORY](); //调用actions方法
    this[types.SET_SLIDES](); 
  },
  components: {
    Homeheader
  }
};
</script>

<style lang="stylus" >
 .cube-slide-item{
   width 100%
   height 150px
 }
</style>