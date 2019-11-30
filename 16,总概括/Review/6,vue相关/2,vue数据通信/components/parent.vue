<template>
  <div>
    <h1>Parent有{{money}}块钱</h1>
    <hr />
    <!-- 1，靠着ref来起别名，从而拿到Son1组件的真实DOM元素，就可直接使用组件的方法：changeson1 -->
    <!-- <Son1 ref="son1" :money="money" :counter="counter" @click="change" @mousedown="change"></Son1> -->
    
    
    <!-- 2，封装$bus方法，挂载到vue实例上面 -->
    <Son1 ref="son1" :money="money" :counter="counter" @click="change" @mousedown="change"></Son1>
  </div>
</template>
<script>
import Son1 from "./son1";
export default {
  data() {
    return {
      money: 100,
      counter:12
    };
  },
  mounted() {
    //1，refs: this.$refs.son1.changeson1();
    
    //2，this.$bus.$on("show",function(){
    //   window.console.log("show....")
    // })
  },
  // 使用提供的数据会是离自己最近的父组件
  provide(){
    return {
      name:"wangcai"
    }
  },
  components: {
    Son1
  },
  methods: {
    change(){
     window.console.log("change....")
    }
  }
};
</script>